import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PageHeader from '../components/common/PageHeader';
import StudySummary from '../components/studyRoom/StudySummary';
import WeekCurriculum from '../components/studyRoom/WeekCurriculum';
import StudyPostList from '../components/studyRoom/StudyPostList';
import { useNavigate, useLocation } from 'react-router-dom';
import MobileManageButton from '../components/common/MobileManageButton';
import { studyDetailAPI } from '../utils/studyDetail/studyDetailAPI';

const StudyRoomPage = () => {
    
    const [activeButtonIndex, setActiveButtonIndex] = useState(0);
    const location = useLocation();    
    const data = location.state?.data || {}; 
    const roomId = location.state?.roomId || {}; 
    const studyInfo = data;

    const navigate = useNavigate();
    
  
    const headerTitles = ["스터디 홈", "트러블 슈팅 게시판", "정보나눔 게시판", "채팅방"];
    const handleHeaderButtonClick = (index) => {
        setActiveButtonIndex(index);
        if (index === 0) {
          navigate('/studyroom' ,{state : {roomId : roomId}});
          console.log(studyInfo.weeksCount)
      } else if (index === 1) {
        navigate('/troubleshooting', {state : {roomId : roomId}});
      } else {
        navigate('/');
      }
    };

    useEffect(() => {
      // API 호출을 포함한 비동기 함수 선언
      const fetchStudyDetail = async () => {
        try {
          const response = await studyDetailAPI(roomId);
          console.log(response); // API 응답 처리
        } catch (error) {
          console.error('Error fetching study details:', error);
        }
      };
  
      // 비동기 함수 호출
      fetchStudyDetail();
    }, [roomId]); // roomId가 변경될 때마다 useEffect 실행

    return (
        <>
          <PageHeader
            large={true}
            pageTitle="스터디룸"
            headerTitles={headerTitles}
            activeButtonIndex={activeButtonIndex}
            onButtonClick={handleHeaderButtonClick}
            changeColorOnClick={true}
            changeColorOnHover={true}
          />
            <ContentWrapper>
              <SidebarWrapper>
                  <Sidebar>
                    {/* TODO 주차별 정보 불러와서 버튼만들기 추가 */}
                  {[...Array(studyInfo.weeksCount)].map((_, index) => (
                      <React.Fragment key={index}>
                      <SidebarButton bold={index === 0}>{index + 1}주차</SidebarButton>
                      {index < 8 }
                      </React.Fragment>
                  ))}
                  </Sidebar>
                  <SidebarManageButton onClick={()=>navigate('/studymanage', { state: { roomId : roomId } })}>스터디 관리</SidebarManageButton>
              </SidebarWrapper>
                  
              <MainContent>
                    <StudySummary studyInfo={studyInfo} roomId={roomId}/>  {/* StudySummary에 데이터 전달 */}
                    <DivisionLine2 />
                    <WeekCurriculum roomId={roomId} 
                      // week={studyInfo.weeksCount}/>
                      // 임시로 1주차로 설정
                        week={0}/>
                    <DivisionLine2 />
                    <StudyPostList roomId={roomId} />  {/* StudyPostList에 댓글 데이터 전달 */}
                </MainContent>
            </ContentWrapper>
            <div onClick={()=>navigate('/studymanage', { state: { roomId : roomId } })}>
            <MobileManageButton /></div>
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
  padding : 0.5em 0.5em;
  background-color : #FBFAFF;
  box-sizing: border-box;

  @media(max-width : 768px){
    padding : 0em 0em;
    font-size : 1em;
    border:none;
    flex-direction : row;
    height : 5em;
    width : 100%;
    justify-content : center;
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
    display : none;
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

  @media (max-width: 768px) {
    height : 2em;
    flex-direction: row;
    width: auto;
    min-width: 8em; 
    padding: 0.5em 0.5em;
    margin-top: 0.5em;
    font-size : 1em;
  }
`;

const SidebarWrapper = styled.div`
  width: 10%; 
  display: flex;
  flex-direction: column;
  gap: 1.25em; 
  position: fixed;
  left : 5%;
  
  
  @media(max-width: 768px) {
    position: sticky;
    top: 3em;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    overflow-x: scroll;
    overflow-y: hidden;
    z-index: 10;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1.25em; 
  color: #000;
  display: flex;
  flex-direction: column;
`;


