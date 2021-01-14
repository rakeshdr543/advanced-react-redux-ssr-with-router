import App from './App';
import Home from './Home';
import Posts from './Posts';
import Todos from './Todos';
import NotFound from './NotFound';
import New from './New'

import loadData from './helpers/loadData';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/posts',
        component: Posts,
        loadData: () => loadData('posts')
    },
    {
        path: '/todos',
        exact: true,
        component: Todos,
        loadData: () => loadData('todos')
    },
    {
        path: '/todos/:id',
        component: New,
        loadData: () => loadData('todos')
    },
    {
        component: NotFound
    }
];

export default Routes;