// SortingCategory.js
import React from 'react';
import styled from 'styled-components';

const SortingCategory = ({ onSelect }) => {
    const sortingOptions = [
        "인기순", "최신순"
    ];

    return (
        <ContentWrapper>
            {sortingOptions.map(sorting => (
                <SelectSortingButton key={sorting} onClick={() => onSelect(sorting)}>
                    {sorting}
                </SelectSortingButton>
            ))}
        </ContentWrapper>
    );
};

export default SortingCategory;

const ContentWrapper = styled.div`
    background-color: rgba(22, 26, 63, 0.7);
    border: 1px solid rgba(22, 26, 63, 0.7);
    border-radius: 0.5em; 
    width: 7.625em;
    height: 3.6em; 
    margin-top: 1.25em;
    overflow: hidden;
`;

const SelectSortingButton = styled.div`
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
