import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../assets/logos/logo.svg';
import backImage from '../assets/images/mypageBackground.png';
import Footer from './Footer';
import StudyRecruitment from './StudyRecruitment';
import Book from '../assets/images/Rectangle 34624913.png';
import Plus from '../assets/icons/Plus.png';
import AlarmIcon from '../assets/icons/Alarm.png';


const StudyCategory = () => {
  
    const nicknames = ['닉네임1', '닉네임2', '닉네임3', '닉네임4', '닉네임5', '닉네임6', '닉네임7', '닉네임8'];

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

    return (
        <>
        <HeaderWrapper>
            <ContentWrapper>
                {/* 상단 사이드바 토글 버튼과 로그인 버튼 */}
                <RowWrapper>
                    <SidebarToggle>☰</SidebarToggle>
                    <AuthButton>LOG IN</AuthButton>
                </RowWrapper>

                {/* 로고와 로고 텍스트 */}
                <RowLogoWrapper>
                    <LogoImage src={Logo} alt="로고" />
                    <LogoText>스터디룸</LogoText>
                </RowLogoWrapper>

                {/* 카테고리 메뉴 선택 */}
                <RowSelectWrapper>
                    <SelectButton>스터디 홈 </SelectButton>
                    <SelectButton>트러블 슈팅 게시판 </SelectButton>
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
                        <Sidebar2>
                        <Text>스터디장 메뉴</Text>
                        <SidebarButton>스터디명 수정</SidebarButton>
                        <SidebarButton>스터디 일정 수정</SidebarButton>
                        <SidebarButton>커리큘럼 수정</SidebarButton>
                        <SidebarButton>스터디 자료 수정</SidebarButton>
                        <SidebarButton>진행방식 수정</SidebarButton>
                        <SidebarButton>게시판 만들기</SidebarButton>
                        </Sidebar2>
                    </SidebarWrapper>

                    <MainContent>
                        <Container>
                            <MainText>스터디 명</MainText>
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
                            <Icon src={AlarmIcon} alt="공지" style={{ width: '10px', height: 'auto' }}/>
                            <StyledInput placeholder=" 공지사항 | 여러분 이건 꼭 아셔야 합니다?! 모르면 이 스터디 못함~~ 알아줘이잉이히이잉" />
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
                        
                <MoreButton>스터디 단체 채팅방 입장하기</MoreButton>
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
            {/* Footer-아래 */}
            <Footer />
        </>
    );
};

export default StudyCategory;

const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
`;

const RowWrapper = styled.div`
    padding-top: 20px;
    display: flex;
    align-items: center;
    gap: 60em; 
    margin-top: 10px; 
`;

const SidebarToggle = styled.div`
    cursor: pointer;
    font-size: 20px;
    padding: 0.8125em;
`;

const AuthButton = styled.div`
    font-size: 0.8125em;
    width: 123px;
    border: 1px solid #161A3F;
    border-radius: 10px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
`;

const RowLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9em;
    flex-direction: column; 
    justify-content: center; 
    padding: 20px; 

    background-image: url(${backImage}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
`;

const LogoImage = styled.img`
    width: 40px; 
    height: auto; 
`;

const LogoText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #8E59FF;
`;



const RowSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 300px;
    gap: 10px; 
`;


const SelectButton = styled.div`
    background-color: #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    width: 120px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    gap: 10px; 
    margin-top : 20px;
`;

const TagButton = styled(SelectButton)`
    background-color: #fff;
    border : 1px solid #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #8E59FF;
    cursor: pointer;
    margin-right: auto;
    width: 80px;
    margin-right: 1px;
    margin-left: 20px;
`;

const OpenButton = styled(SelectButton)`
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
    width: 120px;
    margin-right: 20px;
`;

const MoreButton = styled.div`
    background-color: #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: auto;
    width: 300px;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 30px;
`;

const DivisionLine = styled.div`
    border-top: 1px solid #A2A3B2;
    margin: 20px 0px;
    width: 98%;
`;
const DivisionLine2 = styled.div`
    border-top: 1.8px solid #8E59FF;
    margin: 20px 0px;
    width: 98%;
`;
const ContentWrapper = styled.div`
    overflow-y: auto;
    flex-grow: 1;
`;
/* 모집 카드 스타일 */
const GridContainer = styled.div`
    display: grid;
    gap: 20px;
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

/*스터디 자료 카드 스타일 */
const DataGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 10px; 
  width: 100%;
`;

const DataGridRow = styled.div`
  display: contents
`;

/* n주차 스타일 */
const Sidebar1 = styled.aside`
  
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 8px;
  width: 150px;
  height : 400px;
  margin-top: 20px;
`;

const Sidebar2 = styled.aside`
  
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 8px;
  width: 150px;
  height : 310px;
  margin-top: 20px;
`;

const Text = styled.div`
    color: #8E59FF;
    font-weight: 700;
    margin-top: 10px;
    background-color: transparent;
    padding: 8px 10px;
    font-weight: 18px;
    text-align: center;
`;

const SidebarButton = styled.div`
  margin-top: 10px;
  background-color: transparent;
  color: #A2A3B2;
  padding: 8px 10px;
  font-weight: 18px;
  text-align: center;
 `;

 const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px; 
`;

 /* Main 글 스타일 */
const MainSection = styled.section`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding-top: 30px;
  overflow: auto;
  flex-direction: row; 
  gap: 20px; 
`;
const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  color: #000;
  display: flex;
  flex-direction: column;
`;

/* 과제 달성도 (원)*/
const CircleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 30px;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #8E59FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;
  transition: all 0.3s ease;
  color : #fff;
`;

const DefaultText = styled.div`
  position: absolute;
  opacity: 1;
  transition: opacity 0.3s ease;
`;
const Task1 = styled.li`
  list-style: none;  
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: #8E59FF;
    border: 1px solid #8E59FF;
    border-radius: 2px;
  }
`;

const Task2 = styled.li`
  list-style: none;  
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: #8E59FF;
    opacity : 60%;
    border: 1px solid #8E59FF;
    border-radius: 2px;
  }
`;

const Task3 = styled.li`
  list-style: none;  
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: #fff;
    border: 1px solid #8E59FF;
    border-radius: 2px;
  }
`;
const TaskWrapper = styled.div`
    margin-left : 140px;
    display: flex;
    align-items: center;
    gap: 1em; 
`;

/* 과제 리스트 */
const TaskSquare = styled.div`
  width: 350px;
  height: 120px;
  border: 1px solid #A2A3B2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;

`;
const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const TaskItem = styled.li`
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: ${({ isActive }) => (isActive ? '#8E59FF' : '#fff')};
    border: 1px solid ${({ isActive }) => (isActive ? '#8E59FF' : '#8E59FF')};
    border-radius: 2px;
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

/*글자 스타일*/
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MainText = styled.h1`
    font-size: 30px;
    font-weight: 700px;
    color : #8E59FF;
`;
const CloudyText = styled.p`
    color : #A2A3B2;
    font-size: 15px;
    font-weight: 700px;

`;

const MinorText = styled.h3`
    font-size: 1.2em;
    font-weight: 700;
`;
const CountText = styled.p`
    color : #A2A3B2;
    font-size: 15px;
    font-weight: 700px;
    margin-left: auto;
    width: 100px;
    margin-right: 20px;
`;


const StudyData = styled.div`
  width: 220px;
  height: 120px;
  border: 1px solid #8E59FF;
  border-radius: 20px;
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
  /*border-right: 1px solid #000;*/ 
`;

const RightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  margin-left : 5px;

`;

const Textarea = styled.textarea`
  width: calc(100% - 40px); 
  height: calc(100% - 40px); 
  resize: none;
  border: none;
  font-size: 14px;
  margin-top: 2px;
  outline : none;
  overflow: hidden;
`;
const StudyText = styled.div`
  font-size: 0.9125em ;
  font-weight: 800;
  margin-top: 20px; 
 
`;
const MyRightText = styled.p`
    color: #8E59FF;
    font-weight: 800;
    background-color: transparent;
    margin-left : 20px;
    padding: 10px 10px;
    font-size: 2em ;
    text-align: center;
`;
const TaskText = styled.p`
    color: #000;
    font-weight: 800;
    background-color: transparent;
    margin-left : 0.1em;
    padding: 0.2em 0em;
    font-size: 1em ;
    margin-bottom: -0.625em;
    margin-top: 3.75em;
`;
const DeadlineText = styled.p`
    color: #000;
    font-weight: 800;
    background-color: transparent;
    margin-left : 0.1em;
    padding: 0.2em 0em;
    font-size: 1em ;
    margin-bottom: -0.625em;
    margin-top: 0.625em;  
`;
const CountTaskText = styled.p`
    color: #8E59FF;
    font-weight: 600;
    background-color: transparent;
    margin-left : 0.1em;
    padding: 1px 0px;
    font-size: 1em ;
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
    margin-left : -2px;
    padding: 1px 0px;
    font-size: 1em ;
`;
/* N주 상세 설명 */ 
const WeekSquare = styled.div`
  width: 350px;
  height: 60px;
  border: 1px solid;
  border-radius: 10px 0 0 10px;  
  display: flex;
  align-items: center; 
  justify-content: center; 
  position: relative;
  background-color: #8E59FF;
  font-size: 15px;
  font-weight: bold; 
  color: #fff;
`;

const InputWeek = styled.input`
    width: 350px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #fff;
    outline : none;
    margin-top: 0.5em;

    &::placeholder {
        color: #C8C8C8;
    }
`;

/* 내 과제 */

const MyStudyData = styled.div`
  border-radius: 20px;
  overflow: hidden; 
  display: flex;
  position: relative;
  width: 350px;
  height: 120px;
  border: 1px solid #A2A3B2;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
`;

const MyLeftSide = styled.div`
  width: 50%; 
  height: 200%;
  background-size: cover;
  background-position: center;
  border-right: 1px solid #A2A3B2; 
`;

const MyRightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 10px 20px; 
`;

/* 아이콘 */
const Icons = styled.img`
    width: 12px; 
    height: auto;
    margin-right : 10px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%; 
`;

const StyledInput = styled.input`
  padding-left: 30px; 
  width: 95%;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #8E59FF;
  border-radius: 8px;

  &::placeholder {
    color: #C8C8C8;
  }
`;
const Icon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: auto;
`;