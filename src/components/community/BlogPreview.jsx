import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../assets/icons/community/fillLikeIcon.svg?react';
import BlogBackground from '../../assets/images/community/blogBackground.png';
import UserProfileImg from '../../assets/images/community/userProfile.png';
import { useNavigate } from 'react-router-dom';

const BlogPreview = () => {
    /* useNavigate */
    const navigate = useNavigate();

    return (
        <PostWrapper onClick={() => {navigate("/community/post");}}>
            <LikeWrapper>
                <StyledLikeIcon /><Like>10</Like>
            </LikeWrapper>
            <PostContentContainer>
                <PostTitle>블로그 제목</PostTitle>
                <PostInfoWrapper>
                    <StyledUserProfileImg src={UserProfileImg} alt='user profile'/>
                    <Writer>user1023</Writer>
                    <Ago>1시간 전</Ago>
                    <Views>조회 50</Views>
                </PostInfoWrapper>
            </PostContentContainer>
        </PostWrapper>
    );
};

export default BlogPreview;

/* CSS */
const PostWrapper = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 8px;
    margin: 1.2em;
    width: 21.6em;
    height: 21.6em;
    background-image: url(${BlogBackground});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
`;

const LikeWrapper = styled.div`
    color: white;
    position: absolute;
    top: 0.8em;
    left: 1em;
    display: flex;
    align-items: center;
`;

const StyledLikeIcon = styled(LikeIcon)`
    width: 1.1em;
    height: 1.1em;
    margin-right: 0.5em;
`;

const Like = styled.span`
    font-size: 1.1em;
`;

const PostContentContainer = styled.div`
    border-top: 1px solid #8E59FF;
    border-radius: 0 0 8px 8px;
    height: 8em;
    background-color: white;
    text-align: start;
`;

const PostTitle = styled.div`
    margin: 1.25em 0 2em 1.25em;
    font-size: 1.2em;
    font-weight: bold;
`;

const PostInfoWrapper = styled.div`
    margin-left: 1.5em;
    display: flex;
    flex-direction: row;
    color: #D0D1D9;
`;

const StyledUserProfileImg = styled.img`
    margin-right: 0.6em;
    width: 1.3em;
    height: 1.3em;
`;

const Writer = styled.div`
    margin-right: 1em;
`;

const Ago = styled.div`
    margin-right: 1em;
`;

const Views = styled.div`
    margin-right: 1em;
`;