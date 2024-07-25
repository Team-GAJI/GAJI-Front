import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LeftSection>
          <MenuIcon>&#9776;</MenuIcon>
          <NavLinks>
            <NavLink to="/">스터디</NavLink>
            <NavLink to="/">커뮤니티</NavLink>
            <NavLink to="/">로드맵</NavLink>
            <NavLink to="/">강의</NavLink>
          </NavLinks>
        </LeftSection>
        <LoginButton>LOG IN</LoginButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderContainer = styled.header`
  width: 95%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: #6c63ff;
  margin-right: 20px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #6c63ff;
  font-size: 14px;
  &:hover {
    color: #5548c8;
  }
`;

const LoginButton = styled.button`
  background-color: transparent;
  border: 1px solid #6c63ff;
  color: #6c63ff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #6c63ff;
    color: #fff;
  }
`;
