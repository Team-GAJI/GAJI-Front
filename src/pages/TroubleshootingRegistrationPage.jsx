import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/troubleshooting/titleBackground.png";
import LogoIcon from "../assets/logos/logo.svg?react";
import Hashtag from "../components/communityWrite/Hashtag";
import WritePost from "../components/communityWrite/WritePost";

const TroubleshootingRegistrationPage = () => {
  return (
    <>
      {/* Header */}
      <HeaderWrapper>
        <Title>트러블슈팅 게시판 글쓰기</Title>
        <ButtonsWrapper>
          <StyledButton isActive={true}>스터디 홈</StyledButton>
          <StyledButton isActive={true}>트러블 슈팅</StyledButton>
          <StyledButton isActive={true}>정보나눔</StyledButton>
          <StyledButton isActive={true}>채팅방</StyledButton>
        </ButtonsWrapper>
      </HeaderWrapper>

      {/* Form */}
      <PostsWrapper>
        <PostOptionWrapper>
          <CategorySelect name="category">
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
          </CategorySelect>
          <HashtagInputWrapper>
            # <HashtagInput placeholder="해시태그를 작성해주세요" />
          </HashtagInputWrapper>
        </PostOptionWrapper>

        <PostTitle>게시글 제목</PostTitle>
        {/* Hashtag */}
        <HashtagWrapper>
          <Hashtag />
          <Hashtag />
          <Hashtag />
        </HashtagWrapper>
        {/* Write Post */}
        <WritePost />
      </PostsWrapper>
    </>
  );
};

export default TroubleshootingRegistrationPage;

const HeaderWrapper = styled.div`
  height: 16.1875em;
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 0.5em;
  font-size: 1.5em;
  font-weight: 800;
  color: #8e59ff;
`;

const ButtonsWrapper = styled.div`
  margin-top: 1em;
`;

const StyledButton = styled.button`
  margin: 0.1786em;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  width: 140px;
  height: 2.2em;
  background-color: ${({ isActive }) =>
    isActive ? "#8E59FF" : "rgba(142, 89, 255, 0.6)"};
  color: white;
  font-size: 0.9em;
  cursor: pointer;
`;

const PostsWrapper = styled.div`
  margin: 2.5em 0 6em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const PostOptionWrapper = styled.div`
  margin-bottom: 2.5em;
  width: 57.125em;
  display: flex;
`;

const CategorySelect = styled.select`
  margin-right: 1.2em;
  padding-left: 1em;
  border: 1px solid #8e59ff;
  border-radius: 10px;
  width: 28.8125em;
  height: 3.1875em;
  background-color: transparent;
  color: #8e59ff;
  font-size: 1em;
  font-weight: 800;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const HashtagInputWrapper = styled.div`
  padding-left: 1.5em;
  border: 1px solid #8e59ff;
  border-radius: 10px;
  width: 27.5em;
  height: 3.1875em;
  line-height: 3.185em;
  background-color: transparent;
  color: #8e59ff;
  font-weight: 800;
`;

const HashtagInput = styled.input`
  border: none;
  width: 29em;
  background-color: transparent;
  font-weight: 800;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a2a3b2;
    font-weight: 800;
  }
  font-family: "NanumSquareNeo";
`;

const PostTitle = styled.div`
  width: 57.125em;
  margin: 1em;
  color: #161a3f;
  font-weight: 800;
`;

const HashtagWrapper = styled.div`
  margin-bottom: 0.7em;
  width: 57.125em;
  display: flex;
`;
