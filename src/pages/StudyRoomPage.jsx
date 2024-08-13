import React, { useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../components/common/PageHeader';
import StudySummary from '../components/studyRoom/StudySummary';
import WeekCurriculum from '../components/studyRoom/WeekCurriculum';
import StudyPostList from '../components/studyRoom/StudyPostList';
import { useNavigate, useLocation } from 'react-router-dom';

const StudyRoomPage = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const location = useLocation();    
    const data = location.state?.data || {}; 
    const studyInfo = data;

    const navigate = useNavigate();
  
    const headerTitles = ["스터디 홈", "트러블 슈팅 게시판", "정보나눔 게시판", "채팅방"];
    const handleHeaderButtonClick = (index) => {
        setActiveButtonIndex(index);
        if (index === 0) {
          navigate('/studyroom');
      } else if (index === 1) {
        navigate('/troubleshooting');
      } else {
        navigate('/');
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
                      <SidebarButton bold={index === 0}>{index + 1}주차</SidebarButton>
                      {index < 8 }
                      </React.Fragment>
                  ))}
                  </Sidebar>
                  <SidebarManageButton onClick={()=>navigate('/studymanage')}>스터디 관리</SidebarManageButton>
              </SidebarWrapper>
                  
              <MainContent>
                    <StudySummary studyInfo={studyInfo} />  {/* StudySummary에 데이터 전달 */}
                    <DivisionLine2 />
                    <WeekCurriculum />
                    <DivisionLine2 />
                    <StudyPostList comments={studyInfo?.comments} />  {/* StudyPostList에 댓글 데이터 전달 */}
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
`




const DivisionLine2 = styled.div`
    border-top: 0.1125em solid #8E59FF; 
    margin: 2.125em 0px; 
    width: 100%;
`;


const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.0625em solid #A2A3B2; 
  border-radius: 0.5em; 
  padding : 0em 0.5em 0.5em;
  background-color : #FBFAFF;
  box-sizing: border-box;

  @media(max-width : 768px){
    position : static;
    flex-direction: row;
    width: auto;
    padding : 0.5em  0.5em;
    overflow-x : scroll;
    height : auto;
    margin-top: 0em; 
    
  }
`;

const SidebarManageButton = styled.button`
  background-color: #8E59FF;
  border: 0.0625em solid #8E59FF;
  color: #fff;
  border-radius: 0.5em; 
  font-weight: 700;
  padding : 0.75em;
  margin-top: 0.625em; 
  box-sizing : border-box;
  @media(max-width : 768px){
    margin-top: 0em; 
    
  }
`;

const SidebarButton = styled.button`
  background-color: transparent;
  color: #A2A3B2;

  font-weight: 1.125em; 
  padding: 0.6em 0.625em; 
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s;
  box-sizing : border-box;
  &:hover {
    border : 1px solid #8E59FF;
    border-radius: 0.5em; 
    color: #8E59FF;
    margin-left: 0.4em; 
    margin-right : 0.4em;
  }
`;

const SidebarWrapper = styled.div`
  width: 10%; 
  position : fixed;
  left : 3em;
  display: flex;
  flex-direction: column;
  gap: 1.25em; 

  @media(max-width : 768px){
    position : static;
    flex-direction: row;
    width: auto;
    overflow-x : scroll;
    height : auto;
    
  }
`;


const MainContent = styled.div`
  flex: 1;
  padding: 1.25em; 
  color: #000;
  display: flex;
  flex-direction: column;
`;


