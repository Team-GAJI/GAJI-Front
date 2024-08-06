import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LogoIcon from '../../assets/logos//logo.svg?react';
import ProjectPreview from './ProjectPreview';
import QuestionPreview from './QuestionPreview';
import BlogPreview from './BlogPreview';
import { useNavigate } from 'react-router-dom';
import Loading from '../common/Loading';
import { dummyProjectPosts } from './DummyProjectPosts';
import { dummyQuestionPosts } from './DummyQuestionPosts';
import { dummyBlogPosts } from './DummyBlogPosts';

const CommunityHomePosts = () => {
  // state 관리
  const [projectPage, setProjectPage] = useState(1);
  const [questionPage, setQuestionPage] = useState(1);
  const [blogPage, setBlogPage] = useState(1);
  const [projects, setProjects] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 프로젝트 불러오기 기능
  const getProjects = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
        const newPosts = dummyProjectPosts.slice((projectPage - 1) * 4, projectPage * 4); // 페이지당 4개씩 로드
        setProjects((prevPosts) => [...prevPosts, ...newPosts]);
        setProjectPage((prevPage) => prevPage + 1);
        setIsLoading(false);
    }, 1000); // 1초 지연 후 데이터 추가
  }, [isLoading, projectPage]);

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        getProjects();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getProjects]);

  // 질문 불러오기 기능
  const getQuestions = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      const newPosts = dummyQuestionPosts.slice((questionPage - 1) * 4, questionPage * 4); // 페이지당 4개씩 로드
      setQuestions((prevPosts) => [...prevPosts, ...newPosts]);
      setQuestionPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000); // 1초 지연 후 데이터 추가
  }, [isLoading, questionPage]);

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        getQuestions();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getQuestions]);

  // 블로그 불러오기 기능
  const getBlogs = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      const newPosts = dummyBlogPosts.slice((blogPage - 1) * 8, blogPage * 8); // 페이지당 8개씩 로드
      setBlogs((prevPosts) => [...prevPosts, ...newPosts]);
      setBlogPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000); // 1초 지연 후 데이터 추가
  }, [isLoading, blogPage]);

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        getBlogs();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getBlogs]);


  // Redux 상태 가져오기
  const { title } = useSelector((state) => state.community);

  // useNavigate
  const navigate = useNavigate();

  // 필터 옵션 분류
  const filterOptions = {
    프로젝트: [
      { value: '0', label: '필터' },
      { value: '1', label: '모집 중' },
      { value: '2', label: '모집 완료' }
    ],
    질문: [
      { value: '0', label: '필터' },
      { value: '3', label: '미완료 질문' },
      { value: '4', label: '해결 완료' }
    ],
    블로그: []
  };

  return (
    <PageWrapper>      
      {/* 검색창 */}
      <SearchInputWrapper>
        <StyledLogoIcon />
        <StyledSearchInput type="text" placeholder='검색어를 입력해주세요'/>
      </SearchInputWrapper>

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
          {title !== '블로그' && (
            <StyledSelect name="filter">
              {filterOptions[title].map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </StyledSelect>
          )}
        </SelectWrapper>

        {/* 게시글 작성 */}
        <CreatePostButton onClick={() => {navigate("/community/write");}}>
          + {title} 작성하기
        </CreatePostButton>
      </SelectAndButtonWrapper>
      <StyledHr />

      {/* 게시글 미리보기 */}
      {title === '블로그' ? (
        <BlogPreviewWrapper>
          {blogs.map((post) => (
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
          {isLoading && (
            <Loading />
          )}
        </BlogPreviewWrapper>
      ) : title === '질문' ? (
        <PostPreviewWrapper>
          {questions.map((post) => (
            <QuestionPreview
              key={post.postId}
              state={post.postState}
              title={post.postTitle}
              content={post.postContent}
              type={post.postType}
              userProfileImg={post.postUserProfileImg}
              writer={post.postWriter}
              ago={post.postAgo}
              views={post.postViews}
              like={post.postLike} />
          ))}
          {isLoading && (
            <Loading />
          )}
        </PostPreviewWrapper>
      ) : (
        <PostPreviewWrapper>
          {projects.map((post) => (
            <ProjectPreview
              key={post.postId}
              state={post.postState}
              title={post.postTitle}
              content={post.postContent}
              type={post.postType}
              userProfileImg={post.postUserProfileImg}
              writer={post.postWriter}
              ago={post.postAgo}
              views={post.postViews}
              like={post.postLike} />
          ))}
          {isLoading && (
            <Loading />
          )}
        </PostPreviewWrapper>
      )}
    </PageWrapper>
  );
};

export default CommunityHomePosts;

/* CSS */
const PageWrapper = styled.div`
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-top: 1em;
  border: none;
  width: 70em;
  height: 1.5px;
  background-color: #D0D1D9;
`;

const PostPreviewWrapper = styled.div`
  margin-top: 1.2em;
  width: 70em;
`;

const BlogPreviewWrapper = styled.div`
  margin-top: 1em;
  width: 72.4em;
  display: flex;
  flex-wrap: wrap;
`;
