import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ManageDel from '../assets/icons/studyManage/StudyManageDel.svg';
import ManagePlus from '../assets/icons/studyManage/StudyManagePlus.svg';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ManageInfo from '../components/studyManage/ManageInfo';
import ManagePeriod from '../components/studyManage/StudyManagePeriod';
import ManageDetailed from '../components/studyManage/ManageDetailed';
import PageHeader from '../components/common/PageHeader';
import { ContentWrapper } from '../components/common/MediaWrapper';
const StudyManagePage = () => {
    // n주차 버튼 기능

  const [weeks, setWeeks] = useState([...Array(9).keys()]); 
  const sidebarRef = useRef(null);

  const handleDelete = () => {
    setWeeks(weeks.slice(0, -1)); 
  };

  const handleAdd = () => {
    setWeeks([...weeks, weeks.length]); 
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = 'auto';
      const newHeight = sidebarRef.current.scrollHeight;
      sidebarRef.current.style.height = `${newHeight}px`;
    }
    }, [weeks]);
    const [selectedWeek, setSelectedWeek] = useState(0);
      
    const handleWeekSelect = (index) => {
        setSelectedWeek(index);
    };
      //studymanage 페이지로 이동
    const navigate = useNavigate();
    const handleButtonClick = (navigate) => {
        navigate('/studyweekmanage');
    };
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);


  // 헤더 함수
  const headerTitles = ["저장하기"];
  const handleHeaderButtonClick = (index) => {
      setActiveButtonIndex(index);
      if (index == 0) {
          // dispatch(setActiveButton("저장하기"));
      }
  };

    return (
    <>
    <Wrapper>
      <PageHeader
          pageTitle="스터디 관리 페이지"
          subTitle = "스터디장에게만 보이는 메뉴에요"
          headerTitles={headerTitles}
          activeButtonIndex={activeButtonIndex}
          onButtonClick={handleHeaderButtonClick}
          changeColorOnClick={true}
          changeColorOnHover={true}
      />

      <RowWrapper>
        
        <ContentWrapper>
            <ManageInfo/>
            <ManagePeriod/>
            <ManageDetailed/>
        </ContentWrapper>

       
          <Sidebar1 ref={sidebarRef}>
              {/* 기본정보 클릭시 StudyManagePage로 넘어가기 */}
              <BasicInfoButton>
                  기본정보
              </BasicInfoButton>
              {weeks.map((week, index) => (
                <React.Fragment key={week}>
                  <SidebarButton1
                    className={index === weeks.length - 1 ? 'last-week' : ''}
                    bold={index === selectedWeek}
                    onClick={() => handleWeekSelect(index)}
                  >
                    <TextWrapper onClick={() => handleButtonClick(navigate)}>
                      {week + 1}주차
                    </TextWrapper>
                    {index === weeks.length - 1 && (
                      <DelIconWrapper>
                        <DelIcons
                          src={ManageDel}
                          alt="삭제"
                          onClick={handleDelete}
                        />
                      </DelIconWrapper>
                    )}
                  </SidebarButton1>
                </React.Fragment>
              ))}
              <PlusButton onClick={handleAdd}>
                <PlusIcons src={ManagePlus} alt="추가" />
              </PlusButton>
          </Sidebar1>
        </RowWrapper>
    </Wrapper>

    </> 
    );
};

export default StudyManagePage;
const RowWrapper = styled.div`
  display : flex;

`
const Wrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
    width: 100%;
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

`;

const Sidebar1 = styled.aside`
  overflow-y: auto;
  background-color: #FBFAFF;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em;
  max-height: 78.5vh;
  width: 11.25em;
  margin-left: 2em;
  padding-bottom: 1em;
  overflow-x: hidden;
  margin-top: 2.4em;
  // 사이드 창 전체 화면 스크롤할 때 같이 내려가게...
  position: -webkit-sticky;
  position: sticky;
  top: 2.4em;

  @media (max-width: 768px) {
    position: absolute;
    top: 15em;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    // width: 35em;
    width : 80%; /* 맞는지 확인*/
    overflow-x: scroll; 
    overflow-y: hidden; 
    margin: 1em 2em;
    z-index: 10;
    height: 3em; 
    max-height: 5em; 
  }
`;

const SidebarButton1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #A2A3B2;
  font-weight: ${(props) => (props.bold ? '800' : '400')};
  padding: 0.4em 0em;
  border: 1px solid transparent;
  cursor: pointer;
  width: 100%;
  margin: 0.5em 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
    min-width: 8em; 
    padding: 0.5em 0.5em;
    margin-top: 0em;
  }

  &:hover {
    border: 1px solid #8E59FF;
    border-radius: 0.4em;
    color: #8E59FF;
    font-weight: 800;
  }

  &.last-week {
    margin-left: 1.5em;

  }

  &.last-week:hover {
    margin-left: 0;
    border: 1px solid #8E59FF;
    border-radius: 0.4em;
    color: #8E59FF;
    font-weight: 800;

    ${DelIconWrapper} {
      margin-right: 1em;
      visibility: visible;
      
      @media(max-width: 768px) {
      margin-left: 0.1em;
      margin-right : 0em;
      }
    }

    ${TextWrapper} {
      text-align: center;
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

  @media(max-width: 768px) {
    margin-left: 0.5em;
  }
`;

const PlusButton = styled.button`
  font-size: 1em;
  font-weight: 1.125em;
  background-color: #8E59FF;
  border: none;
  background-color: transparent;
  color: #A2A3B2;
  padding: 0.6em 0.625em;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 0.5em 0.5em;
    margin-top: 0em;
    margin-right : 3em;
  }
`;

const PlusIcons = styled.img`
  width: 1em;
  height: auto;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0) saturate(100%) invert(0%) sepia(85%) saturate(7497%) hue-rotate(246deg) brightness(105%) contrast(103%);
  }
`;

