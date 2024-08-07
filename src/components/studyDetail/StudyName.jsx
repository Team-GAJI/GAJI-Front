import React, { useState } from 'react';
import styled from 'styled-components';

import backImage from '../../assets/images/common/mypageBackground.png';

import BookMark from '../../assets/icons/studyDetail/StudyDetailBookMark.png';
import Heart from '../../assets/icons/studyDetail/StudyDetailHeart.png';
import Caution from '../../assets/icons/studyDetail/StudyDetailCaution.png';

import User from './User.jsx';

const StudyName = () => {

    const [showUser, setShowUser] = useState(false);
  
    const handleMouseEnter = () => {
        setShowUser(true);
    };
  
    const handleMouseLeave = () => {
        setShowUser(false);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
    };

    
    return(
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
                <Container2 onClick={handlePopupToggle}>
                    <Icons src={Caution} alt="주의" style={{ width: '1.3125em', height: 'auto' }} />
                    <CloudyText>신고</CloudyText>
                </Container2>

                <Popup show={showPopup}>
                    <PopupTitle>‘스터디 이름’을 신고하시겠습니까?</PopupTitle>
                    <Container>
                        <PopupButton1 onClick={handlePopupToggle}>신고하기</PopupButton1>
                        <PopupButton2 onClick={handlePopupToggle}>취소하기</PopupButton2>
                    </Container>
                </Popup>

            </Container>
            </Container2>
            <Square/>
        </Container>
        <RuleWrapper>
            <RuleWrapper2>
                <MainText>모집 기한</MainText>
                <MinorText>12월12일 ~ 1월1일</MinorText>
            </RuleWrapper2>
                <DivisionLine3/>
            <RuleWrapper2>
                <MainText>스터디 진행 기간</MainText>
                <MinorText>2월2일 ~ 3월3일</MinorText>
            </RuleWrapper2>
        </RuleWrapper>
        <DivisionLine/>
    </RowLogoWrapper>
    );
};
export default StudyName;

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

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Container2 = styled.div`
  display: flex;
  flex-direction: column;
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

const MainText = styled.h1`
    font-size: 20px;
    font-weight: 800;
    color : #8E59FF;
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
    width: 100%;
`;

const DivisionLine3 = styled.div`
  border-left: 1px solid #A2A3B2; 
  height: 150px; 
  margin: 0px 50px; 
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
  width : 40em;
`;

/* 신고 -> 팝업창 뾰롱*/ 
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: ${props => (props.show ? 'flex' : 'none')};
  width: 350px; 
  max-width: 90%;

  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const PopupTitle = styled.h2`
  font-size: 1.2em;
  margin: 0; 
  color: #8E59FF;
`;

const PopupButton1 = styled.button`
  background-color: #8E59FF;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin-top: 1em;
  margin : 1em 5px;
  &:hover {
      background-color: #7D49D1;
  }
`;

const PopupButton2 = styled.button`
  background-color: #8E59FF;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin-top: 1em;
  margin : 1em 5px;
  &:hover {
      background-color: #7D49D1;
  }
`;
