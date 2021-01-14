import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import serialize from 'serialize-javascript';
import { StaticRouter, matchPath } from 'react-router-dom';
import {Provider} from 'react-redux'
import Routes from '../src/routes';
import configureStore from '../src/store/configureStore';
import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
    const currentRoute =
        Routes.find(route => matchPath(req.url, route)) || {};
    let promise;

    if (currentRoute.loadData) {
        promise = currentRoute.loadData();
    } else {
        promise = Promise.resolve(null);
    }

    promise.then(data => {
        // Let's add the data to the context
        const context = { data };
            const Store = configureStore()
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <Provider store={Store}>
                <App />
                </Provider>
            </StaticRouter>
        );

        const indexFile = path.resolve('./build/index.html');
        fs.readFile(indexFile, 'utf8', (err, indexData) => {
            if (err) {
                console.error('Something went wrong:', err);
                return res.status(500).send('Oops, better luck next time!');
            }

            if (context.status === 404) {
                res.status(404);
            }
            if (context.url) {
                return res.redirect(301, context.url);
            }

            const reduxState = JSON.stringify(Store.getState());
            return res.send(
                indexData
                    .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                    .replace(
                        '</body>',
                        `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
                    )
                    .replace('"__SERVER_REDUX_STATE__"', reduxState)
            );
        });
    });
});

app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});