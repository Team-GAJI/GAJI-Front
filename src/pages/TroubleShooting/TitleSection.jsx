import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logos/logo.svg";
import BackgroundImage from "../../assets/images/titleBackground.png"; // Ensure this path is correct

const TitleSection = () => {
  return (
    <TitleContainer>
      <LogoImg src={Logo} alt="Study Room Logo" />
      <Title>스터디룸</Title>
      <NavButtons>
        <NavButton>스터디 홈</NavButton>
        <NavButton>트러블 슈팅 게시판</NavButton>
        <NavButton>정보나눔 게시판</NavButton>
        <NavButton>채팅방</NavButton>
      </NavButtons>
    </TitleContainer>
  );
};

export default TitleSection;

const TitleContainer = styled.div`
  text-align: center;
  margin: 40px 0;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  padding: 40px 0;
  border-radius: 10px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #8e59ff;
  margin: 20px 0;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavButton = styled.button`
  background-color: #8e59ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5548c8;
  }
`;
