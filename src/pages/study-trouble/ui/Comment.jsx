import React from "react";
import styled from "styled-components";
import ReplyIcon from "../../../assets/icons/community/reply.svg?react";

const Comment = ({ writer, content, userProfileImg, time, onDelete }) => {
  return (
    <CommentWrapper>
      <WriterWrapper>
        <StyledProfileImg src={userProfileImg} alt="profile image" />
        <UserName>{writer}</UserName>
        <RelativeTime>{time} 작성</RelativeTime>
      </WriterWrapper>
      <Content>{content}</Content>
      <ActionsWrapper>
        <ReplyWrapper>
          <StyledReplyIcon />
          <ReplyText>답글달기</ReplyText>
        </ReplyWrapper>
        <DeleteButton onClick={onDelete}>삭제하기</DeleteButton>
      </ActionsWrapper>
    </CommentWrapper>
  );
};

export default Comment;

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
  justify-content: space-between;
  width: 100px;
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
  color: #a2a3b2;
  font-size: 0.8125em;
  font-weight: bold;
`;

const DeleteButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ff4d4d; /* Red color for delete button */
  font-size: 0.8125em;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
