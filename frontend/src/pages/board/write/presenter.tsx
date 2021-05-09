import React, { ChangeEvent, useEffect, useState } from 'react';
import { Editor } from 'components';
import { registerPost } from 'API';
import { TextField } from '@material-ui/core';

import styled from '@emotion/styled';

type Props = {};

function Presenter({}: Props) {
  const [title, setTitle] = useState('');

  useEffect(() => {}, []);

  const onRegister = (contents: string) => {
    console.log('onRegister');
    if (title.trim()) {
      console.log('onRegister111');
      console.log('title.trim()', title.trim());
      registerPost({ type: 'free', contents, title }).then(() => {});
    }
  };

  return (
    <BoardWritePageWrapper>
      <TextField
        id="filled-basic"
        variant="outlined"
        placeholder="Title"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Editor onSubmit={onRegister} />
    </BoardWritePageWrapper>
  );
}

const BoardWritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  .editor-wrapper {
    margin-top: 20px;
  }
`;

export default Presenter;
