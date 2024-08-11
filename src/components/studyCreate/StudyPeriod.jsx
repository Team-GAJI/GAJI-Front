import React from 'react';
import styled from 'styled-components';
import StudyCreateCalendar from './StudyCreateCalendar';

const StudyPeriod = () => {
    return (
        <ComponentWrapper>
            {/* 캘린더 영역 */}
            <StudyCreateCalendar/>
            
            {/* 기한 영역 */}
            <RightWrapper>
                
                {/* 스터디 모집기한 */}
                <ContentWrapper>
                    <Title>스터디 모집 기한</Title>
                    <Button>입력하기</Button>
                    <PeriodWrapper>
                        <Text>시작</Text>
                        <Period>3월1일</Period>
                        <Text>끝</Text>
                        <Period>3월20일</Period>
                    </PeriodWrapper>
                </ContentWrapper>

                {/* 스터디 진행기한 */}
                <ContentWrapper>
                    <Title>스터디 진행 기한</Title>
                    <Button>입력하기</Button>
                    <PeriodWrapper>
                        <Text>시작</Text>
                        <Period>3월1일</Period>
                        <Text>끝</Text>
                        <Period>3월20일</Period>
                    </PeriodWrapper>
                </ContentWrapper>
            </RightWrapper>
        </ComponentWrapper>
    );
};

export default StudyPeriod;

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
`;

const ContentWrapper = styled.div`
    margin: 0 0 3.5em 4em;
    display: flex;
    flex-direction: column;
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