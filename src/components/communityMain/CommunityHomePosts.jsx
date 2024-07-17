import React, { useState } from 'react';
import styled from 'styled-components';
import HotPostPreview from './HotPostPreview';
import SearchIcon from '../../assets/icons/searchicon.svg?react';
import PostPreview from './PostPreview';
import BlogPreview from './BlogPreview';

const CommunityHomePosts = ({ activeButton }) => {
  /* state 관리 */
  const [blogPreviewCount, setBlogPreviewCount] = useState(9);
  const [postPreviewCount, setPostPreviewCount] = useState(4);

  /* 더보기 기능 */
  const handleSeeMore = () => {
    if (activeButton === '블로그') {
      setBlogPreviewCount(blogPreviewCount + 9);
    } else {
      setPostPreviewCount(postPreviewCount + 4);
    }
  };

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

      {/* 게시글 필터 및 작성버튼 */}
      <SelectAndButtonWrapper>
        <SelectWrapper>
          <StyledSelect name="category">
            <option value="1">카테고리</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
      	  </StyledSelect>
          <StyledSelect name="sort">
            <option value="1">정렬</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
      	  </StyledSelect>
          <StyledSelect name="filter">
            <option value="1">필터</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
      	  </StyledSelect>
        </SelectWrapper>
        <CreatePostButton>
          + {activeButton === '블로그' ? '블로그' : '게시글'} 작성하기
        </CreatePostButton>
      </SelectAndButtonWrapper>
      <StyledHr />

      {/* 게시글 미리보기 */}
      {activeButton === '블로그' ? (
        <BlogPreviewWrapper>
          {[...Array(blogPreviewCount)].map((_, index) => (
            <BlogPreview key={index} />
          ))}
        </BlogPreviewWrapper>
      ) : (
        <PostPreviewWrapper>
          {[...Array(postPreviewCount)].map((_, index) => (
            <PostPreview key={index} />
          ))}
        </PostPreviewWrapper>
      )}
      
      <SeeMoreButton onClick={handleSeeMore}>더보기</SeeMoreButton>
    </PageWrapper>
  );
};

export default CommunityHomePosts;

/* CSS */
const PageWrapper = styled.div`
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
  -webkit-appearance: none;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: #D0D1D9;
  }
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
  border: 1px solid #C8C8C8;
  border-radius: 8px;
  width: 6.5em;
  height: 2.3em;
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

const SeeMoreButton = styled.button`
  margin: 1em;
  border: none;
  border-radius: 8px;
  width: 18em;
  height: 2.3em;
  background-color: #8E59FF;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
`;
