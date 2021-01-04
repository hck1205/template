import React, { useState } from 'react';
import ReactQuill from 'react-quill';

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
function Editor() {
  const [text, setText] = useState('');

  return <ReactQuill theme={'snow'} modules={modules} formats={formats} />;
}

export default Editor;
