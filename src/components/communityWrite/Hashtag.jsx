import React from 'react';
import styled from 'styled-components';

const Hashtag = ({ hashtag, onDelete }) => {
    return (
        <Wrapper>
            #{hashtag}
            <DeleteButton onClick={() => onDelete(hashtag)}>x</DeleteButton>
        </Wrapper>
    );
};

export default Hashtag;

/* CSS */
const Wrapper = styled.div`
    position: relative;
    margin-right: 0.7em;
    padding: 0 1.2em;
    border-radius: 15px;
    height: 1.8182em;
    line-height: 1.8182em;
    background-color: #8E59FF;
    color: white;
    font-size: 0.6875em;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    &:hover button {
        display: block;
    }
`;

const DeleteButton = styled.button`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 1em;
    cursor: pointer;
`;
