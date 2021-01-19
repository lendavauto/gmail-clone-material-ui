import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { selectMail } from '../features/mailSlice';
import { useSelector } from 'react-redux';

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectMail);
  // console.log(selectedMail.payload.mail.selectMail.id)
  return (
    <MailWrapper>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mail__toolsRight'>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.payload.mail.selectMail.subject}</h2>
          <LabelImportantIcon className='mail__important' />
          <p>{selectedMail?.payload.mail.selectMail.title}</p>
          <p className='mail__time'>
            {selectedMail?.payload.mail.selectMail.time}
          </p>
        </div>
        <div className='mail__message'>
          <p>{selectedMail?.payload.mail.selectMail.description}</p>
        </div>
      </div>
    </MailWrapper>
  );
};

const MailWrapper = styled.div`
  flex: 1;
  background: whitesmoke;
  .mail__tools {
    display: flex;
    justify-content: space-between;
    background: white;
  }
  .mail__toolsLeft {
    display: flex;
  }
  .mail__toolsRight {
  }
  .mail__body {
    display: flex;
    flex-direction: column;
    margin: 30px;
    background: white;
    padding: 20px;
    height: 100vh;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  }
  .mail__bodyHeader {
    display: flex;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    padding: 20px;
    position: relative;
    h2 {
      font-weight: 400;
      margin-right: 20px;
    }
  }
  .mail__important {
    color: #e8ab02 !important;
  }
  .mail__message {
    P {
      padding: 10px;
      margin-right: 20px;
      overflow-wrap: break-word;
    }
  }
  .mail__time {
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 12px;
    color: gray;
  }
`;

export default Mail;
