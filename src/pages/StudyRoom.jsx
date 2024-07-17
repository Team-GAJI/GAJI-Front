import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #2B2E38;
  color: #fff;
`;

const Header = styled.header`
  padding: 10px 20px;
  background-color: #2B2E38;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 10px 20px;
  margin-left: 10px;
`;

const MainSection = styled.section`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding-top: 30px;
  overflow: auto;
`;

const Sidebar = styled.aside`
  width: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const RightSidebar = styled(Sidebar)`
  margin-right: 20px;
`;

const SidebarButton = styled(Button)`
  margin-bottom: 10px;
  background-color: transparent;
  color: #3e4251;
  padding: 6px 10px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  ${props =>
    props.large &&
    css`
      font-size: 18px;
    `}
`;

const SidebarDivider = styled.div`
  height: 0.5px;
  background-color: #3E4251;
  margin: 0 30px 10px;
  
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  color: #000;
  display: flex;
  flex-direction: column;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 20px; 
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
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 16px;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 50%;
    box-sizing: border-box;
  }

  &:hover {
    background-color: rgba(96, 79, 164, 0.3);
  }

  &:hover .hover-text {
    opacity: 1;
  }

  &:hover .default-text {
    opacity: 0;
  }
`;

const HoverText = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const DefaultText = styled.div`
  position: absolute;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

const Square = styled.div`
  width: 350px;
  height: 120px;
  border: 1px solid #000;
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
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
`;

const Rectangle = styled.div`
  width: 100%; 
  padding: 20px;
  border-bottom: 500px solid #D9D9D9; /*높이 설정할 때*/
`;

const StudyRoom = () => {
  const nicknames = ['닉네임1', '닉네임2', '닉네임3', '닉네임4', '닉네임5', '닉네임6', '닉네임7', '닉네임8'];

  return (
    <NavbarContainer>
      <Header>
        <h1>스터디룸</h1>
        <div>
          <Button>트러블 슈팅 게시판</Button>
          <Button>정보나눔 게시판</Button>
          <Button>스터디 일정 정하기</Button>
          <Button>채팅방</Button>
        </div>
      </Header>
      <MainSection>
        {/*왼쪽 사이드*/}
        <Sidebar>
          {[...Array(9)].map((_, index) => (
            <React.Fragment key={index}>
              <SidebarButton bold={index === 0}>{index + 1}주차</SidebarButton>
              {index < 8 && <SidebarDivider />}
            </React.Fragment>
          ))}
        </Sidebar>
        <MainContent>
          <h1>스터디 제목입니다!!!</h1>
          <p>2024.05.05~2024.07.05</p>
          <h1>스터디 진행 방식 </h1>
          
          {/*과제 달성도(팀원) */}
          <CircleContainer>
            {nicknames.map((nickname, index) => (
              <Circle key={index}>
                <DefaultText className="default-text">{nickname}</DefaultText>
                <HoverText className="hover-text">{index + 1}</HoverText>
              </Circle>
            ))}
          </CircleContainer>
          <ContentRow>
            <div>
              {/*과제 목록*/}
              <h1>과제</h1>
              <Square>
                <TaskList>
                  <TaskItem>과제 1</TaskItem>
                  <TaskItem>과제 2</TaskItem>
                  <TaskItem>과제 3</TaskItem>
                </TaskList>
              </Square>
            </div>

            {/*내 달성도 동그라미~*/}
            <div>
              <h1>내 달성도</h1>
              <Circle>
                <DefaultText className="default-text">내 닉네임</DefaultText>
                <HoverText className="hover-text">달성도</HoverText>
              </Circle>
            </div>
          </ContentRow>
          {/*밑에 회색 사각형인데 무슨 내용이 들어가는지 모르겠음...ㅠㅠ*/}
          <Rectangle />
        </MainContent>

        {/*오른쪽 사이드*/}
        <RightSidebar>
          <SidebarButton>스터디 제목 수정</SidebarButton>
          <SidebarButton>스터디 커리큘럼 수정</SidebarButton>
          <SidebarButton>스터디 자료 수정</SidebarButton>
          <SidebarButton>진행방식 수정</SidebarButton>
        </RightSidebar>
      </MainSection>
    </NavbarContainer>
  );
};

export default StudyRoom;
