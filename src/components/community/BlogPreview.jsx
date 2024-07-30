import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../assets/icons/community/fillLikeIcon.svg?react';
import { useNavigate } from 'react-router-dom';

const BlogPreview = ({key, title, content, background, userProfileImg, writer, ago, views, like}) => {
    // useNavigate
    const navigate = useNavigate();

    return (
        <PostWrapper key={key} onClick={() => {navigate("/community/post");}} style={{ backgroundImage: `url(${background})` }}>
            <LikeWrapper>
                <StyledLikeIcon /><Like>{like}</Like>
            </LikeWrapper>
            <PostContentContainer>
                <PostTitle>{title}</PostTitle>
                <Content>
                    {content}
                </Content>
                <PostInfoWrapper>
                    <InfoLeftWrapper>
                        <StyledUserProfileImg src={userProfileImg} alt='user profile'/>
                        <Writer>{writer}</Writer>
                    </InfoLeftWrapper>
                    <InfoRightWrapper>
                        <Ago>{ago}</Ago>
                        <Views>{views}</Views>
                    </InfoRightWrapper>
                </PostInfoWrapper>
            </PostContentContainer>
        </PostWrapper>
    );
};

export default BlogPreview;

/* CSS */
const PostWrapper = styled.div`
    border: 1px solid #D0D1D9;
    border-radius: 8px;
    margin: 1.2em;
    width: 21.6em;
    height: 21.6em;
    font-size: 0.7489em;
    background-size: cover;
    background-color: rgba(208,209,217,0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
`;

const LikeWrapper = styled.div`
    position: absolute;
    top: 0.8em;
    left: 1em;
    display: flex;
    align-items: center;
`;

const StyledLikeIcon = styled(LikeIcon)`
    width: 1.3394em;
    height: 1.1725em;
    margin-right: 0.5em;
`;

const Like = styled.span`
    color: #8E59FF;
    font-size: 1.1em;
`;

const PostContentContainer = styled.div`
    border-top: 1px solid #D0D1D9;
    border-radius: 0 0 7px 7px;
    height: 10.8em;
    background-color: white;
    text-align: start;
`;

const PostTitle = styled.div`
    margin: 1.2692em 1.47696em 0.84615em 1.4770em;
    width: 13.5em;
    font-size: 1.3em;
    font-weight: bold;
    // 말줄임 처리
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`;

const Content = styled.div`
    margin: 0 2.3631em 1em 2.3631em;
    height: 4em;
    line-height: 1.4em;
    font-size: 0.8125em;
    // 말줄임 처리
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;    
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const PostInfoWrapper = styled.div`
    margin:  1em 1.9201em;
    display: flex;
    justify-content: space-between;
    color: #D0D1D9;
`;

const InfoLeftWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.8125em;
    font-weight: bold;
`;

const StyledUserProfileImg = styled.img`
    margin-right: 0.6em;
    width: 1.7515em;
    height: 1.7515em;
`;

const Writer = styled.div`
`;

const InfoRightWrapper = styled.div`
    padding-top: 0.2em;
    display: flex;
    font-size: 0.8125em;
    font-weight: bold;
`;

const Ago = styled.div`
    margin-right: 1.5em;
`;

const Views = styled.div`
`;