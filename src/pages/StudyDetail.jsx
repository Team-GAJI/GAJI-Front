import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import backImage from '../assets/images/mypageBackground.png';
import Footer from './Footer';

import BookMark from '../assets/icons/BookMark.png';
import Heart from '../assets/icons/Heart.png';
import Caution from '../assets/icons/Caution.png';

import User from './User';


const StudyDetail = () => {
  
  const [showUser, setShowUser] = useState(false);

  const handleMouseEnter = () => {
      setShowUser(true);
  };

  const handleMouseLeave = () => {
      setShowUser(false);
  };

  const data = [
        { id: 1, week: 'Week 1', title: '커리큘럼 제목 1'  },
        { id: 2, week: 'Week 2', title: '커리큘럼 제목 2'  },
        { id: 3, week: 'Week 3', title: '커리큘럼 제목 3'  },
        { id: 4, week: 'Week 4', title: '커리큘럼 제목 4'  },
        // 나중에 추가
    ];

    return (
        <HeaderWrapper>
            <ContentWrapper>
                {/* 상단 사이드바 토글 버튼과 로그인 버튼 */}
                <RowWrapper>
                    <SidebarToggle>☰</SidebarToggle>
                    <AuthButton>LOG IN</AuthButton>
                </RowWrapper>
                {/* 로고와 로고 텍스트 */}
                <RowLogoWrapper>
                <Container>
                    <Container2>
                      {/* 댕그람~ 커서 올리면 내 상태보이게 */}
                      <Container 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <Circle>
                            U
                        </Circle>
                        {showUser && (
                            <UserContainer>
                                <User />
                            </UserContainer>
                        )}
                        <CloudyText>user1023</CloudyText>
                        <CloudyText>1시간 전</CloudyText>
                        <CloudyText>조회 7</CloudyText>
                    </Container>
                    <Container>
                        <StudyNameText>스터디 이름</StudyNameText>
                        <CloudyButton>모집완료</CloudyButton>
                    </Container>
                    <Container>
                        <TagButton># 태그</TagButton>
                        <TagButton># 태그</TagButton>
                    </Container>
                    
                    <EXStudyText>우리 스터디는... 이런 저런 거 할거구요. 그야말로 갓생을 살아볼겁니다 다들 동의하시죠? 우리 같이 열심히 해봐요 하하하핳 하하핳 여러가지 설명이 들어가는데...음...길다...</EXStudyText>
                    <Container>
                        <PurpleButton>스터디 가지기</PurpleButton>
                        <Container2>
                            <Icons src={BookMark} alt="북마크" />
                            <CloudyText>300</CloudyText>
                        </Container2>
                        <Container2>
                            <Icons src={Heart} alt="하트" style={{ width: '21px', height: 'auto' }} />
                            <CloudyText>6,000</CloudyText>
                        </Container2>
                        <Container2>
                            <Icons src={Caution} alt="주의" style={{ width: '21px', height: 'auto' }}/>
                            <CloudyText>신고</CloudyText>
                        </Container2>
                    </Container>
                    </Container2>
                      <Square/>
                </Container>
              </RowLogoWrapper>

            <MainWrapper>
                <RowSelectWrapper>
                    <SelectButton>모집 기한 </SelectButton>
                    <SelectButton>스터디 진행기간</SelectButton>
                    <SelectButton>스터디 자료  </SelectButton>
                    <SelectButton>커리큘럼</SelectButton>
                    <SelectButton>진행방식</SelectButton>  
                </RowSelectWrapper>
                <MainText>모집 기한</MainText>
                <MinorText>12월12일 ~ 1월1일</MinorText>
                <br></br>
                <MainText>스터디 진행 기간</MainText>
                <MinorText>2월2일 ~ 3월3일</MinorText>
                <br></br>
                <MainText>스터디 자료</MainText>
                <div style={{ flex: 1 }}>
                    <GridContainer>
                        {data.map((item) => (
                        <StudyData key={item.id}>
                            <LeftSide />
                            <RightSide>
                            <StudyText>제목</StudyText>
                            <Textarea placeholder={"설명입니다."} />
                            </RightSide>
                        </StudyData>
                        ))}
                    </GridContainer>
                </div>
                <br></br>
                <MainText>커리큘럼</MainText>
                <Container>
                        <TagButton># 태그</TagButton>
                        <TagButton># 태그</TagButton>
                </Container>
                <>
                {data.map(item => (
                <Container key={item.id}>
                    <WeekSquare>
                    <MainText>{item.week}</MainText>&nbsp;&nbsp;&nbsp;<MinorText>커리큘럼 제목</MinorText>
                    </WeekSquare>
                    <Container3>
                        <DetailsText>상세 설명</DetailsText>
                        <InputWeek placeholder="상세 설명해주세요ㅠㅠ 비온다아앙아"></InputWeek>
                    </Container3>
                </Container>
                ))}
                </>
                <br></br>
                <MainText>진행 방식</MainText>
                <DivisionLine2/>
                <RuleWrapper>
                    <RuleWrapper2>
                        <RuleText>1. 규칙입니다</RuleText>
                        <InputRule  placeholder= "규칙을 입력하세요"></InputRule>
                    </RuleWrapper2>
                <DivisionLine3/>
                    <RuleWrapper2>
                        <RuleText>2. 규칙입니다</RuleText>
                        <InputRule  placeholder= "규칙을 입력하세요"></InputRule>
                    </RuleWrapper2>
                </RuleWrapper>
                <DivisionLine/>
             </MainWrapper>     
            </ContentWrapper>
            {/* Footer-아래 */}
            <Footer />
        </HeaderWrapper>    
    );
};

export default StudyDetail;
const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;

`;
const RowSelectWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom : 80px;
`;
const RowWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    gap: 60em; 
    margin-top: 10px; 
`;
const ContentWrapper = styled.div`
    overflow-y: auto;
    flex-grow: 1;

`;
const RowLogoWrapper = styled.div`
    display: flex;
    gap: 0.9em;
    flex-direction: column; 
    justify-content: center; 
    padding: 20px; 

    background-image: url(${backImage}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
`;
const MainWrapper = styled.div`
    padding : 60px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top : 20px;
`;


const SidebarToggle = styled.div`
    cursor: pointer;
    font-size: 20px;
    padding: 0.8125em;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #8E59FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;
  color : #fff;
`;
const UserContainer = styled.div`
  position: absolute;
  left: -36px; 
  margin-top:-20px;
`;

const UserPageTooltip = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;


const AuthButton = styled.div`
    font-size: 0.8125em;
    width: 123px;
    border: 1px solid #161A3F;
    border-radius: 10px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
`;
const TagButton = styled.button`
    background-color: #fff;
    border : 1px solid #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.5em;
    color: #8E59FF;
    margin-right: auto;
    width: 100px;
    margin-right: 10px;
`;
const CloudyButton = styled.button`
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #fff;
    width: 100px;
    background-color: #A2A3B2;
    border: 1px solid #A2A3B2;
    border-radius: 8px;
    margin-left : 580px;
`;
const PurpleButton = styled.div`
    background-color: #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    width: 300px;
    margin-top: 10px;
    margin-right: 50px;
`;

const SelectButton = styled.div`
    background-color: #fff;
    border : 1px solid #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #8E59FF;
    width: 180px;
    
    &:first-of-type {
        border : 1px solid #8E59FF;
        background-color: #8E59FF;
        color: #fff;
  }
`;






const MainText = styled.h1`
    font-size: 20px;
    font-weight: 800;
    color : #8E59FF;
`;
const DetailsText = styled.h1`
    font-size: 20px;
    font-weight: 800;
    color : #8E59FF;
    margin-left : 25px;
`;
const MinorText = styled.h3`
    font-size: 18px;
    font-weight: 700px;
    color : #000;
`;

const StudyNameText = styled.h1`
    font-size: 30px;
    font-weight: 800; 
    color : #8E59FF;
`;
const CloudyText = styled.p`
    color : #A2A3B2;
    font-size: 10px;
    font-weight: 700px;
    margin : 10px 10px;
`;

const EXStudyText = styled.h3`
    color : #A2A3B2;
    font-size: 15px;
    font-weight: 700px;
`;






const Square = styled.div`
  background-color: #EDEDED;
  padding: 10px;
  border-radius: 8px;
  /*margin-left: auto;*/ 
  margin-left :25px;
  align-self: flex-end; 
  width : 300px;
  height : 200px;
`;
const Icons = styled.img`
    width: 16px; 
    height: auto;
    margin-left : 11px;
    margin-top : 30px;
`;
const DivisionLine = styled.div`
    border-top: 1px solid #A2A3B2;
    /*margin: 20px 0px;*/
    width: 98%;
`;
const DivisionLine2 = styled.div`
    border-top: 2px solid #8E59FF;
    /*margin: 20px 0px;*/
    width: 98%;
`;
const DivisionLine3 = styled.div`
  border-left: 1px solid #A2A3B2; 
  height: 150px; 
  margin: 0px 50px; 
`;



const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-gap: 25px; 
  width: 100%;
  margin-top : 20px;
`;


const StudyData = styled.div`
  width: 500px;
  height: 80px;
  border: 1px solid #8E59FF;
  border-radius: 5px;
  overflow: hidden; 
  display: flex;
  position: relative;
`;

const LeftSide = styled.div`
  width: 20%; 
  height: 100%;
  background-color : #8E59FF;
  opacity : 30%;
  /*background-image: url(${BookMark});
  background-size: cover;
  background-position: center;
  border-right: 1px solid #000;*/ 
`;

const RightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 10px 20px; 
`;

const Textarea = styled.textarea`
  width: 100%; 
  height: auto;
  resize: none;
  border: none;
  outline: none;
  font-size: 14px;
  margin-top: 10px;

`;
const StudyText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px; 
`;



const WeekSquare = styled.div`
  width: 350px;
  height: 100px;
  border: 1px solid;
  border-radius: 5px 0 0 10px;  
  display: flex;
  align-items: center; 
  justify-content: center; 
  position: relative;
  background-color: #fff;
  border : 1px solid #8E59FF;
  font-size: 15px;
  font-weight: bold; 
  color: #fff;
  margin-top : 20px;
`;

const InputWeek = styled.textarea`
  width: 500px;
  height: 50px; 
  border-radius: 8px;
  border: 1px solid #fff;
  outline: none;
  margin-left: 20px;
  resize: none; 

  &::placeholder {
    color: #C8C8C8;
  }
`;




/* 진행방식 */
const RuleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end; 
`;

const RuleWrapper2 = styled.div`
  display: flex;
  justify-content: flex-end; 
  margin-bottom: 10px;
  flex-direction: column;
`;

const RuleText = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 800; 
  text-align: left;
  margin-bottom : 10px; 
`;
const InputRule = styled.textarea`
  width: 450px;
  height: 70px; 
  border-radius: 8px;
  border: 1px solid #fff;
  outline: none;
  /*margin-left: 20px;*/
  resize: none; 

  &::placeholder {
    color: #C8C8C8;
  }
`;
