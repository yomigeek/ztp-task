import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {landingRoutes} from '../utils/routes';

const App = () => (
  <div className="app-layout-wrapper">
    <Switch>
      {landingRoutes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </div>
);

export default App;
