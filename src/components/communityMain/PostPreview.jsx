import React from 'react'
import styled from 'styled-components';
import UserProfileImg from '../../assets/images/userProfile.png';
import LikeIcon from '../../assets/icons/common/emptyLikeIcon.svg?react';

const PostPreview = () => {
    return (
        <PageWrapper>
            <PostState>모집중</PostState>
            <Title>게시글 제목입니다</Title>
            <Content>내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 
                    안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 
                    안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.
            </Content>
            <PostInfoWrapper>
                <PostType>프로젝트</PostType><StyledBar>|</StyledBar>
                <StyledUserProfileImg src={UserProfileImg} alt='user profile'/>
                <Writer>user1023</Writer>
                <Ago>1시간 전</Ago>
                <Views>조회 50</Views><StyledBar>|</StyledBar>
                <StyledLikeIcon />
                <Like>30</Like>
            </PostInfoWrapper>
            <StyledHr />
        </PageWrapper>
    );
};

export default PostPreview;

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

const Title = styled.p`
    margin-top: 0.8em;
    color: #8E59FF;
    font-size: 1.2em;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`;

const Content = styled.div`
    height: 4.5em;
    color: #A2A3B2;
    font-size: 1.025em;
    overflow: hidden;
    line-height: 1.4em;
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
    cursor: pointer;
`;

const Like = styled.div`
`;

const StyledHr = styled.hr`
    margin-top: 2.3em;
    border: none;
    height: 1.5px;
    background-color: #D0D1D9;
`;