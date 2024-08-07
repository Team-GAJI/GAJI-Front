import React, { useState } from 'react';
import styled from 'styled-components';
import backImage from '../assets/images/common/mypageBackground.png'
import StudyRecruitment from '../components/studyRoom/StudyRecruitment';
import Book from '../assets/images/studyRoom/Rectangle 34624913.png';
import Plus from '../assets/icons/studyRoom/Plus.png';
import AlarmIcon from '../assets/icons/studyRoom/Alarm.png';
import { useNavigate } from 'react-router-dom';


const StudyRoomPage = () => {
  
    const nicknames = ['닉네임1', '닉네임2', '닉네임3', '닉네임4', '닉네임5', '닉네임6', '닉네임7', '닉네임8'];
    const navigate = useNavigate();
    const cardData = Array.from({ length: 3 }, (_, index) => ({
        id: index,
        title: `제목 ${index + 1}`,
        daysLeft: `D-${index + 1}`,
        description: `설명입니다. ${index + 1}`,
        imageUrl: `https://via.placeholder.com/250x150?text=Image${index + 1}`
    }));

    const [activeTasks, setActiveTasks] = useState({});

    const toggleTask = (taskId) => {
      setActiveTasks((prev) => ({
        ...prev,
        [taskId]: !prev[taskId],
      }));
    };

    const alarmData = {
      1: 3, 
      2: 5,   
    };
  
    const id = 1;  
    const alarmCount = alarmData[id]; 
    
    return (
        <>
        <HeaderWrapper>
            <ContentWrapper>
                {/* 로고와 로고 텍스트 */}
                <RowLogoWrapper>
                    <LogoText>스터디룸</LogoText>
                </RowLogoWrapper>

                {/* 카테고리 메뉴 선택 */}
                <RowSelectWrapper>
                    <SelectButton>스터디 홈 </SelectButton>
                    <SelectButton onClick={()=>navigate()}>트러블 슈팅 게시판 </SelectButton>
                    <SelectButton>정보나눔 게시판 </SelectButton>
                    <SelectButton>채팅방</SelectButton> 
                </RowSelectWrapper>

                <MainSection>
                    <SidebarWrapper>
                        <Sidebar1>
                        {[...Array(9)].map((_, index) => (
                            <React.Fragment key={index}>
                            <SidebarButton bold={index === 0}>{index + 1}주차</SidebarButton>
                            {index < 8 }
                            </React.Fragment>
                        ))}
                        </Sidebar1>
                        <Sidebar2Button>스터디 관리</Sidebar2Button>
                    </SidebarWrapper>

                    <MainContent>
                        <Container>
                            <MainText>스터디 이름</MainText>
                            <TagButton># 태그</TagButton>
                            <TagButton># 태그</TagButton>
                            <OpenButton>모집중 D-5</OpenButton>  {/*버튼 이름 수정...?*/}
                        </Container>
                        <Container>
                            <CloudyText>2024.05.05~2024.07.05</CloudyText>
                            <CountText>1000명 지원</CountText>
                        </Container>
                        
                        <MinorText>스터디 설명</MinorText>
                        <CloudyText>스터디 설며어엉어어어어어어어어어어ㅓ어엉 우짜니니니닌</CloudyText>
                        
                        <DivisionLine />
                        <MinorText>공지사항</MinorText>
                        <InputWrapper>
                            <Icon src={AlarmIcon} alt="공지" />
                            <StyledInput placeholder=" 공지사항 | 여러분 이건 꼭 아셔야 합니다?! 모르면 이 스터디 못함~~ 알아줘이잉이히이잉" />
                            <NoticeButton1>{alarmCount}</NoticeButton1>
                        </InputWrapper>
                        <MinorText>스터디 자료</MinorText>
                        {/* 그리드 컨테이너 시작 */}
                        <div style={{ flex: 1 }}>
                        <DataGridContainer>
                            <DataGridRow>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <StudyData key={index}>
                                <LeftSide />
                                <RightSide>
                                    <StudyText>제목</StudyText>
                                    <Textarea placeholder="설명을 입력하세요" />
                                </RightSide>
                                </StudyData>
                            ))}
                            </DataGridRow>
                        </DataGridContainer>
                        </div>
                        {/* 그리드 컨테이너 끝 */}         
                        
                        
                        <DivisionLine2 />   
                        {/* N주차별 상세설명 */}
                        <div>
                        <MainText>4주차</MainText>
                        <Container>
                            <WeekSquare>Week 4 커리큘럼 제목</WeekSquare>
                            {/* 이거 클릭시 블럭 안나오게 해라~ */}
                            <InputWeek placeholder="상세 설명해주세요ㅠㅠ 비온다아앙아"></InputWeek>
                        </Container>
                        </div>
                        <DivisionLine /> 
                        {/* 과제 목차 */}
                        <TaskContainer>
                        <div>
                            <MinorText>이번주 과제</MinorText>
                            <TaskSquare>
                            <TaskList>
                            <TaskItem
                                isActive={activeTasks['task-1']}
                                onClick={() => toggleTask('task-1')}
                            >
                                과제 1
                            </TaskItem>
                            <TaskItem
                                isActive={activeTasks['task-2']}
                                onClick={() => toggleTask('task-2')}
                            >
                                과제 2
                            </TaskItem>
                            <TaskItem
                                isActive={activeTasks['task-3']}
                                onClick={() => toggleTask('task-3')}
                            >
                                과제 3
                            </TaskItem>
                            </TaskList>
                            </TaskSquare>
                        </div>
                        <div>
                            <MinorText>내 과제</MinorText>
                            <MyStudyData>
                                    <MyLeftSide>
                                        <TaskText>남은 과제</TaskText>
                                        <CountTaskText>1개</CountTaskText>
                                        <DeadlineText>마감 기한</DeadlineText>
                                        <Container>
                                            <MonthText>3월1일</MonthText>
                                            <DayText>D - 5</DayText>
                                        </Container>

                                    </MyLeftSide>
                                    <MyRightSide>
                                        <MyRightText>66%</MyRightText>
                                    </MyRightSide>
                                  
                            </MyStudyData>
                        </div>
                        </TaskContainer>
                       
                        {/*과제 달성도(팀원) */}
                        <MinorText>스터디원 달성도</MinorText>
                        <CircleContainer>
                        {nicknames.map((nickname, index) => (
                        <Circle key={index}>
                        <DefaultText className="default-text">{nickname}</DefaultText>
                        </Circle>
                        ))}
                        <TaskWrapper>
                            <Task1><CloudyText>100%</CloudyText></Task1>
                            <Task2><CloudyText>50%</CloudyText></Task2>
                            <Task3><CloudyText>0%</CloudyText></Task3>
                        </TaskWrapper>
                        </CircleContainer>
                <MoreWrapper>
                  <MoreButton>스터디 단체 채팅방 입장하기</MoreButton>
                  <NoticeButton2>{alarmCount}</NoticeButton2>
                </MoreWrapper>        
               
                <DivisionLine2 />
                 {/* 그리드 컨테이너 시작 */}
                 <div style={{ flex: 1 }}>
                    <GridContainer>
                        <ButtonWrapper>
                            <MinorText>게시글</MinorText>
                            <OpenButton> <Icons src={Plus} alt="플러스" style={{ width: '10px', height: 'auto' }}/>게시글 작성하기</OpenButton>
                        </ButtonWrapper>
                        <GridRow>
                            {cardData.map(item => (
                                <StudyRecruitment
                                    key={item.id}
                                    title={item.title}
                                    daysLeft={item.daysLeft}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                />
                            ))}
                        </GridRow>
                    </GridContainer>
                    </div>
                 {/* 그리드 컨테이너 끝 */}         

                </MainContent>
                
            </MainSection>
   
            </ContentWrapper>
        </HeaderWrapper>
        </>
    );
};

export default StudyRoomPage;

const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
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
    font-size: 1.25em;
    font-weight: 800;
    color: #8E59FF;
`;

const RowSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.625em;
    margin-left: 18.75em; 
    gap: 0.825em; 
`;

const SelectButton = styled.div`
    background-color: #8E59FF;
    border-radius: 0.5em;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    width: 10.5em; 
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.25em; 
    gap: 0.625em; 
    margin-top: 1.25em; 
`;

const TagButton = styled(SelectButton)`
    background-color: #fff;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #8E59FF;
    cursor: pointer;
    margin-right: auto;
    width: 5em; 
    margin-right: 0.0625em; 
    margin-left: 1.25em;
`;

const OpenButton = styled(SelectButton)`
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
    width: 10.5em; 
    margin-right: 1.25em; 
`;

const MoreButton = styled.div`
    background-color: #8E59FF;
    border-radius: 0.5em; 
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: auto;
    width: 18.75em; 
    margin: 0 auto;
    margin-top: 3.75em; 
    margin-bottom: 1.875em; 
`;

const DivisionLine = styled.div`
    border-top: 0.0625em solid #A2A3B2; 
    margin: 1.25em 0px; 
    width: 98%;
`;

const DivisionLine2 = styled.div`
    border-top: 0.1125em solid #8E59FF; 
    margin: 1.25em 0px; 
    width: 98%;
`;

const ContentWrapper = styled.div`
    overflow-y: auto;
    flex-grow: 1;
`;

const GridContainer = styled.div`
    display: grid;
    gap: 1.25em; 
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25em; 
`;

const DataGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.625em; 
  width: 100%;
`;

const DataGridRow = styled.div`
  display: contents;
`;

const Sidebar1 = styled.aside`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 0.0625em solid #A2A3B2; 
  border-radius: 0.5em; 
  width: 9.375em; 
  height: 25em; 
  margin-top: 1.25em; 
`;

const Sidebar2Button = styled.button`
  background-color: #8E59FF;
  border: 0.0625em solid #8E59FF;
  color: #fff;
  border-radius: 0.5em; 
  font-weight: 700;
  width: 11.375em; 
  height: 3.125em; 
  margin-top: 0.625em; 
`;

const SidebarButton = styled.button`
  background-color: transparent;
  color: #A2A3B2;

  font-weight: 1.125em; 
  margin-top: 0.625em; 
  padding: 0.6em 0.625em; 
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    border : 1px solid #8E59FF;
    border-radius: 0.5em; 
    color: #8E59FF;
    margin-left: 0.4em; 
    margin-right : 0.4em;
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25em; 
`;

const MainSection = styled.section`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding-top: 1.875em; 
  overflow: auto;
  flex-direction: row;
  gap: 1.25em; 
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1.25em; 
  color: #000;
  display: flex;
  flex-direction: column;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.625em;
  margin-top: 1.875em; 
`;

const Circle = styled.div`
  width: 4em; 
  height: 4em;
  border-radius: 50%;
  background-color: #8E59FF;
  cursor: pointer;
`;

const DefaultText = styled.div`
  position: absolute;
  opacity: 1;
  transition: opacity 0.3s ease;
  color : #fff;
  font-size : 0.8125em;
  align-items: center;
  margin-top :  1.9em;
  margin-left: 0.7em;
`;

const Task1 = styled.li`
  list-style: none;  
  position: relative;
  padding-left: 1.5625em; 
  margin-bottom: 0.9375em; 
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9375em; 
    height: 0.9375em; 
    background-color: #8E59FF;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.125em;
  }
`;

const Task2 = styled.li`
  list-style: none;  
  position: relative;
  padding-left: 1.5625em; 
  margin-bottom: 0.9375em; 
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9375em; 
    height: 0.9375em; 
    background-color: #8E59FF;
    opacity: 60%;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.125em; 
  }
`;

const Task3 = styled.li`
  list-style: none;  
  position: relative;
  padding-left: 1.5625em; 
  margin-bottom: 0.9375em;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9375em; 
    height: 0.9375em;
    background-color: #fff;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.125em;
  }
`;

const TaskWrapper = styled.div`
  margin-left: 8.75em; 
  display: flex;
  align-items: center;
  gap: 1em; 
`;

/* 과제 리스트 */
const TaskSquare = styled.div`
  width: 21.875em; 
  height: 7.5em; 
  border: 0.0625em solid #A2A3B2; 
  border-radius: 1.25em; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.25em; 
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const TaskItem = styled.li`
  position: relative;
  padding-left: 1.5625em; 
  margin-bottom: 0.9375em; 
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.9375em; 
    height: 0.9375em; 
    background-color: ${({ isActive }) => (isActive ? '#8E59FF' : '#fff')};
    border: 0.0625em solid ${({ isActive }) => (isActive ? '#8E59FF' : '#8E59FF')}; 
    border-radius: 0.125em; 
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #A2A3B2; 
    text-decoration: line-through;
  `}
`;

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

/* 글자 스타일 */
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MainText = styled.h1`
  font-size: 1em;
  font-weight: 700;
  color: #8E59FF;
`;

const CloudyText = styled.p`
  color: #A2A3B2;
  font-size: 0.9375em; 
  font-weight: 700;
`;

const MinorText = styled.h3`
  font-size: 1em;
  font-weight: 800;
`;

const CountText = styled.p`
  color: #A2A3B2;
  font-size: 0.9375em;
  font-weight: 700;
  margin-left: auto;
  width: 6.25em;
  margin-right: 1.25em; 
`;

const StudyData = styled.div`
  width: 13.75em; 
  height: 7.5em; 
  border: 0.0625em solid #8E59FF; 
  border-radius: 1.25em; 
  overflow: hidden; 
  display: flex;
  position: relative;
`;

const LeftSide = styled.div`
  width: 50%; 
  height: 100%;
  background-image: url(${Book});
  background-size: cover;
  background-position: center;
`;

const RightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin-left: 0.3125em; 
`;

const Textarea = styled.textarea`
  width: calc(100% - 2.5em); 
  height: calc(100% - 2.5em); 
  resize: none;
  border: none;
  font-size: 0.875em; 
  margin-top: 0.125em; 
  outline: none;
  overflow: hidden;
`;

const StudyText = styled.div`
  font-size: 0.9125em;
  font-weight: 800;
  margin-top: 1.25em; 
`;

const MyRightText = styled.p`
  color: #8E59FF;
  font-weight: 800;
  background-color: transparent;
  margin-left: 1.25em; 
  padding: 0.625em 0.625em; 
  font-size: 2em;
  text-align: center;
`;

const TaskText = styled.p`
  color: #000;
  font-weight: 800;
  background-color: transparent;
  margin-left: 0.1em;
  padding: 0.2em 0em;
  font-size: 1em;
  margin-bottom: -0.625em; 
  margin-top: 3.75em; 
`;

const DeadlineText = styled.p`
  color: #000;
  font-weight: 800;
  background-color: transparent;
  margin-left: 0.1em;
  padding: 0.2em 0em;
  font-size: 1em;
  margin-bottom: -0.625em; 
  margin-top: 0.625em; 
`;

const CountTaskText = styled.p`
  color: #8E59FF;
  font-weight: 600;
  background-color: transparent;
  margin-left: 0.1em;
  padding: 1px 0px;
  font-size: 1em;
`;

const DayText = styled.p`
  color: #8E59FF;
  font-weight: 700;
  margin-top: 0.9375em; 
  background-color: transparent;
  padding: 0.5em 0.5em;
  text-align: center;
`;

const MonthText = styled.p`
  color: #A2A3B2;
  font-weight: 600;
  background-color: transparent;
  margin-left: -0.125em; 
  padding: 0.0625em 0px; 
  font-size: 1em;
`;

/* N주 상세 설명 */
const WeekSquare = styled.div`
  width: 21.875em; 
  height: 3.75em; 
  border: 0.0625em solid; 
  border-radius: 0.625em 0 0 0.625em; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  position: relative;
  background-color: #8E59FF;
  font-size: 0.9375em; 
  font-weight: bold; 
  color: #fff;
`;

const InputWeek = styled.textarea`
  width: 25em; 
  height: 5em; 
  border-radius: 0.5em; 
  border: 0.0625em solid #fff; 
  outline: none;
  margin-top: 1.5em;
  resize: none; 
  padding: 0.5em; 

  &::placeholder {
    color: #C8C8C8;
  }
`;

/* 내 과제 */
const MyStudyData = styled.div`
  border-radius: 1.25em; 
  overflow: hidden; 
  display: flex;
  position: relative;
  width: 21.875em; 
  height: 7.5em;
  border: 0.0625em solid #A2A3B2; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.25em;
`;

const MyLeftSide = styled.div`
  width: 50%; 
  height: 200%;
  background-size: cover;
  background-position: center;
  border-right: 0.0625em solid #A2A3B2; 
`;

const MyRightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 0.625em 1.25em; 
`;

/* 아이콘 */
const Icons = styled.img`
  width: 0.75em; 
  height: auto;
  margin-right: 0.625em;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%; 
`;

const StyledInput = styled.input`
  padding-left: 1.875em; 
  width: 95%;
  height: 2.5em; 
  border-radius: 0.5em; 
  border: 0.0625em solid #8E59FF; 
  outline: none;
  &::placeholder {
    color: #C8C8C8;
  }
`;

const Icon = styled.img`
  position: absolute;
  left: 0.9375em; 
  top: 50%;
  transform: translateY(-50%);
  width: 0.75em; 
  height: auto;
`;

/* 공지사항 알림 */
const NoticeButton1 = styled.button`
  border-radius: 50%;  
  border: 0.0625em solid #FF0043;
  width: 1.875em;
  height: 1.875em; 
  background-color: #FF0043;
  color: white;
  font-size: 0.8125em; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;  
  top: -0.825em; 
  right: 0.425em; 
`;

const MoreWrapper = styled.div`
  position: relative; 
  display: inline-block; 
`;

const NoticeButton2 = styled.button`
  border-radius: 50%;  
  border: 0.0625em solid #FF0043; 
  width: 1.875em; 
  height: 1.875em; 
  background-color: #FF0043;
  color: white;
  font-size: 0.8125em; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;  
  top: 2.8125em; 
  right: 25.4em; 
`;
