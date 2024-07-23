// DetailCategory.js
import React from 'react';
import styled from 'styled-components';

const DetailCategory = ({ onSelect }) => {
    const categories = [
        "개발", "인공지능", "하드웨어", "보안", "네트워크-클라우드", 
        "어학", "디자인", "비즈니스 (pm)", "독서 모임"
    ];

    return (
        <ContentWrapper>
            {categories.map(category => (
                <SelectButton key={category} onClick={() => onSelect(category)}>
                    {category}
                </SelectButton>
            ))}
        </ContentWrapper>
    );
};

export default DetailCategory;

const ContentWrapper = styled.div`
    background-color: rgba(22, 26, 63, 0.7);
    border: 1px solid rgba(22, 26, 63, 0.7);
    border-radius: 8px;
    width: 122px;
    height: 270px;
    margin-top: 10px;
    overflow: hidden;
`;

const SelectButton = styled.div`
    font-size: 0.5em;
    width: 100px;
    min-width: 100px;
    border-radius: 8px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    margin-left: 4px;
    color: #fff;
    margin-top: 5px;
    transition: border-color 0.5s ease;

    &:hover {
        border: 1px solid #fff;
    }
`;
