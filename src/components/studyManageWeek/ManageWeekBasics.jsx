import React, { useState } from 'react';
import styled from 'styled-components';

const ManageWeekBasics = ({ selectedWeek }) => {

    const [isOn, setIsOn] = useState(true)
    const handleToggle = () => setIsOn(!isOn);
    const onToggle = () => setIsOn(true);
    const offToggle = () => setIsOn(false);
    
    const [studyName, setStudyName] = useState('');
    const [studyDescription, setStudyDescription] = useState('');
  
    const handleStudyNameChange = (event) => {
      setStudyName(event.target.value);
    };
  
    const handleStudyDescriptionChange = (event) => {
      setStudyDescription(event.target.value);
    };

    // const handleSubmit = async () => {
    //     try {
    //         // const roomId = '...?'; 
    //         const weeks = selectedWeek;
    //         await descriptionAPI(roomId, weeks);
    //         alert('성공');
    //     } catch (error) {
    //         alert('실패');
    //     }
    // };

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
{/* 
                <ExWrapper>
                    <InputExStudy
                        placeholder="설명을 입력해주세요"
                        value={studyDescription}
                        onChange={handleStudyDescriptionChange}
                    />
                </ExWrapper> */}

                </Container>
            </RowContainer>  
            <Container>
            <ToggleWrapper>
                <OnToggleText onClick={onToggle} isOn={isOn}>공개</OnToggleText>
                <ToggleBox onClick={handleToggle}>
                    <Toggle isOn={isOn}></Toggle>
                </ToggleBox>
                <OffToggleText onClick={offToggle} isOn={isOn}>비공개</OffToggleText>
            </ToggleWrapper>

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
  background-color: #FBFAFF;
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

const ToggleWrapper = styled.div`
    margin-top: 2em;
    display: flex;
    align-items: center;
    margin-left :3em;
`;

const OnToggleText = styled.div`
    color: ${(props) => (props.isOn ? '#8E59FF' : '#A2A3B2')};
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
`;

const OffToggleText = styled.div`
    color: ${(props) => (props.isOn ? '#A2A3B2' : '#8E59FF')};
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
`;

const ToggleBox = styled.div`
    margin: 0 0.8em;
    border: 1.5px solid #8E59FF;
    border-radius: 10px;
    width: 3.5em;
    height: 1.4375em;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

const Toggle = styled.div`
    border-radius: 30px;
    width: 1em;
    height: 1em;
    background-color: #8E59FF;
    position: absolute;
    left: ${(props) => (props.isOn ? '0.2em' : '2.2em')};
    transition: all 0.3s ease-out;
`;