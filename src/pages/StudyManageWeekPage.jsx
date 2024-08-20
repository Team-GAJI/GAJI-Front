import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import StudyManageWeekManageDel from '../assets/icons/studyManageWeek/StudyManageWeekDel.svg';
import StudyManageWeekManageManagePlus from '../assets/icons/studyManageWeek/StudyManageWeekPlus.svg';

import ManageWeekBasics from '../components/studyManageWeek/ManageWeekBasics.jsx';
import StudyMangeWeekPeriod from '../components/studyManageWeek/StudyMangeWeekPeriod.jsx';
import ManageWeekeDetailed from '../components/studyManageWeek/ManageWeekDetailed.jsx';
import PageHeader from '../components/common/PageHeader.jsx';
import { ContentWrapper70 } from '../components/common/MediaWrapper.jsx';

const StudyManageWeeKPage = () => {
  const [weeks, setWeeks] = useState([...Array(9).keys()]);
  const [weekData, setWeekData] = useState(weeks.map(() => ({
    basicInfo: { name: '', description: '' },
    tasks: [],
    recruitmentStartDate: null,
    recruitmentEndDate: null,
    studyPeriodStartDate: null,
    studyPeriodEndDate: null
  })));
  const [selectedWeek, setSelectedWeek] = useState(0);

  const sidebarRef = useRef(null);
  const manageWeekDetailedRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const roomId = location.state?.roomId || {};

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    console.log(roomId);
    if (sidebarRef.current) {
      sidebarRef.current.style.height = "auto";
      const newHeight = sidebarRef.current.scrollHeight;
      sidebarRef.current.style.height = `${newHeight}px`;
    }
  }, [weeks]);

  const handleDelete = () => {
    if (weeks.length > 0) {
      setWeeks(weeks.slice(0, -1));
      setWeekData(weekData.slice(0, -1));
    }
  };

  const handleAdd = () => {
    setWeeks([...weeks, weeks.length]);
    setWeekData([...weekData, {
      basicInfo: { name: '', description: '' },
      tasks: [],
      recruitmentStartDate: null,
      recruitmentEndDate: null,
      studyPeriodStartDate: null,
      studyPeriodEndDate: null
    }]);
  };

  const handleWeekSelect = (index) => {
    setSelectedWeek(index);
  };

  const handleButtonClick = () => {
    navigate("/studymanage");
  };

  const handleHeaderButtonClick = (index) => {
    setActiveButtonIndex(index);
    if (index === 0 && manageWeekDetailedRef.current) {
      manageWeekDetailedRef.current.handleSubmit();
    }
  };

  const handleWeekDataChange = (newWeekData) => {
    setWeekData(newWeekData);
  };

  return (
    <>
      <PageHeader
        pageTitle="스터디 관리 페이지"
        subTitle="스터디장에게만 보이는 메뉴에요"
        headerTitles={["저장하기"]}
        activeButtonIndex={activeButtonIndex}
        onButtonClick={handleHeaderButtonClick}
        changeColorOnClick={true}
        changeColorOnHover={true}
      />

      <RowWrapper>
        <ContentWrapper70>
          <ManageWeekBasics
            selectedWeek={selectedWeek}
            weekData={weekData}
            onWeekDataChange={handleWeekDataChange}
          />
          <StudyMangeWeekPeriod
            selectedWeek={selectedWeek}
            weekData={weekData}
            onWeekDataChange={handleWeekDataChange}
          />
          <ManageWeekeDetailed
            selectedWeek={selectedWeek}
            weekData={weekData}
            onWeekDataChange={handleWeekDataChange}
            roomId={roomId}
            ref={manageWeekDetailedRef}
          />
        </ContentWrapper70>

        <Sidebar1 ref={sidebarRef}>
          <BasicInfoButton onClick={handleButtonClick}>
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
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
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

const Sidebar1 = styled.aside`
  overflow-y: auto;
  background-color: #FBFAFF;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;  
  border-radius: 0.5em;
  max-height: 500px;
  width: 11.25em;
  right: 3%;
  padding: 0.2em;
  padding-bottom: 1em;
  overflow-x: hidden;

  position: -webkit-sticky;
  position: sticky;
  top: 5em;
  margin-top: 2.75em;

  @media (max-width: 768px) {
    position: -webkit-sticky;
    position: sticky;
    top: 60px;
    left: 0;
    width: 100%;
    margin-left: 0;
    box-sizing: border-box;
    border: none;
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

      @media (max-width: 768px) {
        margin-left: 0.1em;
        margin-right: 0em;
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

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    padding: 0.5em 0.5em;
    margin-top: 0em;
    margin-right: 3em;
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
