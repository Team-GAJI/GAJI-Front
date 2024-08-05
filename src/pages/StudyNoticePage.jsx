import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  notices,
  NoticeSquare,
  FirstNoticeSquare,
} from "../components/studyRoom/Notices";
import backImage from "../assets/images/common/mypageBackground.png";

const StudyNoticePage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleNavigate = () => {
    navigate("/troubleshooting");
  };

  return (
    <>
      <HeaderWrapper>
        <ContentWrapper>
          <RowLogoWrapper>
            <LogoText>스터디룸 공지사항</LogoText>
          </RowLogoWrapper>

          {/* 카테고리 메뉴 선택 */}
          <ButtonsWrapper>
            <StyledButton isActive={true}>스터디 홈</StyledButton>
            <StyledButton isActive={true} onClick={handleNavigate}>
              트러블 슈팅
            </StyledButton>
            <StyledButton isActive={true}>정보나눔</StyledButton>
            <StyledButton isActive={true}>채팅방</StyledButton>
          </ButtonsWrapper>
          <MainSection1>
            <ColumnWrapper>
              <Container>
                <Text>스터디명 공지사항</Text>
                <WritingButton>+ 공지사항 작성</WritingButton>
              </Container>

              <NoticeSquareWrapper>
                {notices.map((notice, index) => {
                  const NoticeComponent =
                    index === 0 ? FirstNoticeSquare : NoticeSquare;
                  return (
                    <NoticeComponent
                      key={index}
                      notice={notice}
                      isHovered={hoveredIndex === index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  );
                })}
              </NoticeSquareWrapper>
            </ColumnWrapper>
          </MainSection1>
        </ContentWrapper>
      </HeaderWrapper>
    </>
  );
};

export default StudyNoticePage;

const HeaderWrapper = styled.div`
  z-index: 5;
  background-color: #fbfaff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 3.1em;
`;
const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const RowLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9em;
  flex-direction: column;
  justify-content: center;
  padding: 1.25em;

  background-image: url(${backImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const LogoText = styled.div`
  font-size: 1.2em;
  font-weight: 800;
  color: #8e59ff;
`;

const ButtonsWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
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

  &:hover {
    opacity: 1;
  }
`;

const MainSection1 = styled.section`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding-top: 30px;
  /*overflow: auto;*/
  gap: 0.625em;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 1.2em;
  font-weight: 800;
  color: #8e59ff;
  margin-top: 0.625em;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.25em;
  border-bottom: 0.0625em solid #a2a3b2;
  padding-top: 0.625em;
`;

const WritingButton = styled.button`
  background-color: #8e59ff;
  border: 0.0625em solid #8e59ff;
  color: #fff;
  border-radius: 0.5em;
  font-weight: 700;
  width: 9.375em;
  height: 2.5em;
  margin-right: 0;
`;

const NoticeSquareWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 0.625em;
  margin-bottom: 1.875em;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625em;
  margin-top: 0.625em;
  margin-left: 1.25em;
`;
