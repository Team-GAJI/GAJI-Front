import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { descriptionAPI/*, saveDescriptionAPI*/ } from '../../utils/studyManageWeek/descriptionAPI'; 
import { useLocation } from 'react-router-dom';
// API 설명
// 1. N주차에 스터디 이름 및 상세 설명을 작성한다.
// 2. 저장하기 버튼을 클릭하면 그 주차에 작성한 내용을 저장한다.
// 3. 저장한 후에 어디로...? (스웨거) 
// ? roomId는 studyroom에서 받아온다

const ManageWeekBasics = ({ selectedWeek }) => {
    const [isOn, setIsOn] = useState(true);
    const handleToggle = () => setIsOn(!isOn);
    const onToggle = () => setIsOn(true);
    const offToggle = () => setIsOn(false);
    
    const [studyName, setStudyName] = useState('');
    const [studyDescription, setStudyDescription] = useState('');
    const location = useLocation();
    const { roomId } = location.state || {};

    useEffect(() => {
        if (!roomId || selectedWeek === undefined) {
            console.warn('roomId 또는 selectedWeek가 설정되지 않았습니다.');
            return;
        }

        const fetchDescription = async () => {
            try {
                const response = await descriptionAPI(roomId, selectedWeek);
                if (response) {
                    setStudyDescription(response.description);
                }
            } catch (error) {
                console.error('API 오류:', error);
            }
        };

        fetchDescription();
    }, [roomId, selectedWeek]);

    const handleStudyNameChange = (event) => {
        setStudyName(event.target.value);
    };

    const handleStudyDescriptionChange = (event) => {
        setStudyDescription(event.target.value);
    };
    // 이거 나중에 삭제
    // const handleSave = async () => {
    //     if (!roomId || selectedWeek === undefined) {
    //         console.warn('roomId 또는 selectedWeek가 설정되지 않았습니다.');
    //         return;
    //     }
    //     try {
    //         await saveDescriptionAPI(roomId, selectedWeek, studyDescription);
    //         alert('저장 완료!');
    //     } catch (error) {
    //         console.error('저장 오류:', error);
    //     }
    // };

    return (
        <Container>
            <Text2>{selectedWeek + 1}주차 스터디 관리</Text2>
            <MainWrapper1>
                <InputWrapper>
                    <InputStudyName
                        placeholder={`${selectedWeek + 1} 주차 제목을 입력해주세요.`}
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
                    <ToggleWrapper>
                        <OnToggleText onClick={onToggle} isOn={isOn}>공개</OnToggleText>
                        <ToggleBox onClick={handleToggle}>
                            <Toggle isOn={isOn}></Toggle>
                        </ToggleBox>
                        <OffToggleText onClick={offToggle} isOn={isOn}>비공개</OffToggleText>
                    </ToggleWrapper>
                </Container>
                {/* <SaveButton onClick={handleSave}>저장하기</SaveButton>  */}
            </MainWrapper1>  
        </Container>
    );
};

export default ManageWeekBasics;



const Container = styled.div`
width : 100%;
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

/* 스터디 기본정보 */
const Text2 = styled.p`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
`;

const MainWrapper1 = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #8E59FF;
    border-radius: 0.5em; 
    width: 100%; 
    padding : 2.25em 3em;
    box-sizing : border-box;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    
`;

const InputStudyName = styled.input`
    background: none;
    border: none;
    outline: none;
    font-size: 1em; 
    font-family: 'NanumSquareNeo';
    width : 100%;
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
    right: 0em; 
`;

const DivisionLine2 = styled.div`
    border-top: 1px solid #8E59FF;
    align-items: center;
    margin-top : 1em;
    width: 100%;
`;

const ExWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #A2A3B2;
    border-radius: 0.5em; 
    width: 100%; 
    height: 14.375em; 
    padding : 1.5em;
    box-sizing :border-box;
`;

const Text4 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em;
    font-weight: 700;
    text-align: left;
    width: 100%;
`;


/* 스터디 설명 */
const InputExStudy = styled.textarea`
    background: none;
    border: none;
    outline: none;
    resize : none;
    font-size: 1em;
    width : 100%;
      font-family: 'NanumSquareNeo';
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

const SaveButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50; // Green background
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;

    &:hover {
        background-color: #45a049; // Darker green on hover
    }
`;