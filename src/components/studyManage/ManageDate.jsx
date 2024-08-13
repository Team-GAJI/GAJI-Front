import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from './StudyManageCalendar.jsx';
import { studyManageDateAPI } from '../../utils/studyManage/studyManageDateAPI.jsx';

const ManageDate = ({ roomId, Weeks, userId }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const managedate = async (roomId, Weeks, userId) => {
        try {
            const response = await studyManageDateAPI(roomId, Weeks, userId);
            setStartDate(response.data.startDate || '날짜 없음');
            setEndDate(response.data.endDate || '날짜 없음');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        managedate(roomId, Weeks, userId);
    }, [roomId, Weeks, userId]);

    return(
        <Container>
            <Text2>스터디 기한</Text2>
            <MainWrapper2>
                <RowWrapper>
                    <CalendarWrapper>
                        <Calendar/>
                    </CalendarWrapper>
                    <DivisionLine3/>
                    <DeadlineContainer>
                        <DeadlineWrapper>
                            <Text8>스터디 모집 기한</Text8>
                            <SidebarButton>입력하기</SidebarButton>
                              <RowWrapper2>
                                <StartButton>시작</StartButton>
                                <DateText>{startDate}</DateText>
                                <EndButton>끝</EndButton>
                                <DateText>{endDate}</DateText> 
                            </RowWrapper2>
                        </DeadlineWrapper>
                        <DeadlineWrapper>
                            <Text8>스터디 진행 기한</Text8>
                            <SidebarButton>입력하기</SidebarButton>
                            <RowWrapper2>
                                <StartButton>시작</StartButton>
                                <DateText>3월 1일</DateText>
                                <StartButton>끝</StartButton>
                                <DateText>3월 1일</DateText>
                            </RowWrapper2>
                        </DeadlineWrapper>  
                    </DeadlineContainer>
                </RowWrapper>
            </MainWrapper2>  
        </Container>
    );
};

export default ManageDate;


const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 

  @media(max-width : 786px){
    flex-direction : column;
    align-items: center;
    justify-content: flex-start;
  }
`;
const DeadlineContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 

  @media(max-width : 786px){
    flex-direction : row;
    align-items: center;
    justify-content: flex-start;
    margin-top: -40em;
    margin-left : 20em;
  }
`;

const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 4.25em;
    @media(max-width : 786px){
        flex-direction : column;
        align-items: center;
        justify-content: flex-start;
        
  }
`;


const SidebarButton = styled.div`
    font-size: 0.8125em;
    width: 120px;
    border: 1px solid #8E59FF;
    background-color: #8E59FF;
    border-radius: 10px;
    font-weight: 800;
    padding: 0.7em;
    text-align: center;
    color: #fff;
    margin: 10px 0;
`;

/* 스터디 기본정보 */
const Text2 = styled.p`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
    @media(max-width : 786px){
       margin-left : -10em;
       font-size: 1.1em; 
    }
`;

const MainWrapper2 = styled.div`
  background-color: #FBFAFF;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 0.5em; 
  width: 59.375em;
  height: 28.125em; 
  margin-bottom : 0em;
  
  @media(max-width : 786px){
        border : none;
        flex-direction : column;
        align-items: center;
        justify-content: flex-start;
  }
`;

const DivisionLine3 = styled.div`
  border-left: 0.0625em solid #A2A3B2;
  height: 26.25em; 
  margin: 0.625em;
  @media(max-width : 786px){
    border : none;
  }
`;

const StartButton = styled.button`
    background-color: #fff;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em; 
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: center;
    padding: 0.5em; 
    color: #8E59FF;
    cursor: pointer;
    width: 3.75em; 
`;

const EndButton = styled.button`
    background-color: #fff;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em;
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: center;
    padding: 0.5em; 
    color: #8E59FF;
    cursor: pointer;
    width: 3.75em;
`;

const Text8 = styled.p`
    color: #8E59FF;
    font-size: 1.125em;
    font-weight: 800;
`;

const DateText = styled.p`
    color: #000;
    font-size: 0.75em; 
    font-weight: 800;
`;

const RowWrapper2 = styled.div`
    width: 100%;
    display: flex;
    gap: 1em; 
`;

const DeadlineWrapper = styled.div`
    margin: 2.5em 0 1.25em 0;
`;

const CalendarWrapper = styled.div`
    margin: 2.5em 0 1.25em 2.5em;
    @media(max-width : 786px){
        flex-direction : column;
        align-items: center;
        justify-content: flex-start;
        margin-left : 15em;
    } 
`;

