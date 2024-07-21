import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import backGroundUrl from '../assets/images/mypage/mypageBackground.png';
import userProfileUrl from '../assets/images/mypage/userProfile.png';
import { PuppleButton, PuppleButton2, PuppleButton3 } from '../components/style/Button';
import Logo from '../components/common/Logo';
import BellIcon from '../assets/icons/mypage/bellicon.svg?react';
import SendIcon from '../assets/icons/mypage/sendicon.svg?react';
import { Color } from '../components/style/Color';
import Calendar from '../components/mypage/Calendar';
import MyPost from '../components/mypage/MyPost';
import PastStudyList from '../components/mypage/PastStudyList';
import CurrentStudyList from '../components/mypage/CurrentStudyList';

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

    const userName = 'USER 1023';
    const userGrade = 'Gold';

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
                <UserWrapper ref={homeRef}>
                    <RowWrapper2>
                        <UserImage />
                        <ColumnWrapper>
                            <UserName>{userName} 님</UserName>
                            <UserGrade>{userGrade} Member</UserGrade>
                            <WelcomeText>마이페이지에 오신 것을 환영합니다!</WelcomeText>
                        </ColumnWrapper>
                    </RowWrapper2>
                    <ColumnWrapper>
                        <NameEditButton>닉네임 수정하기</NameEditButton>
                        <RowWrapper3>
                            <ColumnWrapper2>
                                <MarketingButton><BellIcon /></MarketingButton>
                                <GreyText>마케팅 수신</GreyText>
                            </ColumnWrapper2>
                            <ColumnWrapper2>
                                <MarketingButton><SendIcon /></MarketingButton>
                                <GreyText>쪽지 보내기</GreyText>
                            </ColumnWrapper2>
                        </RowWrapper3>
                    </ColumnWrapper>
                </UserWrapper>

                <RowWrapper4 ref={studyRoomRef}>
                    <CurrentStudyList /><PastStudyList />
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

const RowWrapper2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 41px;
    height: auto;
`;

const RowWrapper3 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 188px;
    height: auto;
`;

const RowWrapper4 = styled.div`
    display: flex;
    gap: 2em;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: auto;
`;

const ColumnWrapper2 = styled(ColumnWrapper)`
    gap: 0.5em;
`;

const StyledPuppleButton = styled(PuppleButton)`
    width: 223px;
    height: 54px;
    font-size: 1.25em;
    font-weight: 700;
    background-color: ${({ $isActive }) => ($isActive ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)')};
`;

const UserImage = styled.div`
    width: 138px;
    height: 138px;
    border-radius: 10px;
    background-image: url(${userProfileUrl});
    background-size: cover;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-top: 259px;
    gap: 4em;
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 166px;
    border-radius: 10px;
    background-color: #F0EAFF;
`;

const UserName = styled(Color)`
    font-size: 1.25em;
    font-weight: 800;
`;

const UserGrade = styled(PuppleButton)`
    width: 125px;
    height: 25px;
`;

const WelcomeText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #A2A3B2;
`;

const NameEditButton = styled(PuppleButton2)`
    background-color: #B693FF;
    width: 100%;
    height: 40px;
    font-weight: 700;
`;

const MarketingButton = styled(PuppleButton3)`
    width: 90px;
    height: 40px;
`;

const GreyText = styled.div`
    text-align: center;
    font-size: 0.6875em;
    color: #C9C7DA;
    font-weight: 700;
`;
