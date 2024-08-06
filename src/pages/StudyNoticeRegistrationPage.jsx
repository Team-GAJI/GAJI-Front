import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import backImage from "../assets/images/common/mypageBackground.png";

const StudyNoticeRegistrationPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/studynotice-register");
  };

  const handleNavigateTroubleshooting = () => {
    navigate("/troubleshooting");
  };

  return (
    <>
      <HeaderWrapper>
        <ContentWrapper>
          <RowLogoWrapper>
            <LogoText>공지사항 글쓰기</LogoText>
          </RowLogoWrapper>

          <ButtonsWrapper>
            <StyledButton isActive={true} onClick={handleNavigate}>
              스터디 홈
            </StyledButton>
            <StyledButton
              isActive={true}
              onClick={handleNavigateTroubleshooting}
            >
              트러블 슈팅
            </StyledButton>
            <StyledButton isActive={true}>정보나눔</StyledButton>
            <StyledButton isActive={true}>채팅방</StyledButton>
          </ButtonsWrapper>

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
                <SubmitButton>공지사항 등록</SubmitButton>
              </SubmitButtonWrapper>
            </FormWrapper>
          </MainSection>
        </ContentWrapper>
      </HeaderWrapper>
    </>
  );
};

export default StudyNoticeRegistrationPage;

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
  font-family: "NanumSquareNeo", sans-serif;
  font-size: 1.2em;
  font-weight: 900;
  color: #8e59ff;
`;

const ButtonsWrapper = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  font-family: "NanumSquareNeo", sans-serif;
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
  padding: 0.9em;
  margin-top: 1.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a4ed9;
  }
`;
