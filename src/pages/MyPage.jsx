import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from '../components/mypage/Calendar';
import MyPost from '../components/mypage/MyPost';
import StudyList from '../components/mypage/StudyList';
import UserInfo from '../components/mypage/UserInfo';
import SidePageHeader from '../components/common/SidePageHeader';
import { userInfoAPI } from '../utils/mypage/userInfoAPI';

const MyPage = () => {
    const homeRef = useRef(null);
    const studyRoomRef = useRef(null);
    const calendarRef = useRef(null);
    const myPostRef = useRef(null);

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);
    const [userInfo, setUserInfo] = useState(null);

    const handleScroll = (section) => {
        let ref;
        if (section === 'home') ref = homeRef;
        if (section === 'studyroom') ref = studyRoomRef;
        if (section === 'calendar') ref = calendarRef;
        if (section === 'mypost') ref = myPostRef;

        const yOffset = isMobile ? -250 : -57;
        const yPosition = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: yPosition, behavior: 'smooth' });
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                // 임시 유저 아이디 추후 로컬스토리지에 불러오는 방식으로 변경해야함
                const userId = 3;
                const response = await userInfoAPI(userId);
    
                if (response.success === true) {
                    setUserInfo(response);
                } else {
                    console.error('Failed to fetch user info:', response.message);
                }
            } catch (error) {
                console.error('API 요청 중 오류 발생:', error);
            }
        };
    
        fetchUserInfo();
    
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    const headerTitles = ["내 정보", "스터디룸", "일정", "내가 쓴 글"];
    const handleHeaderButtonClick = (index) => {
        const sections = ['home', 'studyroom', 'calendar', 'mypost'];
        setActiveButtonIndex(index);
        handleScroll(sections[index]);
    };

    return (
        <MyPageWrapper ref={homeRef}> 
            <SidePageHeader
                large={true}
                pageTitle="마이페이지"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />
            <UserInfo userInfo={userInfo} />
            <RowWrapper4 ref={studyRoomRef}>
                <StudyList isCurrent={true} />
                <StudyList isCurrent={false} />
            </RowWrapper4>
            <Div ref={calendarRef}>
                <Calendar />
            </Div>
            <Div ref={myPostRef}>
                <MyPost />
            </Div>
        </MyPageWrapper>
    );
};

export default MyPage;

const Div = styled.div`
    width: 100%;
`;

const MyPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin-left: auto; 
    margin-right: auto; 
    gap: 4em;

    @media (max-width: 1199px) {
        width: 90%;
        margin-top: 12em; /* 화면 크기에 따라 마진 조정 */
    }
    @media (max-width: 768px) {
        width: 90%;
        margin-top: 3em;
    }
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
