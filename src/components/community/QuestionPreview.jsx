import React from 'react';
import styled from 'styled-components';
import LikeIcon from '../../assets/icons/community/emptyLikeIcon.svg?react';
import { useNavigate } from 'react-router-dom';

const QuestionPreview = ({key, state, title, content, type, userProfileImg, writer, ago, views, like}) => {
    // useNavigate
    const navigate = useNavigate();

    return (
        <PageWrapper key={key}>
            <PostState>{state}</PostState>
            <ContentWrapper onClick={() => {navigate("/community/post");}}>
                <Title>{title}</Title>
                <Content>
                    {content}
                </Content>
            </ContentWrapper>
            <PostInfoWrapper>
                <PostType>{type}</PostType><StyledBar>|</StyledBar>
                <StyledUserProfileImg src={userProfileImg} alt='user profile'/>
                <Writer>{writer}</Writer>
                <Ago>{ago}</Ago>
                <Views>조회 {views}</Views><StyledBar>|</StyledBar>
                <StyledLikeIcon />
                <Like>{like}</Like>
            </PostInfoWrapper>
            <StyledHr />
        </PageWrapper>
    );
};

export default QuestionPreview;

/* CSS */
const PageWrapper = styled.div`
    margin-top: 1em;
    width: 70em;
    height: 15.5em;
    text-align: start;
`;

const PostState = styled.div`
    border-radius: 15px;
    width: 8em;
    height: 1.7em;
    background-color: #8E59FF;
    color: white;
    font-size: 0.7em;
    line-height: 1.7em;
    text-align: center;
`;

const ContentWrapper = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

const Title = styled.p`
    margin-top: 0.8em;
    width: 20em;
    color: #8E59FF;
    font-size: 1.2em;
    font-weight: bold;
    // 말줄임 처리
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`;

const Content = styled.div`
    height: 4.5em;
    line-height: 1.5em;
    color: #A2A3B2;
    font-size: 1.025em;
    // 말줄임 처리
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;    
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const PostInfoWrapper = styled.div`
    margin-top: 1.5em;
    display: flex;
    flex-direction: row;
    color: #D0D1D9;
    font-size: 0.8em;
`;

const PostType = styled.div`
    margin-right: 1em;
`;

const StyledUserProfileImg = styled.img`
    margin-right: 0.6em;
    width: 1.3em;
    height: 1.3em;
`;

const StyledBar = styled.div`
    margin-right: 1em;
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

const StyledLikeIcon = styled(LikeIcon)`
    margin-right: 0.5em;
    width: 1.3em;
    height: 1.3em;
`;

const Like = styled.div`
`;

const StyledHr = styled.hr`
    margin-top: 2.3em;
    border: none;
    height: 1.5px;
    background-color: #D0D1D9;
`;
