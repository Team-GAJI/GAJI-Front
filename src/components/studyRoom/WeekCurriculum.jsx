
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MinorText } from './StudySummary';
import { weekTaskProgressAPI } from '../../utils/studyRoom/weekTaskProgressAPI';

const WeekCurriculum = ( {roomId, week} ) => {
    const nicknames = ['닉네임1', '닉네임2', '닉네임3', '닉네임4', '닉네임5', '닉네임6', '닉네임7', '닉네임8'];

    const [activeTasks, setActiveTasks] = useState({});
    const [hoveredNickname, setHoveredNickname] = useState(null);

    const toggleTask = (taskId) => {
        setActiveTasks((prev) => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
    };

    const truncateNickname = (nickname) => {
        return nickname.length > 3 ? `${nickname.slice(0, 3)}...` : nickname;
    };

    useEffect(() => {
        console.log(roomId, week)
            try {
                const response = weekTaskProgressAPI(roomId, week);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
    }, [roomId, week]); 
    return (
        <>
            <WeekStudySummary>
                <MainText>4주차</MainText>
                <Date>2024. 03.19 - 03. 26</Date>
            </WeekStudySummary>
            <StudyCurriculumName>4주차 스터디 제목</StudyCurriculumName>
            <StudyCurriculumDescreption>
                4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다 4주차 스터디 상세설명 입니다
            </StudyCurriculumDescreption>
            
            <DivisionLine/> 

            <TaskContainer>
                <CurrentWeek>
                    <MinorText>이번주 과제</MinorText>
                    <TaskSquare>
                        <TaskList>
                            <TaskItem
                                isActive={activeTasks['task-1']}
                                onClick={() => toggleTask('task-1')}
                            >
                                과제 1
                            </TaskItem>
                            <TaskItem
                                isActive={activeTasks['task-2']}
                                onClick={() => toggleTask('task-2')}
                            >
                                과제 2
                            </TaskItem>
                            <TaskItem
                                isActive={activeTasks['task-3']}
                                onClick={() => toggleTask('task-3')}
                            >
                                과제 3
                            </TaskItem>
                        </TaskList>
                    </TaskSquare>
                </CurrentWeek>

                <MyTask>
                    <MinorText>내 과제</MinorText>
                    <MyStudyData>
                        <MyLeftSide>
                            <Column>
                                <TaskText>남은 과제</TaskText>
                                <CountTaskText>1개</CountTaskText>
                            </Column>
                            <Column>
                                <TaskText>마감 기한</TaskText>
                                <Row>
                                    <DayText>3월1일</DayText>
                                    <DDayText>D - 5</DDayText>
                                </Row>
                            </Column>
                        </MyLeftSide>

                        <MyRightSide>
                            66%
                        </MyRightSide>
                    </MyStudyData>
                </MyTask>
            </TaskContainer>

            <MinorText>스터디원 달성도</MinorText>
            <CircleContainer>
                <NinckNameList>
                    {nicknames.map((nickname, index) => (
                        <Circle 
                            key={index}
                            onMouseEnter={() => setHoveredNickname(nickname)}
                            onMouseLeave={() => setHoveredNickname(null)}
                        >
                            <NickName className="default-text">{truncateNickname(nickname)}</NickName>
                            {hoveredNickname === nickname && (
                                <CloudyText>{nickname}</CloudyText>
                            )}
                        </Circle>
                    ))}
                </NinckNameList>
                <TaskWrapper>
                    <Row><Task100/><CloudyText>100%</CloudyText></Row>
                    <Row><Task50/><CloudyText>50%</CloudyText></Row>
                </TaskWrapper>
            </CircleContainer>

            <MoreWrapper>
                <ButtonWrapper>
                    <MoreButton>스터디 단체 채팅방 입장하기</MoreButton>
                    {/* <NoticeButton2>{alarmCount}</NoticeButton2> */}
                </ButtonWrapper>
            </MoreWrapper>        
        </>
    );

};

export default WeekCurriculum;

const Date = styled.div`
  color: #a2a3b2;
  font-size: 0.8125em;
  font-weight: 700;
`;

const StudyCurriculumName = styled.div`
  font-weight: 600;
  font-size: 1.25em;
`;

const CloudyText = styled.div`
  color: #a2a3b2;
  font-size: 0.9375em;
  font-weight: 700;
`;
const StudyCurriculumDescreption = styled.div`
  margin-top: 0.75em;
  font-size: 0.6875em;
  color: #161a3f;
  opacity: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 4;
  max-width: 200ch;
  max-height: calc(1.2em * 2); // 2줄 높이
  line-height: 1.2em;
`;

const ButtonWrapper = styled.div`
  width: auto;
  position: relative;
`;

const NinckNameList = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  gap: 1.25em;
  @media (max-width: 768px) {
    padding-bottom: 0.625em;
  }
`;

const CurrentWeek = styled.div`
  width: 100%;
  height: 100%;
`;

const MyTask = styled.div`
  width: 100%;
  height: 100%;
`;

const DivisionLine = styled.div`
  margin-bottom: 1em;
  margin-top: 1em;
  width: 100%;
  height: 1px;
  background-color: #a2a3b2;
  opacity: 20%;
`;

const MainText = styled.div`
  font-size: 1.25em;
  font-weight: 700;
  color: #8e59ff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const WeekStudySummary = styled(Row)`
  margin-bottom: 1.5em;
`;

const Column = styled.div`
  display: flex;
  gap: 0.25em;
  flex-direction: column;
`;

const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TaskSquare = styled.div`
  width: 100%;
  height: 100%;
  border: 0.0625em solid #a2a3b2;
  border-radius: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25em;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
  font-weight: 700;
  color: #161a3f;
`;

const TaskItem = styled.div`
  position: relative;
  padding-left: 1.5625em;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9375em;
    height: 0.9375em;
    background-color: ${({ isActive }) => (isActive ? "#8E59FF" : "#fff")};
    border: 0.0625em solid
      ${({ isActive }) => (isActive ? "#8E59FF" : "#8E59FF")};
    border-radius: 0.125em;
  }

  ${({ isActive }) =>
    isActive &&
    `
        color: #A2A3B2; 
        text-decoration: line-through;
    `}
`;

const MyStudyData = styled.div`
  border-radius: 1.25em;
  display: flex;
  width: 100%;
  height: 100%;
  border: 0.0625em solid #a2a3b2;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MyLeftSide = styled.div`
  width: 50%;
  border-right: 0.0625em solid #a2a3b2;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  padding-left: 2em;
`;

const TaskText = styled.div`
  font-weight: 600;
`;

const CountTaskText = styled.div`
  color: #8e59ff;
  font-weight: 600;
`;

const DDayText = styled.div`
  color: #8e59ff;
  font-weight: 600;
`;

const DayText = styled.div`
  color: #a2a3b2;
  font-weight: 600;
`;

const MyRightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #8e59ff;
  font-weight: 800;
  font-size: 1.5em;
  padding: 0 auto;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  gap: 0.625em;
  margin-top: 1.875em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50px;
  padding: 1em;
  box-sizing: border-box;
  background-color: #8e59ff;
  cursor: pointer;
`;

const NickName = styled.div`
  font-size: 0.8125em;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Task100 = styled.div`
  width: 1em;
  height: 1em;
  background: #8e59ff;
  border-radius: 2px;
`;

const Task50 = styled(Task100)`
  opacity: 50%;
`;

const MoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 3.75em;
  margin-bottom: 1.875em;
`;

// const NoticeButton2 = styled.button`
//     border-radius: 50%;
//     border: 0.0625em solid #FF0043;
//     width: 1.875em;
//     height: 1.875em;
//     background-color: #FF0043;
//     color: white;
//     font-size: 0.8125em;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: -1em;
//     left: 95%;
// `;

const MoreButton = styled.div`
  background-color: #8e59ff;
  border-radius: 0.5em;
  font-size: 0.8125em;
  font-weight: 700;
  text-align: center;
  padding: 0.8125em;
  color: #ffffff;
  cursor: pointer;
  width: 18.75em;
`;
