import React from 'react';
import styled from 'styled-components';

const Section = ({ Icon, title, color, selected }) => {
  return (
    <SectionWrapper>
      <div
        className={`section ${selected && 'section--active'}`}
        style={{
          borderBottom: `3px solid ${color}`,
          color: `${selected && color}`,
        }}
    >
     <Icon />
     <h4>{title}</h4>
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  .section {
   display: flex;
   align-items: center;
   border-bottom-width: 2px;
   padding: 15px;
   min-width: 200px;
   cursor: pointer;
   color: gray;
   border-width: 0 !important;
   &:hover {
    background: whitesmoke;
    border-width: 3px !important;
   }
   h4 {
    font-size: 14px;
    margin-left: 15px;
   }
  }
  .section--active {
   background: whitesmoke;
   border-width: 3px!important;
  }
`;

export default Section;
