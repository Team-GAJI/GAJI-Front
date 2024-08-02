import React from 'react';
import styled from 'styled-components';
import ReplyIcon from '../../assets/icons/community/reply.svg?react';

const Comment = ({key, writer, content, userProfileImg, time}) => {
    return (
        <CommentWrapper key={key}>
            <WriterWrapper>
                <StyledProfileImg src={userProfileImg} alt='profile image'/>
                <UserName>{writer}</UserName>
                <RelativeTime>{time} 작성</RelativeTime>
            </WriterWrapper>
            <Content>{content}</Content>
            <ReplyWrapper>
                <StyledReplyIcon/>
                <ReplyText>답글달기</ReplyText>
            </ReplyWrapper>
        </CommentWrapper>
    )
}

export default Comment;

/* CSS */
const CommentWrapper = styled.div`
    margin: 2em 0;
    width: 75em;
    display: flex;
    flex-direction: column;
`;

const WriterWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledProfileImg = styled.img`
    margin-right: 0.8em;
    width: 2.6038em;
    height: 2.6038em;
`;

const UserName = styled.div`
    margin-right: 0.8em;
    color: #8E59FF;
    font-weight: 800;
`;

const RelativeTime = styled.div`
    color: #A2A3B2;
    font-size: 0.8125em;
    font-weight: bold;
`;

const Content = styled.div`
    margin: 1em 0;
    width: 50em;
    color: #161A3F;
    font-weight: bold;
`;

const ReplyWrapper = styled.div`
    width: 5em;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const StyledReplyIcon = styled(ReplyIcon)`
    margin-right: 0.5em;
    width: 1.2em;
    height: 1.2em;
`;

const ReplyText = styled.div`
    color: #A2A3B2;
    font-size: 0.8125em;
    font-weight: bold;
`;
