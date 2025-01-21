import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReplyIcon from '../../../assets/icons/community/reply.svg?react';

const Comment = ({
    writer,
    content,
    userProfileImg,
    time,
    onDelete,
    onAdd,
    replyContent,
    setReplyContent,
    replies,
}) => {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleReplyToggle = () => {
        setIsReplying(!isReplying);
    };

    const handleAddReply = () => {
        if (replyText.trim()) {
            onAdd(replyText);
            setReplyText('');
        }
    };

    return (
        <CommentWrapper>
            <WriterWrapper>
                <StyledProfileImg src={userProfileImg} alt="profile image" />
                <UserName>{writer}</UserName>
                <RelativeTime>{time} 작성</RelativeTime>
            </WriterWrapper>
            <Content>{content}</Content>
            <ActionsWrapper isReplying={isReplying}>
                <ReplyWrapper onClick={handleReplyToggle}>
                    <StyledReplyIcon />
                    <ReplyText>답글달기</ReplyText>
                </ReplyWrapper>
                {isReplying && (
                    <AddCommentWrapper>
                        <StyledInput
                            placeholder="답글을 작성해주세요"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                        />
                        <SubmitButton onClick={handleAddReply}>등록</SubmitButton>
                    </AddCommentWrapper>
                )}
                {!isReplying && <DeleteButton onClick={onDelete}>삭제하기</DeleteButton>}
            </ActionsWrapper>

            {/* Displaying Replies */}
            {replies && replies.length > 0 && (
                <RepliesWrapper>
                    {replies.map((reply, index) => (
                        <Reply key={index}>
                            <StyledProfileImg src={userProfileImg} alt="profile image" />
                            <UserName>{writer}</UserName>
                            <Content>{reply.content}</Content>
                        </Reply>
                    ))}
                </RepliesWrapper>
            )}
        </CommentWrapper>
    );
};

export default Comment;
const RepliesWrapper = styled.div``;
const Reply = styled.div`
    display: flex;
    align-items: center;
`;

const AddCommentWrapper = styled.div`
    margin: 1.5em 0;
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin: 1em 0;
    }
`;
const StyledInput = styled.input`
    margin-left: 1.5em;
    padding-left: 1em;
    border: 1px solid #a2a3b2;
    border-radius: 10px;
    width: 100%;
    height: 3.0147em;
    background-color: rgba(217, 217, 217, 0);
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #a2a3b2;
        font-size: 0.95em;
    }
    font-family: 'NanumSquareNeo';

    @media (max-width: 768px) {
        font-size: 0.85em;
        height: 2.5em;
        margin-left: 1em;
    }
`;
const SubmitButton = styled.button`
    margin-left: 1em;
    padding: 0.5em 1em;
    background-color: #8e59ff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.95em;
    height: 3.0147em;

    &:hover {
        background-color: #6b42cc;
    }

    @media (max-width: 768px) {
        font-size: 0.85em;
        height: 2.5em;
    }
`;

const CommentWrapper = styled.div`
    margin: 2.5em 0;
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
    color: #8e59ff;
    font-weight: 800;
`;

const RelativeTime = styled.div`
    color: #a2a3b2;
    font-size: 0.8125em;
    font-weight: bold;
`;

const Content = styled.div`
    margin: 1em 0;
    width: 50em;
    color: #161a3f;
    font-weight: bold;
`;

const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => (props.isReplying ? '113%' : '15%')};
`;

const ReplyWrapper = styled.div`
    width: 6em;
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
    color: #a2a3b2;
    font-size: 0.8125em;
    font-weight: bold;
`;

const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #ff4d4d;
    font-size: 0.8125em;
    font-weight: bold;
    &:hover {
        text-decoration: underline;
    }
`;
