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
  const roomId = location.state?.roomId || null;

  // 주차 데이터 가져오기
  const fetchSelectedWeekData = async () => {
    if (roomId !== null) {
        try {
            console.log('roomId:', roomId, 'week:', selectedWeek);

            const taskData = await TaskAPI(roomId, selectedWeek);
            const periodData = await periodAPI(roomId, selectedWeek);
            const assignments = await assignmentsAPI(roomId, selectedWeek);

            setWeekData(prevWeekData => {
                const newWeekDataArray = [...prevWeekData];
                const existingWeekData = newWeekDataArray[selectedWeek] || {};

                newWeekDataArray[selectedWeek] = {
                    ...existingWeekData,  // 기존 데이터 유지
                    basicInfo: {
                        name: taskData?.title || existingWeekData.basicInfo?.name || '',
                        description: taskData?.content || existingWeekData.basicInfo?.description || ''
                    },
                    tasks: taskData?.tasks || existingWeekData.tasks || [],
                    studyPeriodStartDate: periodData?.studyPeriodStartDate ? new Date(periodData.studyPeriodStartDate) : existingWeekData.studyPeriodStartDate,
                    studyPeriodEndDate: periodData?.studyPeriodEndDate ? new Date(periodData.studyPeriodEndDate) : existingWeekData.studyPeriodEndDate,
                    assignments: assignments || [] // 과제 데이터를 배열로 저장
                };

                return newWeekDataArray;
            });
        } catch (error) {
            console.error('데이터 가져오기 오류:', error);
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

  // 과제 데이터를 저장하는 함수
  const saveAssignments = async (assignments) => {
    try {
      console.log("과제 저장 중...");
      console.log("저장할 과제 데이터:", assignments); // 과제 데이터 확인
      await assignmentsAPI(roomId, selectedWeek, { assignments });
    } catch (error) {
      console.error("저장 중 오류 발생:", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  // 저장하기 버튼 클릭 핸들러
  const handleHeaderButtonClick = async (index) => {
    setActiveButtonIndex(index);
    if (index === 0) {
      try {
        console.log("저장 중...");
        const savedWeeks = [];
        const assignments = manageWeekDetailedRef.current?.getAssignments() || [];
        console.log("전체 과제 데이터:", assignments); // 전체 과제 데이터 확인
        const currentWeekAssignments = assignments; // 현재 주차의 과제를 필터링할 필요 없음 (현재 주차의 과제만 반환)
    
        for (let i = 0; i < weeks.length; i++) {
          const week = weeks[i];
          const weekInfo = weekData[i]?.basicInfo || { name: '', description: '' };
    
          await descriptionAPI(roomId, week, weekInfo);
    
          const periodInfo = {
            studyPeriodStartDate: weekData[i]?.studyPeriodStartDate?.toISOString(),
            studyPeriodEndDate: weekData[i]?.studyPeriodEndDate?.toISOString()
          };
          // console.log('전송되는 기간 정보:', periodInfo);
    
          await periodAPI(roomId, week, periodInfo);
    
          savedWeeks.push({
            week,
            weekInfo,
            periodInfo,
            currentWeekAssignments
          });
        }
    
        // 저장된 주차 정보만 콘솔에 출력
        savedWeeks.forEach(({ week, weekInfo, periodInfo,currentWeekAssignments }) => {
          console.log(`주차: ${week}`);
          console.log(`정보:`, weekInfo);
          console.log(`기간:`, periodInfo);
          console.log(`과제:`, currentWeekAssignments);
        });
  
        // 현재 주차의 과제 저장
        await saveAssignments(currentWeekAssignments);
    
        // console.log('입력한 값:', weekData);
        alert("저장되었습니다.");
      } catch (error) {
        console.error("저장 중 오류 발생:", error);
        alert("저장 중 오류가 발생했습니다.");
      }
    }
  };
  
  

  const handleWeekDataChange = (newWeekData) => {
    setWeekData(prevWeekData => {
        return prevWeekData.map((week, index) => {
            if (index === selectedWeek) {
                return {
                    ...week, // 기존 데이터 유지
                    ...newWeekData[index] // 새로운 데이터 업데이트
                };
            }
            return week;
        });
    });
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
            onAssignmentsChange={handleWeekDataChange}
            
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
