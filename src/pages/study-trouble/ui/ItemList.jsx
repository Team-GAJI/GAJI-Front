import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../../../assets/icons/common/usericon.svg';
import ItemImageSrc from '../../../assets/images/common/Rectangle16.png';
import CommentIconSrc from '../../../assets/images/troubleshooting/comment.png';
import { fetchTroubleShootingPosts } from '../api/troubleShootingInfoAPI';
import { fetchTroubleShootingPost } from '../api/troubleShootingInfoAPI';

const ItemList = ({ roomId, postId }) => {
    const [items, setItems] = useState([]);
    const [lastPostId, setLastPostId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    console.log(roomId);
    console.log(postId);

    const [postData, setPostData] = useState(null); // State to store fetched post data
    const [error, setError] = useState(null); // 에러 상태를 추적할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태를 추적할 상태
    useEffect(() => {
        if (postId) {
            const fetchPost = async () => {
                try {
                    const data = await fetchTroubleShootingPost(postId);
                    console.log(data);
                    setPostData(data); // Set the fetched post data in state
                    setLoading(false); // Set loading to false after data is fetched
                } catch (error) {
                    setError('Failed to fetch post data'); // Set error state in case of an error
                    setLoading(false); // Set loading to false even if there's an error
                }
            };
            fetchPost();
        }
    }, [postId]);

    // const loadPosts = useCallback(async () => {
    //     if (isLoading) return;
    //     setIsLoading(true);

    //     try {
    //         const newItems = await fetchTroubleShootingPosts(roomId, lastPostId);
    //         console.log('Fetched items:', newItems); // 빈 배열값으로 나옴
    //         if (!Array.isArray(newItems)) {
    //             throw new Error('Fetched items are not an array');
    //         }

    //         setItems((prevItems) => [...prevItems, ...newItems]);

    //         if (newItems.length > 0) {
    //             setLastPostId(newItems[newItems.length - 1].id);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching posts:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }, [roomId, lastPostId, isLoading]);

    // useEffect(() => {
    //     loadPosts();
    // }, [loadPosts]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (
    //             window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
    //             isLoading
    //         )
    //             return;

    //         loadPosts();
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [loadPosts, isLoading]);

    // const handleItemClick = (id) => {
    //     navigate(`/study/trouble/detail${id}`);
    // };
    const handleItemClick = (id) => {
        navigate(`/study/trouble/detail${id}`, { state: { postId: id } });
    };

    console.log(items);
    console.log(roomId);
    return (
        <>
            <p>dddd</p>
            {postData && (
                <div>
                    <h2>{postData.result.title}</h2> {/* 게시글 제목 출력 */}
                    <p>{postData.result.body}</p> {/* 게시글 내용은 body에서 가져오기 */}
                    <p>작성자: {postData.result.authorName}</p> {/* 작성자 정보 */}
                    <p>작성일: {new Date(postData.result.createdAt).toLocaleString()}</p>{' '}
                    {/* 작성일을 읽기 좋은 형식으로 표시 */}
                    <p>조회수: {postData.result.viewCount}</p> {/* 조회수 */}
                    <p>좋아요: {postData.result.likeCount}</p> {/* 좋아요 수 */}
                    <p>북마크: {postData.result.bookmarkCount}</p> {/* 북마크 수 */}
                </div>
            )}
            <ItemGrid>
                {items.map((postData) => (
                    <Item key={postData.id} onClick={() => handleItemClick(item.id)}>
                        <ItemImageWrapper>
                            <ItemImage src={ItemImageSrc} alt={item.title} />
                            <CommentInfo>
                                <CommentIcon src={CommentIconSrc} alt="comment icon" />
                                <CommentCount>{item.commentCount}</CommentCount>
                            </CommentInfo>
                        </ItemImageWrapper>

                        <ItemContent>
                            <ItemTitle>{postData.result.title}</ItemTitle>
                            <ItemDetails>
                                <ItemUser>
                                    <UserIconImg src={UserIcon} alt="user icon" />
                                    {item.nickname}
                                </ItemUser>
                                <ItemTime>{new Date(item.createdAt).toLocaleDateString()}</ItemTime>
                                <ItemViews>조회 {postData.result.viewCount}</ItemViews>
                            </ItemDetails>
                        </ItemContent>
                    </Item>
                ))}
            </ItemGrid>
        </>
    );
};

export default ItemList;

const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.25em;
    max-width: 75em;
    width: 100%;
    margin-top: 2.5em;
    margin-bottom: 3.125em;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
    }
`;

const Item = styled.div`
    background-color: #fff;
    border-radius: 0.625em;
    box-shadow: 0 0.25em 0.375em rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 0.0625em solid #8e59ff;
    transition:
        transform 0.3s,
        box-shadow 0.3s;

    &:hover {
        transform: translateY(-0.5em);
        box-shadow: 0 0.5em 0.75em rgba(0, 0, 0, 0.2);
    }
`;

const ItemImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 9.375em;
`;

const ItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CommentInfo = styled.div`
    position: absolute;
    top: 0.65em;
    left: 0.65em;
    display: flex;
    align-items: center;
`;

const CommentIcon = styled.img`
    width: 0.65em;
    height: 0.65em;
    margin-right: 0.45em;
`;

const CommentCount = styled.span`
    margin-left: 0.3em;
    font-size: 0.75em;
    color: white;
`;

const ItemContent = styled.div`
    padding: 0.875em;
    transition:
        background-color 0.3s,
        transform 0.3s;

    &:hover {
        background-color: #f0f0f0;
        transform: scale(1.02);
    }
`;

const ItemTitle = styled.h2`
    font-size: 1em;
    margin-bottom: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.625em;
    margin-bottom: 0.1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const ItemUser = styled.p`
    font-size: 0.55em;
    color: #d0d1d9;
    display: flex;
    align-items: center;
`;

const UserIconImg = styled.img`
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.5em;
`;

const ItemTime = styled.p`
    font-size: 0.65em;
    color: #d0d1d9;
`;

const ItemViews = styled.p`
    font-size: 0.5em;
    color: #d0d1d9;
`;
