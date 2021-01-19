import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from '../firebase';
import firebase from 'firebase';

const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <SendMailWrapper>
      <div className='sendMail__header'>
        <h3>New Message</h3>
        <CloseIcon
          className='sendMail__close'
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          ref={register({ required: true })}
        />
        {errors.to && <p className='sendMail__error'>To is required!</p>}
        <input
          name='subject'
          placeholder='Subject'
          type='text'
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className='sendMail__error'>Subject is required!</p>
        )}
        <input
          name='message'
          placeholder='Message...'
          type='text'
          className='sendMail__message'
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className='sendMail__error'>Message is required!</p>
        )}
        <div className='sendMail__options'>
          <Button
            type='submit'
            className='sendMail__send'
            variant='contained'
            color='primary'
          >
            Send
          </Button>
        </div>
      </form>
    </SendMailWrapper>
  );
};

const SendMailWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  background: #faefde;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    input {
      height: 30px;
      padding: 10px;
      border: none;
      border-bottom: 1px solid lightgray;
      outline: none;
    }
  }
  .sendMail__header {
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ed7899;
    h3 {
      font-size: 15px;
    }
    .MuiSvgIcon-root {
      color: red;
    }
  }
  .sendMail__close {
    cursor: pointer;
  }
  .sendMail__send {
    background: #ed7899 !important;
    text-transform: capitalize !important;
    margin: 15px !important;
  }
  .sendMail__message {
    flex: 1;
  }
  .sendMail__error {
    background: white;
    color: red;
    text-align: right;
    padding: 2px;
  }
`;

export default SendMail;
