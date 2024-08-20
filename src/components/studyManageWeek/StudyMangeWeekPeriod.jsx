import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StudyCreateRecruitCalendar from './StudyManageWeekRecruitCalendar';
import StudyCreateCalendar from './StudyManageWeekCalendar';
import { useDispatch } from 'react-redux';
import { setRecruitStartDay, setRecruitEndDay, setStudyStartDay, setStudyEndDay } from '../../features/study/studyCreateSlice';

const StudyManageWeekPeriod = ({ selectedWeek, weekData, onWeekDataChange }) => {
    const [recruitmentStartDate, setRecruitmentStartDate] = useState(null);
    const [recruitmentEndDate, setRecruitmentEndDate] = useState(null);
    const [studyPeriodStartDate, setStudyPeriodStartDate] = useState(null);
    const [studyPeriodEndDate, setStudyPeriodEndDate] = useState(null);
    const [isRecruitmentActive, setIsRecruitmentActive] = useState(false);
    const [isStudyPeriodActive, setIsStudyPeriodActive] = useState(true);

    const dispatch = useDispatch();
    const today = new Date();

    useEffect(() => {
        if (selectedWeek < weekData.length) {
            const newWeekData = weekData[selectedWeek] || {};
            
            const parseDate = (dateStr) => {
                const [month, day] = dateStr.split('월').map(part => part.replace('일', '').trim());
                const date = new Date();
                date.setMonth(parseInt(month, 10) - 1);
                date.setDate(parseInt(day, 10));
                return date;
            };

            const startDate = newWeekData.studyPeriodStartDate ? parseDate(newWeekData.studyPeriodStartDate) : new Date();
            const endDate = newWeekData.studyPeriodEndDate ? parseDate(newWeekData.studyPeriodEndDate) : new Date();

            setStudyPeriodStartDate(startDate);
            setStudyPeriodEndDate(endDate);
        }
    }, [selectedWeek, weekData]);

    const formatDate = (date) => {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            date = new Date();
        }
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
    };

    const handleRecruitStartDateChange = (date) => {
        setRecruitmentStartDate(date);
        const formattedDate = formatDate(date);
        dispatch(setRecruitStartDay(formattedDate));
        updateWeekData({ recruitmentStartDate: formattedDate });
    };

    const handleRecruitEndDateChange = (date) => {
        setRecruitmentEndDate(date);
        const formattedDate = formatDate(date);
        dispatch(setRecruitEndDay(formattedDate));
        updateWeekData({ recruitmentEndDate: formattedDate });
    };

    const handleStudyStartDateChange = (date) => {
        setStudyPeriodStartDate(date);
        const formattedDate = formatDate(date);
        dispatch(setStudyStartDay(formattedDate));
        updateWeekData({ studyPeriodStartDate: formattedDate });
    };

    const handleStudyEndDateChange = (date) => {
        setStudyPeriodEndDate(date);
        const formattedDate = formatDate(date);
        dispatch(setStudyEndDay(formattedDate));
        updateWeekData({ studyPeriodEndDate: formattedDate });
    };

    const updateWeekData = (updates) => {
        const newWeekData = [...weekData];
        newWeekData[selectedWeek] = { ...newWeekData[selectedWeek], ...updates };
        onWeekDataChange(newWeekData);
    };

    const handleRecruitmentButtonClick = () => {
        setIsRecruitmentActive(true);
        setIsStudyPeriodActive(false);
    };

    const handleStudyPeriodButtonClick = () => {
        setIsRecruitmentActive(false);
        setIsStudyPeriodActive(true);
    };

    return (
        <>
            <Container>
                <MainText>{selectedWeek + 1}주차 스터디 관리</MainText>
            </Container>
        
            <ComponentWrapper>
                {isRecruitmentActive && (
                    <StudyCreateRecruitCalendar
                        onStartDateChange={handleRecruitStartDateChange}
                        onEndDateChange={handleRecruitEndDateChange}
                    />
                )}

                {isStudyPeriodActive && (
                    <StudyCreateCalendar
                        onStartDateChange={handleStudyStartDateChange}
                        onEndDateChange={handleStudyEndDateChange}
                    />
                )}

                <RightWrapper>
                    <ContentWrapper>
                        <Title>스터디 진행 기한</Title>
                        <StudyButton
                            onClick={handleStudyPeriodButtonClick}
                            isActive={isStudyPeriodActive}
                        >
                            입력하기
                        </StudyButton>
                        <PeriodWrapper>
                            <Text>시작</Text>
                            <Period>
                                {studyPeriodStartDate ? formatDate(studyPeriodStartDate) : formatDate(today)}
                            </Period>
                            <Text>끝</Text>
                            <Period>
                                {studyPeriodEndDate ? formatDate(studyPeriodEndDate) : formatDate(today)}
                            </Period>
                        </PeriodWrapper>
                    </ContentWrapper>
                </RightWrapper>
            </ComponentWrapper>
        </>
    );
};

export default StudyManageWeekPeriod;




/* CSS */
const ComponentWrapper = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;

`;

const RightWrapper = styled.div`
    border-left: 1.2px solid #A2A3B2;
    height: 17em;
    display: flex;
    flex-direction: column;
        padding : 2em;
`;


const Title = styled.div`
    color: #8E59FF;
    font-weight: 800;
`;

const StudyButton = styled.div`
    margin: 1.2em 0;
    border-radius: 10px;
    width: 11em;
    height: 2.2308em;
    line-height: 2.2308em;
    text-align: center;
    background-color: ${props => props.isActive ? '#8E59FF' : 'rgba(142,89,255,0.5)'};
    background-color: ${props => props.isActive ? '#8E59FF' : 'rgba(142,89,255,0.5)'};
    color: white;
    font-size: 0.8125em;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;
`;

const PeriodWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 5.0545em;
    height: 2.2054em;
    line-height: 2.2054em;
    text-align: center;
    color: #8E59FF;
    font-size: 0.8125em;
    font-weight: bold;
`;

const Period = styled.div`
    margin: 0 4em 0 1em;
    color: #161A3F;
    font-size: 0.8125em;
    font-weight: bold;
`;

const MainText = styled.div`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
    text-align: left;
    margin-left: -22.5em; 
    @media(max-width : 768px){
        font-size: 1.1em; 
        margin-left : -27em;

    }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 
  margin: 1em 0;
  @media(max-width : 786px){
    align-items: center;
    margin-left : 2em /* 이거 확인*/

 }
`;
const ContentWrapper = styled.div`
    margin: 3.5em 0 3.5em 0em;
    display: flex;
    flex-direction: column;
`;
