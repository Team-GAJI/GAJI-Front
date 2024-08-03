import React, { useState } from 'react';
import styled from 'styled-components';
import backImage from '../assets/images/common/mypageBackground.png';
import ManageDel from '../assets/icons/studyManage/StudyManageDel.png';
import ManagePlus from '../assets/icons/studyManage/StudyManagePlus.png';


import ManageBasics from '../components/studyManage/ManageBasics';
import ManageDate from '../components/studyManage/ManageDate';
import ManageDetailed from '../components/studyManage/ManageDetailed';

const StudyManagePage = () => {

    return (
    <>
    <Wrapper>
        <RowLogoWrapper>
                <MainText>스터디 관리 페이지</MainText>
                <Text>`가지`고 싶은 스터디를 만들어보세요!</Text>
                <RowWrapper1>
                    <MainButton>저장하기</MainButton>
                    <MainButton>미리보기</MainButton>
                </RowWrapper1>

        </RowLogoWrapper>

        <MainSection>
            <SidebarWrapper>
                <Sidebar1>
                    <BasicInfoButton>기본정보</BasicInfoButton>
                        {[...Array(9)].map((_, index) => (
                            <React.Fragment key={index}>
                            <SidebarButton1 bold={index === 0}>{index + 1}주차
                                <DelIcons src={ManageDel} alt="삭제" />
                            </SidebarButton1>
                            {index < 8 }
                            </React.Fragment>
                        ))}
                    <BasicInfoButton>기본정보</BasicInfoButton>
                    <PlusButton><PlusIcons src={ManagePlus} alt="추가"/></PlusButton>
                </Sidebar1>
            </SidebarWrapper>
           <ManageBasics/>
           <ManageDate/>
           <ManageDetailed/>
        </MainSection>

    </Wrapper>

    </> 
    );
};

export default StudyManagePage;

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
    width: 10.25em;
    background-color: #8E59FF;
    border: 1px solid #8E59FF;
    border-radius: 1em;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
    opacity : 60%;
`;
const SidebarWrapper = styled.div`
    position: absolute; 
    margin-top: 1.25em; 
    right: -2.375em; 
    height: 100vh; 
    width: 15.625em;
    padding: 1.25em; 
    box-sizing: border-box;

`;
const Sidebar1 = styled.aside`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 11.25em; 
  height: 37.3em; 
  margin-top: 1.9375em; 
`;

const SidebarButton1 = styled.div`
  background-color: transparent;
  color: #A2A3B2;

  font-weight: 1.125em; 
  margin-top: 0.625em; 
  padding: 0.6em 0.625em; 
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border : 1px solid #8E59FF;
    border-radius: 0.5em; 
    color: #8E59FF;
    margin-left: 0.4em; 
    margin-right : 0.4em;
    font-weight : 800;
  }
 `;
 const BasicInfoButton = styled(SidebarButton1)`
   font-size: 1em;
   font-weight: 1.125em; 
   background-color: #8E59FF;
   border: none;
   background-color: transparent;
   color: #A2A3B2;
`;
const RowWrapper1 = styled.div`
    width: 100%;
    display: flex;
    gap: 2.125em;
    justify-content: center;
    align-items: center;
`;
const RowLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9em;
    flex-direction: column;
    justify-content: center;
    padding: 1.125em; 
    margin-top: 0.625em; 
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
  flex: 1;
  padding-top: 30px;
  /*overflow: auto;*/
  flex-direction: row; 
  gap: 20px; 
  flex-direction: column; 
  position: relative;
  margin-bottom : 40px;
`;
const PlusButton = styled(SidebarButton1)`
    font-size: 1em;
    font-weight: 1.125em; 
    background-color: #8E59FF;
    border: none;
    background-color: transparent;
    color: #A2A3B2;
`;
const PlusIcons = styled.img`
    width: 1em; 
    height: auto;
`;

const DelIcons = styled.img`
    width: 1em; 
    height: auto;
    margin-left : 2em;
    margin-bottom: -0.3em;
`;