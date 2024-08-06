import React, { useState } from 'react';
import styled from 'styled-components';

import StudyName from '../components/studyDetail/StudyName.jsx';
import StudyData from '../components/studyDetail/StudyData.jsx';
import StudyWriterPost from '../components/studyDetail/StudyWritePost.jsx';
const StudyDetail = () => {

      return (
          <HeaderWrapper>
            <StudyName/>
            <StudyData/>
            <StudyWriterPost/>
              
          </HeaderWrapper>    
      );
  };
  
  export default StudyDetail;
  const HeaderWrapper = styled.div`
      z-index: 5;
      background-color: #FBFAFF;
      box-sizing: border-box;
      display: flex;
      flex-direction: column; 
      padding: 0 3.1em;
  
  `;
  const ContentWrapper = styled.div`
      overflow-y: auto;
      flex-grow: 1;
  
  `;
  const MainWrapper = styled.div`
      padding : 60px;
  `;
  const Container = styled.div`
    display: flex;
    align-items: center;
  `;

  const Container3 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top : 20px;
  `;
  
  
  const SidebarToggle = styled.div`
      cursor: pointer;
      font-size: 20px;
      padding: 0.8125em;
  `;
  
  const Circle = styled.div`
    width: 30px;
    height: 30px;
    background-color: #8E59FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 10px;
    color : #fff;
  `;
  const UserContainer = styled.div`
    position: absolute;
    left: -36px; 
    margin-top:-20px;
  `;
  const TagButton = styled.button`
      background-color: #fff;
      border : 1px solid #8E59FF;
      border-radius: 8px;
      font-size: 0.8125em;
      font-weight: 700;
      text-align: center;
      padding: 0.5em;
      color: #8E59FF;
      margin-right: auto;
      width: 100px;
      margin-right: 10px;
  `;
  const CloudyButton = styled.button`
      font-size: 0.8125em;
      font-weight: 700;
      text-align: center;
      padding: 0.8125em;
      color: #fff;
      width: 100px;
      background-color: #A2A3B2;
      border: 1px solid #A2A3B2;
      border-radius: 8px;
      margin-left : 580px;
  `;
  const PurpleButton = styled.div`
      background-color: #8E59FF;
      border-radius: 8px;
      font-size: 0.8125em;
      font-weight: 700;
      text-align: center;
      padding: 0.8125em;
      color: #FFFFFF;
      width: 300px;
      margin-top: 10px;
      margin-right: 50px;
  `;
  
  const SelectButton = styled.div`
      background-color: #fff;
      border : 1px solid #8E59FF;
      border-radius: 8px;
      font-size: 0.8125em;
      font-weight: 700;
      text-align: center;
      padding: 0.8125em;
      color: #8E59FF;
      width: 180px;
      
      &:first-of-type {
          border : 1px solid #8E59FF;
          background-color: #8E59FF;
          color: #fff;
    }
  `;
  
  
  
  
  
  
  const MainText = styled.h1`
      font-size: 20px;
      font-weight: 800;
      color : #8E59FF;
  `;
  const DetailsText = styled.h1`
      font-size: 20px;
      font-weight: 800;
      color : #8E59FF;
      margin-left : 25px;
  `;
  const MinorText = styled.h3`
      font-size: 18px;
      font-weight: 700px;
      color : #000;
  `;
  
  const StudyNameText = styled.h1`
      font-size: 30px;
      font-weight: 800; 
      color : #8E59FF;
  `;
  const CloudyText = styled.p`
      color : #A2A3B2;
      font-size: 10px;
      font-weight: 700px;
      margin : 10px 10px;
  `;
  
  const EXStudyText = styled.h3`
      color : #A2A3B2;
      font-size: 15px;
      font-weight: 700px;
  `;
  
  
  
  
  
  
  const Square = styled.div`
    background-color: #EDEDED;
    padding: 10px;
    border-radius: 8px;
    /*margin-left: auto;*/ 
    margin-left :25px;
    align-self: flex-end; 
    width : 300px;
    height : 200px;
  `;
  const Icons = styled.img`
      width: 16px; 
      height: auto;
      margin-left : 11px;
      margin-top : 30px;
  `;
  const DivisionLine = styled.div`
      border-top: 1px solid #A2A3B2;
      /*margin: 20px 0px;*/
      width: 98%;
  `;
  const DivisionLine2 = styled.div`
      border-top: 2px solid #8E59FF;
      /*margin: 20px 0px;*/
      width: 98%;
  `;
  const DivisionLine3 = styled.div`
    border-left: 1px solid #A2A3B2; 
    height: 150px; 
    margin: 0px 50px; 
  `;
  
  
  
  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-gap: 25px; 
    width: 100%;
    margin-top : 20px;
  `;
  

  
  const RightSide = styled.div`
    width: 50%; 
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    padding: 10px 20px; 
  `;
  
  const Textarea = styled.textarea`
    width: 100%; 
    height: auto;
    resize: none;
    border: none;
    outline: none;
    font-size: 14px;
    margin-top: 10px;
  
  `;
  const StudyText = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px; 
  `;
  
  
  
  const WeekSquare = styled.div`
    width: 350px;
    height: 100px;
    border: 1px solid;
    border-radius: 5px 0 0 10px;  
    display: flex;
    align-items: center; 
    justify-content: center; 
    position: relative;
    background-color: #fff;
    border : 1px solid #8E59FF;
    font-size: 15px;
    font-weight: bold; 
    color: #fff;
    margin-top : 20px;
  `;
  
  const InputWeek = styled.textarea`
    width: 500px;
    height: 50px; 
    border-radius: 8px;
    border: 1px solid #fff;
    outline: none;
    margin-left: 20px;
    resize: none; 
  
    &::placeholder {
      color: #C8C8C8;
    }
  `;
  
  
  
  
  /* 진행방식 */
  const RuleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end; 
  `;
  
  const RuleWrapper2 = styled.div`
    display: flex;
    justify-content: flex-end; 
    margin-bottom: 10px;
    flex-direction: column;
  `;
  
  const RuleText = styled.span`
    font-size: 14px;
    color: #333;
    font-weight: 800; 
    text-align: left;
    margin-bottom : 10px; 
  `;
  const InputRule = styled.textarea`
    width: 450px;
    height: 70px; 
    border-radius: 8px;
    border: 1px solid #fff;
    outline: none;
    /*margin-left: 20px;*/
    resize: none; 
  
    &::placeholder {
      color: #C8C8C8;
    }
  `;
  

/* 신고 -> 팝업창 뾰롱*/ 
const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: ${props => (props.show ? 'flex' : 'none')};
    width: 350px; 
    max-width: 90%;

    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const PopupTitle = styled.h2`
    font-size: 1.2em;
    margin: 0; 
    color: #8E59FF;
`;

const PopupButton1 = styled.button`
    background-color: #8E59FF;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    margin-top: 1em;
    margin : 1em 5px;
    &:hover {
        background-color: #7D49D1;
    }
`;

const PopupButton2 = styled.button`
    background-color: #8E59FF;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    margin-top: 1em;
    margin : 1em 5px;
    &:hover {
        background-color: #7D49D1;
    }
`;
