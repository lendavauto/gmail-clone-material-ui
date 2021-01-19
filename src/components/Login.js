import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { Button } from '@material-ui/core';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .then((error) => alert(error));
  };

  return (
    <LoginWrapper>
      <div className='login__container'>
        <img
          src='https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg'
          alt='login logo'
        />
        <Button variant='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  .login__container {
    display: flex;
    flex-direction: column;
    img {
      object-fit: contain;
      height: 200px;
    }
  }
`;

export default Login;
