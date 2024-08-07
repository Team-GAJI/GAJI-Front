import React, { useState } from 'react';
import styled from 'styled-components';
import backImage from '../assets/images/common/mypageBackground.png';
import NoticeAlarm from '../assets/icons/noticeRoom/NoticeAlarm.png';

const StudyNoticePage = () => {

    const notices = [
        {
          text1: "여러분 이건 꼭 아셔야합니다? ! 모르면 이 스터디 못함 ~",
          text2: "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
          user: "user1023",
          time: "1시간",
          checks: 7
        },
        {
          text1: "예전 공지인데 이제 아무도 안보겠쮜....",
          text2: "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
          user: "user2045",
          time: "2시간",
          checks: 5
        },
        {
          text1: "이누공 이제 누가 공지해주냐",
          text2: "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
          user: "user3098",
          time: "3시간",
          checks: 10
        },
        {
          text1: "예전 공지인데 이제 아무도 안보겠쮜....",
          text2: "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
          user: "user4567",
          time: "4시간",
          checks: 8
        },
        {
          text1: "이누공 이제 누가 공지해주냐",
          text2: "우리 스터디에는 규칙이 있습니다 ! 첫째, 뭐게요 ~ 둘째, 뭐게요 ~ 셋째, 회식갈까요? 배고파요 헝헝헝 본문내용이 이래서 죄송 근데 진짜 배고파요 뭐 먹지 ? 연어 초밥 ? 아까 우동먹었는데 가성비 미쳤더라고요 여러분도 우동 많이 드세요 ~ 초코파이 땡긴다",
          user: "user5678",
          time: "5시간",
          checks: 6
        }
      ];

      const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <>
        <HeaderWrapper>
            <ContentWrapper>

            <RowLogoWrapper>
                    <LogoText>스터디룸 공지사항</LogoText>
            </RowLogoWrapper>

                {/* 카테고리 메뉴 선택 */}
            <RowSelectWrapper>
                    <SelectButton>스터디 홈 </SelectButton>
                    <SelectButton>트러블 슈팅 게시판 </SelectButton>
                    <SelectButton>정보나눔 게시판 </SelectButton>
                    <SelectButton>채팅방</SelectButton> 
            </RowSelectWrapper>
            <MainSection1>
            <SidebarWrapper>
                  <Sidebar1>
                    {[...Array(9)].map((_, index) => (
                      <React.Fragment key={index}>
                        <SidebarButton bold={index === 0}>{index + 1}주차</SidebarButton>
                      </React.Fragment>
                    ))}
                  </Sidebar1>
                  <Sidebar2Button>스터디 관리</Sidebar2Button>
            </SidebarWrapper>
                    <ColumnWrapper>
                    <Container>
                        <Text>스터디명 공지사항</Text>
                        <WritingButton>공지사항 작성</WritingButton>
                    </Container>

                    <NoticeSquareWrapper>
      {notices.map((notice, index) => (
        <NoticeSquare
          key={index}
          isHovered={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ColumnWrapper>
            <InputWrapper>
              <AlarmIcon
                src={NoticeAlarm}
                alt="공지"
                isHovered={hoveredIndex === index}
              />
              <Text1 isHovered={hoveredIndex === index}>
                {notice.text1}
              </Text1>
            </InputWrapper>
            <Text2>{notice.text2}</Text2>
            <Container1>
              <User>U</User>
              <Text4>{notice.user}</Text4>
              <Text3>{notice.time}</Text3>
              <CheckButton>
                <span>확인</span>
                <span>{notice.checks}</span>
              </CheckButton>
            </Container1>
          </ColumnWrapper>
        </NoticeSquare>
      ))}
    </NoticeSquareWrapper>
                    </ColumnWrapper>
            </MainSection1>
     </ContentWrapper>
        </HeaderWrapper>

        </>
    );
};

export default StudyNoticePage;

const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
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
    font-size: 1.2em;
    font-weight: 800;
    color: #8E59FF;
`;
const RowSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.625em; 
    margin-left: 18.625em; 
    gap: 0.3125em; 
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
    width: 9.375em; 
`;
const MainSection1 = styled.section`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding-top: 30px;
  /*overflow: auto;*/
  gap: 0.625em;
`;
const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 1.25em; 
`;
const Sidebar1 = styled.aside`
  
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 8px;
  width: 9.375em; 
  height: 25em; 
  margin-top: 1.25em; 
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

const Text = styled.p`
  font-size: 1.2em; 
  font-weight: 800;
  color: #8E59FF;
  margin-top: 0.625em;
`;

const Container = styled.div`
display: flex;
align-items: flex-start; 
justify-content: space-between;
width: 100%;  
margin-bottom: 1.25em;
border-bottom: 0.0625em solid #A2A3B2; 
padding-top: 0.625em; 
`;

const WritingButton = styled.button`
 background-color: #8E59FF;
 border: 0.0625em solid #8E59FF; 
 color: #fff;
 border-radius: 0.5em; 
 font-weight: 700;
 width: 9.375em;
 height: 2.5em; 
 margin-right: 0;
`;

const CheckButton = styled.button`
  width: 5em; 
  height: 2.5em; 
  background-color: #fff;
  border: 0.0625em solid #8E59FF; 
  border-radius: 0.5em; 
  color: #8E59FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.625em; 
  margin-left: auto; 
  flex-shrink: 0; 
`;

const Container1 = styled.div`
  display: flex;
  padding-bottom: 0.625em; 
  width: 100%;
`;

const User = styled.button`
  width: 3.375em; 
  height: 3.375em; 
  background-color: #8E59FF;
  border: 0.0625em solid #8E59FF; 
  border-radius: 50%;
  font-size: 0.5em;
  color: #fff;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  margin-top: 0.625em; 
  flex-shrink: 0; 
`;

const Text3 = styled.p`
  height: 1.875em; 
  font-weight: 600;
  font-size: 0.5em;
  color: #A2A3B2;
  padding: 0.8125em; 
  flex-shrink: 0; 
`;

const Text4 = styled.p`
  height: 1.875em; 
  font-weight: 600;
  font-size: 0.5em;
  color: #A2A3B2;
  padding: 0.8125em; 
  margin-left: 0.625em; 
  flex-shrink: 0; 
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  gap: 0.625em; 
  margin-top: 0.625em; 
  margin-left: 1.25em; 
`;

const NoticeSquare = styled.div`
  width: 51.25em; 
  height: 9.3125em; 
  border: 0.09375em solid ${props => (props.isHovered ? '#8E59FF' : '#ccc')}; 
  border-radius: 1.25em; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.25em;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  margin-bottom: -1.25em; 
`;

const Text1 = styled.p`
  padding-left: ${props => (props.isHovered ? '4.375em' : '0.625em')}; 
  height: 1.875em;
  font-weight: 800;
  font-size: 0.9125em; 
`;

const AlarmIcon = styled.img`
  position: absolute;
  left: 0.625em; 
  top: 40%;
  transform: translateY(-50%);
  width: 0.9375em; 
  height: auto;
  display: ${props => (props.isHovered ? 'block' : 'none')};
`;

const Text2 = styled.p` 
height: 1.875em; 
font-weight : 600;
font-size : 0.5em;
color : #697077;
padding : 0.8125em; 
`;
const NoticeSquareWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  gap: 0.625em; 
  margin-bottom: 1.875em; 
`;