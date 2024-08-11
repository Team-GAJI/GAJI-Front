import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveButton } from '../feautres/community/communitySlice';
import Hashtag from '../components/communityWrite/Hashtag';
import WritePost from '../components/communityWrite/WritePost';
import PageHeader from '../components/common/PageHeader';
import WriteSelectBox from '../components/communityWrite/WriteSelectBox';

const CommunityWritePage = () => {
    // Redux 상태 관리
    const { title } = useSelector((state) => state.community);
    const dispatch = useDispatch();

    useEffect(() => {
        setActiveButtonIndex(getTitleIndex(title));
    }, [title]);

    // 초기 titleIndex 설정
    const getTitleIndex = (title) => {
        if (title === '프로젝트') {
            return 0;
        } else if (title === '질문') {
            return 1;
        } else {
            return 2;
        }
    };

    // state 관리
    const [activeButtonIndex, setActiveButtonIndex] = useState(getTitleIndex(title));
    const [hashtags, setHashtags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isComposing, setIsComposing] = useState(false);

    // 헤더 함수
    const headerTitles = ["프로젝트", "질문", "블로그"];
    const handleHeaderButtonClick = (index) => {
        setActiveButtonIndex(index);
        if (index == 0) {
            dispatch(setActiveButton("프로젝트"));
        } else if (index == 1) {
            dispatch(setActiveButton("질문"));
        } else {
            dispatch(setActiveButton("블로그"));
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && !isComposing && inputValue.trim() && !hashtags.includes(inputValue.trim())) {
            setHashtags([...hashtags, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleCompositionStart = () => {
        setIsComposing(true);
    };

    const handleCompositionEnd = () => {
        setIsComposing(false);
    };

    const handleDeleteHashtag = (tagToDelete) => {
        setHashtags(hashtags.filter(tag => tag !== tagToDelete));
    };

    return (
        <>
            {/* 헤더 */}
            <PageHeader
                pageTitle="커뮤니티 글쓰기"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleHeaderButtonClick}
                changeColorOnClick={true}
                changeColorOnHover={true}
            />

            {/* 게시글 작성 */}
            <PostsWrapper>
                <PostOptionWrapper>
                    <WriteSelectBox/>
                    <HashtagInputWrapper>
                        # <HashtagInput
                            placeholder='해시태그를 작성해주세요'
                            value={inputValue} 
                            onChange={handleInputChange} 
                            onKeyDown={handleInputKeyDown}
                            onCompositionStart={handleCompositionStart}
                            onCompositionEnd={handleCompositionEnd}/>
                    </HashtagInputWrapper>
                </PostOptionWrapper>

                <PostTitle>게시글 제목</PostTitle>
                {/* 해시태그 */}
                <HashtagWrapper>
                    {hashtags.map((tag, index) => (
                        <Hashtag key={index} hashtag={tag} onDelete={handleDeleteHashtag}/>
                    ))}
                </HashtagWrapper>
                {/* 작성 공간 */}
                <WritePost/>
            </PostsWrapper>
        </>
    );
};

export default CommunityWritePage;

/* CSS */
const PostsWrapper = styled.div`
    margin: 2.5em 0 3.5em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const PostOptionWrapper = styled.div`
    margin-bottom: 2em;
    width: 57.125em;
    display: flex;
`;

const HashtagInputWrapper = styled.div`
    padding-left: 1.5em;
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 27.5em;
    height: 2.5em;
    line-height: 2.5em;
    background-color: transparent;
    color: #8E59FF;
    font-weight: 800;
`;

const HashtagInput = styled.input`
    border: none;
    width: 29em;
    background-color: transparent;
    font-weight: 800;
    -webkit-appearance: none;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #A2A3B2;
        font-weight: 800;
    }
    font-family: 'NanumSquareNeo';
`;

const PostTitle = styled.div`
    width: 57.125em;
    color: #161A3F;
    font-weight: 800;
`;

const HashtagWrapper = styled.div`
    margin: 0.7em 0;
    width: 57.125em;
    display: flex;
`;
