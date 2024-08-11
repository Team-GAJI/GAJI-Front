import React, { useState } from "react";
import styled from "styled-components";
import Category from "../components/troubleshooting/Category";
import ItemList from "../components/troubleshooting/ItemList";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";

const TroubleShootingPage = () => {

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const navigate = useNavigate();

  const headerTitles = ["스터디 홈", "트러블 슈팅 게시판", "정보나눔 게시판", "채팅방"];
  const handleHeaderButtonClick = (index) => {
      setActiveButtonIndex(index);
      if (index == 0) {
        navigate('/studyroom')
    } else if (index == 1) {
      navigate('/troubleshooting')
    } else {
      navigate('/')
    }
  };

  return (
    <PageContainer>
      <Content>
      <PageHeader
            large={true}
            pageTitle="스터디룸"
            headerTitles={headerTitles}
            activeButtonIndex={activeButtonIndex}
            onButtonClick={handleHeaderButtonClick}
            changeColorOnClick={false}
            changeColorOnHover={true}
          />
        <Category />
        <ItemList />
      </Content>
    </PageContainer>
  );
};

export default TroubleShootingPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
`;
