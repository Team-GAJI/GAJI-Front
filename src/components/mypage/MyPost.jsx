import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PuppleButton } from '../style/Button';
import Loading from '../common/Loading';

const MyPost = () => {
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [category,setCategory] = useState(0);

    const dummyPosts = [
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 1",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 2",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 3시간 전, 조회수 45 | 좋아요 5"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 1",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 2",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 3시간 전, 조회수 45 | 좋아요 5"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 1",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 2",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 3시간 전, 조회수 45 | 좋아요 5"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 1",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 2",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 3시간 전, 조회수 45 | 좋아요 5"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 1",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 2",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 3시간 전, 조회수 45 | 좋아요 5"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 1",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 2시간 전, 조회수 123 | 좋아요 10"
        },
        {
            postState: "모집중",
            postTitle: "게시글 제목 예시 2",
            postText: "내용 미리보기. 300자 보이게 해주시면 됨 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요.",
            postInfo: "카테고리 | 작성자, 3시간 전, 조회수 45 | 좋아요 5"
        },
        // 동일한 형식으로 다른 더미 데이터 추가
    ];

    const getPosts = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);
        // 실제 API 호출이 아닌 더미 데이터를 사용
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
                <PostRouteButton onClick={()=>setCategory(1)}>질문하기</PostRouteButton>
                <BorderPostRouteButton onClick={()=>setCategory(2)}>프로젝트 모집</BorderPostRouteButton>
                <PostRouteButton onClick={()=>setCategory(3)}>블로그</PostRouteButton>
                <PostRouteButton onClick={()=>setCategory(4)}>스터디 모집</PostRouteButton>
            </Header>

            <PostListWrapper>
                {posts.map((post, index) => (
                    <PostListItem key={index}>
                        {/* 모집중과 같은 게시글 상태 */}
                        <PostState>{post.postState}</PostState>
                        {/* 게시글 제목 */}
                        <PostTitle>{post.postTitle}</PostTitle>
                        {/* 게시글 내용 */}
                        <PostText>{post.postText}</PostText>
                        {/* 게시글 정보(카테고리|작성자,작성시간(~시간전), 조회수|좋아요수) */}
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
    width : 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.875em;
`;

const ExtraBold = styled.div`
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
`;

const PostListItem = styled.div`
    box-sizing : border-box;
    padding : 1em;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid #E8E9EC;
    gap: 0.8em;
`;

const PostState = styled(PuppleButton)`
    font-weight: 700;
    width :103px;
    height : 1.5em;
`;

const PostTitle = styled.div`
    font-weight: 800;
    font-size: 1.25em;
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
