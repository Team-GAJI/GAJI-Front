import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ManageDel from '../assets/icons/studyManage/StudyManageDel.png';
import ManagePlus from '../assets/icons/studyManage/StudyManagePlus.svg';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ManageBasics from '../components/studyManage/ManageBasics';
import ManageDate from '../components/studyManage/ManageDate';
import ManageDetailed from '../components/studyManage/ManageDetailed';
import PageHeader from '../components/common/PageHeader';


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

  // Redux 상태 관리
  // const dispatch = useDispatch();

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
        <MainSection>
      
        <SidebarWrapper>
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
  background-color: #FBFAFF;
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
  }
  // 마지막 주차 글자 위치조정
  &.last-week {
    margin-left: 3em; 
    position: relative; 
  }
    
  &.last-week:hover {
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
      text-align: center;
      // 마지막 주차 글 위치 수정해라~
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
