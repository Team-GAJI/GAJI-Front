import React from 'react';
import styled from 'styled-components';
import { Color } from '../style/Color';
import { PuppleButton } from '../style/Button';

const MyPost = () => {
    return (
        <MyPostWrapper>
            <ExtraBold>내가 쓴 글</ExtraBold>
            <Header>
                <PostRouteButton>질문하기</PostRouteButton>
                <BorderPostRouteButton>프로젝트 모집</BorderPostRouteButton>
                <PostRouteButton>블로그</PostRouteButton>
                <PostRouteButton>스터디 모집</PostRouteButton>
            </Header>

            <PostListWrapper>
                <PostListItem>
                    {/* 모집중과 같은 게시글 상태 */}
                    <PostState>모집중</PostState>
                    {/* 게시글 제목 */}
                    <PostTitle>게시글 제목 예시</PostTitle>
                    {/* 게시글 내용 */}
                    <PostText>내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. </PostText>
                    {/* 게시글 정보(카테고리|작성자,작성시간(~시간전), 조회수|좋아요수) */}
                    <PostInfo>카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10</PostInfo>
                </PostListItem>
            </PostListWrapper>

            <MorePostButton>
                더보기
            </MorePostButton>
        </MyPostWrapper>
    );
};

export default MyPost;

const MyPostWrapper = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.875em;
`;

const ExtraBold = styled(Color)`
    font-weight: 800;
    font-size : 1.25em;
`;

const Header = styled.div`
    display: flex;
    gap: 0.6em;
`;

const PostRouteButton = styled.div`
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 129px;
    height: 27px;
    border-radius: 10px;
`;

const BorderPostRouteButton = styled(PostRouteButton)`
    border: 1px solid #8E59FF;
`;

const PostListWrapper = styled.div`
    border-top: 3px solid #8E59FF;
    padding-top: 1.5625em;
    padding-bottom: 1.5625em;
    border-bottom: 2px solid #E8E9EC;
`;

const PostListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8em;
`;

const PostState = styled(PuppleButton)`
    font-weight: 700;
    width :103px;
    height : 1.5em;
`;

const PostTitle = styled(Color)`
    font-weight: 800;
    font-size: 1.25em
`;

const PostText = styled.div`
    font-weight: 700;
    font-size: 1em;
    max-height: 4.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    color : #A2A3B2;
`;

const PostInfo = styled.div`
    font-weight: 700;
    font-size:  0.8125em;
    color: #D0D1D9;
`;

const MorePostButton = styled(PuppleButton)`
    margin-bottom : 41px;
    width : 197px;
    height : 53px;
    font-size : 1.25em;
    font-weight : 700;
`;