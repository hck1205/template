import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Create as CreateIcon, Close as CloseIcon } from '@material-ui/icons';

import './style.scss';

const modules = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { align: [] },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    // handlers: { image: this.imageHandler },
  },
  clipboard: { matchVisual: false },
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'size',
  'color',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'align',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

type Props = {
  onSubmit: (texts: string) => void;
};

function Editor({ onSubmit }: Props) {
  const classes = useStyles();

  const [contents, setContents] = useState('');

  return (
    <div>
      <ReactQuill
        theme={'snow'}
        modules={modules}
        formats={formats}
        value={contents}
        onChange={setContents}
      />
      <ButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CreateIcon />}
          onClick={() => onSubmit(contents)}
        >
          SEND
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          startIcon={<CloseIcon />}
        >
          CANCEL
        </Button>
      </ButtonWrapper>
    </div>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Editor;
