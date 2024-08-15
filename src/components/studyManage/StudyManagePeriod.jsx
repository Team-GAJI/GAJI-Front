import React, {useState} from 'react';
import styled from 'styled-components';
import StudyCreateCalendar from './StudyManageCalendar';

const StudyManagePeriod = () => {
    // state 관리
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // 오늘 날짜 불러오기
    const today = new Date();

    // 날짜 불러오기
    const handleStartDateChange = (date) => {
        setStartDate(date);
        console.log("Start Date:", date.toDateString());
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
        console.log("End Date:", date.toDateString());
    };

    const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
    };

    return (
    <>
        <Container>
            <Text2>스터디 기본정보</Text2>
        </Container>

        <ComponentWrapper>
            {/* 캘린더 영역 */}
            <StudyCreateCalendar
                onStartDateChange={handleStartDateChange} 
                onEndDateChange={handleEndDateChange}/>
            
            {/* 기한 영역 */}
            <RightWrapper>
                
                {/* 스터디 모집기한 */}
                <ContentWrapper>
                    <Title>스터디 모집 기한</Title>
                    <Button>입력하기</Button>
                    <PeriodWrapper>
                        <Text>시작</Text>
                        <Period>{startDate ? formatDate(startDate) : formatDate(today)}</Period>
                        <Text>끝</Text>
                        <Period>{endDate ? formatDate(endDate) : formatDate(today)}</Period>
                    </PeriodWrapper>
                </ContentWrapper>

                {/* 스터디 진행기한 */}
                <ContentWrapper>
                    <Title>스터디 진행 기한</Title>
                    <Button>입력하기</Button>
                    <PeriodWrapper>
                        <Text>시작</Text>
                        <Period>{startDate ? formatDate(startDate) : formatDate(today)}</Period>
                        <Text>끝</Text>
                        <Period>{endDate ? formatDate(endDate) : formatDate(today)}</Period>
                    </PeriodWrapper>
                </ContentWrapper>
            </RightWrapper>
        </ComponentWrapper>
    </>
    );
};

export default StudyManagePeriod;

/* CSS */
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 
  margin : 1em 0em;
  @media(max-width : 768px){
    margin-left : 18em;
  }
`;
const Text2 = styled.div`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
    text-align: left;
    margin-left: -24em; 
    
    @media(max-width : 768px){
        font-size: 1.1em; 
    }
`;
const ComponentWrapper = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 62em; 
    display: flex;
    align-items: center;

    @media(max-width : 786px){
        border : none;
        flex-direction : row;
        align-items: center;
        justify-content: flex-start;
        margin-left : 2em; 
    }
`;

const RightWrapper = styled.div`
    border-left: 1.2px solid #A2A3B2;
    height: 17em;
    display: flex;
    flex-direction: column;

    @media(max-width : 786px){
        margin-top : -28em;   
    }
`;

const ContentWrapper = styled.div`
    margin: 0 0 3.5em 4em;
    display: flex;
    flex-direction: column;

     @media(max-width : 786px){
        margin: 0 0 3.5em 1em;
    }
    
`;

const Title = styled.div`
    color: #8E59FF;
    font-weight: 800;
`;

const Button = styled.div`
    margin: 1.2em 0;
    border-radius: 10px;
    width: 11em;
    height: 2.2308em;
    line-height: 2.2308em;
    text-align: center;
    background-color: #8E59FF;
    color: white;
    font-size: 0.8125em;
    font-weight: bold;
    cursor: pointer;
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