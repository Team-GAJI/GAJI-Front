import React from 'react';
import styled from 'styled-components';
import backImage from '../assets/images/common/mypageBackground.png';

import Detail from '../components/createStudy/CreateDetailed.jsx';
import CreateBasics from '../components/createStudy/CreateBasics.jsx';
import CreateDate from '../components/createStudy/CreateDate.jsx';
const StudyCreatePage = () => {

    return (
    <>
    <Wrapper>
        <RowLogoWrapper>
                <MainText>스터디 만들기</MainText>
                <Text>`가지`고 싶은 스터디를 만들어보세요!</Text>
                <MainButton>스터디 만들기</MainButton>
        </RowLogoWrapper>

        <MainSection>
           <CreateBasics/>
           <CreateDate/>
           <Detail/>
        </MainSection>
    </Wrapper>

    </> 
    );
};

export default StudyCreatePage;
const Wrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
    width: 100%;
`;


const MainText = styled.p`
    font-size: 1.3em;
    font-weight: 800;
    color: #8E59FF;
    margin-bottom: 0.2em;
    
`;

const MainButton = styled.button`
    font-size: 0.8125em;
    width: 18.25em;
    background-color: #8E59FF;
    border: 1px solid #8E59FF;
    border-radius: 1em;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
`;


const RowLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2em;
    flex-direction: column;
    justify-content: center;
    padding: 1.125em; 
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Text = styled.p`
    color: #D0D1D9;
    font-size: 0.9375em; 
    font-weight: 700;
`;


/* 화면 분활 (오른쪽 사이드) */
const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh; 
  padding: 20px;
  box-sizing: border-box;
`;
