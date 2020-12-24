import React, { useEffect, useState, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { TextField, Button } from '@material-ui/core';

import { FLEX_CENTER, FLEX_COLUMN } from 'lib/styles/common';

// import { axios } from 'lib';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    userid: '',
    password: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: key, value } = event.target;

    setValues({ ...values, [key]: value });
  };

  const submit = () => {
    axios
      .post('http://localhost:3000/api/v1/auth/signin', values, {
        withCredentials: true,
      })
      .then((response) => {
        console.log('response', response);
      });
    console.log('test', values);
  };

  return (
    <PageWrapper>
      <InputWrapper>
        <TextField
          id="userid"
          label="ID"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={submit}
        >
          Login
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Kakao
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Naver
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Google
        </Button>
        <Button variant="outlined" size="large" color="primary">
          Facebook
        </Button>
      </InputWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  ${FLEX_CENTER}
  height: 100%;
`;

const InputWrapper = styled.div`
  ${FLEX_COLUMN}
  margin: auto;
  justify-content: space-between;
  height: 400px;
  width: 500px;
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 5px;

  div {
    margin-top: 0;
    width: 100%;
  }
  button {
    width: 100%;
  }
`;

export default Login;
