import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";

const StudyNoticeRegistrationPage = () => {
  const navigate = useNavigate();
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleNavigate = (index) => {
    switch (index) {
      case 0:
        navigate("/studyroom");
        break;
      case 1:
        navigate("/troubleshooting");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("등록하시겠습니까?");
    if (confirmed) {
      console.log("Form submitted!");
    } else {
      console.log("Form submission canceled.");
    }
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
        pageTitle="공지사항 글쓰기"
        headerTitles={headerTitles}
        activeButtonIndex={activeButtonIndex}
        onButtonClick={handleNavigate}
        changeColorOnClick={false}
        changeColorOnHover={true}
      />
      <ContentWrapper>
        <MainSection>
          <FormWrapper>
            <FormField>
              <Label>공지사항 제목</Label>
              <Input placeholder="제목을 입력해주세요" />
            </FormField>
            <FormField>
              <Textarea placeholder="공지 내용을 입력해주세요" />
            </FormField>
            <SubmitButtonWrapper>
              <SubmitButton onClick={handleSubmit}>공지사항 등록</SubmitButton>
            </SubmitButtonWrapper>
          </FormWrapper>
        </MainSection>
      </ContentWrapper>
    </>
  );
};

export default StudyNoticeRegistrationPage;

const ContentWrapper = styled.div`
  flex-grow: 1;
`;

const MainSection = styled.section`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding-top: 1.5em;
  margin-bottom: 5em;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  font-family: "NanumSquareNeo", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  padding: 2em;

  @media (max-width: 1000px) {
    width: 90%;
    padding: 1.5em;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1em;
  }
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
`;

const Label = styled.label`
  font-family: "NanumSquareNeo", sans-serif;
  font-size: 1em;
  font-weight: 800;
  color: #333;
  margin-bottom: 1em;
  display: block;
`;

const Input = styled.input`
  font-family: "NanumSquareNeo", sans-serif;
  width: 100%;
  padding: 0.75em;
  font-size: 1em;
  border: 1px solid #a2a3b2;
  border-radius: 0.5em;
  box-sizing: border-box;

  &::placeholder {
    font-size: 1em;
  }
`;

const Textarea = styled.textarea`
  font-family: "NanumSquareNeo", sans-serif;
  width: 100%;
  padding: 0.75em;
  font-size: 0.9em;
  border: 1px solid #a2a3b2;
  border-radius: 0.5em;
  box-sizing: border-box;
  height: 150px;
  resize: none;

  &::placeholder {
    font-size: 1em;
  }
`;

const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SubmitButton = styled.button`
  font-family: "NanumSquareNeo", sans-serif;
  background-color: #8e59ff;
  border: 0.0625em solid #8e59ff;
  color: #fff;
  border-radius: 0.9em;
  font-weight: 700;
  width: 12em;
  padding: 1em;
  margin-top: 1.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a4ed9;
  }
`;
