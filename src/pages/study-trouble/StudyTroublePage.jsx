import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageHeader from "../../components/common/PageHeader";
import ItemList from "../study-trouble/ui/ItemList";
import { ContentWrapper } from "../../components/common/MediaWrapper";

const StudyTroublePage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const navigate = useNavigate();

  const location = useLocation();
  const roomId = location.state?.roomId || {}; // roomId가 올바르게 받아와졌는지 확인
  console.log(roomId);

  const headerTitles = [
    "스터디 홈",
    "트러블 슈팅 게시판",
    "정보나눔 게시판",
    "채팅방",
  ];

  const handleHeaderButtonClick = (index) => {
    if (index === 0) {
      navigate("/studyroom",{state : {roomId : roomId}});
    } else {
      setActiveButtonIndex(index);
    }
  };

  const handleCreatePost = () => {
    navigate("/troubleshooting-register", { state: { roomId: roomId } });
  };

  return (
    <>
      <PageHeader
        large={true}
        pageTitle="트러블슈팅 게시판"
        headerTitles={headerTitles}
        activeButtonIndex={activeButtonIndex}
        onButtonClick={handleHeaderButtonClick}
        changeColorOnClick={true}
        changeColorOnHover={true}
      />
      <ContentWrapper>
        <CategoryWrapper>
          <CategoryContainer>
            <CreatePostButton onClick={handleCreatePost}>
              + 트러블 슈팅 등록
            </CreatePostButton>
          </CategoryContainer>
        </CategoryWrapper>

        {/* ItemList 컴포넌트에 roomId를 전달합니다 */}
        <ItemList roomId={roomId} />
      </ContentWrapper>
    </>
  );
};

export default StudyTroublePage;

const CategoryWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #d0d1d9;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0px;
`;

const CreatePostButton = styled.button`
  background-color: #8e59ff;
  border: 0.0625em solid #8e59ff;
  color: #fff;
  border-radius: 0.7em;
  font-weight: 700;
  width: 11.75em;
  height: 2.5em;
  margin-right: 0;
  font-family: "NanumSquareNeo", sans-serif;

  &:hover {
    background-color: #5548c8;
  }
`;
