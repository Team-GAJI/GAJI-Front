import React from 'react';
import styled from 'styled-components';

const FilterCategory = ({ onSelect }) => {
    const filterOptions = [
        "모집중", "모집 완료", "인원 제한", "인원 제한 없음"
    ];

    return (
        <ContentWrapper>
            {filterOptions.map(option => (
                <SelectButton key={option} onClick={() => onSelect(option)}>
                    {option}
                </SelectButton>
            ))}
        </ContentWrapper>
    );
};

export default FilterCategory;

const ContentWrapper = styled.div`
    background-color: rgba(22, 26, 63, 0.7);
    border: 1px solid rgba(22, 26, 63, 0.7);
    border-radius: 0.5em; 
    width: 7.625em;
    height: 7em; 
    margin-top: 1.25em;
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
    margin-left: 0.4em; 
    color: #fff;
    margin-top:  0.3125em;
    transition: border-color 0.5s ease;

    &:hover {
        border: 1px solid #fff;
    }
`;
