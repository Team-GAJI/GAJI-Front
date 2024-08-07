import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import backImage from '../assets/images/common/mypageBackground.png';
import StudyManageWeekManageDel from '../assets/icons/studyManageWeek/StudyManageWeekDel.svg';
import StudyManageWeekManageManagePlus from '../assets/icons/studyManageWeek/StudyManageWeekPlus.svg';


import ManageWeekBasics from '../components/studyManageWeek/ManageWeekBasics.jsx';
import ManageWeekeDate from '../components/studyManageWeek/ManageWeekDate.jsx';
import ManageWeekeDetailed from '../components/studyManageWeek/ManageWeekDetailed.jsx';

const StudyManagePage = () => {
    // n주차 버튼 기능
  const [weeks, setWeeks] = useState([...Array(9).keys()]); 
  const sidebarRef = useRef(null);

  const handleDelete = (index) => {
    setWeeks(weeks.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setWeeks([...weeks, weeks.length + 1]); 
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = 'auto';
      const newHeight = sidebarRef.current.scrollHeight;
      sidebarRef.current.style.height = `${newHeight}px`;
    }
  }, [weeks]);

    return (
    <>
    <Wrapper>
        <RowLogoWrapper>
                <MainText>스터디 관리 페이지</MainText>
                <Text>스터디장에게만 보이는 메뉴에요</Text>
                <RowWrapper1>
                    <MainButton>저장하기</MainButton>
                    <MainButton>미리보기</MainButton>
                </RowWrapper1>

        </RowLogoWrapper>

        <MainSection>

        <SidebarWrapper>
            <Sidebar1 ref={sidebarRef}>
                <BasicInfoButton>기본정보</BasicInfoButton>
                {weeks.map((week, index) => (
                <React.Fragment key={week}>
                    <SidebarButton1 bold={index === 0}>
                    <TextWrapper>
                        {week + 1}주차
                    </TextWrapper>
                    <DelIconWrapper>
                        <DelIcons src={StudyManageWeekManageDel} alt="삭제" onClick={() => handleDelete(index)} />
                    </DelIconWrapper>
                    </SidebarButton1>
                </React.Fragment>
                ))}
                <PlusButton onClick={handleAdd}>
                <PlusIcons src={StudyManageWeekManageManagePlus} alt="추가" />
                </PlusButton>
            </Sidebar1>
        </SidebarWrapper>



           <ManageWeekBasics/>
           <ManageWeekeDate/>
           <ManageWeekeDetailed/>
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
 transition: height 0.5s ease; 
  overflow: hidden; 
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 11.25em; 
  height: 32.5em; 
  margin-top: 1.9375em; 
`;
const DelIconWrapper = styled.div`
  visibility: hidden;
  margin-left: 0em; 
  margin-bottom: -0.3em;
`;

const DelIcons = styled.img`
  width: 3em;
  height: auto;
`;
const TextWrapper = styled.div`
  flex: 1;
  text-align: center;
  margin-left : 3em;
`;
const SidebarButton1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #A2A3B2;
  font-weight: ${(props) => (props.bold ? '800' : '400')};
  margin-top: 0.625em; 
  padding: 0.6em 0.625em; 
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #8E59FF;
    border-radius: 0.5em; 
    color: #8E59FF;
    margin-left: 0.4em; 
    margin-right: 0.4em;
    font-weight: 800;

    ${DelIconWrapper} {
      visibility: visible;
    }

    ${TextWrapper} {
      text-align: left;
      margin-left: 1em; 
    }
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
const PlusButton = styled.button`
    font-size: 1em;
    font-weight: 1.125em; 
    background-color: #8E59FF;
    border: none;
    background-color: transparent;
    color: #A2A3B2;
    padding: 0.6em 0.625em; 
`;
const PlusIcons = styled.img`
  width: 1em;
  height: auto;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0) saturate(100%) invert(0%) sepia(85%) saturate(7497%) hue-rotate(246deg) brightness(105%) contrast(103%);
  }
`;