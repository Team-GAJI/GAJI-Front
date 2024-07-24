import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PuppleButton } from '../style/Button';
import Loading from '../common/Loading';

const MyPost = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [category, setCategory] = useState(0);

    const dummyPosts = [
        // 더미 포스트 데이터
    ];

    const getPosts = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        setTimeout(() => {
            const newPosts = dummyPosts.slice((page - 1) * 2, page * 2); // 페이지당 2개씩 로드
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
        }, 1000); // 1초 지연 후 데이터 추가
    }, [isLoading, page]);

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                getPosts();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [getPosts]);

    return (
        <MyPostWrapper>
            <ExtraBold>내가 쓴 글</ExtraBold>
            <Header>
                <PostRouteButton $isActive={category === 0} onClick={() => setCategory(0)}>질문하기</PostRouteButton>
                <PostRouteButton $isActive={category === 1} onClick={() => setCategory(1)}>프로젝트 모집</PostRouteButton>
                <PostRouteButton $isActive={category === 2} onClick={() => setCategory(2)}>블로그</PostRouteButton>
                <PostRouteButton $isActive={category === 3} onClick={() => setCategory(3)}>스터디 모집</PostRouteButton>
            </Header>

            <PostListWrapper>
                {posts.map((post, index) => (
                    <PostListItem key={index}>
                        <PostState>{post.postState}</PostState>
                        <PostTitle>{post.postTitle}</PostTitle>
                        <PostText>{post.postText}</PostText>
                        <PostInfo>{post.postInfo}</PostInfo>
                    </PostListItem>
                ))}
                {isLoading && (
                    <Loading />
                )}
            </PostListWrapper>
        </MyPostWrapper>
    );
};

export default MyPost;

const MyPostWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.875em;
    padding: 1em;

    @media (max-width: 768px) {
        padding: 0.5em;
        gap: 1em;
    }
`;

const ExtraBold = styled.div`
    font-weight: 800;
    font-size: 1.25em;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const Header = styled.div`
    display: flex;
    gap: 0.6em;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
        gap: 0.4em;
    }
`;

const PostRouteButton = styled.div`
    box-sizing: border-box;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 129px;
    height: 27px;
    border-radius: 10px;
    border: ${({ $isActive }) => ($isActive ? '1px solid #8E59FF;' : 'none')};

    @media (max-width: 768px) {
        width: 100px;
        height: 24px;
        font-size: 0.8em;
    }
`;

const PostListWrapper = styled.div`
    width: 100%;
    border-top: 3px solid #8E59FF;
    padding-top: 1.5625em;
    padding-bottom: 1.5625em;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 1em;
        padding-bottom: 1em;
    }
`;

const PostListItem = styled.div`
    width: 100%;
    max-width: 600px;
    box-sizing: border-box;
    padding: 1em;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #E8E9EC;
    gap: 0.8em;

    @media (max-width: 768px) {
        padding: 0.8em;
        gap: 0.6em;
    }
`;

const PostState = styled(PuppleButton)`
    font-weight: 700;
    width: 103px;
    height: 1.5em;

    @media (max-width: 768px) {
        width: 90px;
        height: 1.2em;
        font-size: 0.8em;
    }
`;

const PostTitle = styled.div`
    font-weight: 800;
    font-size: 1.25em;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const PostText = styled.div`
    font-weight: 700;
    font-size: 1em;
    max-height: 4.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #A2A3B2;

    @media (max-width: 768px) {
        font-size: 0.9em;
        max-height: 3.6em;
    }
`;

const PostInfo = styled.div`
    font-weight: 700;
    font-size: 0.8125em;
    color: #D0D1D9;

    @media (max-width: 768px) {
        font-size: 0.75em;
    }
`;
