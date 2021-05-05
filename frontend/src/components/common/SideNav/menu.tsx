import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menu: {
      // fontSize: '12px',
    },
    nested: {
      paddingLeft: theme.spacing(2),
      fontSize: theme.typography.fontSize,
    },
  })
);

const nestedMenuStyle = {
  fontSize: 20,
};

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      dense={true}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItem button>
        <ListItemText
          primary="Sent mail"
          className={classes.menu}
          style={{ fontSize: '6px' }}
        />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemText
          primary="Drafts"
          primaryTypographyProps={{ style: nestedMenuStyle }}
        />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense={true}>
          <ListItem button>
            <ListItemText primary="Starred" className={classes.nested} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Starred" className={classes.nested} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Starred" className={classes.nested} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Starred" className={classes.nested} />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
    </List>
  );
}
