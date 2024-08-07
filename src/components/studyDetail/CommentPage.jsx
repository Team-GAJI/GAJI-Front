import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../assets/images/community/userProfile.png';
import Comment from '../studyDetail/studyDetailComment.jsx';

const CommentPage = () => {
    return (
        <>
            <TitleWrapper>
                <Title>댓글</Title>
                <Count>총 3개</Count>
            </TitleWrapper>
            <InputWrapper>
                <StyledProfileImg src={ProfileImg} alt='profile image'/>
                <StyledInput placeholder='댓글을 작성해주세요'/>
            </InputWrapper>

            {/* 댓글 */}
            <Comment/>
            <Comment/>
            <Comment/>
        </>
    )
}

export default CommentPage;

/* CSS */
const TitleWrapper = styled.div`
    width: 72em;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    margin-right: 1em;
    color: #161A3F;
    font-size: 1.25em;
    font-weight: 800;
`;

const Count = styled.div`
    color: #A2A3B2;
    font-weight: bold;
`;

const InputWrapper = styled.div`
    margin: 1.5em 0;
    width: 72em;
    display: flex;
    align-items: center;
`;

const StyledProfileImg = styled.img`
    width: 2.6038em;
    height: 2.6038em;
`;

const StyledInput = styled.input`
    margin-left: 1.5em;
    padding-left: 1em;
    border: 1px solid #A2A3B2;
    border-radius: 10px;
    width: 85em;
    height: 3.125em;
    background-color: rgba(217,217,217,0);
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #A2A3B2;
        font-size: 0.95em;
    }
    font-family: 'NanumSquareNeo';
`;