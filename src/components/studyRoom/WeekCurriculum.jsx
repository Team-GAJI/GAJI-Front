import React, { useState } from 'react';
import styled from 'styled-components';
import  {CloudyText, MinorText } from '../../components/studyRoom/StudySummary';

const WeekCurriculum = () => {
    const nicknames = ['닉네임1', '닉네임2', '닉네임3', '닉네임4', '닉네임5', '닉네임6', '닉네임7', '닉네임8'];

    const [activeTasks, setActiveTasks] = useState({});

    const toggleTask = (taskId) => {
        setActiveTasks((prev) => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
        };

        const alarmData = {
        1: 3, 
        2: 5,   
        };
    
    const id = 1;  
    const alarmCount = alarmData[id]; 
    return (
        <>
            <>
            <MainText>4주차</MainText>
                <Container>
                    <WeekSquare placeholder='Week 4 커리큘럼 제목'></WeekSquare>
                    <InputWeek placeholder="상세 설명해주세요ㅠㅠ 비온다아앙아"></InputWeek>
                </Container>
            </>
            
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

                {/*과제 달성도(팀원) */}
                <MinorText>스터디원 달성도</MinorText>
                <CircleContainer>
                    <NinckNameList>
                        {nicknames.map((nickname, index) => (
                        <Circle key={index}>
                            <NickName className="default-text">{nickname}</NickName>
                        </Circle>
                        ))}
                    </NinckNameList>
                    <TaskWrapper>
                        <Row><Task100/><CloudyText>100%</CloudyText></Row>
                        <Row><Task50/><CloudyText>50%</CloudyText></Row>
                        <Row><Task0/><CloudyText>0%</CloudyText></Row>
                    </TaskWrapper>
                </CircleContainer>
        <MoreWrapper>
            <ButtonWrapper>
                <MoreButton>스터디 단체 채팅방 입장하기</MoreButton>
                <NoticeButton2>{alarmCount}</NoticeButton2>
            </ButtonWrapper>
        </MoreWrapper>        
        </>
    );
};

export default WeekCurriculum;

const ButtonWrapper = styled.div`
    width : auto;
    position : relative;
`


const NinckNameList = styled.div`
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    gap: 1em;
    @media(max-width : 768px){
        padding-bottom : 0.625em;
    }
`;

const CurrentWeek = styled.div`
    width : 100%;
    height : 100%;
`;

const MyTask = styled.div`
    width : 100%;
    height : 100%;
`

const DivisionLine = styled.div`
    margin-bottom: 1em;
    margin-top : 1em;
    width : 100%;
    height :1px;
    background-color : #A2A3B2;
    opacity : 20%;
`

const MainText = styled.h1`
    font-size: 1em;
    font-weight: 700;
    color: #8E59FF;
`;

/* 글자 스타일 */
const Container = styled.div`
    width : 100%;
    height : 4em;
    display: flex;
    align-items: center;
`;

const Row = styled.div`
    display : flex;
    gap : 1em;
`

const Column = styled.div`
    display : flex;
    gap : 0.25em;
    flex-direction : column;
`
const WeekSquare = styled.input`
    width: 30%; 
    height: 100%; 
    border: 0.0625em solid; 
    border-radius: 0.625em 0 0 0.625em; 
    background-color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: bold; 
    color: #fff;
    font-family: 'NanumSquareNeo';
    text-align : center;
    &::placeholder {
        color: #FFFFFF;
    }
    &:focus {
        outline : none;
    }
`;

const InputWeek = styled.textarea`
    height : 100%;
    width : 100%;
    border-top-right-radius: 0.5em; 
    border-bottom-right-radius: 0.5em; 
    border: 0.0625em solid #fff; 
    outline: none;
    resize: none; 
    padding: 0.5em; 
    box-sizing : border-box;
    font-family: 'NanumSquareNeo';

    &::placeholder {
        color: #C8C8C8;
    }
`;


const TaskContainer = styled.div`
    display: flex;
    width : 100%;
    gap : 1em;

    @media(max-width : 768px){
        flex-direction : column;
    }
`;


const TaskSquare = styled.div`
    width: 100%;
    height : 100%;
    border: 0.0625em solid #A2A3B2; 
    border-radius: 1.25em; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25em; 
    box-sizing : border-box;
    overflow-y: scroll; 
`;

const TaskList = styled.div`
    display : flex;
    flex-direction : column;
    width: 100%;
    gap : 1em;
`;


const TaskItem = styled.div`
    position: relative;
    padding-left: 1.5625em;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0.9375em; 
        height: 0.9375em; 
        background-color: ${({ isActive }) => (isActive ? '#8E59FF' : '#fff')};
        border: 0.0625em solid ${({ isActive }) => (isActive ? '#8E59FF' : '#8E59FF')}; 
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
    width : 100%;
    height : 100%;
    border: 0.0625em solid #A2A3B2;
    box-sizing : border-box; 
    align-items: center;
    justify-content: center;
    position: relative;
    
`;

const MyLeftSide = styled.div`
    width: 50%; 
    border-right: 0.0625em solid #A2A3B2; 
    display : flex;
    flex-direction : column;
    gap : 1em;
    padding : 1em;
`;

const TaskText = styled.div`
    font-weight: 600;
`;

const CountTaskText = styled.div`
    color: #8E59FF;
    font-weight: 600;
`;


const DDayText = styled.div`
    color: #8E59FF;
    font-weight: 600;
`;

const DayText = styled.div`
    color: #A2A3B2;
    font-weight: 600;
`;

const MyRightSide = styled.div`
    width: 50%; 
    display: flex;
    flex-direction: column;
    align-items : center;
    justify-content: center; 
    color: #8E59FF;
    font-weight: 800;
    font-size: 2em;
    @media(max-width : 768px){
        font-size : 1.5em;
    }
`;


const CircleContainer = styled.div`
    display: flex;
    gap: 0.625em;
    margin-top: 1.875em; 
    @media(max-width : 768px){
        flex-direction : column;
    }
`;

const Circle = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 3.5em;
    height : 3.5em;
    border-radius: 1em;
    padding : 1em;
    box-sizing : border-box;
    background-color: #8E59FF;
    cursor: pointer;

`;


const NickName = styled.div`
    font-size : 0.8125em;
    color : #FFFFFF;
    @media(max-width : 768px){
        font-size : 0.75em;
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
    background: #8E59FF;
    border-radius: 2px;
    
`

const Task50 = styled(Task100)`
    opacity : 50%;
`
const Task0 =styled(Task100)`
    background: #FFFFFF;
    border : 1px solid #8E59FF;
`

const MoreWrapper = styled.div`
    display : flex;
    justify-content : center;
    position: relative; 
    margin-top: 3.75em; 
    margin-bottom: 1.875em; 
`;

const NoticeButton2 = styled.button`
    border-radius: 50%;  
    border: 0.0625em solid #FF0043; 
    width: 1.875em; 
    height: 1.875em; 
    background-color: #FF0043;
    color: white;
    font-size: 0.8125em; 
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;  
    top: -1em; 
    left: 95%; 
    `;

const MoreButton = styled.div`
    background-color: #8E59FF;
    border-radius: 0.5em; 
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    width: 18.75em; 

`;
