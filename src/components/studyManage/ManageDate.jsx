import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './StudyManageCalendar.jsx';

const ManageDate = () => {
    return(
        <Container>
            <Text2>스터디 기한</Text2>
            <MainWrapper2>
                <RowWrapper>
                    <CalendarWrapper>
                        <Calendar/>
                    </CalendarWrapper>
                    <DivisionLine3/>
                    <Container>
                        <DeadlineWrapper>
                            <Text8>스터디 모집 기한</Text8>
                            <SidebarButton>입력하기</SidebarButton>
                            <RowWrapper2>
                                <StartButton>시작</StartButton>
                                <DateText>3월 1일</DateText>
                                <EndButton>끝</EndButton>
                                <DateText>3월 1일</DateText>
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
                    </Container>
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
`;


const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 4.25em;
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
`;

const MainWrapper2 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 0.5em; 
  width: 59.375em;
  height: 28.125em; 
  margin-bottom : 0em;
`;

const DivisionLine3 = styled.div`
  border-left: 0.0625em solid #A2A3B2;
  height: 26.25em; 
  margin: 0.625em;
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
`;


const CategoryButton = styled.button`
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em;
    font-size: 0.8125em; 
    font-weight: 700;
    color: #8E59FF;
    padding: 0.5em; 
    margin: 0.5em 0.5em 0em  0.5em; 
    width: 30em;
    background-color: transparent; 
    align-self: flex-start;
    text-align: left; 
`;

const MaxCount = styled.p`
    color: #8E59FF;
    font-size: 0.8125em; 
    font-weight: 700;
    margin-top: 2em;
`;

const MinusButton = styled.button`
  border: 0.0625em solid #A2A3B2; 
  border-radius: 100%;
  text-align: center;
  width: 1.5625em;
  height: 1.8625em; 
  background-color: #A2A3B2;
  color: #fff; 
`;


