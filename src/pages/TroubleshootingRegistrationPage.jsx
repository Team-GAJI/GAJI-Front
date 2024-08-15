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

      <PostsWrapper>
        <PostOptionWrapper>
          <Label>스터디 이름</Label>
          {hashtags.map((hashtag, index) => (
            <HashtagInputWrapper key={index}>
              #{" "}
              <HashtagInput
                id={`hashtag-${index}`}
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

const PostsWrapper = styled.div`
  margin: 2.5em 0 6em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 1.5em;

  @media (max-width: 768px) {
    margin: 1.5em 0 4em 0;
    padding: 0 1em;
  }

  @media (max-width: 480px) {
    margin: 1em 0 3em 0;
    padding: 0 0.5em;
  }
`;

const PostOptionWrapper = styled.div`
  margin-bottom: 2.5em;
  width: 100%;
  max-width: 57.125em; /* Limit the maximum width */
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 1.5em;
  }

  @media (max-width: 480px) {
    margin-bottom: 1em;
  }
`;

const Label = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 1em;
  color: #8e59ff;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    margin-right: 0.5em;
  }
`;

const HashtagInputWrapper = styled.div`
  padding: 0 1em;
  border: 1.5px solid #8e59ff;
  border-radius: 20px;
  height: 2.5em;
  line-height: 2.5em;
  background-color: transparent;
  color: #8e59ff;
  font-weight: 800;
  margin-right: 1em;
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;

  /* Adjust margin-top when hashtags wrap to a new line */
  &:nth-of-type(n + 2) {
    margin-top: 0.5em;
  }

  @media (max-width: 768px) {
    margin-right: 0.5em;
    padding: 0 0.75em;
    &:nth-of-type(n + 2) {
      margin-top: 0.4em;
    }
  }

  @media (max-width: 480px) {
    margin-right: 0.3em;
    padding: 0 0.5em;
    &:nth-of-type(n + 2) {
      margin-top: 0.3em;
    }
  }
`;

const HashtagInput = styled.input`
  border: none;
  color: #8e59ff;
  background-color: transparent;
  font-weight: 800;
  padding: 0;
  width: ${(props) =>
    props.value
      ? `${props.value.length + 2}ch`
      : `${props.placeholder.length + 1}ch`};
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a2a3b2;
    font-weight: 800;
  }
  font-family: "NanumSquareNeo";

  @media (max-width: 768px) {
    font-size: 0.875em;
  }

  @media (max-width: 480px) {
    font-size: 0.75em;
  }
`;

const handleKeyPress = (e, index) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (hashtags.length < 5 && hashtags[index] !== "") {
      setHashtags([...hashtags, ""]);
      setTimeout(() => {
        document.getElementById(`hashtag-${index + 1}`).focus();
      }, 0);
    }
  }
};

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

  @media (max-width: 768px) {
    font-size: 0.875em;
  }

  @media (max-width: 480px) {
    font-size: 0.75em;
  }
`;
