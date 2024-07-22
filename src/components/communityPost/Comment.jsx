import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../../assets/images/community/userProfile.png';
import ReplyIcon from '../../assets/icons/community/reply.svg?react';

const Comment = () => {
    return (
        <CommentWrapper>
            <WriterWrapper>
                <StyledProfileImg src={ProfileImg} alt='profile image'/>
                <UserName>닉네임</UserName>
                <RelativeTime>2024. 03. 01 작성</RelativeTime>
            </WriterWrapper>
            <Content>댓글입니다 뭐라고 쓸까요? 정말 좋은 글이네요 귀여운 고양이 냥냥</Content>
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
    margin: 1.2em 0;
    width: 75em;
    display: flex;
    flex-direction: column;
`;

const WriterWrapper = styled.div`
    margin-bottom: 0.8em;
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
    margin-bottom: 0.8em;
    width: 75em;
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