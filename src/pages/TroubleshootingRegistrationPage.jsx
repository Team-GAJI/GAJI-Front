import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WritePost from "../components/communityWrite/WritePost";
import PageHeader from "../components/common/PageHeader";
import { registerTroubleShooting } from "../utils/studyRoom/troubleShootingInfoAPI";

const TroubleshootingRegistrationPage = () => {
  const [hashtags, setHashtags] = useState([""]);
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (hashtags.length < 5 && hashtags[index] !== "") {
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
      navigate("/studyroom");
    } else {
      setActiveButtonIndex(index);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const roomId = "actual_room_id"; // 실제 room ID로 교체하세요.
      const data = await registerTroubleShooting(roomId, title, body);
      console.log("등록 성공:", data);
      navigate("/studyroom");
    } catch (error) {
      console.error("등록 중 오류 발생:", error);
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

      <HeaderWrapper>
        <Title>트러블슈팅 게시판</Title>
        <ButtonsWrapper>
          <StyledButton>버튼1</StyledButton>
          <StyledButton>버튼2</StyledButton>
        </ButtonsWrapper>
      </HeaderWrapper>

      <PostsWrapper>
        <PostOptionWrapper>
          <Label>스터디 이름</Label>
          {hashtags.map((hashtag, index) => (
            <HashtagInputWrapper key={index}>
              #{" "}
              <HashtagInput
                id={`hashtag-${index}`} // Corrected this line.
                placeholder=" 해시태그를 작성해주세요  "
                value={hashtag}
                onChange={(e) => handleChange(e, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
              <RemoveButton onClick={() => handleRemove(index)}>x</RemoveButton>
            </HashtagInputWrapper>
          ))}
        </PostOptionWrapper>

        {/* WritePost 컴포넌트에 props 전달 */}
        <WritePost
          title={title}
          setTitle={setTitle}
          content={body}
          setContent={setBody}
        />

        <SubmitButton onClick={handleSubmit}>게시글 등록</SubmitButton>
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
  margin-bottom: 0.5em;
  font-size: 1.5em;
  font-weight: 800;
  color: #8e59ff;
`;

const ButtonsWrapper = styled.div`
  margin-top: 1em;
`;

const StyledButton = styled.button`
  margin: 0.3em;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  width: 140px;
  height: 2.2em;
  background-color: #8e59ff;
  opacity: 0.6;
  color: white;
  font-size: 0.9em;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
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
`;

const SectionTitle = styled.div`
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 1em;
  color: #161a3f;
  margin-top: 2em;
  text-align: left;
  width: 60%;
`;

const ExtraPostsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
