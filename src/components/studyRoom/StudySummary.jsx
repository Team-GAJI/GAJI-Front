import React from 'react';
import styled from 'styled-components';
import Book from '../../assets/images/studyRoom/Rectangle 34624913.png';
import AlarmIcon from '../../assets/icons/studyRoom/Alarm.png';
import { useNavigate } from 'react-router-dom';

const StudySummary = () => {
    const alarmData = {
        1: 3, 
        2: 5,   
    };
    const navigate = useNavigate()
    const id = 1;  
    const alarmCount = alarmData[id]; 

    return (
        <>
            <Container>
                <MainText>스터디 이름</MainText>
                <TagList>
                    <TagButton># 태그</TagButton>
                    <TagButton># 태그</TagButton>
                </TagList>
                <OpenButton>모집중 D-5</OpenButton>
            </Container>
            <Container>
                <CloudyText>2024.05.05~2024.07.05</CloudyText>
                <CountText>1000명 지원</CountText>
            </Container>
            
            <MinorText>스터디 설명</MinorText>
            <CloudyText>스터디 설며어엉어어어어어어어어어어ㅓ어엉 우짜니니니닌</CloudyText>
            
            <DivisionLine />
            <MinorText>공지사항</MinorText>
            <InputWrapper>
                <Icon src={AlarmIcon} alt="공지" />
                <div onClick={()=>navigate('/studynotice')}>
                <StyledInput placeholder=" 공지사항 | 여러분 이건 꼭 아셔야 합니다?! 모르면 이 스터디 못함~~ 알아줘이잉이히이잉" /></div>
                <NoticeButton1>{alarmCount}</NoticeButton1>
            </InputWrapper>
            <MinorText>스터디 자료</MinorText>
            <div style={{ flex: 1 }}>
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
            </div>
        </>
    );
};

export default StudySummary;

/* 글자 스타일 */
const Container = styled.div`
    display: flex;
    align-items: center;
`;

const TagList = styled.div`
    margin-left : 0.5em;
    display : flex;
    gap : 0.5em;
`;

const MainText = styled.h1`
    font-size: 1em;
    font-weight: 700;
    color: #8E59FF;
    @media (max-width: 768px) {
        font-size: 0.8125em;
    }
`;

const TagButton = styled.div`
    border: 1px solid #8E59FF; 
    border-radius: 0.625em;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.25em 1.25em;
    color: #8E59FF;
    cursor: pointer;
    
    @media (max-width: 768px) {
        font-size: 0.75em;
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

export const CountText = styled.p`
color: #A2A3B2;
font-size: 0.9375em;
font-weight: 700;
margin-left: auto;
width: 6.25em;
margin-right: 1.25em; 
`;

export const MinorText = styled.h3`
    font-size: 1em;
    font-weight: 800;
`;

export const DivisionLine = styled.div`
border-top: 0.0625em solid #A2A3B2; 
margin: 1.25em 0px; 
width: 98%;
`;

export const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 100%; 
`;

const StyledInput = styled.input`
    padding-left: 1.875em; 
    width: 95%;
    height: 2.5em; 
    border-radius: 0.5em; 
    border: 0.0625em solid #8E59FF; 
    outline: none;
    &::placeholder {
        color: #C8C8C8;
    }
`;

const Icon = styled.img`
    position: absolute;
    left: 0.9375em; 
    top: 50%;
    transform: translateY(-50%);
    width: 0.75em; 
    height: auto;
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
    gap: 0.625em; 
    width: 100%;
`;

const StudyData = styled.div`
    min-width: 13.75em; 
    height: 7.5em; 
    border: 0.0625em solid #8E59FF; 
    border-radius: 1.25em; 
    display: flex;
    position: relative;
`;

const LeftSide = styled.div`
    width: 50%; 
    height: 100%;
    background-image: url(${Book});
    background-size: cover;
    background-position: center;
    border-bottom-left-radius : 1.25em;
    border-top-left-radius : 1.25em;
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
