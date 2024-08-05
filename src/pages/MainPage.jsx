import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import backGroundUrl from '../assets/images/mypage/mypageBackground.png';
import LogoIcon from '../assets/logos//logo.svg?react';
import StudyPreview from '../components/main/StudyPreview';
import { dummyStudyPosts } from '../components/main/DummyStudyPosts';
import BlogPreview from '../components/community/BlogPreview';
import { dummyBlogPosts } from '../components/community/DummyBlogPosts';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    // state 관리
    const [selectedButton, setSelectedButton] = useState('백엔드');
    const [blogs, setBlogs] = useState([]);
    const [studies, setStudies] = useState([]);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    // 스터디, 블로그 불러오기
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

            {/* 버튼 */}
            <ButtonWrapper>
                <Button isSelected={selectedButton === '백엔드'}
                    onClick={() => handleButtonClick('백엔드')}>백엔드</Button>
                <Button isSelected={selectedButton === '보안'}
                    onClick={() => handleButtonClick('보안')}>보안</Button>
                <Button isSelected={selectedButton === 'AWS'}
                    onClick={() => handleButtonClick('AWS')}>AWS</Button>
                <Button isSelected={selectedButton === '디자인'}
                    onClick={() => handleButtonClick('디자인')}>디자인</Button>
                <Button isSelected={selectedButton === '프론트엔드'}
                    onClick={() => handleButtonClick('프론트엔드')}>프론트엔드</Button>
            </ButtonWrapper>

            {/* 게시글 필터 */}
            <SelectAndButtonWrapper>
                <SelectWrapper>
                    <StyledSelect name="category">
                        <option value="0">카테고리</option>
                        <option value="1">개발</option>
                        <option value="2">인공지능</option>
                        <option value="3">하드웨어</option>
                        <option value="4">보안</option>
                        <option value="5">네트워크 - 클라우드</option>
                        <option value="6">어학</option>
                        <option value="7">디자인</option>
                        <option value="8">비즈니스 &#40;PM&#41;</option>
                        <option value="9">독서 모임</option>
                        <option value="10">기타</option>
                    </StyledSelect>
                    <StyledSelect name="sort">
                        <option value="0">정렬</option>
                        <option value="1">인기순</option>
                        <option value="2">최신순</option>
                    </StyledSelect>
                    <StyledSelect>
                        <option value="0">필터</option>
                        <option value="1">모집 중</option>
                        <option value="2">모집 완료</option>
                        <option value="3">인원 제한</option>
                        <option value="4">인원 제한 없음</option>
                    </StyledSelect>
                </SelectWrapper>
            </SelectAndButtonWrapper>
            <StyledHr />

            {/* 스터디 미리보기 */}
            <BlogPreviewWrapper>
                {studies.slice(0, 10).map((post) => (
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
            <ViewAllWrapper>
                <ViewAll onClick={() => {navigate("/studycategory");}}>모두 보기</ViewAll>
                <Arrow onClick={() => {navigate("/studycategory");}}>&gt;</Arrow>
            </ViewAllWrapper>
            <StyledHr />

            {/* 블로그 미리보기 */}
            <BlogText>블로그</BlogText>
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
            <ViewAllWrapper>
                <ViewAll onClick={() => {navigate("/community");}}>모두 보기</ViewAll>
                <Arrow onClick={() => {navigate("/community");}}>&gt;</Arrow>
            </ViewAllWrapper>
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
    background-image: url(${backGroundUrl});
`;
const StyledSwiperSlide2 = styled(SwiperSlide)`
    background-image: url(${backGroundUrl});
`;
const StyledSwiperSlide3 = styled(SwiperSlide)`
    background-image: url(${backGroundUrl});
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

const ButtonWrapper = styled.div`
    margin: 2.5em 0 3em 0;
    display: flex;
    text-align: center;
`;

const Button = styled.div`
    margin: 0 0.5em;
    border: none;
    border-radius: 10px;
    width: 11.9125em;
    height: 2.5em;
    line-height: 2.5em;
    background-color: ${(props) => (props.isSelected ? '#8E59ff' : '#A2A3B2')};
    color: white;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transform: translateY(-0.3em);
        box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;
`;

const SelectAndButtonWrapper = styled.div`
    width: 70em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SelectWrapper = styled.div`
`;

const StyledSelect = styled.select`
    margin-right: 0.7em;
    padding-left: 0.5em;
    border: 1px solid #C8C8C8;
    border-radius: 10px;
    width: 8.3077em;
    height: 2.4em;
    background-color : transparent;
    color: #D0D1D9;
    font-size: 0.8125em;
    font-weight: bold;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

const StyledHr = styled.hr`
    margin-top: 1.2em;
    border: none;
    width: 70em;
    height: 1.5px;
    background-color: #D0D1D9;
`;

const BlogText = styled.div`
    margin-top: 1em;
    width: 69.5em;
    color: #8E59FF;
    font-weight: 800;
`;

const BlogPreviewWrapper = styled.div`
    margin-top: 1em;
    width: 72.4em;
    display: flex;
    flex-wrap: wrap;
`;

const ViewAllWrapper = styled.div`
    margin: 1em 0;
    width: 70em;
    color: #D0D1D9;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const ViewAll = styled.span`
    font-size: 0.8125;
    font-weight: 800;
    cursor: pointer;
`;

const Arrow = styled.span`
    padding-left: 0.6em;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
`;