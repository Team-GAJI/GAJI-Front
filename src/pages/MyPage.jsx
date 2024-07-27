import React, { useState, useRef, useEffect } from 'react';
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

        const yOffset = -370; // 370px 아래로 이동
        const yPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    };

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

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

                <Div ref={calendarRef}>
                    <Calendar/>
                </Div>

                <Div ref={myPostRef}>
                    <MyPost/>
                </Div>
            </ContentWrapper>
        </MyPageWrapper>
    );
};

export default MyPage;

const Div = styled.div`
    width : 100%;
`
const MyPageWrapper = styled.div`
    position : relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Header = styled.div`
    top: 104px;
    z-index: 2;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 16.1875em;
    background-color: #FBFAFF;
    background-image: url(${backGroundUrl});

    @media (max-width: 768px) {
        top: 80px;
        height: auto;
        padding: 2em 1em;
    }
`;

const MyPageLogo = styled(Logo)`
    width: 4em;
`;

const MyPageTitle = styled(Color)`
    margin-top: 1.0625em;
    margin-bottom: 1.5625em;
    font-size: 1.5em;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 1.25em;
        margin-top: 0.75em;
        margin-bottom: 1em;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 0.4375em;

`;

const RowWrapper4 = styled.div`
    display: flex;
    gap: 2em;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
    }
`;

const StyledPuppleButton = styled(PuppleButton)`
    box-sizing : border-box;
    width: 10em;
    height: 2.25em;
    font-size: 1.25em;
    font-weight: 700;
    background-color: ${({ $isActive }) => ($isActive ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)')};
    @media (max-width: 768px) {
        width: 5em;
        height: 3em;
        font-size: 1em;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        width: 10em;
        height: 3em;
        font-size: 1em;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: 0 auto; 
    margin-top: 16.1875em;
    gap: 4em;

    @media (max-width: 1199px){
        width: 90%;
        margin-top: 16.1875em;
    }
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 13.1875em;
    }
`;
