import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/common/PageHeader';
import StudySummary from '../study-room/ui/StudySummary';
import WeekCurriculum from '../study-room/ui/WeekCurriculum';
import StudyPostList from '../study-room/ui/StudyPostList';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileManageButton from '../../components/common/MobileManageButton';
import { studyDetailAPI } from '../study-detail/api/studyDetailAPI';
import SideBar from './ui/SideBar';

const StudyRoomPage = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const location = useLocation();
    const data = location.state?.data || {};
    const roomId = location.state?.roomId || {};
    const studyInfo = data;

    const navigate = useNavigate();

    const headerTitles = ['스터디 홈', '트러블 슈팅 게시판', '정보나눔 게시판', '채팅방'];
    const handleHeaderButtonClick = (index) => {
        setActiveButtonIndex(index);
        if (index === 0) {
            navigate('/study/room', { state: { roomId: roomId } });
            console.log(studyInfo.weeksCount);
        } else if (index === 1) {
            navigate('/study/trouble', { state: { roomId: roomId } });
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        // API 호출을 포함한 비동기 함수 선언
        const fetchStudyDetail = async () => {
            try {
                const response = await studyDetailAPI(roomId);
                console.log(response); // API 응답 처리
            } catch (error) {
                console.error('Error fetching study details:', error);
            }
        };

        // 비동기 함수 호출
        fetchStudyDetail();
    }, [roomId]); // roomId가 변경될 때마다 useEffect 실행

    return (
        <>
            <PageHeader
                large={true}
                pageTitle="스터디룸"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />
            <SideBar studyInfo={studyInfo} />
            <ContentWrapper>
                <MainContent>
                    <StudySummary studyInfo={studyInfo} roomId={roomId} /> {/* StudySummary에 데이터 전달 */}
                    <DivisionLine2 />
                    <WeekCurriculum
                        roomId={roomId}
                        // week={studyInfo.weeksCount}/>
                        // 임시로 1주차로 설정
                        week={0}
                    />
                    <DivisionLine2 />
                    <StudyPostList roomId={roomId} /> {/* StudyPostList에 댓글 데이터 전달 */}
                </MainContent>
            </ContentWrapper>
            <div onClick={() => navigate('/studymanage', { state: { roomId: roomId } })}>
                <MobileManageButton />
            </div>
        </>
    );
};

export default StudyRoomPage;

const ContentWrapper = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    gap: 4em;

    @media (max-width: 1199px) {
        width: 70%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const DivisionLine2 = styled.div`
    border-top: 0.1125em solid #8e59ff;
    margin: 2.125em 0px;
    width: 100%;
`;

const MainContent = styled.div`
    flex: 1;
    padding: 1.25em;
    color: #000;
    display: flex;
    flex-direction: column;
`;
