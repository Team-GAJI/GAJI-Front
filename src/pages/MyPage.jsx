import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import backGroundUrl from '../assets/images/mypage/mypageBackground.png';
import { PuppleButton } from '../components/style/Button';
import Logo from '../components/common/Logo';
import { Color } from '../components/style/Color';
import Calendar from '../components/mypage/Calendar';
import MyPost from '../components/mypage/MyPost';
import StudyList from '../components/mypage/StudyList';
import UserInfo from '../components/mypage/UserInfo';

const MyPage = () => {
    const [scroll, setScroll] = useState('home');

    const homeRef = useRef(null);
    const studyRoomRef = useRef(null);
    const calendarRef = useRef(null);
    const myPostRef = useRef(null);

    const handleButtonClick = (section) => {
        setScroll(section);
        let ref;
        if (section === 'home') ref = homeRef;
        if (section === 'studyroom') ref = studyRoomRef;
        if (section === 'calendar') ref = calendarRef;
        if (section === 'mypost') ref = myPostRef;

        const yOffset = -380; // 50px 아래로 이동
        const yPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    };


    return (
        <MyPageWrapper>
            <Header>
                <MyPageLogo />
                <MyPageTitle>마이페이지</MyPageTitle>
                <RowWrapper>
                    <StyledPuppleButton
                        $isActive={scroll === 'home'}
                        onClick={() => handleButtonClick('home')}>내 정보</StyledPuppleButton>
                    <StyledPuppleButton
                        $isActive={scroll === 'studyroom'}
                        onClick={() => handleButtonClick('studyroom')}>스터디룸</StyledPuppleButton>
                    <StyledPuppleButton
                        $isActive={scroll === 'calendar'}
                        onClick={() => handleButtonClick('calendar')}>일정</StyledPuppleButton>
                    <StyledPuppleButton
                        $isActive={scroll === 'mypost'}
                        onClick={() => handleButtonClick('mypost')}>내가 쓴 글</StyledPuppleButton>
                </RowWrapper>
            </Header>
            <ContentWrapper>

                <UserInfo ref={homeRef}/>
            
                <RowWrapper4 ref={studyRoomRef}>
                    <StudyList isCurrent={true}/><StudyList isCurrent={false}/>
                </RowWrapper4>

                <RowWrapper4 ref={calendarRef}>
                    <Calendar /><Calendar />
                </RowWrapper4>

                <div ref={myPostRef}>
                    <MyPost />
                </div>
            </ContentWrapper>
        </MyPageWrapper>
    );
};

export default MyPage;

const MyPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Header = styled.div`
    top: 104px;
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 259px;
    background-color: #FBFAFF;
    background-image: url(${backGroundUrl});
`;

const MyPageLogo = styled(Logo)`
    width: 64px;
`;

const MyPageTitle = styled(Color)`
    margin-top: 1.0625em;
    margin-bottom: 1.5625em;
    font-size: 1.5em;
    font-weight: 800;
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 7px;
`;



const RowWrapper4 = styled.div`
    display: flex;
    gap: 2em;
`;




const StyledPuppleButton = styled(PuppleButton)`
    width: 223px;
    height: 54px;
    font-size: 1.25em;
    font-weight: 700;
    background-color: ${({ $isActive }) => ($isActive ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)')};
`;


const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-top: 259px;
    gap: 4em;
`;


