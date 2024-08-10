import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backGroundUrl from '../assets/images/mypage/mypageBackground.png';
import LogoIcon from '../assets/logos//logo.svg?react';
import StudyPreview from '../components/studyMain/StudyPreview';
import { dummyStudyPosts } from '../components/studyMain/DummyStudyPosts';
import { useNavigate } from 'react-router-dom';
import MainSelectBox from '../components/main/MainSelectBox';

const MainPage = () => {
    // state 관리
    const [studies, setStudies] = useState([]);
    const [category, setCategory] = useState("");

    // 스터디 불러오기
    useEffect(() => {
        setStudies(dummyStudyPosts);
    }, []);

    // useNavigate
    const navigate = useNavigate();

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        navigate("/studycategory", { state: { category: selectedCategory } });
    };

    return (
        <PageWrapper>
            {/* 페이지 헤더 */}
            <Header>
                <PageHeaderTitle>스터디</PageHeaderTitle>
                <SubTitle>&#039;가지&#039;고싶은 스터디를 검색해보세요!</SubTitle>
                <RowWrapper>
                    {/* 검색창 */}
                    <SearchInputWrapper>
                        <StyledLogoIcon />
                        <StyledSearchInput type="text" placeholder='검색어를 입력해주세요'/>
                    </SearchInputWrapper>
                </RowWrapper>
            </Header>
            
            {/* 게시글 필터 */}
            <SelectAndButtonWrapper>
                <MainSelectBox/>
                <CreatePostButton onClick={() => {navigate("/studycreate");}}>
                + 스터디 만들기
                </CreatePostButton>
            </SelectAndButtonWrapper>
            <StyledHr />

            {/* 카테고리별 스터디 영역 */}
            {/* 백엔드 스터디 */}
            <CategoryTitleWrapper>
                <CategoryTitle># 백엔드</CategoryTitle>
                <ViewAllWrapper>
                    <ViewAll onClick={() => handleCategoryClick('백엔드')}>모두 보기</ViewAll>
                    <Arrow onClick={() => handleCategoryClick('백엔드')}>&gt;</Arrow>
                </ViewAllWrapper>
            </CategoryTitleWrapper>
            <StudyPreviewWrapper>
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
            </StudyPreviewWrapper>

            {/* 보안 스터디 */}
            <CategoryTitleWrapper>
                <CategoryTitle># 보안</CategoryTitle>
                <ViewAllWrapper>
                    <ViewAll onClick={() => handleCategoryClick('보안')}>모두 보기</ViewAll>
                    <Arrow onClick={() => handleCategoryClick('보안')}>&gt;</Arrow>
                </ViewAllWrapper>
            </CategoryTitleWrapper>
            <StudyPreviewWrapper>
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
            </StudyPreviewWrapper>

            {/* AWS 스터디 */}
            <CategoryTitleWrapper>
                <CategoryTitle># AWS</CategoryTitle>
                <ViewAllWrapper>
                    <ViewAll onClick={() => handleCategoryClick('AWS')}>모두 보기</ViewAll>
                    <Arrow onClick={() => handleCategoryClick('AWS')}>&gt;</Arrow>
                </ViewAllWrapper>
            </CategoryTitleWrapper>
            <StudyPreviewWrapper>
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
            </StudyPreviewWrapper>

            {/* 디자인 스터디 */}
            <CategoryTitleWrapper>
                <CategoryTitle># 디자인</CategoryTitle>
                <ViewAllWrapper>
                    <ViewAll onClick={() => handleCategoryClick('디자인')}>모두 보기</ViewAll>
                    <Arrow onClick={() => handleCategoryClick('디자인')}>&gt;</Arrow>
                </ViewAllWrapper>
            </CategoryTitleWrapper>
            <StudyPreviewWrapper>
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
            </StudyPreviewWrapper>

            {/* 프론트엔드 스터디 */}
            <CategoryTitleWrapper>
                <CategoryTitle># 프론트엔드</CategoryTitle>
                <ViewAllWrapper>
                    <ViewAll onClick={() => handleCategoryClick('프론트엔드')}>모두 보기</ViewAll>
                    <Arrow onClick={() => handleCategoryClick('프론트엔드')}>&gt;</Arrow>
                </ViewAllWrapper>
            </CategoryTitleWrapper>
            <StudyPreviewWrapper>
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
            </StudyPreviewWrapper>
        </PageWrapper>
    );
};

export default MainPage;

/* CSS */
const PageWrapper = styled.div`
    margin-bottom: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubTitle = styled.div`
    color : #D0D1D9;
    font-weight : 700;
`

const Header = styled.div`
    display: flex;
    z-index: 2;
    position: relative;
    top: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10em;
    gap : 1em;
    background-color: #FBFAFF;
    background-image: url(${backGroundUrl});
`;

const PageHeaderTitle = styled.div`
    font-size: 1.5em;
    font-weight: 800;
    color: #8E59FF;

    @media (max-width: 768px) {
        font-size: 1.25em;
        margin-top: 0.75em;
        margin-bottom: 1em;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 1em;
    justify-content: center;
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

const SelectAndButtonWrapper = styled.div`
    margin-top: 2em;
    width: 70em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CreatePostButton = styled.button`
    border: none;
    border-radius: 10px;
    width: 9.9230em;
    height: 2.4em;
    background-color: #8E59FF;
    color: white;
    font-size: 0.8125em;
    font-weight: bold;
    cursor: pointer;
    &:hover{
            box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;
    `;

const StyledHr = styled.hr`
    margin: 1.2em 0;
    border: none;
    width: 70em;
    height: 1.5px;
    background-color: #D0D1D9;
`;

const CategoryTitleWrapper = styled.div`
    margin: 1.2em 0 0.8em 0;
    width: 70em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CategoryTitle = styled.div`
    border-radius: 10px;
    width: 9em;
    height: 2.5em;
    line-height: 2.5em;
    background-color: #BB9CFF;
    color: white;
    font-size: 0.8125em;
    font-weight: 800;
    text-align: center;
`;

const ViewAllWrapper = styled.div`
    color: #D0D1D9;
    font-size: 0.8125em;
    display: flex;
`;

const StudyPreviewWrapper = styled.div`
    margin-left: 1.2em;
    width: 72.4em;
    display: flex;
    flex-wrap: wrap;
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