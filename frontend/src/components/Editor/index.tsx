import React, { useState } from 'react';
import ReactQuill from 'react-quill';

function Editor() {
  const [text, setText] = useState('');

  return <ReactQuill theme={'snow'} />;
}

export default Editor;
