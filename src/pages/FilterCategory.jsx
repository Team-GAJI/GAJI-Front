import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    background-color: rgba(22, 26, 63, 0.7);
    border: 1px solid rgba(22, 26, 63, 0.7);;
    border-radius: 8px;
    width: 115px;
    height : 150px;
    margin-top: 20px;
    overflow: hidden;
`;

const Selectbutton = styled.div`
    font-size: 0.5em;
    width: 100px;
    min-width: 100px;
    border-radius: 8px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
    margin-top: 10px;
    
    transition: border-color 0.5s ease; 

    &:hover {
        border: 1px solid #fff;
    }
`;

const FilterCategory = () => {
    return (
        <ContentWrapper>
            <Selectbutton>모집중</Selectbutton>
            <Selectbutton>모집 완료</Selectbutton>
            <Selectbutton>인원 제한</Selectbutton>
            <Selectbutton>인원 제한 없음</Selectbutton>
        </ContentWrapper>
    );
};

export default FilterCategory;