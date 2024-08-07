import React, { useState } from 'react';
import styled from 'styled-components';
import Delete from '../../assets/icons/studyManageWeek/StudyManageWeekDelete.png';

const ManageDetailed = () => {
  const [inputs, setInputs] = useState(['']); 
  const maxInputs = 5;

  // 기본 입력 필드에 입력한 내용을 새로 생성되는 입력 필드에 보이게 하도록....
  const handleAddInput = () => {
    if (inputs.length < maxInputs) {
      const newInputs = [...inputs];
      const firstInputValue = newInputs[0];
      
      // 새 입력 필드를 추가하면서 첫 번째 입력 값을 복사
      newInputs.push(firstInputValue);
      
      // 첫 번째 입력 필드 내용 지우기
      newInputs[0] = '';

      setInputs(newInputs);
    }
  };
 // 선택된 입력 필드를 삭제
  const handleDeleteInput = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <Container>
      <Text2>주차 과제 등록</Text2>
      <MainWrapper>
        {inputs.map((input, index) => (
          <InputWrapper key={index}>
            <InputStudyName
              value={input}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="과제명을 입력해주세요"
            />
            {index > 0 && (
              <Icons
                src={Delete}
                alt="삭제"
                onClick={() => handleDeleteInput(index)}
              />
            )}
          </InputWrapper>
        ))}
        {/* 음...아직 연락이 안와서 일단 임시로 추가 버튼 만들었습니다 */}
        <AddButton onClick={handleAddInput} disabled={inputs.length >= maxInputs}>
          + 추가
        </AddButton>
      </MainWrapper>
    </Container>
  );
};

export default ManageDetailed;

const MainWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 59.375em; 
  height: auto; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 
`;

const Text2 = styled.p`
  color: #8E59FF;
  font-size: 1.25em; 
  font-weight: 800;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex; 
  align-items: center;
  width: 100%;
  margin-bottom: 0.625em; 
`;

const InputStudyName = styled.input`
  background: none;
  border: 1px solid #8E59FF; 
  border-radius: 0.5em;
  outline: none;
  height: 2.5em;
  font-size: 1em;
  padding-right: 2.5em; 
  width: 100%;
  &::placeholder {
    color: #A2A3B2;
    font-size: 0.8125em;
    font-weight: 700;
  }
`;

const Icons = styled.img`
  position: absolute;
  top: 50%;
  right: 0.75em; 
  transform: translateY(-50%); 
  width: 0.9em;
  height: auto; 
  cursor: pointer; 
`;

const AddButton = styled.button`
  background-color: #8E59FF;
  color: white;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 1em;
  
  &:disabled {
    background-color: #d3d3d3;
    cursor: not-allowed;
  }
`;
