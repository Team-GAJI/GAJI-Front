import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Calendar from '../components/mypage/Calendar';
import MyPost from '../components/mypage/MyPost';
import StudyList from '../components/mypage/StudyList';
import UserInfo from '../components/mypage/UserInfo';
import PageHeader from '../components/common/PageHeader'; 

const MyPage = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const homeRef = useRef(null);
    const studyRoomRef = useRef(null);
    const calendarRef = useRef(null);
    const myPostRef = useRef(null);

    const handleScroll = (section) => {
        let ref;
        if (section === 'home') ref = homeRef;
        if (section === 'studyroom') ref = studyRoomRef;
        if (section === 'calendar') ref = calendarRef;
        if (section === 'mypost') ref = myPostRef;

        const yOffset = -370; // 370px 아래로 이동
        const yPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const headerTitles = ["내 정보", "스터디룸", "일정", "내가 쓴 글"];
    const handleHeaderButtonClick = (index) => {
        const sections = ['home', 'studyroom', 'calendar', 'mypost'];
        setActiveButtonIndex(index);
        handleScroll(sections[index]);
    };

    return (
        <MyPageWrapper>
            <PageHeader
                pageTitle='마이페이지'
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />
            <ContentWrapper>
                <UserInfo ref={homeRef} />
                <RowWrapper4 ref={studyRoomRef}>
                    <StudyList isCurrent={true} /><StudyList isCurrent={false} />
                </RowWrapper4>
                <Div ref={calendarRef}>
                    <Calendar />
                </Div>
                <Div ref={myPostRef}>
                    <MyPost />
                </Div>
            </ContentWrapper>
        </MyPageWrapper>
    );
};

export default MyPage;

const Div = styled.div`
    width: 100%;
`;

const MyPageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto; 
    margin-right: auto; 
    margin-top: 16.1875em;
    gap: 4em;

    @media (max-width: 1199px) {
        width: 90%;
        margin-top: 16.1875em;
    }
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 16.1875em;
    }
`;
