import React from 'react';
import {  Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from "./routes";

export default props => {
  return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
        </ul>

        <Switch>
          {renderRoutes(Routes)}
        </Switch>
      </div>
  );
};