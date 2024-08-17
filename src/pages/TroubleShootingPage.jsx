import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import Category from "../components/troubleshooting/Category";
import ItemList from "../components/troubleshooting/ItemList";
import { ContentWrapper } from "../components/common/MediaWrapper";

const TroubleShootingPage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const navigate = useNavigate();

  const headerTitles = [
    "스터디 홈",
    "트러블 슈팅 게시판",
    "정보나눔 게시판",
    "채팅방",
  ];

  const handleHeaderButtonClick = (index) => {
    if (index === 0) {
      navigate("/studyroom");
    } else {
      setActiveButtonIndex(index);
    }
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
        <Category />
        <ItemList />
      </ContentWrapper>
    </>
  );
};

export default TroubleShootingPage;

