import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../../../assets/icons/common/usericon.svg';
import ItemImageSrc from '../../../assets/images/common/Rectangle16.png';
import CommentIconSrc from '../../../assets/images/troubleshooting/comment.png';
import { fetchTroubleShootingPosts } from '../api/troubleShootingInfoAPI';
import { fetchTroubleShootingPost } from '../api/troubleShootingInfoAPI';

const ItemList = ({ roomId, postId }) => {
    const [items, setItems] = useState([]); // 게시글 목록
    const [lastPostId, setLastPostId] = useState(null); // 최대 postId

    const [postData, setPostData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items'));
        if (savedItems) {
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        if (postId) {
            const fetchPost = async () => {
                try {
                    setIsLoading(true);
                    const data = await fetchTroubleShootingPost(postId);

                    console.log('Fetched post data:', data);
                    setItems((prevItems) => {
                        const isDuplicate = prevItems.some((item) => item.id === data.result.id);
                        if (!isDuplicate) {
                            return [...prevItems, data.result];
                        }
                        return prevItems;
                    });

                    setPostData(data.result);
                } catch (err) {
                    console.error('Error fetching post:', err);
                    setError('Failed to fetch post data');
                } finally {
                    setIsLoading(false);
                }
            };
            fetchPost();
        }
    }, [postId]);

    useEffect(() => {
        if (roomId) {
            const fetchPosts = async () => {
                try {
                    setIsLoading(true);
                    const data = await fetchTroubleShootingPosts(roomId, lastPostId);
                    console.log('Fetched items:', data);

                    if (data.length > 0) {
                        // 새로운 게시글 추가 후, lastPostId를 업데이트
                        const newLastPostId = Math.max(...data.map((item) => item.id), lastPostId);
                        const data = await fetchTroubleShootingPosts(roomId, lastPostId);
                        // setItems((prevItems) => {
                        //     return [...prevItems, ...data.filter((item) => !prevItems.some((existing) => existing.id === item.id))];
                        // });

                        setLastPostId(newLastPostId);

                        // setItems((prevItems) => {
                        //     // 기존 아이템들 중 이미 존재하는 아이템은 제외하고, 새로운 아이템만 추가
                        //     const newItems = data.filter(
                        //         (item) => !prevItems.some((existingItem) => existingItem.id === item.id),
                        //     );
                        //     // 새로 추가된 아이템들을 prevItems 뒤에 붙여서 반환
                        //     return [...prevItems, ...newItems];
                        // });
                    }
                } catch (err) {
                    console.error('Error fetching posts:', err);
                    setError('Failed to fetch posts');
                } finally {
                    setIsLoading(false);
                }
            };
            fetchPosts();
        }
    }, [roomId, lastPostId]);

    const handleItemClick = (id) => {
        navigate(`/study/trouble/detail`, { state: { postId: id, roomId } });

        // navigate(`/study/trouble/detail`, { state: { postId: id } });
    };

    return (
        <>
            {/* 게시글 목록 표시 */}
            <ItemGrid>
                {items.map((item) => (
                    <Item key={item.id} onClick={() => handleItemClick(item.id)}>
                        <ItemImageWrapper>
                            <ItemImage src={item.imageSrc || ItemImageSrc} alt={item.title} />
                            <CommentInfo>
                                <CommentIcon src={CommentIconSrc} alt="comment icon" />
                                <CommentCount>{item.commentCount}</CommentCount>
                            </CommentInfo>
                        </ItemImageWrapper>
                        <ItemContent>
                            <ItemTitle>{item.title}</ItemTitle>
                            <ItemDetails>
                                <ItemUser>
                                    <UserIconImg src={UserIcon} alt="user icon" />
                                    {item.nickname}
                                </ItemUser>
                                <ItemTime>{new Date(item.createdAt).toLocaleDateString()}</ItemTime>
                                <ItemViews>조회 {item.viewCount}</ItemViews>
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
