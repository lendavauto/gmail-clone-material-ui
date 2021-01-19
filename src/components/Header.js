import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <HeaderWrapper>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://i.pinimg.com/originals/a6/6f/6d/a66f6d77e31671fcaeddc5a28f856b32.png'
          alt='gmail logo'
        />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input placeholder='Search mail' type='text' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar className='header__avatar' onClick={signOut} src={user?.photoUrl} />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
  .header__left {
    display: flex;
    align-items: center;
    img {
      object-fit: contain;
      height: 80px;
      margin-left: 5px;
    }
  }
  .header__middle {
    display: flex;
    align-items: center;
    flex: 0.7;
    background: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    .MuiSvgIcon-root {
      color: gray;
    }
    input {
      border: none;
      outline: none;
      width: 100%;
      padding: 10px;
      font-size: medium;
      background: transparent;
    }
  }
  .header__right {
    display: flex;
    align-items: center;
    padding-right: 20px;
  }
  .header__avatar {
    cursor: pointer;
  }
`;

export default Header;
