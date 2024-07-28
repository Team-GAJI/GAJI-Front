import React from "react";
import styled from "styled-components";
import Header from "./Header";
import TitleSection from "./TitleSection";
import Category from "./Category";
import ItemList from "./ItemList";
import Footer from "../../../pages/Footer";

const TroubleShootingPage = () => {
  return (
    <PageContainer>
      <Header />
      <Content>
        <TitleSection />
        <Category />
        <ItemList />
      </Content>
      <Footer />
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
