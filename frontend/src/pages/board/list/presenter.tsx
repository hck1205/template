import React, { useEffect } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Pagination } from '@material-ui/lab';

import styled from '@emotion/styled';

import { handleRouter } from 'lib';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

type Props = {};

function Presenter({}: Props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <PaginationWrapper>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div``;

export default Presenter;
