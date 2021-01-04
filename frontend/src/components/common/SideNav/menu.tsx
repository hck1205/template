import React from 'react';
import { Home, LibraryBooks, ExitToApp } from '@material-ui/icons';

const MENU = [
  {
    name: 'Main',
    icon: <Home />,
    path: '/',
  },
  {
    name: 'Board',
    icon: <LibraryBooks />,
    path: '/board',
  },
  {
    name: 'Logout',
    icon: <ExitToApp />,
    path: '/logout',
  },
];

export default MENU;
