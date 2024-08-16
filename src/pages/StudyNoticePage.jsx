import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Notices from "../components/studyRoom/Notices";
import PageHeader from "../components/common/PageHeader";
import {  ContentWrapper60 } from "../components/common/MediaWrapper";

const StudyNoticePage = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [notices, setNotices] = useState([
    {
      text1: "여러분 이건 꼭 아셔야합니다? ! 모르면 이 스터디 못함 ~",
      text2:
        "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
      user: "user1023",
      time: "1시간",
      checks: 7,
    },
    {
      text1: "예전 공지인데 이제 아무도 안보겠쮜....",
      text2:
        "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
      user: "user2045",
      time: "2시간",
      checks: 5,
    },
    {
      text1: "이누공 이제 누가 공지해주냐",
      text2:
        "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
      user: "user3098",
      time: "3시간",
      checks: 10,
    },
    {
      text1: "예전 공지인데 이제 아무도 안보겠쮜....",
      text2:
        "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
      user: "user4567",
      time: "4시간",
      checks: 8,
    },
    {
      text1: "이누공 이제 누가 공지해주냐",
      text2:
        "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
      user: "user5678",
      time: "5시간",
      checks: 6,
    },
  ]);

  const handleNavigateToRegister = () => {
    navigate("/studynotice-register");
  };

  const handleNavigateToTroubleshooting = () => {
    navigate("/troubleshooting");
  };

  const handleNavigateToStudyRoom = () => {
    navigate("/studyroom");
  };

  const moveToTop = (index) => {
    const updatedNotices = [...notices];
    const [selectedNotice] = updatedNotices.splice(index, 1);
    updatedNotices.unshift(selectedNotice);
    setNotices(updatedNotices);
  };

  const headerTitles = [
    "스터디 홈",
    "트러블 슈팅 게시판",
    "정보나눔 게시판",
    "채팅방",
  ];

  return (
    <>
      <PageHeader
        large={true}
        pageTitle="스터디룸 공지사항"
        headerTitles={headerTitles}
        activeButtonIndex={1}
        onButtonClick={(index) => {
          if (index === 0) handleNavigateToStudyRoom();
          if (index === 1) handleNavigateToTroubleshooting();
        }}
        changeColorOnClick={false}
        changeColorOnHover={true}
      />
      <ContentWrapper60>
        <MainSection1>
          <ColumnWrapper>
            <Container>
              <Text>스터디명 공지사항</Text>
              <WritingButton onClick={handleNavigateToRegister}>
                + 공지사항 작성
              </WritingButton>
            </Container>

            <NoticeSquareWrapper>
              <Notices
                notices={notices}
                onMoveToTop={moveToTop}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </NoticeSquareWrapper>
          </ColumnWrapper>
        </MainSection1>
      </ContentWrapper60>
    </>
  );
};

export default StudyNoticePage;



const MainSection1 = styled.section`
  display: flex;
  flex: 1;
  padding-top: 30px;
  gap: 0.625em;
  justify-content: center;
  align-items: center;
  font-family: "NanumSquareNeo", sans-serif;

  @media (max-width: 768px) {
    padding-top: 20px;
    gap: 0.5em;
    align-items: flex-start;
  }
`;

const Text = styled.p`
  font-size: 1.2em;
  font-weight: 800;
  color: #8e59ff;
  margin-top: 0.625em;
  font-family: "NanumSquareNeo", sans-serif;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.25em;
  border-bottom: 0.0625em solid #a2a3b2;
  padding-top: 0.625em;
  font-family: "NanumSquareNeo", sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 1em;
    padding-top: 0.5em;
  }
`;

const WritingButton = styled.button`
  background-color: #8e59ff;
  border: 0.0625em solid #8e59ff;
  color: #fff;
  border-radius: 0.7em;
  font-weight: 700;
  width: 11.75em;
  height: 2.5em;
  margin-right: 0;
  font-family: "NanumSquareNeo", sans-serif;

  &:hover {
    background-color: #5548c8;
  }

  @media (max-width: 768px) {
    width: 9em;
    height: 2em;
    font-size: 0.9em;
  }
`;

const NoticeSquareWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 0.625em;
  margin-bottom: 1.875em;
  font-family: "NanumSquareNeo", sans-serif;

  @media (max-width: 768px) {
    gap: 0.5em;
    margin-bottom: 1.5em;
  }
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625em;
  margin-top: 0.625em;
  margin-left: 1.25em;
  font-family: "NanumSquareNeo", sans-serif;

  @media (max-width: 768px) {
    margin-top: 0.5em;
    margin-left: 0.5em;
    gap: 0.5em;
  }
`;
