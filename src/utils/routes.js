import {Route} from 'react-router-dom';
import NotFound from './../components/shared/NotFound';
import ErrorPage from '../components/shared/ErrorPage';
import Main from '../components/main';

export const landingRoutes = [
  {
    type: Route,
    path: '/',
    component: Main,
    exact: true,
  },
  {
    type: Route,
    path: '/error-page',
    component: ErrorPage,
    exact: true,
  },
  {
    type: Route,
    path: '*',
    component: NotFound,
  },
];
