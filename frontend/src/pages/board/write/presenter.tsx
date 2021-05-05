import React, { useEffect } from 'react';
import { Editor } from 'components';
import { registerPost } from 'API';

type Props = {};

function Presenter({}: Props) {
  useEffect(() => {}, []);

  const onRegister = (contents: string) => {
    registerPost({ type: 'free', contents }).then(() => {});
  };

  return (
    <>
      <Editor onSubmit={onRegister} />
    </>
  );
}

export default Presenter;
