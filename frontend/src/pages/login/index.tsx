import React, { useState, ChangeEvent, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { TextField, Button } from '@material-ui/core';

import { FLEX_CENTER, FLEX_COLUMN } from 'components';
import Store, { RootStore } from 'stores';
import { signin } from 'API';

const warningText = '아이디 또는 비밀번호를 다시 입력해주세요.';

function Login() {
  const history = useHistory();
  const location = useLocation();

  const { userStore } = Store.useContainer() as RootStore;
  const { user, setLogin } = userStore;

  const [shouldRender, setShouldRender] = useState(false);
  const [values, setValues] = useState({
    userId: '',
    password: '',
  });
  const [invalid, setInvalid] = useState({
    userId: false,
    password: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: key, value } = event.target;

    setValues({ ...values, [key]: value });
    setInvalid({ ...invalid, [key]: false });
  };

  const goToPrevPath = () => {
    if (location instanceof Object) {
      const prevPath = (location.state as LooseObject).prevPath;
      history.push(prevPath ? prevPath : '/');
    }
  };

  const submit = () => {
    signin(values)
      .then((data) => {
        if (data) {
          setLogin(data);
          goToPrevPath();
        }
      })
      .catch((e) => {
        console.error(e);
        setInvalid({
          userId: true,
          password: true,
        });
      });
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
    setShouldRender(true);
  }, [user]);

  return shouldRender ? (
    <PageWrapper>
      <InputWrapper>
        <TextField
          error={invalid.userId}
          id="userId"
          label="ID"
          variant="outlined"
          margin="normal"
          helperText={invalid.userId ? warningText : ''}
          onChange={handleChange}
        />
        <TextField
          error={invalid.password}
          id="password"
          label="Password"
          variant="outlined"
          margin="normal"
          helperText={invalid.password ? warningText : ''}
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
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => {
            history.push('/');
          }}
        >
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
  ) : null;
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
