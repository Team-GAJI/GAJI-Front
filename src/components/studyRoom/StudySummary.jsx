import React from 'react';
import styled from 'styled-components';
import Book from '../../assets/images/studyRoom/Rectangle 34624913.png';
import BellIcon from '../../assets/icons/studyRoom/bellIcon.svg?react';
import { useNavigate } from 'react-router-dom';

const StudySummary = ({ studyInfo }) => {
    const alarmData = {
        1: 3, 
        2: 5,   
    };
    const navigate = useNavigate();
    const id = 1;  
    const alarmCount = alarmData[id] || 0; 

    return (
        <>
            <Container>
                <MainText>{studyInfo.name}</MainText>
                <OpenButton>모집중 D-{studyInfo.daysLeftForRecruit}</OpenButton>
            </Container>
            <Container>
                <CloudyText>{studyInfo.startDay} ~ {studyInfo.endDay}</CloudyText>
                <CountText>{studyInfo.applicantCount}명 지원</CountText>
            </Container>
            
            <StudyDescription>
                스터디룸 상세설명 입니다... {/* 설명을 간략하게 줄여서 표시 */}
            </StudyDescription>
            <DescriptionDetail>자세히보기 &gt;</DescriptionDetail>

            <DivisionLine />

            <NoticeWrapper onClick={() => navigate('/studynotice')}>
                <BellIcon />
                <>공지사항</>
                <DivisionLine3 />
                <RecentNotice>여러분, 이건 꼭 알아야 합니다! 모르면 이 스터디 못해요~</RecentNotice>
                <NoticeButton1>{alarmCount}</NoticeButton1>
            </NoticeWrapper>
            
            <StudyDocument>
                <DataGridContainer>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <StudyData key={index}>
                            <LeftSide />
                            <RightSide>
                                <StudyText>제목</StudyText>
                                <Textarea placeholder="설명을 입력하세요" />
                            </RightSide>
                        </StudyData>
                    ))}
                </DataGridContainer>
            </StudyDocument>
        </>
    );
};

export default StudySummary;

const StudyDocument = styled.div`
    margin-top : 2.625em;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width : 100%;
`;

const MainText = styled.h1`
    font-size: 1.25em;
    font-weight: 800;
    color: #8E59FF;
    @media (max-width: 768px) {
        font-size: 0.8125em;
    }
`;

const OpenButton = styled.div`
    background-color : #8E59FF;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 0.625em;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
`;

export const CloudyText = styled.div`
    color: #A2A3B2;
    font-size: 0.9375em; 
    font-weight: 700;
`;

const StudyDescription = styled.div`
    color: #444765;
    font-size: 0.625em;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* 4줄까지만 표시하고 이후에 ... 표시 */
    line-clamp: 4;
    max-width: 400ch;
    max-height: calc(1.2em * 4); /* 4줄의 높이 계산 */
    line-height: 1.2em;   
`;

export const CountText = styled.p`
    color: #A2A3B2;
    font-size: 0.9375em;
    font-weight: 700;
    margin-left: auto;
    width: 6.25em;
    margin-right: 1.25em; 
`;

const DescriptionDetail = styled.div`
    font-weight : 500;
    margin-top : 1em;
    font-size : 0.625em;
`;

export const DivisionLine = styled.div`
    border-top: 0.0625em solid #A2A3B2; 
    opacity : 60%;
    margin: 1.25em 0px; 
    width: 100%;
`;

const NoticeWrapper = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    gap  : 0.75em;
    position : relative;
    color : #A2A3B2;
    font-weight : 800;
    padding-left: 1.875em; 
    width: 100%;
    height: 2.5em; 
    border-radius: 0.5em; 
    border: 0.0625em solid #8E59FF; 
    box-sizing : border-box;
`;

const RecentNotice = styled.div`
    font-weight : 700;
    @media(max-width : 768px){
        font-size : 0.8125em;
    }
`;

const DivisionLine3 = styled.div`
    height : 50%;
    width  : 2px;
    background-color : #A2A3B2;
    box-sizing : border-box;
`;

const NoticeButton1 = styled.button`
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
    top: -0.825em; 
    right: 0.425em; 
`;

const DataGridContainer = styled.div`
    display: flex;
    overflow-x: auto; 
    gap: 0.875em;
    width: 100%;
`;

const StudyData = styled.div`
    min-width: 13.75em; 
    height: 5.0625em; 
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.625em; 
    display: flex;
    position: relative;
`;

const LeftSide = styled.div`
    width: 50%; 
    height: 100%;
    background-image: url(${Book});
    background-size: cover;
    background-position: center;
    border-bottom-left-radius : 0.625em;
    border-top-left-radius : 0.625em;
`;

const RightSide = styled.div`
    width: 50%; 
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin-left: 0.3125em; 
`;

const StudyText = styled.div`
    font-size: 0.9125em;
    font-weight: 800;
    margin-top: 1.25em; 
`;

const Textarea = styled.textarea`
    width: calc(100% - 2.5em); 
    height: calc(100% - 2.5em); 
    resize: none;
    border: none;
    font-size: 0.875em; 
    margin-top: 0.125em; 
    outline: none;
    overflow: hidden;
`;

export const MinorText = styled.h3`
    font-size: 1em;
    font-weight: 800;`
;
