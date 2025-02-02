import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageHeader from '../../components/common/PageHeader';
import ItemList from '../study-trouble/ui/ItemList';
import { ContentWrapper } from '../../components/common/MediaWrapper';

const StudyTroublePage = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(1);
    const navigate = useNavigate();

    const location = useLocation();
    const roomId = location.state?.roomId ?? null;
    const postId = location.state?.postId || null;

    console.log(roomId, postId);

    const headerTitles = ['스터디 홈', '트러블 슈팅 게시판', '정보나눔 게시판', '채팅방'];

    const handleHeaderButtonClick = (index) => {
        if (index === 0) {
            navigate('/study/room', { state: { roomId: roomId } });
        } else {
            setActiveButtonIndex(index);
        }
    };

    const handleCreatePost = () => {
        navigate('/study/trouble/write', { state: { roomId: roomId } });
    };

    return (
        <>
            <PageHeader
                large={true}
                pageTitle="트러블슈팅 게시판"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />
            <ContentWrapper>
                <CategoryWrapper>
                    <CategoryContainer>
                        <CreatePostButton onClick={handleCreatePost}>+ 트러블 슈팅 등록</CreatePostButton>
                    </CategoryContainer>
                </CategoryWrapper>
                <ItemList roomId={Number(roomId)} postId={postId} />
            </ContentWrapper>
        </>
    );
};

export default StudyTroublePage;
const ItemTitle = styled.h2`
    font-size: 1em;
    margin-bottom: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CategoryWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #d0d1d9;
    margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 0px;
`;

const CreatePostButton = styled.button`
    background-color: #8e59ff;
    border: 0.0625em solid #8e59ff;
    color: #fff;
    border-radius: 0.7em;
    font-weight: 700;
    width: 11.75em;
    height: 2.5em;
    margin-right: 0;
    font-family: 'NanumSquareNeo', sans-serif;

    &:hover {
        background-color: #5548c8;
    }
`;
