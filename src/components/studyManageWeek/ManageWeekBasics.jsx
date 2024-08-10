import React, { useState } from 'react';
import styled from 'styled-components';

const ManageWeekBasics = ({ selectedWeek }) => {
    
    const data = [
        { id: 1, week: 'Week 1', title: '커리큘럼 제목 1'  },
        { id: 2, week: 'Week 2', title: '커리큘럼 제목 2'  },
        { id: 3, week: 'Week 3', title: '커리큘럼 제목 3'  },
        // 나중에 추가
    ];
    
    const [studyName, setStudyName] = useState('');
    const [studyDescription, setStudyDescription] = useState('');
  
    const handleStudyNameChange = (event) => {
      setStudyName(event.target.value);
    };
  
    const handleStudyDescriptionChange = (event) => {
      setStudyDescription(event.target.value);
    };
    
    //토글 슈슛
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
      setisOn(!isOn)
    };


    return(
        <Container>
        {/* 선택한 N주차가 나오게 */}
        <Text2>{selectedWeek + 1}주차 스터디 관리</Text2>
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
    );
};

export default ManageWeekBasics;




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
    margin-left : 2.5em;
    margin-top : 2em;
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
  height: 30.1875em;
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

const ExWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #A2A3B2;
  border-radius: 0.5em; 
  width: 54.3125em; 
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

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: -0em; 
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
