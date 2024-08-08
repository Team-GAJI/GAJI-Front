import React from "react";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/troubleshooting/titleBackground.png";

const TitleSection = () => {
  return (
    <BackgroundWrapper>
      <TitleContainer>
        <Title>스터디룸</Title>
        <NavButtons>
          <NavButton>스터디 홈</NavButton>
          <NavButton>트러블슈팅</NavButton>
          <NavButton>정보나눔</NavButton>
          <NavButton>채팅방</NavButton>
        </NavButtons>
      </TitleContainer>
    </BackgroundWrapper>
  );
};

export default TitleSection;

const BackgroundWrapper = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 40px 0;
  font-family: "NanumSquareNeo", sans-serif;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #8e59ff;
  margin-bottom: 30px;
  font-weight: 800;
  font-family: "NanumSquareNeo", sans-serif;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const NavButton = styled.button`
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
  font-family: "NanumSquareNeo", sans-serif;

  &:hover {
    opacity: 1;
  }
`;
