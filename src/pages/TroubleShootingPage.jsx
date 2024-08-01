import React from "react";
import styled from "styled-components";
import TitleSection from "../components/troubleshooting/TitleSection";
import Category from "../components/troubleshooting/Category";
import ItemList from "../components/troubleshooting/ItemList";

const TroubleShootingPage = () => {
  return (
    <PageContainer>
      <Content>
        <TitleSection />
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
