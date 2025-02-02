import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import TroubleshootingWritePost from '../study-trouble/ui/TroubleshootingWritePost';
import { ContentWrapper60 } from '../../components/common/MediaWrapper';

const StudyTroubleWritePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeButtonIndex, setActiveButtonIndex] = useState(1);
    const postId = location.state?.postId || null;
    // const postId = 57;
    const [title, setTitle] = useState(''); // 게시글 제목을 위한 state
    const [content, setContent] = useState(''); // 게시글 내용을 위한 state

    const roomId = location.state?.roomId;
    console.log(roomId);

    // roomId가 유효하지 않은 경우 처리
    // if (typeof roomId !== 'string' && typeof roomId !== 'number') {
    //     console.error('roomId가 잘못된 형식입니다:', roomId);
    //     roomId = ''; // 기본값으로 빈 문자열 설정
    // }

    // console.log('roomId:', roomId);

    useEffect(() => {
        if (postId) {
            // fetchTroubleShootingPost API를 사용하여 게시글 데이터 가져오기
            const fetchPostData = async () => {
                try {
                    const post = await fetchTroubleShootingPost(postId);
                    setTitle(post.title);
                    setContent(post.body);
                } catch (error) {
                    console.error('게시글을 가져오는 중 오류 발생:', error);
                }
            };
            fetchPostData();
        }
    }, [postId]);

    const handleNavigate = (index) => {
        if (index === 0) {
            navigate('/study/room');
        }
        if (index === 1) {
            navigate('/study/trouble', { state: { roomId: roomId } });
        } else {
            setActiveButtonIndex(index);
        }
    };

    const headerTitles = ['스터디 홈', '트러블 슈팅 게시판', '정보나눔 게시판', '채팅방'];

    return (
        <>
            <PageHeader
                large="true" // large prop을 문자열로 변환하여 전달
                pageTitle="트러블슈팅 게시판 글쓰기"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleNavigate}
                changeColorOnClick={false}
                changeColorOnHover={true}
            />

            <ContentWrapper60>
                <PostOptionWrapper>
                    <Label>스터디 이름</Label>
                </PostOptionWrapper>
                <PostTitle>게시글 제목</PostTitle>
                <TroubleshootingWritePost />
            </ContentWrapper60>
        </>
    );
};

export default StudyTroubleWritePage;

const PostOptionWrapper = styled.div`
    margin-bottom: 2.5em;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-bottom: 1.5em;
    }

    @media (max-width: 480px) {
        margin-bottom: 1em;
    }
`;

const Label = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 1em;
    color: #8e59ff;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
        margin-right: 0.5em;
    }
`;

const PostTitle = styled.div`
    width: 100%;
    color: #161a3f;
    font-weight: 800;
    font-family: 'NanumSquareNeo';
    margin-bottom: 1em;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    @media (max-width: 480px) {
        font-size: 1em;
    }
`;
