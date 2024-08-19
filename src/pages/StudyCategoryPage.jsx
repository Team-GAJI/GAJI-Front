import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backGroundUrl from '../assets/images/mypage/mypageBackground.png';
import LogoIcon from '../assets/logos//logo.svg?react';
import StudyPreview from '../components/studyMain/StudyPreview';
import { dummyStudyPosts } from '../components/studyMain/DummyStudyPosts';
import { useNavigate, useLocation } from 'react-router-dom';
import MainSelectBox from '../components/main/MainSelectBox';
import MobileWriteButton from '../components/common/MobileWriteButton';
import { ContentWrapper } from '../components/common/MediaWrapper';

const StudyCategoryPage = () => {
    // state 관리
    const [studies, setStudies] = useState([]);

    // 카테고리 이름 가져오기
    const location = useLocation();
    const {category} = location.state;

    // 스터디 불러오기
    useEffect(() => {
        setStudies(dummyStudyPosts);
    }, []);

    // useNavigate
    const navigate = useNavigate();

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
            
            <ContentWrapper>
            {/* 게시글 필터 */}
            <SelectAndButtonWrapper>
                <MainSelectBox/>
                <CreatePostButton onClick={() => {navigate("/studycreate");}}>
                + 스터디 만들기
                </CreatePostButton>
                <div onClick={() => {navigate("/studycreate");}}>
                <MobileWriteButton/> </div>
            </SelectAndButtonWrapper>
            <StyledHr />

            {/* 스터디 영역 */}
            <CategoryTitleWrapper>
                <CategoryTitle># {category}</CategoryTitle>
            </CategoryTitleWrapper>
            <StudyPreviewWrapper>
                {studies.map((post) => (
                    <StudyPreview
                        link="category"
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
            </ContentWrapper>
        </PageWrapper>
    );
};

export default StudyCategoryPage;

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
    width: 100%;
    display: flex;
    gap: 1em;
    justify-content: center;
`;

const SearchInputWrapper = styled.div`
    border: 1px solid #D0D1D9;
    border-radius: 10px;
    width: 50%;
    min-width :273px;

    @media(max-width : 768px){
        width : 80%;
    }
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
    width: 100%;
    display: flex;
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
    width: 100%;
    height: 1.5px;
    background-color: #D0D1D9;
`;

const CategoryTitleWrapper = styled.div`
    margin: 1.2em 0 0.8em 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CategoryTitle = styled.div`
    border-radius: 10px;
    min-width: 6em;
    padding: 0 1.5em;
    height: 2.5em;
    line-height: 2.5em;
    background-color: #BB9CFF;
    color: white;
    font-size: 0.8125em;
    font-weight: 800;
    text-align: center;
`;

const StudyPreviewWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;

    @media(max-width : 768px){
        justify-content: center;
        gap : 0em;
    }
    @media(max-width : 1024px){
        justify-content: center;
        gap : 0em;
    }
`;
