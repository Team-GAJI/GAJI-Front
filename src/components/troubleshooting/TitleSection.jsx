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
  border-radius: 0.625em;
  padding: 2.5em 0;
  font-family: "NanumSquareNeo", sans-serif;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.25em;
  color: #8e59ff;
  margin-bottom: 1.875em;
  font-weight: 800;
  font-family: "NanumSquareNeo", sans-serif;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25em;
`;

const NavButton = styled.button`
  background-color: rgba(142, 89, 255, 0.6);
  color: white;
  border: none;
  padding: 0.625em 1.25em;
  border-radius: 0.875em;
  cursor: pointer;
  width: 8.75em;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: background-color 0.3s ease;
  font-family: "NanumSquareNeo", sans-serif;

  &:hover {
    background-color: rgba(142, 89, 255, 1);
  }
`;
