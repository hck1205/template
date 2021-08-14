import React, { Fragment, useCallback, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { handleRouter } from 'lib';

import { BLUE, GRAY } from 'components/styles';

import {
  /*ListSubheader*/
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core';

import { ExpandLess, ExpandMore } from '@material-ui/icons';

const MENU_OPTIONS = [
  {
    title: '커뮤니티',
    menu: [
      { name: '자유 게시판', path: '/board/list?id=free' },
      { name: '건의사항', path: '/' },
      { name: '해외거주', path: '/' },
    ],
  },
  {
    title: '스터디',
    menu: [
      { name: 'Open Correction', path: '/' },
      { name: '추천 드라마', path: '/' },
    ],
  },
];

const defaultOpenList = MENU_OPTIONS.map(({ title }) => title);

export default function Menu() {
  const classes = useStyles();
  const history = handleRouter();

  const [openList, setOpenList] = useState<string[]>(defaultOpenList);

  const handleClick = useCallback((title: string) => {
    const index = openList.indexOf(title);
    index > -1 ? openList.splice(index, 1) : openList.push(title);

    setOpenList([...openList]);
  }, []);

  return (
    <List
      dense={true}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <></>
        // <ListSubheader component="div" id="nested-list-subheader">
        //   Nested List Items
        // </ListSubheader>
      }
    >
      {MENU_OPTIONS.map(({ title, menu }, index) => {
        const isExpanded = openList.indexOf(title) > -1;

        return (
          <Fragment key={`menu_${title}_${index}`}>
            <ListItem
              button
              onClick={() => handleClick(title)}
              className={classes.menuWrapper}
            >
              <ListItemText primary={title} className={classes.menu} />
              {isExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                dense={true}
                className={classes.list}
              >
                {menu.map(({ name, path }, index) => (
                  <ListItem
                    button
                    key={`subMenu_${name}_${index}`}
                    className={classes.itemWrapper}
                    onClick={() => history.push(path)}
                  >
                    <ListItemText primary={name} className={classes.nested} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Fragment>
        );
      })}
    </List>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuWrapper: {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
    menu: {
      fontSize: '12px',
      fontWeight: 'bold',
      '&:hover': {
        color: BLUE(50),
      },
    },
    list: {
      backgroundColor: GRAY(50),
    },
    itemWrapper: {
      '&:hover': {
        backgroundColor: 'unset',
      },
    },
    nested: {
      paddingLeft: theme.spacing(2),
      fontSize: theme.typography.fontSize,
      '&:hover': {
        color: BLUE(50),
      },
    },
  })
);
