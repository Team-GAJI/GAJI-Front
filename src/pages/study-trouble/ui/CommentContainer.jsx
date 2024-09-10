import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import ProfileImg from "../../../assets/images/community/userProfileBig.png";
import Comment from "./Comment";
import { dummyComments } from "./DummyComments";
import Loading from "../../../components/common/Loading";
import {
  addComment,
  deleteComment,
} from "../api/troubleShootingInfoAPI";

const CommentContainer = ({ troublePostId }) => {
  const [commentPage, setCommentPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch comments function
  const getComments = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      setTimeout(() => {
        const newPosts = dummyComments.slice(
          (commentPage - 1) * 4,
          commentPage * 4
        ); // Load 4 comments per page
        setComments((prevPosts) => [...prevPosts, ...newPosts]);
        setCommentPage((prevPage) => prevPage + 1);
        setIsLoading(false);
      }, 1000); // Delay for 1 second before adding data
    } catch (error) {
      console.error("Error fetching comments:", error);
      setIsLoading(false);
    }
  }, [isLoading, commentPage]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        getComments();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getComments]);

  // Handle comment submission
  const handleAddComment = async () => {
    if (!newComment.trim() || isSubmitting) return; // Prevent empty submissions and duplicate submissions

    setIsSubmitting(true);
    try {
      const addedComment = await addComment(troublePostId, {
        content: newComment,
      });
      setComments([addedComment, ...comments]); // Add new comment to the top of the list
      setNewComment(""); // Clear input field
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle comment deletion
  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(commentId); // Call the deleteComment API
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.commentId !== commentId)
      );
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  // Total number of comments
  const count = comments.length;

  return (
    <CommentContainerWrapper>
      <TitleWrapper>
        <Title>댓글</Title>
        <Count>총 {count}개</Count>
      </TitleWrapper>
      <InputWrapper>
        <StyledProfileImg src={ProfileImg} alt="profile image" />
        <StyledInput
          placeholder="댓글을 작성해주세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
          disabled={isSubmitting} // Disable input while submitting
        />
        <SubmitButton onClick={handleAddComment} disabled={isSubmitting}>
          등록
        </SubmitButton>
      </InputWrapper>

      {/* Comment list */}
      {comments.map((comment) => (
        <Comment
          key={comment.commentId}
          writer={comment.commentWriter}
          content={comment.commentContent}
          userProfileImg={comment.commentUserProfileImg}
          time={comment.commentTime}
          onDelete={() => handleDeleteComment(comment.commentId)}
        />
      ))}
      {isLoading && <Loading />}
    </CommentContainerWrapper>
  );
};

export default CommentContainer;

const CommentContainerWrapper = styled.div`
  width: 84.5588em;
  font-size: 0.85em;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0 1em;
  }
`;

const TitleWrapper = styled.div`
  width: 75em;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  margin-right: 1em;
  color: #161a3f;
  font-size: 1.25em;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const Count = styled.div`
  color: #a2a3b2;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const InputWrapper = styled.div`
  margin: 1.5em 0;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 1em 0;
  }
`;

const StyledProfileImg = styled.img`
  width: 2.6038em;
  height: 2.6038em;

  @media (max-width: 768px) {
    width: 2em;
    height: 2em;
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
  font-family: "NanumSquareNeo";

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
