import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import StudyManageWeekManageDel from "../assets/icons/studyManageWeek/StudyManageWeekDel.svg";
import StudyManageWeekManageManagePlus from "../assets/icons/studyManageWeek/StudyManageWeekPlus.svg";

import ManageWeekBasics from "../components/studyManageWeek/ManageWeekBasics.jsx";
import ManageWeekeDate from "../components/studyManageWeek/ManageWeekDate.jsx";
import ManageWeekeDetailed from "../components/studyManageWeek/ManageWeekDetailed.jsx";
import PageHeader from "../components/common/PageHeader.jsx";

const StudyManageWeeKPage = () => {
  // n주차 버튼 기능 마지막 주차만 삭제, 추가 가능하도록 수정
  const [weeks, setWeeks] = useState([...Array(9).keys()]);
  const sidebarRef = useRef(null);

  const handleDelete = () => {
    if (weeks.length > 0) {
      setWeeks(weeks.slice(0, -1)); // 마지막 주차만 삭제
    }
  };

  const handleAdd = () => {
    setWeeks([...weeks, weeks.length]);
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.height = "auto";
      const newHeight = sidebarRef.current.scrollHeight;
      sidebarRef.current.style.height = `${newHeight}px`;
    }
  }, [weeks]);

  // 주차 선택
  const [selectedWeek, setSelectedWeek] = useState(0);

  const handleWeekSelect = (index) => {
    setSelectedWeek(index);
  };
  //studymanage 페이지로 이동
  const navigate = useNavigate();
  const handleButtonClick = (navigate) => {
    navigate("/studymanage");
  };

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  //헤더 함수
  const headerTitles = ["저장하기"];
  const handleHeaderButtonClick = (index) => {
    setActiveButtonIndex(index);
    if (index == 0) {
      // dispatch(setActiveButton("저장하기"));
    }
  };

  return (
    <>
      <Wrapper>
        {/* 헤더 */}
        <PageHeader
          pageTitle="스터디 관리 페이지"
          subTitle="스터디장에게만 보이는 메뉴에요"
          headerTitles={headerTitles}
          activeButtonIndex={activeButtonIndex}
          onButtonClick={handleHeaderButtonClick}
          changeColorOnClick={true}
          changeColorOnHover={true}
        />
        <MainSection>
          <SidebarWrapper>
            <Sidebar1 ref={sidebarRef}>
              {/* 기본정보 클릭시 StudyManagePage로 넘어가기 */}
              <BasicInfoButton onClick={() => handleButtonClick(navigate)}>
                기본정보
              </BasicInfoButton>
              {weeks.map((week, index) => (
                <React.Fragment key={week}>
                  <SidebarButton1
                    className={index === weeks.length - 1 ? "last-week" : ""}
                    bold={index === selectedWeek}
                    onClick={() => handleWeekSelect(index)}
                  >
                    <TextWrapper>{week + 1}주차</TextWrapper>
                    {index === weeks.length - 1 && (
                      <DelIconWrapper>
                        <DelIcons
                          src={StudyManageWeekManageDel}
                          alt="삭제"
                          onClick={handleDelete}
                        />
                      </DelIconWrapper>
                    )}
                  </SidebarButton1>
                </React.Fragment>
              ))}
              <PlusButton onClick={handleAdd}>
                <PlusIcons src={StudyManageWeekManageManagePlus} alt="추가" />
              </PlusButton>
            </Sidebar1>
          </SidebarWrapper>

          <ManageWeekBasics selectedWeek={selectedWeek} />
          <ManageWeekeDate selectedWeek={selectedWeek} />
          <ManageWeekeDetailed selectedWeek={selectedWeek} />
        </MainSection>
      </Wrapper>
    </>
  );
};

export default StudyManageWeeKPage;

const Wrapper = styled.div`
  z-index: 5;
  background-color: #fbfaff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 3.1em;
  width: 100%;
`;

const SidebarWrapper = styled.div`
  position: absolute;
  margin-top: 1.25em;
  right: -2.375em;
  height: 100vh;
  width: 15.625em;
  padding: 1.25em;
  box-sizing: border-box;
`;
const Sidebar1 = styled.aside`
  transition: height 0.5s ease;
  overflow: hidden;
  background-color: #fbfaff;
  display: flex;
  flex-direction: column;
  border: 1px solid #a2a3b2;
  border-radius: 0.5em;
  width: 11.25em;
  height: 32.5em;
  margin-top: 1.9375em;
`;
const DelIconWrapper = styled.div`
  visibility: hidden;
  margin-left: 0em;
  margin-bottom: -0.3em;
`;

const DelIcons = styled.img`
  width: 3em;
  height: auto;
`;
const TextWrapper = styled.div`
  flex: 1;
  text-align: center;
  // color : ${(props) => (props ? "#8E59FF" : "#A2A3B2")};
`;

const SidebarButton1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #a2a3b2;
  font-weight: ${(props) => (props.bold ? "800" : "400")};
  margin-top: 0.625em;
  padding: 0.6em 0.625em;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid #8e59ff;
    border-radius: 0.5em;
    color: #8e59ff;
    margin-left: 0.4em;
    margin-right: 0.4em;
    font-weight: 800;
  }
  // 마지막 주차 글자 위치조정
  &.last-week {
    margin-left: 3em;
    position: relative;
  }

  &.last-week:hover {
    border: 1px solid #8e59ff;
    border-radius: 0.5em;
    color: #8e59ff;
    margin-left: 0.4em;
    margin-right: 0.4em;
    font-weight: 800;

    ${DelIconWrapper} {
      visibility: visible;
    }

    ${TextWrapper} {
      text-align: center;
      // 마지막 주차 글 위치 수정해라~
    }
  }
`;

const BasicInfoButton = styled(SidebarButton1)`
  font-size: 1em;
  font-weight: 1.125em;
  background-color: #8e59ff;
  border: none;
  background-color: transparent;
  color: #a2a3b2;
`;

/* 화면 분활 (오른쪽 사이드) */
const MainSection = styled.section`
  display: flex;
  flex: 1;
  padding-top: 30px;
  /*overflow: auto;*/
  flex-direction: row;
  gap: 20px;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`;
const PlusButton = styled.button`
  font-size: 1em;
  font-weight: 1.125em;
  background-color: #8e59ff;
  border: none;
  background-color: transparent;
  color: #a2a3b2;
  padding: 0.6em 0.625em;
`;
const PlusIcons = styled.img`
  width: 1em;
  height: auto;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0) saturate(100%) invert(29%) sepia(90%) saturate(1996%)
      hue-rotate(246deg) brightness(94%) contrast(101%);
  }
`;
