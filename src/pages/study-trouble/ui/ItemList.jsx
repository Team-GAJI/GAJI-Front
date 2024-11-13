import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../../../assets/icons/common/usericon.svg';
import ItemImageSrc from '../../../assets/images/common/Rectangle16.png';
import CommentIconSrc from '../../../assets/images/troubleshooting/comment.png';
import { fetchTroubleShootingPosts } from '../api/troubleShootingInfoAPI';

const ItemList = ({ roomId }) => {
    const [items, setItems] = useState([]);
    const [lastPostId, setLastPostId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loadPosts = useCallback(async () => {
        if (isLoading) return;
        setIsLoading(true);

        try {
            const newItems = await fetchTroubleShootingPosts(roomId, lastPostId);

            if (!Array.isArray(newItems)) {
                throw new Error('Fetched items are not an array');
            }

            setItems((prevItems) => [...prevItems, ...newItems]);

            if (newItems.length > 0) {
                setLastPostId(newItems[newItems.length - 1].id);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setIsLoading(false);
        }
    }, [roomId, lastPostId, isLoading]);

    // useEffect(() => {
    //     loadPosts();
    // }, [loadPosts]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ||
                isLoading
            )
                return;

            loadPosts();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadPosts, isLoading]);

    // const handleItemClick = (id) => {
    //     navigate(`/study/trouble/detail${id}`);
    // };
    const handleItemClick = (id) => {
        navigate(`/study/trouble/detail${id}`, { state: { postId: id } });
    };

    return (
        <ItemGrid>
            {items.map((item) => (
                <Item key={item.id} onClick={() => handleItemClick(item.id)}>
                    <ItemImageWrapper>
                        <ItemImage src={ItemImageSrc} alt={item.title} />
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
