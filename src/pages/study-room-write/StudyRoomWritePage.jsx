import React, { useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/common/PageHeader';
import { ContentWrapper60 } from '../../components/common/MediaWrapper';
import StudyRoomWritePost from '../study-room/ui/StudyRoomWritePost';
import { useLocation, useNavigate } from 'react-router-dom';

const StudyRoomWritePage = () => {
    const location = useLocation();
    const roomId = location.state?.roomId || {};

    const navigate = useNavigate();

    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    // 헤더 함수
    const headerTitles = ['스터디 홈', '트러블 슈팅 게시판', '정보나눔 게시판', '채팅방'];
    const handleHeaderButtonClick = (index) => {
        setActiveButtonIndex(index);
        if (index === 0) {
            console.log(roomId);
            navigate('/studyroom', { state: { roomId: roomId } });
        } else if (index === 1) {
            navigate('/troubleshooting', { state: { roomId: roomId } });
        } else {
            navigate('/');
        }
    };

    return (
        <ContentWrapper60>
            {/* 헤더 */}
            <PageHeader
                large={true}
                pageTitle="스터디룸"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />

            <PostTitle>게시글 제목</PostTitle>
            {/* 작성 공간 */}
            <StudyRoomWritePost roomId={roomId} />
        </ContentWrapper60>
    );
};

export default StudyRoomWritePage;

const PostTitle = styled.div`
    width: 100%;
    color: #161a3f;
    font-weight: 800;
    margin-top: 1em;
    margin-bottom: 1em;
`;
