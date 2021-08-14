import React, { KeyboardEvent, MouseEvent } from 'react';
import { Menu } from 'components';
import Store, { RootStore } from 'stores';
import { makeStyles } from '@material-ui/core/styles';

import {
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  wrapper: {
    backgroundColor: '#1d6d86',
  },
});

function SlideSideNav() {
  const classes = useStyles();
  const { commonStore } = Store.useContainer() as RootStore;
  const { sideNavStatus, setSideNavStatus } = commonStore;

  const toggleDrawer = (event: KeyboardEvent | MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' ||
        (event as KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setSideNavStatus(!sideNavStatus);
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={'left'}
        open={sideNavStatus}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div className={classes.list} role="presentation">
          <Menu />
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SlideSideNav;
