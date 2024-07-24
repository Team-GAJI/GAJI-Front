import React, { useState } from 'react';
import styled from 'styled-components';
import { Color } from '../style/Color';
import { PuppleButton } from '../style/Button';
import PlusIcon from '../../assets/icons/mypage/plusIcon.svg?react';

const Task = ({ selectedDate }) => {
    const [taskModal, setTaskModal] = useState(false);
    const date = selectedDate;
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = dayNames[date.getDay()];

    const dummyJson = {
        "studyName": "웹 개발 스터디",
        "startTime": "2024-07-25T09:00:00",
        "endTime": "2024-07-25T11:00:00",
        "task": {
            "title": "프론트엔드 프로젝트",
            "description": "React를 사용하여 간단한 Todo 리스트 애플리케이션 만들기",
            "dueDate": "2024-08-01T23:59:59"
        }
    };

    const { studyName, startTime, endTime, task } = dummyJson;
    const formattedStartTime = new Date(startTime).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });
    const formattedEndTime = new Date(endTime).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });

    const handleTaskModal = () => {
        if (!taskModal) {
            setTaskModal(true);
        } else {
            setTaskModal(false);
            taskSubmit();
        }
    };

    // 서버에 일정 추가
    const taskSubmit = () => {
        // 서버에 일정 추가 로직 구현
    };

    return (
        <>
            <TaskWrapper>
                <DateWrapper>{year}년 <Color>{month}월 {day}일 ({dayName})</Color></DateWrapper>
                <ListWrapper>
                    <ListItem>
                        <ColumnWrapper>
                            <StudyName>{studyName}</StudyName>
                            <TaskTitle>{task.title}</TaskTitle>
                            <Time><StartTime>{formattedStartTime}</StartTime> - <EndTime>{formattedEndTime}</EndTime></Time>
                        </ColumnWrapper>
                        <TaskCheckBox type='checkbox' />
                    </ListItem>
                    <ListItem>
                        <ColumnWrapper>
                            <StudyName>{studyName}</StudyName>
                            <TaskTitle>{task.title}</TaskTitle>
                            <Time><StartTime>{formattedStartTime}</StartTime> - <EndTime>{formattedEndTime}</EndTime></Time>
                        </ColumnWrapper>
                        <TaskCheckBox type='checkbox' />
                    </ListItem>
                    <ListItem>
                        <ColumnWrapper>
                            <StudyName>{studyName}</StudyName>
                            <TaskTitle>{task.title}</TaskTitle>
                            <Time><StartTime>{formattedStartTime}</StartTime> - <EndTime>{formattedEndTime}</EndTime></Time>
                        </ColumnWrapper>
                        <TaskCheckBox type='checkbox' />
                    </ListItem>
                </ListWrapper>
                <AddScheduleButton onClick={() => handleTaskModal()}><PlusIcon />{taskModal ? '추가 완료' : '일정 추가하기'}</AddScheduleButton>
                {taskModal &&
                    <AddTaskModal>
                        <Title1>일정 추가하기</Title1>
                        <Description>일정은 하루에 10개 추가할 수 있어요</Description>
                        <Line />
                        <Title2>일정 제목</Title2>
                        <NewTaskTitle placeholder='일정 명을 입력해주세요'></NewTaskTitle>
                        <Title2>시간 설정</Title2>
                        <RowWrapper>
                            <Text>시작</Text>
                            <TimeInput></TimeInput>
                            <Text>끝</Text>
                            <TimeInput></TimeInput>
                        </RowWrapper>
                        <RowWrapper>
                            <RepeatCheck /><Text>반복 일정</Text><Description2>일정을 매주 반복합니다</Description2>
                        </RowWrapper>
                    </AddTaskModal>
                }
            </TaskWrapper>
        </>
    );
};

export default Task;

const AddTaskModal = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    box-sizing: border-box;
    padding: 2em;
    
    width: 100%;
    height: 75%;
    z-index: 1;
    color: #161A3F;
    background: #FFFFFF;
    box-shadow: 0px 2px 20px rgba(119, 106, 142, 0.1);
    border-radius: 10px;
    @media (max-width: 768px) {
        top: 4em;
    }
`;

const Title1 = styled.div`
    font-size: 1.25em;
    font-weight: 800;
`;

const Description = styled.div`
    margin-top: 1em;
    font-size: 0.8125em;
    font-weight: 700;
    color: #A2A3B2;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #D0D1D9;
    margin-top: 0.625em;
`;

const Title2 = styled.div`
    margin-top: 1em;
    font-weight: 700;
`;

const NewTaskTitle = styled.input`
    width: 100%;
    height: 2em;
    border: 1px solid #D0D1D9;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 0.5625em;
    font-size: 0.8125em;
    padding-left: 1em;

    &::placeholder {
        color: #D0D1D9;
    }
    
    &:focus {
        outline: none;
    }
`;

const RowWrapper = styled.div`
    width: 100%;
    margin-top: 1.25em;
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    font-size: 0.8125em;
    font-weight: 700;
`;

const TimeInput = styled.input.attrs({ type: 'time' })`
    margin-left: 1.375em;
    margin-right: 1.375em;
    padding-left: 1em;
    border: none;
    box-sizing: border-box;
    background-color: #ECEDF0;
    border-radius: 10px;
    font-family: 'NanumSquareNeo';
    font-weight: 700;
    color: #8E59FF;
`;

const Description2 = styled.div`
    font-size: 0.8125em;
    color: #D0D1D9;
    margin-left: 0.625em;
`;

const TaskWrapper = styled.div`
    box-sizing: border-box;
    padding-top: 3em;
    position: relative;
    margin-left: 2em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 1em;
    }
`;

const DateWrapper = styled.div`
    font-size: 1.25em;
    font-weight: 800;
    margin-bottom: 1em;
`;

const ListWrapper = styled.div`
    width: 100%;
    overflow-y: hidden;
    box-sizing: border-box;
    height: 20em;

    &:hover {
        overflow-y: scroll;
    }

`;

const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 2px 20px rgba(119, 106, 142, 0.1);
    border-radius: 10px;
    padding: 1em;
    margin-bottom: 1em;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6em;
`;

const TaskCheckBox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    background-color: #FFFFFF;
    border: solid 0.25px #8E59FF;
    border-radius: 100%;

    &:checked {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 8 6' fill='%23FFFFFF' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.53003 0.220011C7.67048 0.360637 7.74937 0.551261 7.74937 0.750011C7.74937 0.948762 7.67048 1.13939 7.53003 1.28001L3.03003 5.78001C2.8894 5.92046 2.69878 5.99935 2.50003 5.99935C2.30128 5.99935 2.11065 5.92046 1.97003 5.78001L0.47003 4.28001C0.33755 4.13784 0.265426 3.94979 0.268855 3.75549C0.272283 3.56119 0.350995 3.3758 0.488408 3.23839C0.625821 3.10098 0.811206 3.02226 1.00551 3.01884C1.19981 3.01541 1.38785 3.08753 1.53003 3.22001L2.50003 4.19001L6.47003 0.220011C6.61066 0.079561 6.80128 0.000671387 7.00003 0.000671387C7.19878 0.000671387 7.3894 0.079561 7.53003 0.220011Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A");
        background-size: 40% 40%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #8E59FF;
    }
`;

const RepeatCheck = styled(TaskCheckBox)`
    width: 1em;
    height: 1em;
    margin-right: 0.8125em;
`;

const StudyName = styled.div`
    width: fit-content;
    font-size: 1em;
    font-weight: 700;
    color: #FFFFFF;
    padding: 0.5em;
    box-sizing: border-box;
    background: #8E59FF;
    border-radius: 10px;
`;

const Time = styled.div`
    font-weight: 700;
    color: #A2A3B2;
`;

const StartTime = styled.span`
    font-size: 0.9375em;
`;

const EndTime = styled.span`
    font-size: 0.6875em;
`;

const TaskTitle = styled.div`
    font-size: 1em;
    font-weight: 600;
    color: #161A3F;
`;

const AddScheduleButton = styled(PuppleButton)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 800;
    width: 12.38em;
    height: 2.44em;
    gap: 0.25em;
`;
