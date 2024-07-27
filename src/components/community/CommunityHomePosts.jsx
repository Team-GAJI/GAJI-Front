import React from 'react';
import styled from 'styled-components';
import HotPostPreview from './HotPostPreview';
import SearchIcon from '../../assets/icons/community/searchIcon.svg?react';
import PostPreview from './PostPreview';
import BlogPreview from './BlogPreview';
import { useNavigate } from 'react-router-dom';

const CommunityHomePosts = ({ activeButton }) => {
  /* useNavigate */
  const navigate = useNavigate();

  return (
    <PageWrapper>
      {/* Hot 게시물 */}
      <HotPostsWrapper>
        <HotPostPreview />
        <HotPostPreview />
        <HotPostPreview />
        <HotPostPreview />
      </HotPostsWrapper>
      
      {/* 검색창 */}
      <SearchInputWrapper>
        <StyledSearchIcon />
        <StyledSearchInput type="text" placeholder='검색어를 입력해주세요'/>
      </SearchInputWrapper>

      {/* 게시글 필터 */}
      <SelectAndButtonWrapper>
        <SelectWrapper>
          <StyledSelect name="category">
            <option value="1">카테고리</option>
            <option value="2">개발</option>
            <option value="3">인공지능</option>
            <option value="4">하드웨어</option>
            <option value="5">보안</option>
            <option value="6">네트워크-클라우드</option>
            <option value="7">어학</option>
            <option value="8">디자인</option>
            <option value="9">비즈니스-PM</option>
            <option value="10">독서 모임</option>
            <option value="11">기타</option>
          </StyledSelect>
          <StyledSelect name="sort">
            <option value="1">정렬</option>
            <option value="2">인기순</option>
            <option value="3">최신순</option>
          </StyledSelect>
          <StyledSelect name="filter">
            <option value="1">필터</option>
            <option value="2">모집 중</option>
            <option value="3">모집 완료</option>
            <option value="4">인원 제한</option>
            <option value="5">인원 제한 없음</option>
          </StyledSelect>
        </SelectWrapper>

        {/* 게시글 작성 */}
        <CreatePostButton onClick={() => {navigate("/community/write");}}>
          + {activeButton} 작성하기
        </CreatePostButton>
      </SelectAndButtonWrapper>
      <StyledHr />

      {/* 게시글 미리보기 */}
      {activeButton === '블로그' ? (
        <BlogPreviewWrapper>
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </BlogPreviewWrapper>
      ) : (
        <PostPreviewWrapper>
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
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

const HotPostsWrapper = styled.div`
  height: 20em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SearchInputWrapper = styled.div`
  border: 1px solid #D0D1D9;
  border-radius: 8px;
  width: 63em;
  height: 2.8em;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  margin: 1.3em;
`;

const StyledSearchInput = styled.input`
  border: none;
  width: 100%;
  height: 2em;
  font-weight: 800;
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
  margin-top: 3em;
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
  border-radius: 8px;
  width: 6.5em;
  height: 2.3em;
  background-color : transparent;
  color: #D0D1D9;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  &:focus{
    outline: none;
  }
`;

const CreatePostButton = styled.button`
  border: none;
  border-radius: 8px;
  width: 10em;
  height: 2.3em;
  background-color: #8E59FF;
  color: white;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

const StyledHr = styled.hr`
  margin-top: 1em;
  border: none;
  width: 70em;
  height: 3px;
  background-color: #8E59FF;
`;

const PostPreviewWrapper = styled.div`
  width: 70em;
`;

const BlogPreviewWrapper = styled.div`
  margin-top: 1em;
  width: 72.4em;
  display: flex;
  flex-wrap: wrap;
`;
