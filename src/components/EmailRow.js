import React from 'react';
import styled from 'styled-components';
import { Checkbox, IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

const EmailRow = ({ title, subject, description, time, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push('/mail')
  };

  return (
    <EmailRowWrapper onClick={openMail}>
      <div className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className='emailRow__title'>{title}</h3>
      <div className='emailRow__message'>
        <h4>
          {subject} -{' '}
          <span className='emailRow__description'>{description}</span>
        </h4>
      </div>
      <div className='emailRow__time'>{time}</div>
    </EmailRowWrapper>
  );
};

const EmailRowWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  z-index: 999;

  &:hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
  .emailRow__options {
  }
  .emailRow__title {
    font-size: 13px;
    flex: 0.3;
  }
  .emailRow__message {
    flex: 0.8;
    display: flex;
    align-items: center;
    font-size: 13px;
    h4 {
      white-space: nowrap;
      width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  .emailRow__description {
    font-weight: 400;
    color: gray;
  }
  .emailRow__time {
    padding-right: 15px;
    font-size: 9px;
    font-weight: bold;
  }
`;

export default EmailRow;
