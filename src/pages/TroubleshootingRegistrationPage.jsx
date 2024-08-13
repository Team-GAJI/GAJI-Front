import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WritePost from "../components/communityWrite/WritePost";
import PageHeader from "../components/common/PageHeader";

const TroubleshootingRegistrationPage = () => {
  const [hashtags, setHashtags] = useState([""]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const navigate = useNavigate();

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (hashtags.length < 3 && hashtags[index] !== "") {
        setHashtags([...hashtags, ""]);
      }
    }
  };

  const handleChange = (e, index) => {
    const newHashtags = [...hashtags];
    newHashtags[index] = e.target.value;
    setHashtags(newHashtags);
  };

  const handleRemove = (index) => {
    const newHashtags = hashtags.filter((_, i) => i !== index);
    setHashtags(newHashtags);
  };

  const handleNavigate = (index) => {
    if (index === 0) {
      navigate("/studyroom"); // Navigate to /studyroom when "스터디 홈" is clicked
    } else {
      setActiveButtonIndex(index); // Set the active button index
    }
  };

  const headerTitles = [
    "스터디 홈",
    "트러블 슈팅 게시판",
    "정보나눔 게시판",
    "채팅방",
  ];

  return (
    <>
      <PageHeader
        large={true}
        pageTitle="트러블슈팅 게시판 글쓰기"
        headerTitles={headerTitles}
        activeButtonIndex={activeButtonIndex}
        onButtonClick={handleNavigate}
        changeColorOnClick={false}
        changeColorOnHover={true}
      />

      <PostsWrapper>
        <PostOptionWrapper>
          <Label>스터디 이름</Label>
          {hashtags.map((hashtag, index) => (
            <HashtagInputWrapper key={index}>
              #{" "}
              <HashtagInput
                placeholder=" 해시태그를 작성해주세요"
                value={hashtag}
                onChange={(e) => handleChange(e, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
              <RemoveButton onClick={() => handleRemove(index)}>x</RemoveButton>
            </HashtagInputWrapper>
          ))}
        </PostOptionWrapper>

        <PostTitle>게시글 제목</PostTitle>

        <WritePost />
      </PostsWrapper>
    </>
  );
};

export default TroubleshootingRegistrationPage;

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
  align-items: center;
`;

const Label = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 1em;
  color: #8e59ff;
`;

const HashtagInputWrapper = styled.div`
  padding: 0 1em;
  border: 1.5px solid #8e59ff;
  border-radius: 20px;
  width: auto;
  height: 2.5em;
  line-height: 2.5em;
  background-color: transparent;
  color: #8e59ff;
  font-weight: 800;
  margin-right: 1em;
  position: relative;
  display: flex;
  align-items: center;
`;

const HashtagInput = styled.input`
  border: none;
  color: #8e59ff;
  background-color: transparent;
  font-weight: 800;
  padding: 0;
  width: calc(100% - 1.5em - 5px);
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

const RemoveButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  border: none;
  background: none;
  color: #8e59ff;
  cursor: pointer;
  font-weight: bold;
`;

const PostTitle = styled.div`
  width: 57.125em;
  color: #161a3f;
  font-weight: 800;
  font-family: "NanumSquareNeo";
`;
