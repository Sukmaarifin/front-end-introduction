import Layout from '../components/Layout';
import Login from './Login';
import Register from './Register';
import Movies from './Movies';

export default [
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
