import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import WritePost from "../components/common/WritePost";
import { ContentWrapper60 } from "../components/common/MediaWrapper";
import { registerTroubleShootingAPI } from "../utils/troubleShooting/troubleShootingInfoAPI";

const TroubleshootingRegistrationPage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);

  // API 연결
  const [title, setTitle] = useState(""); // State for the post title
  const [body, setBody] = useState(""); // State for the post body

  const navigate = useNavigate();

  const handleNavigate = (index) => {
    if (index === 0) {
      navigate("/studyroom");
    } else {
      setActiveButtonIndex(index);
    }
  };

  const headerTitles = [
    "스터디 홈",
    "트러블 슈팅 게시판",
    "정보나눔 게시판",
    "채팅방",
  ];

  // API 연결
  const handleSubmit = async () => {
    const roomId = 81;
    try {
      const result = await registerTroubleShootingAPI(roomId, title, body);
      console.log("Post registered:", result);
      navigate(`/troubleshooting-detail/${result.result.troublePostId}`);
    } catch (error) {
      console.error("Failed to register post", error);
    }
  };

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

      <ContentWrapper60>
        <PostOptionWrapper>
          <Label>스터디 이름</Label>
        </PostOptionWrapper>
        <PostTitle>게시글 제목</PostTitle>
        <WritePost link={"troubleshooting"} />
      </ContentWrapper60>
    </>
  );
};

export default TroubleshootingRegistrationPage;

const PostOptionWrapper = styled.div`
  margin-bottom: 2.5em;
  width: 100%;
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

const PostTitle = styled.div`
  width: 100%;
  color: #161a3f;
  font-weight: 800;
  font-family: "NanumSquareNeo";
  margin-bottom: 1em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;
