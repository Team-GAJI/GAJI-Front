import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import StudySummary from "../components/studyRoom/StudySummary";
import WeekCurriculum from "../components/studyRoom/WeekCurriculum";
import StudyPostList from "../components/studyRoom/StudyPostList";

const StudyRoomPage = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const navigate = useNavigate();

  const headerTitles = [
    "스터디 홈",
    "트러블 슈팅 게시판",
    "정보나눔 게시판",
    "채팅방",
  ];

  const handleHeaderButtonClick = (index) => {
    if (index === 1) {
      navigate("/troubleshooting");
    } else {
      setActiveButtonIndex(index);
    }
  };

  return (
    <>
      <PageHeader
        large={true}
        pageTitle="스터디룸"
        headerTitles={headerTitles}
        activeButtonIndex={activeButtonIndex}
        onButtonClick={handleHeaderButtonClick}
        changeColorOnClick={false}
        changeColorOnHover={true}
      />
      <ContentWrapper>
        <SidebarWrapper>
          <Sidebar>
            {[...Array(9)].map((_, index) => (
              <React.Fragment key={index}>
                <SidebarButton bold={index === 0}>
                  {index + 1}주차
                </SidebarButton>
                {index < 8}
              </React.Fragment>
            ))}
          </Sidebar>
          <SidebarManageButton>스터디 관리</SidebarManageButton>
        </SidebarWrapper>

        <MainContent>
          <StudySummary />
          <DivisionLine2 />
          <WeekCurriculum />
          <DivisionLine2 />
          <StudyPostList />
        </MainContent>
      </ContentWrapper>
    </>
  );
};

export default StudyRoomPage;

const ContentWrapper = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  gap: 4em;

  @media (max-width: 1199px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DivisionLine2 = styled.div`
  border-top: 0.1125em solid #8e59ff;
  margin: 1.25em 0px;
  width: 98%;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.0625em solid #a2a3b2;
  border-radius: 0.5em;
  padding: 0em 0.5em 0.5em;
  background-color: #fbfaff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    width: auto;
    padding: 0.5em 0.5em;
    overflow-x: scroll;
    height: auto;
    margin-top: 0em;
  }
`;

const SidebarManageButton = styled.button`
  background-color: #8e59ff;
  border: 0.0625em solid #8e59ff;
  color: #fff;
  border-radius: 0.5em;
  font-weight: 700;
  padding: 0.75em;
  margin-top: 0.625em;
  box-sizing: border-box;
  @media (max-width: 768px) {
    margin-top: 0em;
  }
`;

const SidebarButton = styled.button`
  background-color: transparent;
  color: #a2a3b2;

  font-weight: 1.125em;
  padding: 0.6em 0.625em;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing: border-box;
  &:hover {
    border: 1px solid #8e59ff;
    border-radius: 0.5em;
    color: #8e59ff;
    margin-left: 0.4em;
    margin-right: 0.4em;
  }
`;

const SidebarWrapper = styled.div`
  width: 10%;
  position: fixed;
  left: 3em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    width: auto;
    overflow-x: scroll;
    height: auto;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1.25em;
  color: #000;
  display: flex;
  flex-direction: column;
`;
