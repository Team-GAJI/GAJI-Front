import styled from 'styled-components';
import WriteIcon from '../../assets/icons/common/writeIcon.svg?react';
import React from 'react';

const MobileWriteButton = () => {
    return (
        <CreatePostButton>
            <StyledWriteIcon />
        </CreatePostButton>
    );
};

export default MobileWriteButton;

const StyledWriteIcon = styled(WriteIcon)`
    width: 1.5em;
    height: 1.5em;
`;
const CreatePostButton = styled.button`
    border: none;
    display: none;
    @media (max-width: 768px) {
        background-color: #8e59ff;
        color: white;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0.2em 1em rgba(22, 26, 63, 0.2);
        }
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 10;
        bottom: 5%;
        right: 5%;
        border-radius: 100%;
        width: 4em;
        height: 4em;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px 0px;
        opacity: 90%;
    }
`;
