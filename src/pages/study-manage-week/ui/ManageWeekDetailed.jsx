import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import Delete from '../../../assets/icons/studyManageWeek/StudyManageWeekDelete.png';

const ManageWeekDetailed = forwardRef(({ selectedWeek, onAssignmentsChange }, ref) => {
    const [inputs, setInputs] = useState(['']);
    const maxInputs = 5; //5개까지 만들 수 있게 함

    useImperativeHandle(ref, () => ({
        getAssignments: () => inputs,
    }));

    const handleKeyPress = (index, event) => {
        if (event.key === 'Enter' && inputs.length < maxInputs) {
            event.preventDefault();
            const newInputs = [...inputs];
            newInputs[index] = inputs[index];

            const firstInputValue = newInputs[0];

            newInputs.push(firstInputValue);
            newInputs[0] = '';

            setInputs(newInputs);
            onAssignmentsChange(newInputs); // 과제 변경 시 부모에게 전달
        }
    };

    const handleDeleteInput = (index) => {
        const newInputs = inputs.filter((_, i) => i !== index);
        setInputs(newInputs);
        onAssignmentsChange(newInputs); // 과제 삭제 시 부모에게 전달
    };

    const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        onAssignmentsChange(newInputs); // 과제 내용 변경 시 부모에게 전달
    };

    return (
        <Container>
            <Text2>{selectedWeek + 1}주차 과제 등록</Text2>
            <MainWrapper>
                {inputs.map((input, index) => (
                    <InputWrapper key={index} isFirst={index === 0}>
                        <InputStudyName
                            value={input}
                            onKeyPress={(e) => handleKeyPress(index, e)}
                            onChange={(e) => handleChange(index, e.target.value)}
                            placeholder="과제명을 입력해주세요"
                            isFirst={index === 0}
                        />
                        {index > 0 && <Icons src={Delete} alt="삭제" onClick={() => handleDeleteInput(index)} />}
                    </InputWrapper>
                ))}
            </MainWrapper>
        </Container>
    );
});

export default ManageWeekDetailed;

// displayName을 준다.
ManageWeekDetailed.displayName = 'ManageWeekDetailed';

const MainWrapper = styled.div`
    background-color: #fbfaff;
    display: flex;
    flex-direction: column;

    height: auto;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625em;
    width: 100%;
`;

const Text2 = styled.p`
    color: #8e59ff;
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
    border: none;
    border: ${(props) => (props.isFirst ? '1px solid #A2A3B2' : '1px solid #8E59FF')};
    border-radius: 0.5em;
    outline: none;
    height: 2.5em;
    font-size: 1em;
    padding-right: 2.5em;
    width: 100%;
    &::placeholder {
        color: #a2a3b2;
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
