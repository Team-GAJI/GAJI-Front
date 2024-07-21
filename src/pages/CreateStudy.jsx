import React, { useState } from 'react';
import styled from 'styled-components';
import backImage from '../assets/images/mypageBackground.png';
import Logo from '../assets/logos/logo.svg';
import DeleteIcon from '../assets/icons/delete-circled-outline.png'
import Calendar from './Calendar';
import Footer from './Footer.jsx';
const CreateStudy = () => {

    const [studyName, setStudyName] = useState('');
    const [studyDescription, setStudyDescription] = useState('');
  
    const handleStudyNameChange = (event) => {
      setStudyName(event.target.value);
    };
  
    const handleStudyDescriptionChange = (event) => {
      setStudyDescription(event.target.value);
    };

    const data = [
        { id: 1, week: 'Week 1', title: '커리큘럼 제목 1'  },
        { id: 2, week: 'Week 2', title: '커리큘럼 제목 2'  },
        // 나중에 추가
    ];

    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
      // isOn의 상태를 변경하는 메소드를 구현
      setisOn(!isOn)
    };

    return (
    <>
    <Wrapper>
        <HeaderWrapper>
            <RowWrapper>
                <SidebarToggle>☰</SidebarToggle>
                <HeaderText>스터디</HeaderText>
                <HeaderText>로드맵</HeaderText>
                <HeaderText>커뮤니티</HeaderText>
                <HeaderText>강의</HeaderText>
            </RowWrapper>
                <AuthButton>LOG IN</AuthButton>
        </HeaderWrapper>

        <RowLogoWrapper>
                <LogoImage src={Logo} alt="로고" />
                <LogoText>스터디 만들기</LogoText>
                <Text>'가지'고 싶은 스터디를 만들어보세요!</Text>
                <RowSelectWrapper>
                    <SelectButton>스터디 만들기 </SelectButton>
                    <SelectButton>임시저장</SelectButton>
                    <SelectButton>미리보기</SelectButton>
                </RowSelectWrapper>
        </RowLogoWrapper>

        <MainSection>
        <SidebarWrapper>
            <Sidebar>
                <SidebarText1>템플릿</SidebarText1>
                <DivisionLine1/>
                <Text3>커리큘럼</Text3>
                <SidebarButton>추가하기</SidebarButton>
                <Text3>진행방식</Text3>
                <SidebarButton>추가하기</SidebarButton>
                <NoticeText>※스터디 만들기 주의사항 <br></br>어쩌구 저쩌구 샬라샬라 샤랄라 어쩌구 저쩌구 샬라샬라 샤랄라 어쩌구 저쩌구 샬라샬라 샤랄라 어쩌구 저쩌구 샬라샬라 샤랄라</NoticeText>
            </Sidebar>
        </SidebarWrapper>
            
            <Container>
                <Text2>스터디 기본정보</Text2>
                <MainWrapper1>
                <InputWrapper>
                    <InputStudyName
                        placeholder="스터디 이름 작성"
                        value={studyName}
                        onChange={handleStudyNameChange}
                    />
                    {!studyName && <CharCount>0자/20자</CharCount>}
                </InputWrapper>
                <DivisionLine2/>
                    <RowContainer>
                       <ImageWrapper>
                       <FileInputWrapper>
                            <HiddenFileInput id="file-upload" />
                            <FileInputLabel htmlFor="file-upload">이미지 업로드</FileInputLabel>
                            </FileInputWrapper>
                        <ImageText>용량 제한: 232123mb</ImageText>
                        <ImageText>파일 형식: png만 가능 (이런 식으로)</ImageText>
                       </ImageWrapper>
                        <Container>
                        <Text4>스터디 설명</Text4>
                        <ExWrapper>
                        <InputExStudy
                            placeholder="설명을 입력해주세요"
                            value={studyDescription}
                            onChange={handleStudyDescriptionChange}
                        />
                        {!studyDescription && <ExStudyCharCount>0자/800자</ExStudyCharCount>}
                        </ExWrapper>
                        </Container>  
                    </RowContainer>
                    <Text5>스터디 자료 링크</Text5>
                    <InputStudyData placeholder="링크를 입력해주세요" />
                    <Container>
                        <div style={{ flex: 1 }}>
                        <GridContainer>
                            {data.map((item) => (
                            <StudyData key={item.id}>
                                <LeftSide />
                                <RightSide>
                                <Icons src={DeleteIcon} alt="삭제" />
                                <StudyText>제목</StudyText>
                                <Textarea placeholder={"설명입니다."} />
                                </RightSide>
                            </StudyData>
                            ))}
                        </GridContainer>
                        </div>
                    </Container>
                    <Container>
                        <FlexContainer>
                            <ToggleContainer onClick={toggleHandler}>
                                <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}/>
                                <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}/>
                            </ToggleContainer>
                            <Text7 className={`text ${isOn ? "OFF" : "ON"}`}>공개</Text7>
                            <Text6 className={`text ${isOn ? "ON" : "OFF"}`}>비공개</Text6>
                        </FlexContainer>
                    </Container>  
                </MainWrapper1>  
            </Container>

            <Container>
                <Text2>스터디 기한</Text2>
                <MainWrapper2>
                    <RowWrapper>
                        <CalendarWrapper>
                            <Calendar/>
                        </CalendarWrapper>
                        <DivisionLine3/>
                        <Container>
                            <DeadlineWrapper>
                                <Text8>스터디 모집 기한</Text8>
                                <SidebarButton>입력하기</SidebarButton>
                                <RowWrapper2>
                                    <StartButton>시작</StartButton>
                                    <DateText>3월 1일</DateText>
                                    <EndButton>끝</EndButton>
                                    <DateText>3월 1일</DateText>
                                </RowWrapper2>
                            </DeadlineWrapper>
                            <DeadlineWrapper>
                                <Text8>스터디 진행 기한</Text8>
                                <SidebarButton>입력하기</SidebarButton>
                                <RowWrapper2>
                                    <StartButton>시작</StartButton>
                                    <DateText>3월 1일</DateText>
                                    <StartButton>끝</StartButton>
                                    <DateText>3월 1일</DateText>
                                </RowWrapper2>
                            </DeadlineWrapper>  
                        </Container>
                    </RowWrapper>
                </MainWrapper2>  
            </Container>
        </MainSection>

    </Wrapper>
    <Footer />
    </> 
    );
};

export default CreateStudy;
const Wrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
    width : 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 10px;
`;
const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    gap: 5px; 
`;

/* Header css */
const HeaderWrapper = styled.div`
    z-index : 5;
    background-color:#FBFAFF;
    position : fixed;
    box-sizing: border-box; 
    top: 0;
    left: 0;
    right: 0;
    display : flex;
    width: 100%;
    height : 104px;
    justify-content : space-between;
    align-items : center;
    padding-left : 3.1em;
    padding-right : 3.1em;
`;
const RowWrapper = styled.div`
    width : 100%;
    display : flex;
    gap : 4.25em;
`;
const HeaderText = styled.div`
    font-size : 1em;
    color : #8E59FF;
    font-weight : 700;
    margin-top : 5px;
`;
const AuthButton = styled.div`
    font-size : 0.8125em;
    width : 123px;
    border: 1px solid #161A3F;
    border-radius: 10px;
    font-weight : 800;
    padding : 0.8125em;
    text-align : center;
`;
const SidebarToggle = styled.div`
    width : 1.44em;
    color : #8E59FF;
`;
const RowLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9em;
    flex-direction: column; 
    justify-content: center; 
    padding: 20px; 
    margin-top : 100px;
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
const Text = styled.p`
    color : #D0D1D9;
    font-size: 15px;
    font-weight: 700px;
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
  margin-bottom : 40px;

`;
const SidebarWrapper = styled.div`
    position: absolute; 
    margin-top: 20px; 
    right: -38px;; 
    height: 100vh; 
    width: 250px; 
    padding: 20px; 
    box-sizing: border-box;

`;
const Sidebar = styled.aside`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #A2A3B2;
    border-radius: 8px;
    width: 150px;
    height: 350px;
    padding: 20px;
`;
const DivisionLine1 = styled.div`
    border-top: 1px solid #A2A3B2;
    width: 100%;
    margin: 10px 0; 
`;
const SidebarText1 = styled.p`
    color: #000;
    font-size: 18px;
    font-weight: 800;
    background-color: transparent;
    padding: 8px 0;
    margin: 0;
    text-align: left;
    width: 100%; 
`;
const Text3 = styled.p`
    color: #8E59FF;
    font-size: 15px;
    font-weight: 700;
    margin: 10px 0; 
    text-align: left;
    width: 100%; 
`;
const SidebarButton = styled.div`
    font-size: 0.8125em;
    width: 120px;
    border: 1px solid #8E59FF;
    background-color: #8E59FF;
    border-radius: 10px;
    font-weight: 800;
    padding: 0.7em;
    text-align: center;
    color: #fff;
    margin: 10px 0;
`;
const NoticeText = styled.p`
    font-size: 12px; 
    color: #D0D1D9;
    margin-top: 20px; 
    text-align: center;
    line-height: 1.4; 
`;



/* 스터디 기본정보 */
const Text2 = styled.p`
    color : #8E59FF;
    font-size: 20px;
    font-weight: 800;
`;
const MainWrapper1 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 8px;
  width: 950px;
  height : 755px;
`;
const MainWrapper2 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 8px;
  width: 950px;
  height : 450px;
`;
const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 50px 40px 10px 40px; 

`;

const InputStudyName = styled.input`
    background: none;
    border: none;
    outline: none;

    &::placeholder{
        color : #A2A3B2;
        font-size: 13px;
        font-weight: 700;
    }
`;
const CharCount = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #A2A3B2;
    font-size: 13px;
    font-weight: 700;
    text-align: right; 
    right : -450px;
`;
const DivisionLine2 = styled.div`
    border-top: 1px solid #8E59FF;
    align-items : center;
    margin : 0px 40px;
    width : 92%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 8px;
  width: 400px;
  height : 270px;
  margin: 20px 40px;
  align-items: center;
  /*justify-content: space-between;*/
  flex-direction: column; 
  gap: 5px; 
`;
const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 8px;
  width: 501px;
  height : 230px; 
  margin-right :40px;
`;
const Text4 = styled.p`
    color: #8E59FF;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    width: 100%;
`;
const ImageText = styled.p`
    color : #D0D1D9;
    font-size: 15px;
    font-weight: 700px;
    margin-bottom : -10px;
`;
const FileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;
const HiddenFileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
const FileInputLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  z-index: 0;
  font-size: 0.8125em;
  width: 120px;
  border: 1px solid #8E59FF;
  border-radius: 10px;
  font-weight: 800;
  padding: 0.7em;
  text-align: center;
  color: #8E59FF;
  margin-top : 100px;
  background-color: transparent;
`;


/* 스터디 설명 */
const InputExStudy = styled.input`
    background: none;
    border: none;
    outline: none;
    margin: 20px 20px;
    &::placeholder{
        color : #A2A3B2;
        font-size: 13px;
        font-weight: 500;
    }
`;
const ExStudyCharCount = styled.span`
    display: block; 
    color: #A2A3B2;
    font-size: 13px;
    font-weight: 700;
    text-align: right;
    margin-right : 10px;
    margin-top: 140px; 
`;
const InputStudyData = styled.input`
    width: 90%;
    height: 25px;
    border-radius: 8px;
    border: 1px solid #A2A3B2;
    padding: 0.5em;
    margin-top: 0.5em;
    margin :0px 40px 20px 40px;

    &::placeholder {
        color: #C8C8C8;
    }
`;
const Text5 = styled.p`
    color: #8E59FF;
    font-size: 15px;
    font-weight: 700;
    margin-left: auto; 
    margin-right: 800px; 
    top : 60px;
`;


/* 스터디 자료 링크 */
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  grid-gap: 340px;
  width: 100%;
  max-width: 600px; 
  margin-top: 20px;
  padding: 0;
  box-sizing: border-box; 
`;

const StudyData = styled.div`
  width: 400px;
  height: 130px;
  border: 1px solid #8E59FF;
  border-radius: 5px;
  overflow: hidden; 
  display: flex;
  position: relative;
  margin-left : 40px;
`;

const LeftSide = styled.div`
  width: 150px; 
  height: 130px;
  background-color : #8E59FF;
  opacity : 30%;

  background-size: cover;
  background-position: center;
  border-right: 1px solid #000;*/ 
`;

const RightSide = styled.div`
  width: 50%; 
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  padding: 10px 20px; 
`;

const Textarea = styled.textarea`
  width: 100%; 
  height: auto;
  resize: none;
  border: none;
  outline: none;
  font-size: 14px;
  margin-top: 10px;

`;
const StudyText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px; 
`;
const Icons = styled.img`
    width: 15px; 
    height: auto;
    margin-left : 200px;
    margin-top : -10px;
`;



const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const ToggleContainer = styled.div`
  position: relative;
  left: 10%;
  cursor: pointer;

  .toggle-container {
    width: 55px;
    height: 24px;
    border-radius: 30px;
    border: 1px solid #8E59FF;
  }
  .toggle--checked.toggle-container {
    left: 32px;
    background-color: #FFFFFF; 
  }
  .toggle--checked {
    transition: 0.5s;
  }

  .toggle-circle {
    position: absolute;
    top: 1.6px;
    left: 2.3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #8E59FF;
    transition: 0.5s;
  }

  .toggle--checked.toggle-circle {
    left: 32px;
    background-color: #8E59FF; 
  }
`;

const Text6 = styled.p`
  color: #8E59FF;
  font-size: 15px;
  font-weight: 700;
  margin-left: 80px; 
  &.OFF {
    color:  #A2A3B2;
  }

  &.ON {
    color: #8E59FF;
  }
`;

const Text7 = styled.p`
  color: #8E59FF;
  font-size: 15px;
  font-weight: 700;
  margin-left: 0px 
  padding : 5px;
  &.OFF {
    color: #A2A3B2;
  }

  &.ON {
    color: #8E59FF;
  }
`;


const CalendarWrapper = styled.div`
    margin : 40px 0px 10px 40px;
`;
const DivisionLine3 = styled.div`
  border-left: 1px solid #A2A3B2; 
  height: 420px; 
  margin: 15px;
`;
const StartButton = styled.button`
    background-color: #fff;
    border : 1px solid #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #8E59FF;
    cursor: pointer;
    width : 60px;

`;
const EndButton = styled.button`
    background-color: #fff;
    border : 1px solid #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #8E59FF;
    cursor: pointer;
    width : 60px;

`;
const Text8 = styled.p`
    color: #8E59FF;
    font-size: 18px;
    font-weight: 800;

`;
const DateText = styled.p`
    color: #000;
    font-size: 12px;
    font-weight: 800;
`;
const RowWrapper2 = styled.div`
    width : 100%;
    display : flex;
    gap : 1em;
`;
const DeadlineWrapper = styled.div`
    margin : 40px 0px 20px 0px;
`;