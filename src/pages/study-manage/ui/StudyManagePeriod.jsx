import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StudyCreateRecruitCalendar from './StudyManageRecruitCalendar';
import StudyCreateCalendar from './StudyManageCalendar';
import { useDispatch } from 'react-redux';
import { setRecruitStartDay, setRecruitEndDay, setStudyStartDay, setStudyEndDay } from '../../../redux/slice/study/studyCreateSlice';
import { useLocation } from "react-router-dom";
import { studyManageDateAPI } from '../api/studyManageDateAPI'; 

const StudyManagePeriod = () => {
    const location = useLocation();
    const { roomId, Weeks, userId } = location.state || {}; 

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

    // 날짜 형식을 변환하는 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
        const day = date.getDate();
        return `${month}월 ${day}일`;
    };

    // API 호출
    useEffect(() => {
        const fetchManagePeriod = async () => {
            try {
                const managePeriod = await studyManageDateAPI(roomId, Weeks, userId);

                // API에서 받은 데이터를 상태로 설정
                setRecruitmentStartDate(managePeriod.recruitStartTime);
                setRecruitmentEndDate(managePeriod.recruitEndTime);
                setStudyPeriodStartDate(managePeriod.studyStartTime);
                setStudyPeriodEndDate(managePeriod.studyEndTime);

            } catch (error) {
                console.error('오류 발생:', error);
            }
        };

        if (roomId && Weeks && userId) {
            fetchManagePeriod(); 
        }
    }, [roomId, Weeks, userId]);

    // 모집 날짜 변경 함수
    const handleRecruitStartDateChange = (date) => {
        setRecruitmentStartDate(date);
        dispatch(setRecruitStartDay(formatDateToISO(date)));
    };

    const handleRecruitEndDateChange = (date) => {
        setRecruitmentEndDate(date);
        dispatch(setRecruitEndDay(formatDateToISO(date)));
    };

    // 진행 날짜 변경 함수
    const handleStudyStartDateChange = (date) => {
        setStudyPeriodStartDate(date);
        dispatch(setStudyStartDay(formatDateToISO(date)));
    };

    const handleStudyEndDateChange = (date) => {
        setStudyPeriodEndDate(date);
        dispatch(setStudyEndDay(formatDateToISO(date)));
    };

    const formatDateToISO = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
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
            <Title>스터디 기한</Title>

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
                    {/* 스터디 모집 기한 */}
                    <StyledContentWrapper>
                        <Title>스터디 모집 기한</Title>
                        <RecruitButton
                            onClick={handleRecruitmentButtonClick}
                            isActive={isRecruitmentActive}>
                            입력하기
                        </RecruitButton>
                        <PeriodWrapper>
                            <Text>시작</Text>
                            <Period>
                                {recruitmentStartDate ? formatDate(recruitmentStartDate) : "--"}
                            </Period>
                            <Text>끝</Text>
                            <Period>
                                {recruitmentEndDate ? formatDate(recruitmentEndDate) : "--"}
                            </Period>
                        </PeriodWrapper>
                    </StyledContentWrapper>

                    {/* 스터디 진행 기한 */}
                    <StyledContentWrapper>
                        <Title>스터디 진행 기한</Title>
                        <StudyButton
                            onClick={handleStudyPeriodButtonClick}
                            isActive={isStudyPeriodActive}>
                            입력하기
                        </StudyButton>
                        <PeriodWrapper>
                            <Text>시작</Text>
                            <Period>
                                {studyPeriodStartDate ? formatDate(studyPeriodStartDate) : "--"}
                            </Period>
                            <Text>끝</Text>
                            <Period>
                                {studyPeriodEndDate ? formatDate(studyPeriodEndDate) : "--"}
                            </Period>
                        </PeriodWrapper>
                    </StyledContentWrapper>
                </RightWrapper>
            </ComponentWrapper>
        </>
    );
};

export default StudyManagePeriod;



/* CSS */
const ComponentWrapper = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;

    @media(max-width : 768px){
        flex-direction : column;
        gap : 1em;
        padding-bottom  :1em;
    }
`;

const RightWrapper = styled.div`
    border-left: 1.2px solid #A2A3B2;
    width : 50%;
    display: flex;
    flex-direction: column;

    @media(max-width : 768px){
        margin-top : 2em;
        align-items : center;
        border : none;
        width  :100%
    }
`;

const StyledContentWrapper = styled.div`
    margin: 0 0 3.5em 4em;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    width : 100%;
    margin : 1em 0em;
    color: #8E59FF;
    font-weight: 800;
`;

const RecruitButton = styled.div`
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
