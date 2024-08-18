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
import CommunitySelectBox from './CommunitySelectBox';
import { ContentWrapper } from '../common/MediaWrapper';
import { Scroll } from '../common/Scroll';

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
  const { type } = useSelector((state) => state.community);

  // useNavigate
  const navigate = useNavigate();


  return (
    <ContentWrapper>      
      {/* 검색창 */}
      <SearchInputWrapper>
        <StyledLogoIcon />
        <StyledSearchInput type="text" placeholder='검색어를 입력해주세요'/>
      </SearchInputWrapper>

      {/* 게시글 필터 */}
      <SelectAndButtonWrapper>
        {/* 셀렉트 박스 */}
        <CommunitySelectBox/>
        {/* 게시글 버튼 */}
        <CreatePostButton onClick={() => {navigate("/community/write");}}>
          + {type} 작성하기
        </CreatePostButton>
      </SelectAndButtonWrapper>
      <StyledHr />

      {/* 게시글 미리보기 */}
      {type === '블로그' ? (
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
      ) : type === '질문' ? (
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
    </ContentWrapper>
  );
};

export default CommunityHomePosts;


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
  width : 100%;
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

const StyledHr = styled.div`
    margin-top: 1.2em;
    width: 100%;
    height: 1.5px;
    background-color: #D0D1D9;
`;

const PostPreviewWrapper = styled.div`
  margin-top: 1.2em;
  width: 100%;
`;

const BlogPreviewWrapper = styled(Scroll)`
  margin-top: 1em;
  width: 100%;
  display: flex;
  overflow-x : none;
  justify-content : center;
  gap : 2em;
  flex-wrap: wrap;
  @media(max-width:768px){
    display : flex;
    align-items: center;
    flex-direction : column;
    overflow-x : scroll;
  }
`;


