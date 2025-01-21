import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import ProfileImg from '../../../assets/images/community/userProfileBig.png';
import Comment from './Comment';
import { dummyComments } from './DummyComments';
import Loading from '../../../components/common/Loading';
import { addComment, deleteComment, addReply } from '../api/troubleShootingInfoAPI';
import { userInfoAPI } from '../../mypage/api/userInfoAPI';

// 문제점 1 : 답글을 입력한 후 (UI)
// 문제점 2 : 데이터 유지 X -> 새로고침

const CommentContainer = ({ troublePostId }) => {
    const [commentPage, setCommentPage] = useState(1);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 사용자 닉네임 가져올때... 사용
    const [userNickname, setUserNickname] = useState('');
    const fetchUserNickname = async () => {
        try {
            const response = await userInfoAPI();
            const nickname = response.result.nickname;
            console.log(nickname);
            setUserNickname(nickname);
        } catch (error) {
            console.error('닉네임을 가져오는 중 오류 발생:', error);
        }
    };

    useEffect(() => {
        fetchUserNickname();
    }, []);

    const getComments = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            setTimeout(() => {
                const newPosts = dummyComments.slice((commentPage - 1) * 4, commentPage * 4);
                setComments((prevPosts) => [...prevPosts, ...newPosts]);
                setCommentPage((prevPage) => prevPage + 1);
                setIsLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error fetching comments:', error);
            setIsLoading(false);
        }
    }, [isLoading, commentPage]);

    useEffect(() => {
        getComments();
    }, [getComments]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                getComments();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [getComments]);

    //댓글 추가
    const handleAddComment = async () => {
        const trimmedComment = newComment.trim();

        if (!trimmedComment || isSubmitting) {
            console.error('Comment content is empty or invalid.');
            return;
        }

        setIsSubmitting(true);
        try {
            const addedComment = await addComment(troublePostId, {
                body: trimmedComment,
            });

            if (addedComment && addedComment.result && addedComment.result.commentId) {
                setComments([
                    {
                        commentId: addedComment.result.commentId,
                        commentWriter: userNickname || '닉네임',
                        commentContent: trimmedComment,
                        commentUserProfileImg: ProfileImg,
                        commentTime: new Date().toLocaleString(),
                        replies: [],
                    },
                    ...comments,
                ]);
            } else {
                console.error('댓글 등록 후 commentId를 찾을 수 없습니다.');
            }

            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    //댓글 삭제
    const handleDeleteComment = async (commentId) => {
        try {
            await deleteComment(commentId);
            setComments((prevComments) => prevComments.filter((comment) => comment.commentId !== commentId));
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    //답글달기
    const [replyContent, setReplyContent] = useState('');
    const handleAddReplyComment = async (commentId, content) => {
        try {
            const replyData = {
                commentWriter: userNickname || '닉네임',
                content: content,
                commentUserProfileImg: ProfileImg,
                time: new Date().toLocaleString(),
            };

            setComments((prevComments) =>
                prevComments.map((comment) =>
                    comment.commentId === commentId
                        ? { ...comment, replies: [...comment.replies, replyData] }
                        : comment,
                ),
            );
        } catch (error) {
            console.error('답글 추가 중 오류 발생:', error);
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
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                    disabled={isSubmitting}
                />
                <SubmitButton onClick={handleAddComment} disabled={isSubmitting}>
                    등록
                </SubmitButton>
            </InputWrapper>

            {/* Comment list commentId로 작성한 글 저장 */}
            {comments.map((comment) => (
                <Comment
                    key={comment.commentId}
                    writer={comment.commentWriter}
                    content={comment.commentContent}
                    userProfileImg={comment.commentUserProfileImg}
                    time={comment.commentTime}
                    onDelete={() => handleDeleteComment(comment.commentId)}
                    //답글 임시
                    onAdd={(content) => handleAddReplyComment(comment.commentId, content)}
                    replyContent={replyContent}
                    setReplyContent={setReplyContent}
                    replies={comment.replies}
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
