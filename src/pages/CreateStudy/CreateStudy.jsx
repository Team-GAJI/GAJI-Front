import React, { useState } from 'react';
import styled from 'styled-components';
import backImage from '../../assets/images/mypageBackground.png';

import DeleteIcon from '../../assets/icons/CreateStudy/CreateStudyDelete.png'
import Calendar from '../../components/CreateStudy/CreateCalendar.jsx';

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
        { id: 3, week: 'Week 3', title: '커리큘럼 제목 3'  },
        // 나중에 추가
    ];

    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
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
                <MainText>스터디 만들기</MainText>
                <Text>'가지'고 싶은 스터디를 만들어보세요!</Text>
                <MainButton>스터디 만들기</MainButton>
        </RowLogoWrapper>

        <MainSection>
            
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
    width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    gap: 0.3125em;
`;

const MainText = styled.p`
    font-size: 1.3em;
    font-weight: 800;
    color: #8E59FF;
    margin-bottom: 0.2em;
`;

const MainButton = styled.button`
    font-size: 0.8125em;
    width: 18.25em;
    background-color: #8E59FF;
    border: 1px solid #8E59FF;
    border-radius: 1em;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
`;

/* Header css */
const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 6.5em; 
    justify-content: space-between;
    align-items: center;
    padding-left: 3.1em;
    padding-right: 3.1em;
`;

const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 4.25em;
`;

const HeaderText = styled.div`
    font-size: 1em;
    color: #8E59FF;
    font-weight: 700;
    margin-top: 0.3125em;
`;

const AuthButton = styled.div`
    font-size: 0.8125em;
    width: 7.6875em; 
    border: 1px solid #161A3F;
    border-radius: 0.625em; 
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
`;

const SidebarToggle = styled.div`
    width: 1.44em;
    color: #8E59FF;
`;

const RowLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9em;
    flex-direction: column;
    justify-content: center;
    padding: 1.125em; 
    margin-top: 0.625em; 
    background-image: url(${backImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Text = styled.p`
    color: #D0D1D9;
    font-size: 0.9375em; 
    font-weight: 700;
`;


/* 화면 분활 (오른쪽 사이드) */
const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh; 
  padding: 20px;
  box-sizing: border-box;
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



/* 스터디 기본정보 */
const Text2 = styled.p`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
`;

const MainWrapper1 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 0.5em; 
  width: 59.375em; 
  height: 47.1875em;
`;

const MainWrapper2 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 0.5em; 
  width: 59.375em;
  height: 28.125em; 
  margin-bottom : 10em;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 25em;
    margin: 3.125em 2.5em 0.625em 2.5em; 
`;

const InputStudyName = styled.input`
    background: none;
    border: none;
    outline: none;
    font-size: 1em; 
    &::placeholder {
        color: #A2A3B2;
        font-size: 0.8125em; 
        font-weight: 700;
    }
`;

const CharCount = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #A2A3B2;
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: right; 
    right: -35em; 
`;

const DivisionLine2 = styled.div`
    border-top: 1px solid #8E59FF;
    align-items: center;
    margin: 0 2.5em; 
    width: 92%;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 25em; 
  height: 16.875em; 
  margin: 1.25em 2.5em; 
  align-items: center;
  gap: 0.3125em; 
`;

const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 31.3125em; 
  height: 14.375em; 
  margin-right: 2.5em; 
`;

const Text4 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em;
    font-weight: 700;
    text-align: left;
    width: 100%;
`;

const ImageText = styled.p`
    color: #D0D1D9;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-bottom: -0.625em; 
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
  width: 7.5em; 
  border: 1px solid #8E59FF;
  border-radius: 0.625em;
  font-weight: 800;
  padding: 0.7em; 
  text-align: center;
  color: #8E59FF;
  margin-top: 6.25em; 
  background-color: transparent;
`;


/* 스터디 설명 */
const InputExStudy = styled.input`
    background: none;
    border: none;
    outline: none;
    margin: 1.25em 1.25em; 
     font-size: 1em;
    &::placeholder {
        color: #A2A3B2;
        font-size: 0.8125em;
        font-weight: 500;
    }
`;

const ExStudyCharCount = styled.span`
    display: block;
    color: #A2A3B2;
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: right;
    margin-right: 0.625em; 
    margin-top: 10.75em; 
`;

const InputStudyData = styled.input`
    width: 90%;
    height: 1.5625em; 
    border-radius: 0.5em; 
    border: 1px solid #A2A3B2;
    padding: 0.5em; 
    margin-top: 0.5em; 
    margin: 0 2.5em 1.25em 2.5em; 
    outline: none;
    
    &::placeholder {
        color: #C8C8C8;
    }
`;

const Text5 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 3em;
    /*margin-right: 50em; */
    top: 3.75em; 
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.5em; 
    padding: 0 2.5em; 
    width: 100%;
    max-width: 62.5em;
    margin: 1.25em auto 0; 
    box-sizing: border-box;
`;

const StudyData = styled.div`
    width: 16.25em; 
    height: 6.25em; 
    border: 1px solid #8E59FF;
    border-radius: 0.3125em; 
    overflow: hidden;
    display: flex;
    position: relative;
`;

const LeftSide = styled.div`
    width: 9.375em; 
    height: 8.125em; 
    background-color: #8E59FF;
    opacity: 30%;
    background-size: cover;
    background-position: center;
    border-right: 0.0625em solid #000; 
`;

const RightSide = styled.div`
    width: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.625em 1.5625em; 
`;

const Textarea = styled.textarea`
    width: 100%;
    height: auto;
    resize: none;
    border: none;
    outline: none;
    font-size: 0.875em;
    margin-top: 0.625em; 
`;

const StudyText = styled.div`
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 0.625em; 
`;

const Icons = styled.img`
    width: 0.75em; 
    height: auto;
    margin-left: 5.625em; 
    margin-top: 0.3125em; 
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2.5em; 
`;

const ToggleContainer = styled.div`
    position: relative;
    left: 6.3em; 
    cursor: pointer;

    .toggle-container {
        width: 3.4375em; 
        height: 1.5em; 
        border-radius: 1.875em; 
        border: 1px solid #8E59FF;
    }
    .toggle--checked.toggle-container {
        left: 2em; 
        background-color: #FFFFFF;
    }
    .toggle--checked {
        transition: 0.5s;
    }

    .toggle-circle {
        position: absolute;
        top: 0.1em; 
        left: 0.14375em; 
        width: 1.375em; 
        height: 1.375em; 
        border-radius: 50%;
        background-color: #8E59FF;
        transition: 0.5s;
    }

    .toggle--checked.toggle-circle {
        left: 2em;
        background-color: #8E59FF;
    }
`;

const Text6 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 5em;
    
    &.OFF {
        color: #A2A3B2;
    }

    &.ON {
        color: #8E59FF;
    }
`;

const Text7 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 0;
    padding: 0.3125em; 
  &.OFF {
    color: #A2A3B2;
  }

  &.ON {
    color: #8E59FF;
  }
`;








const DivisionLine3 = styled.div`
  border-left: 0.0625em solid #A2A3B2;
  height: 26.25em; 
  margin: 0.625em;
`;

const StartButton = styled.button`
    background-color: #fff;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em; 
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: center;
    padding: 0.5em; 
    color: #8E59FF;
    cursor: pointer;
    width: 3.75em; 
`;

const EndButton = styled.button`
    background-color: #fff;
    border: 0.0625em solid #8E59FF; 
    border-radius: 0.5em;
    font-size: 0.8125em; 
    font-weight: 700;
    text-align: center;
    padding: 0.5em; 
    color: #8E59FF;
    cursor: pointer;
    width: 3.75em;
`;

const Text8 = styled.p`
    color: #8E59FF;
    font-size: 1.125em;
    font-weight: 800;
`;

const DateText = styled.p`
    color: #000;
    font-size: 0.75em; 
    font-weight: 800;
`;

const RowWrapper2 = styled.div`
    width: 100%;
    display: flex;
    gap: 1em; 
`;

const DeadlineWrapper = styled.div`
    margin: 2.5em 0 1.25em 0; 
`;

const CalendarWrapper = styled.div`
    margin: 2.5em 0 1.25em 2.5em; 
`;
