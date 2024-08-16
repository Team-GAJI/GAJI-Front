import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import StudyManageWeekManageDel from '../assets/icons/studyManageWeek/StudyManageWeekDel.svg';
import StudyManageWeekManageManagePlus from '../assets/icons/studyManageWeek/StudyManageWeekPlus.svg';


import ManageWeekBasics from '../components/studyManageWeek/ManageWeekBasics.jsx';
import ManageWeekPeriod from  '../components/studyManageWeek/StudyMangeWeekPeriod.jsx';
import ManageWeekeDetailed from '../components/studyManageWeek/ManageWeekDetailed.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import { ContentWrapper70 } from '../components/common/MediaWrapper.jsx';


const StudyManageWeeKPage = () => {
  // n주차 버튼 기능 마지막 주차만 삭제, 추가 가능하도록 수정
  const [weeks, setWeeks] = useState([...Array(9).keys()]);
  const sidebarRef = useRef(null);

  const handleDelete = () => {
    if (weeks.length > 0) {
      setWeeks(weeks.slice(0, -1)); // 마지막 주차만 삭제
    }
  };

  const handleAdd = () => {
    setWeeks([...weeks, weeks.length]);
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = "auto";
      const newHeight = sidebarRef.current.scrollHeight;
      sidebarRef.current.style.height = `${newHeight}px`;
    }
  }, [weeks]);

  // 주차 선택
  const [selectedWeek, setSelectedWeek] = useState(0);

  const handleWeekSelect = (index) => {
    setSelectedWeek(index);
  };
  //studymanage 페이지로 이동
  const navigate = useNavigate();
  const handleButtonClick = (navigate) => {
    navigate("/studymanage");
  };

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  //헤더 함수
  const headerTitles = ["저장하기"];
  const handleHeaderButtonClick = (index) => {
    setActiveButtonIndex(index);
    if (index == 0) {
      // dispatch(setActiveButton("저장하기"));
    }
  };

  return (
    <>
        {/* 헤더 */}
        <PageHeader
          pageTitle="스터디 관리 페이지"
          subTitle="스터디장에게만 보이는 메뉴에요"
          headerTitles={headerTitles}
          activeButtonIndex={activeButtonIndex}
          onButtonClick={handleHeaderButtonClick}
          changeColorOnClick={true}
          changeColorOnHover={true}
        />
        <RowWrapper>

          <ContentWrapper70>
            <ManageWeekBasics selectedWeek={selectedWeek}/>
            <ManageWeekPeriod selectedWeek={selectedWeek}/>
            <ManageWeekeDetailed selectedWeek={selectedWeek} />
          </ContentWrapper70>

            <Sidebar1 ref={sidebarRef}>
              {/* 기본정보 클릭시 StudyManagePage로 넘어가기 */}
              <BasicInfoButton onClick={() => handleButtonClick(navigate)}>
                기본정보
              </BasicInfoButton>
              {weeks.map((week, index) => (
                <React.Fragment key={week}>
                  <SidebarButton1
                    className={index === weeks.length - 1 ? "last-week" : ""}
                    bold={index === selectedWeek}
                    onClick={() => handleWeekSelect(index)}
                  >
                    <TextWrapper>{week + 1}주차</TextWrapper>
                    {index === weeks.length - 1 && (
                      <DelIconWrapper>
                        <DelIcons
                          src={StudyManageWeekManageDel}
                          alt="삭제"
                          onClick={handleDelete}
                        />
                      </DelIconWrapper>
                    )}
                  </SidebarButton1>
                </React.Fragment>
              ))}
              <PlusButton onClick={handleAdd}>
                <PlusIcons src={StudyManageWeekManageManagePlus} alt="추가" />
              </PlusButton>
            </Sidebar1>

      </RowWrapper>

    </>
    );
};

export default StudyManageWeeKPage;

const RowWrapper = styled.div`
display : flex;
@media(max-width : 768px){
  flex-direction : column-reverse;
}

`




const DelIconWrapper = styled.div`
visibility: hidden;
margin-left: 0em; 
margin-bottom: -0.3em;
`;

const DelIcons = styled.img`
width: 3em;
height: auto;
`;


const Sidebar1 = styled.aside`
overflow-y: auto;
background-color: #FBFAFF;
display: flex;
flex-direction: column;
border: 1px solid #A2A3B2;  
border-radius: 0.5em;
max-height: 78.5vh;
width : 10%;
width: 11.25em;
right : 3%;
padding : 0.2em;
padding-bottom: 1em;
overflow-x: hidden;

// 사이드 창 전체 화면 스크롤할 때 같이 내려가게...
position: -webkit-sticky;
position: sticky;
top: 5em;
margin-top : 2.75em;

@media (max-width: 768px) {
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  left : 0;
  width : 100%;
  margin-left: 0;
  box-sizing : border-box;
  border : none;
  flex-direction: row;
  overflow-x: scroll; 
  overflow-y: hidden; 

  z-index: 10;
  height: 3em; 
  max-height: 5em; 
}

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
padding: 0.4em 0em;
border: 1px solid transparent;
cursor: pointer;
width: 100%;
margin: 0.5em 0em;

box-sizing: border-box;


@media (max-width: 768px) {
  flex-direction: row;
  width: auto;
  min-width: 8em; 
  padding: 0.5em 0.5em;
  margin-top: 0.5em;
}

&:hover {
  border: 1px solid #8E59FF;
  border-radius: 0.4em;
  color: #8E59FF;
  font-weight: 800;
}
// 마지막 주차 글자 위치조정
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

