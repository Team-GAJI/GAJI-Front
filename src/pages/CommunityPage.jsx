import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setActiveButton } from '../feautres/community/communitySlice';
import CommunityHomePosts from '../components/community/CommunityHomePosts';
import PageHeader from '../components/common/PageHeader';

const CommunityPage = () => {
    // state 관리
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    // Redux 상태 관리
    const dispatch = useDispatch();

    const headerTitles = ["프로젝트", "질문", "블로그"];
    const handleHeaderButtonClick = (index) => {
        setActiveButtonIndex(index);
        if (index == 0) {
            dispatch(setActiveButton("프로젝트"));
        } else if (index == 1) {
            dispatch(setActiveButton("질문"));
        } else {
            dispatch(setActiveButton("블로그"));
        }
    };

    return (
        <>
            {/* 헤더 */}
            <PageHeader
                pageTitle="커뮤니티"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />

            {/* 핫게시물 및 게시글 영역 */}
            <PostsWrapper>
                <HotPostsBackground></HotPostsBackground>
                <HotPostText>HOT 게시물</HotPostText>
                <CommunityHomePosts/>
            </PostsWrapper>
        </>
    );
};

export default CommunityPage;

/* CSS */
const PostsWrapper = styled.div`
    text-align: center;
    position: relative;
`;

const HotPostsBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 18.75em;
    background-color: #F0EAFF;
    z-index: -1;
`;

const HotPostText = styled.div`
    padding-top: 2em;
    font-size: 1.25em;
    font-weight: 800;
    color: #8E59FF;
`;
