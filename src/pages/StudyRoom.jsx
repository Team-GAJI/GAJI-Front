import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../assets/logos/logo.svg';
import backImage from '../assets/images/mypageBackground.png';
import Footer from './Footer';
import StudyRecruitment from './StudyRecruitment';


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
    width: 100px;
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
    border-top: 1.3px solid #8E59FF;
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


const CircleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 30px;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #8E59FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 16px;
  transition: all 0.3s ease;
  color : #fff;
`;

const DefaultText = styled.div`
  position: absolute;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

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
    background-color: #fff;
    border: 1px solid #8E59FF;
    border-radius: 2px;
  }
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
    font-size: 20px;
    font-weight: 700px;
`;
const CountText = styled.p`
    color : #A2A3B2;
    font-size: 15px;
    font-weight: 700px;
    margin-left: auto;
    width: 100px;
    margin-right: 20px;
`;

const InputStudy = styled.input`
    width: 98%;
    height: 25px;
    border-radius: 8px;
    border: 1px solid #8E59FF;
    padding: 0.5em;
    margin-top: 0.5em;

    &::placeholder {
        color: #C8C8C8;
    }
`;


const StudyData = styled.div`
  width: 350px;
  height: 120px;
  border: 1px solid #000;
  border-radius: 20px;
  display: flex;
  position: relative;
`;

const LeftSide = styled.div`
  width: 120px; /* 왼쪽 이미지 영역의 너비 */
  height: 100%;
  background-image: url('path_to_your_image'); /* 이미지 경로 설정 */
  background-size: cover;
  background-position: center;
  border-radius: 20px 0 0 20px; /* 왼쪽 상단과 왼쪽 하단의 모퉁이 둥글게 */
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
`;
 
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
    
    margin-top: 0.5em;

    &::placeholder {
        color: #C8C8C8;
    }
`;





const StudyCategory = () => {
  
    const nicknames = ['닉네임1', '닉네임2', '닉네임3', '닉네임4', '닉네임5', '닉네임6', '닉네임7', '닉네임8'];

    const cardData = Array.from({ length: 3 }, (_, index) => ({
        id: index,
        title: `제목 ${index + 1}`,
        daysLeft: `D-${index + 1}`,
        description: `설명입니다. ${index + 1}`,
        imageUrl: `https://via.placeholder.com/250x150?text=Image${index + 1}`
    }));

    return (
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
                        <InputStudy placeholder="공지사항 | 여러분 이건 꼭 아셔야 합니다?! 모르면 이 스터디 못함~~ 알아줘이잉이히이잉" />
                        
                        <MinorText>스터디 자료</MinorText>
                        <StudyData>
                            <LeftSide />
                            <RightSide>
                                <Textarea placeholder="여기에 내용을 입력하세요..." />
                            </RightSide>
                        </StudyData>
                        
                        <DivisionLine2 />   
                        {/* N주차별 상세설명 */}
                        <div>
                        <MainText>4주차</MainText>
                        <Container>
                            <WeekSquare>Week 4 커리큘럼 제목</WeekSquare>
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
                                <TaskItem>과제 1</TaskItem>
                                <TaskItem>과제 2</TaskItem>
                                <TaskItem>과제 3</TaskItem>
                            </TaskList>
                            </TaskSquare>
                        </div>
                        <div>
                            <MinorText>내 과제</MinorText>
                            <TaskSquare>
                            <TaskList>
                                <TaskItem>과제 1</TaskItem>
                                <TaskItem>과제 2</TaskItem>
                                <TaskItem>과제 3</TaskItem>
                            </TaskList>
                            </TaskSquare>
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
                        </CircleContainer>
                        
                <MoreButton>스터디 단체 채팅방 입장하기</MoreButton>
                <DivisionLine />
                 {/* 그리드 컨테이너 시작 */}
                 <div style={{ flex: 1 }}>
                    <GridContainer>
                        <ButtonWrapper>
                            <MinorText>게시글</MinorText>
                            <OpenButton>게시글 작성하기</OpenButton>
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
            {/* Footer-아래 */}
            <Footer />
        </HeaderWrapper>
    );
};

export default StudyCategory;
