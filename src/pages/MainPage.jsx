import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Banner1 from '../assets/images/mainPage/banner1.png';
import Banner2 from '../assets/images/mainPage/banner2.png';
import Banner3 from '../assets/images/mainPage/banner3.png';
import LogoIcon from '../assets/logos//logo.svg?react';
import StudyPreview from '../components/studyMain/StudyPreview';
import { dummyStudyPosts } from '../components/studyMain/DummyStudyPosts';
import BlogPreview from '../components/community/BlogPreview';
import { dummyBlogPosts } from '../components/community/DummyBlogPosts';
import { useNavigate } from 'react-router-dom';
import MainSelectBox from '../components/main/MainSelectBox';

const MainPage = () => {
    // state 관리
    const [blogs, setBlogs] = useState([]);
    const [studies, setStudies] = useState([]);

    // 스터디, 커뮤니티 불러오기
    useEffect(() => {
        setStudies(dummyStudyPosts);
    }, []);
    useEffect(() => {
        setBlogs(dummyBlogPosts);
    }, []);

    // useNavigate
    const navigate = useNavigate();

    return (
        <PageWrapper>
            {/* 배너 */}
            <StyledSwiper 
                pagination={{ clickable: true }} 
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
            >
                <StyledSwiperSlide1></StyledSwiperSlide1>
                <StyledSwiperSlide2></StyledSwiperSlide2>
                <StyledSwiperSlide3></StyledSwiperSlide3>
            </StyledSwiper>

            {/* 검색창 */}
            <Text><PuppleText>&#039;가지&#039;</PuppleText>고 싶은 스터디를 검색해보세요!</Text>
            <SearchInputWrapper>
                <StyledLogoIcon />
                <StyledSearchInput type="text" placeholder='검색어를 입력해주세요'/>
            </SearchInputWrapper>

            {/* 게시글 필터 */}
            <SelectAndButtonWrapper>
                <MainSelectBox/>
            </SelectAndButtonWrapper>
            <StyledHr />

            {/* 인기 스터디 미리보기 */}
            <ViewAllWrapper>
                <TitleText>현재 가장 HOT한 스터디를 둘러보세요!</TitleText>
                <Arrow onClick={() => {navigate("/study");}}>&gt;</Arrow>
            </ViewAllWrapper>
            <BlogPreviewWrapper>
                {studies.slice(0, 5).map((post) => (
                    <StudyPreview
                        key={post.postId}
                        title={post.postTitle}
                        content={post.postContent}
                        background={post.postBackgroundImg}
                        ago={post.postAgo}
                        dday={post.postDday}
                        recruiter={post.postRecruiter}
                        state={post.postState}
                        applicant={post.postApplicant}/>
                ))}
            </BlogPreviewWrapper>

            {/* 최신 스터디 미리보기 */}
            <ViewAllWrapper>
                <TitleText>가장 최신의 스터디를 둘러보세요!</TitleText>
                <Arrow onClick={() => {navigate("/study");}}>&gt;</Arrow>
            </ViewAllWrapper>
            <BlogPreviewWrapper>
                {studies.slice(0, 5).map((post) => (
                    <StudyPreview
                        key={post.postId}
                        title={post.postTitle}
                        content={post.postContent}
                        background={post.postBackgroundImg}
                        ago={post.postAgo}
                        dday={post.postDday}
                        recruiter={post.postRecruiter}
                        state={post.postState}
                        applicant={post.postApplicant}/>
                ))}
            </BlogPreviewWrapper>
            <StyledHr />

            {/* 커뮤니티 미리보기 */}
            <ViewAllWrapper>
                <TitleText>&#039;가지&#039;의 커뮤니티! 다 같이 성장해봐요!</TitleText>
                <Arrow onClick={() => {navigate("/community");}}>&gt;</Arrow>
            </ViewAllWrapper>
            <BlogPreviewWrapper>
                {blogs.slice(0, 8).map((post) => (
                    <BlogPreview
                        key={post.postId}
                        title={post.postTitle}
                        content={post.postContent}
                        background={post.postBackgroundImg}
                        userProfileImg={post.postUserProfileImg}
                        writer={post.postWriter}
                        ago={post.postAgo}
                        views={post.postViews}
                        like={post.postLike} />
                ))}
            </BlogPreviewWrapper>
        </PageWrapper>
    );
};

export default MainPage;

/* CSS */
const PageWrapper = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSwiper = styled(Swiper)`
    background-color: #F4EFFF;
    width: 100%;
    height: 25em;
    .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background-color: #8E59FF;

        &.swiper-pagination-bullet-active {
            background-color: #8E59FF;
        }
    }
`;
const StyledSwiperSlide1 = styled(SwiperSlide)`
    background-image: url(${Banner1});
    background-size: cover;
`;
const StyledSwiperSlide2 = styled(SwiperSlide)`
    background-image: url(${Banner2});
    background-size: cover;
`;
const StyledSwiperSlide3 = styled(SwiperSlide)`
    background-image: url(${Banner3});
    background-size: cover;
`;

const Text = styled.div`
    margin: 1.7em 0 1.3em 0;
    color: #A2A3B2;
    font-size: 1.25em;
    font-weight: 800;
`;

const PuppleText = styled.span`
    color: #8E59FF;
`;

const SearchInputWrapper = styled.div`
    margin-bottom: 3em;
    border: 1px solid #D0D1D9;
    border-radius: 10px;
    width: 38.75em;
    height: 2.5em;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLogoIcon = styled(LogoIcon)`
    margin: 1em;
    width: 1.5em;
`;

const StyledSearchInput = styled.input`
    border: none;
    width: 100%;
    height: 2em;
    font-weight: bold;
    -webkit-appearance: none;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #D0D1D9;
    }
    font-family: 'NanumSquareNeo';
`;

const SelectAndButtonWrapper = styled.div`
    width: 70em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledHr = styled.hr`
    margin-top: 1.2em;
    border: none;
    width: 70em;
    height: 1.5px;
    background-color: #D0D1D9;
`;

const ViewAllWrapper = styled.div`
    margin-top: 1em;
    width: 70em;
    color: #D0D1D9;
    display: flex;
    align-items: center;
    color: #8E59FF;
`;

const TitleText = styled.div`
    font-weight: 800;
`;

const Arrow = styled.span`
    padding-left: 0.6em;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
`;

const BlogPreviewWrapper = styled.div`
    margin: 0.5em 0 0 1.2em;
    width: 72.4em;
    display: flex;
    flex-wrap: wrap;
`;
