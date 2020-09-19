import Layout from '../components/Layout';
import { RouteConfig } from 'react-router-config';
import Login from './Login';
import Register from './Register';
import Movies from './Movies';

const routes : RouteConfig[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/login',
        exact: true,
        component: Login,
        name: 'login'
      },
      {
        path: '/register',
        exact: true,
        component: Register,
        name: 'register'
      },
      {
        path: '/movies',
        exact: true,
        component: Movies,
        name: 'movies'
      }
    ]
  }
];

export default routes;
