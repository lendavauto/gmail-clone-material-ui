import React from 'react';
import styled from 'styled-components';

const SidebarOption = ({ Icon, title, number, selected }) => {
  return (
    <SidebarOptionWrapper>
      <div className={`sidebarOption ${selected && 'sidebar--active'} sidebar`}>
        <Icon />
        <h3>{title}</h3>
        <p>{number}</p>
      </div>
    </SidebarOptionWrapper>
  );
};

const SidebarOptionWrapper = styled.div`
  .sidebarOption {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: gray;
    cursor: pointer;
    &:hover {
      background: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }
  }

  .sidebar--active {
    p {
      display: inline;
      &:hover {
        background: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
      }
    }
    h3 {
      &:hover {
        background: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
      }
    }
  }
  .MuiSvgIcon-root {
    padding: 5px;
  }
  h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    &:hover {
      background: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }
  }
  p {
    display: none;
    font-weight: 300;
    &:hover {
      background: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }
  }
`;

export default SidebarOption;
