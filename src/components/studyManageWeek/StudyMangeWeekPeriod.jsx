import React, { useState } from 'react';
import styled from 'styled-components';
import StudyCreateRecruitCalendar from './StudyManageWeekRecruitCalendar';
import StudyCreateCalendar from './StudyManageWeekCalendar';
import { useDispatch } from 'react-redux';
import { setRecruitStartDay, setRecruitEndDay, setStudyStartDay, setStudyEndDay } from '../../feautres/study/studyCreateSlice';

const StudyManageWeekPeriod = ( {selectedWeek}) => {
    // state 관리
    const [recruitmentStartDate, setRecruitmentStartDate] = useState(null);
    const [recruitmentEndDate, setRecruitmentEndDate] = useState(null);
    const [studyPeriodStartDate, setStudyPeriodStartDate] = useState(null);
    const [studyPeriodEndDate, setStudyPeriodEndDate] = useState(null);
    // Button 활성화 상태 관리
    const [isRecruitmentActive, setIsRecruitmentActive] = useState(true);
    const [isStudyPeriodActive, setIsStudyPeriodActive] = useState(false);

    // Redux 관리
    const dispatch = useDispatch();

    // 오늘 날짜 불러오기
    const today = new Date();

    // 모집 날짜 불러오기
    const handleRecruitStartDateChange = (date) => {
        if (isRecruitmentActive) {
            setRecruitmentStartDate(date);
        } else if (isStudyPeriodActive) {
            setStudyPeriodStartDate(date);
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log("Start Date:", formattedDate);
        dispatch(setRecruitStartDay(formattedDate));
    };
    const handleRecruitEndDateChange = (date) => {
        if (isRecruitmentActive) {
            setRecruitmentEndDate(date);
        } else if (isStudyPeriodActive) {
            setStudyPeriodEndDate(date);
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log("End Date:", formattedDate);
        dispatch(setRecruitEndDay(formattedDate));
    };

    // 진행 날짜 불러오기
    const handleStudyStartDateChange = (date) => {
        if (isRecruitmentActive) {
            setRecruitmentStartDate(date);
        } else if (isStudyPeriodActive) {
            setStudyPeriodStartDate(date);
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log("Start Date:", formattedDate);
        dispatch(setStudyStartDay(formattedDate));
    };
    const handleStudyEndDateChange = (date) => {
        if (isRecruitmentActive) {
            setRecruitmentEndDate(date);
        } else if (isStudyPeriodActive) {
            setStudyPeriodEndDate(date);
        }
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        console.log("End Date:", formattedDate);
        dispatch(setStudyEndDay(formattedDate));
    };

    const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
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
            {/* 캘린더 영역 */}
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

            {/* 기한 영역 */}
            <RightWrapper>

                {/* 스터디 진행기한 */}
                <ContentWrapper>
                    <Title>스터디 진행 기한</Title>
                    <StudyButton
                        onClick={handleStudyPeriodButtonClick}
                        isActive={isStudyPeriodActive}>
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
    width: 101%;
    display: flex;
    align-items: center;

`;

const RightWrapper = styled.div`
    border-left: 1.2px solid #A2A3B2;
    height: 17em;
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    margin: 3.5em 0 3.5em 4em;
    display: flex;
    flex-direction: column;
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
    margin-left: -24em; 
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