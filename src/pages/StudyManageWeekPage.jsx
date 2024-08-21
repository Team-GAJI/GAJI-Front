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
import { TaskAPI } from '../utils/studyManageWeek/TaskAPI.jsx';
import { descriptionAPI } from '../utils/studyManageWeek/descriptionAPI.jsx';
import { periodAPI } from '../utils/studyManageWeek/period.jsx';
import { assignmentsAPI } from '../utils/studyManageWeek/assignmentsAPI.jsx';

const StudyManageWeeKPage = () => {
  const [weeks, setWeeks] = useState([...Array(9).keys()]);
  const [weekData, setWeekData] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const [studyPeriodStartDate, setStudyPeriodStartDate] = useState(null);
  const [studyPeriodEndDate, setStudyPeriodEndDate] = useState(null); 

  const sidebarRef = useRef(null);
  const manageWeekDetailedRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  // const roomId = location.state?.roomId || null;
  const roomId = 134;


  // 주차 데이터 가져오기
  const fetchSelectedWeekData = async () => {
    if (roomId !== null) {
      try {
        console.log('roomId:', roomId, 'week:', selectedWeek);

        // 특정 주차의 내용을 가져오는 API 
        const taskData = await TaskAPI(roomId, selectedWeek);

        // 스터디 기간 정보  API 
        const periodData = await periodAPI(roomId, selectedWeek);

         // 스터디 과제 등록 API 
        const assignments = await assignmentsAPI(roomId, selectedWeek);
        
        const newWeekData = {
          basicInfo: {
            name: taskData?.title || '',
            description: taskData?.content || ''
          },
          tasks: taskData?.tasks || [], 
          studyPeriodStartDate: periodData?.studyPeriodStartDate ? new Date(periodData.studyPeriodStartDate) : null,
          studyPeriodEndDate: periodData?.studyPeriodEndDate ? new Date(periodData.studyPeriodEndDate) : null
        };

        setWeekData(prevWeekData => {
          const newWeekDataArray = [...prevWeekData];
          newWeekDataArray[selectedWeek] = newWeekData;
          return newWeekDataArray;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    fetchSelectedWeekData();
  }, [roomId, selectedWeek]);

  useEffect(() => {
    if (selectedWeek < weekData.length) {
      const newWeekData = weekData[selectedWeek] || {};
      setStudyPeriodStartDate(newWeekData.studyPeriodStartDate || new Date());
      setStudyPeriodEndDate(newWeekData.studyPeriodEndDate || new Date());
    }
  }, [selectedWeek, weekData]);

  // 저장하기 버튼 클릭 핸들러

const handleHeaderButtonClick = async (index) => {
    setActiveButtonIndex(index);
    if (index === 0) {
        try {
            console.log("저장 중...");
            const savedWeeks = []; // 저장된 주차를 기록할 배열

            for (let i = 0; i < weeks.length; i++) {
                const week = weeks[i];
                const weekInfo = weekData[i]?.basicInfo || { name: '', description: '' };

                // 기본 정보 저장 및 서버 전송
                await descriptionAPI(roomId, week, weekInfo);

                // 기간 정보 저장
                const periodInfo = {
                    studyPeriodStartDate: weekData[i]?.studyPeriodStartDate?.toISOString(), 
                    studyPeriodEndDate: weekData[i]?.studyPeriodEndDate?.toISOString()
                };
                console.log('전송되는 기간 정보:', periodInfo);

                await periodAPI(roomId, week, periodInfo); // 기간 정보를 서버로 전송

                savedWeeks.push({
                    week,
                    weekInfo,
                    periodInfo
                });
            }

            // 저장된 주차 정보만 콘솔에 출력
            savedWeeks.forEach(({ week, weekInfo, periodInfo }) => {
                console.log(`주차: ${week}`);
                console.log(`정보:`, weekInfo);
                console.log(`기간 정보:`, periodInfo);
            });

            console.log('입력한 값:', weekData);
            alert("저장되었습니다.");
        } catch (error) {
            console.error("저장 중 오류 발생:", error);
            alert("저장 중 오류가 발생했습니다.");
        }
    }
};



  const handleWeekDataChange = (newWeekData) => {
    setWeekData(newWeekData);
  };

  const handleDelete = () => {
    if (weeks.length > 0) {
      const newWeeks = weeks.slice(0, -1);
      const newWeekData = weekData.slice(0, -1);
      setWeeks(newWeeks);
      setWeekData(newWeekData);
      if (selectedWeek >= newWeeks.length) {
        setSelectedWeek(newWeeks.length - 1);
      }
    }
  };

  const handleAdd = () => {
    const newWeekIndex = weeks.length;
    setWeeks([...weeks, newWeekIndex]);
    setWeekData([
      ...weekData,
      {
        basicInfo: { name: '', description: '' },
        tasks: [],
        recruitmentStartDate: null,
        recruitmentEndDate: null,
        studyPeriodStartDate: null,
        studyPeriodEndDate: null
      }
    ]);
    setSelectedWeek(newWeekIndex);
  };

  const handleWeekSelect = (index) => {
    setSelectedWeek(index);
  };

  const handleButtonClick = () => {
    navigate("/studymanage");
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
            roomId={roomId}
          />
          <StudyMangeWeekPeriod
            selectedWeek={selectedWeek}
            weekData={weekData}
            onWeekDataChange={handleWeekDataChange}
            roomId={roomId}
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
