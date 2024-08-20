import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../assets/icons/community/fillLikeIcon.svg?react';
import { useNavigate } from 'react-router-dom';
import userProfileImg from '../../assets/images/community/userProfile.png';

const BlogPreview = ({key, title, content, background, writer, ago, views, like, link}) => {
    // useNavigate
    const navigate = useNavigate();

    return (
        <PostWrapper key={key} onClick={() => {navigate("/community/post");}} link={link}>
            {/* 배경 */}
            <BackgroundWrapper background={background}>
                <LikeWrapper>
                    <StyledLikeIcon /><Like>{like}</Like>
                </LikeWrapper>
            </BackgroundWrapper>
            
            {/* 설명 */}
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
                        <Views>조회 {views}</Views>
                    </InfoRightWrapper>
                </PostInfoWrapper>
            </PostContentContainer>
        </PostWrapper>
    );
};

export default BlogPreview;

const PostWrapper = styled.div`
    border-radius: 10px;
    min-width: 21.6em;
    width: ${({ link }) => link === 'community' ? '21.6em' : '100%'};
    height: ${({ link }) => link === 'community' ? '21.6em' : '21.6em'};
    font-size: 0.7489em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-1.3em);
        box-shadow: 0 0.625em 1.25em #c8c8c8;
    }

    @media (max-width: 1024px) {
        width: 100%;
        max-width: ${({ link }) => link === 'community' ? '35em' : '30em'};
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        max-height: 32em;
        max-width: 35em;
        max-width: ${({ link }) => link === 'community' ? '21.6em' : '35em'};
    }
`;

const BackgroundWrapper = styled.div`
    border: 1px solid #D0D1D9;
    border-radius: 10px 10px 0 0;
    height: 50%;
    background-image: ${({background}) => `url(${background})`};
    background-size: cover;
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
    border: 1px solid #D0D1D9;
    border-top: 0;
    border-radius: 0 0 10px 10px;
    height: 50%;
    background-color: white;
    text-align: start;
`;

const PostTitle = styled.div`
    margin: 1.2692em 1.2em 0.84615em 1.2em;
    width: 13.5em;
    min-width  : 13.5em;
    font-size: 1.3em;
    font-weight: bold;
    // 말줄임 처리
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
        @media(max-width: 1024px){
        width : 100%;
        max-width : 25em;
    }
`;

const Content = styled.div`
    margin: 0 1.92em 1em 1.92em;
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
    margin:  1em 1.56em;
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