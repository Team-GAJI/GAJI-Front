import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setActiveButton } from '../feautres/community/communitySlice';
import CommunityHomePosts from '../components/community/CommunityHomePosts';
import PageHeader from '../components/common/PageHeader';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import HotPostPreview from '../components/community/HotPostPreview';
import { dummyHotPosts } from '../components/community/DummyHotPosts';


const CommunityPage = () => {
    // state 관리
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const [posts, setPosts] = useState([]);

    // Redux 상태 관리
    const dispatch = useDispatch();

    // 헤더 함수
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

    // HOT 게시물 불러오기
    useEffect(() => {
        setPosts(dummyHotPosts);
    }, []);

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

            {/* 핫게시물 영역 */}
            <PostsWrapper>
                <HotPostsBackground>
                    <HotPostText>HOT 게시물</HotPostText>
                    <StyledSwiper
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        loop={true}
                        spaceBetween={-133}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -33,
                            depth: 450,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination]}
                    >
                        {posts.map((post) => (
                            <StyledSwiperSlide key={post.postId}>
                                <HotPostPreview
                                    key={post.postId}
                                    title={post.postTitle}
                                    background={post.postBackgroundImg}
                                    tags={post.postTag} />
                            </StyledSwiperSlide>
                        ))}
                    </StyledSwiper>
                </HotPostsBackground>

                {/* 게시글 영역 */}
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
    margin-bottom: 1.5em;
    height: 19.75em;
    background-color: #F0EAFF;
`;

const HotPostText = styled.div`
    padding-top: 1.2em;
    color: #8E59FF;
    font-weight: 800;
`;

const StyledSwiper = styled(Swiper)`
    width: 52em;
    height: 16em;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease, opacity 0.5s ease;
    &.swiper-slide-prev,
    &.swiper-slide-next {
        transform: scale(0.8);
    }
    &.swiper-slide-prev-prev,
    &.swiper-slide-next-next {
        transform: scale(0.6);
    }
    &.swiper-slide-active {
        transform: scale(1);
        opacity: 1;
    }
`;
