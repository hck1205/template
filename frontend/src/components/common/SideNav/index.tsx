import React, { useState, KeyboardEvent, MouseEvent } from 'react';
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
});

function SideNav() {
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
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SideNav;
