import Cookies from 'js-cookie';

import MainLayout from '../layout/MainLayout';
import Root from '../layout/Root';
import DashBoard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import User from '../pages/User';
import AddUsers from '../pages/User/AddUsers';

import { redirect } from './utils';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/sign-in',
        component: SignIn,
        exact: true,
      },
      {
        path: '/sign-up',
        component: SignUp,
        exact: true,
      },
      {
        path: '/',
        component: Cookies.get('token') ? MainLayout : redirect('/sign-in'),
        routes: [
          {
            path: '/',
            component: redirect('/dashboard'),
            exact: true,
          },
          {
            path: '/dashboard',
            component: DashBoard,
            exact: true,
            name: 'DashBoard',
          },
          {
            path: '/users',
            component: User,
            name: 'Users',
            routes: [
              {
                path: '/users/addUsers',
                component: AddUsers,
                exact: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
