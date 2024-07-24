import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveButton } from '../feautres/community/communitySlice';
import BackgroundImage from '../assets/images/community/communityBackground.png';
import LogoIcon from '../assets/logos/logo.svg?react';
import Hashtag from '../components/communityWrite/Hashtag';
import WritePost from '../components/communityWrite/WritePost';

const CommunityWritePage = () => {
    // Redux 상태 가져오기
    const { activeButton, title } = useSelector((state) => state.community);
    const dispatch = useDispatch();

    // 버튼 클릭 시 상태 변경
    const handleButtonClick = (buttonText) => {
        dispatch(setActiveButton(buttonText));
    };

    return (
        <>
            {/* 헤더 */}
            <HeaderWrapper>
                <StyledLogoIcon />
                <Title>{title}</Title>
                <LogoText>`가지`고 싶은 지식을 나누고 성장해요 !</LogoText>
                <ButtonsWrapper>
                    <StyledButton
                        isActive={activeButton === '프로젝트'}
                        onClick={() => handleButtonClick('프로젝트')}
                    >
                        프로젝트
                    </StyledButton>
                    <StyledButton
                        isActive={activeButton === '질문'}
                        onClick={() => handleButtonClick('질문')}
                    >
                        질문
                    </StyledButton>
                    <StyledButton
                        isActive={activeButton === '블로그'}
                        onClick={() => handleButtonClick('블로그')}
                    >
                        블로그
                    </StyledButton>
                </ButtonsWrapper>
            </HeaderWrapper>

            {/* 게시글 작성 */}
            <PostsWrapper>
                <PostOptionWrapper>
                    <CategorySelect name="category">
                        <option value="1">카테고리</option>
                        <option value="2">개발</option>
                        <option value="3">인공지능</option>
                        <option value="4">하드웨어</option>
                        <option value="5">보안</option>
                        <option value="6">네트워크-클라우드</option>
                        <option value="7">어학</option>
                        <option value="8">디자인</option>
                        <option value="9">비즈니스-PM</option>
                        <option value="10">독서 모임</option>
                        <option value="11">기타</option>
                    </CategorySelect>
                    <HashtagInputWrapper>
                        # <HashtagInput placeholder='해시태그를 작성해주세요'/>
                    </HashtagInputWrapper>
                </PostOptionWrapper>

                <PostTitle>게시글 제목</PostTitle>
                {/* 해시태그 */}
                <HashtagWrapper>
                    <Hashtag/>
                    <Hashtag/>
                    <Hashtag/>
                </HashtagWrapper>
                {/* 작성 공간 */}
                <WritePost/>
            </PostsWrapper>
        </>
    );
};

export default CommunityWritePage;

/* CSS */
const HeaderWrapper = styled.div`
    height: 16.1875em;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const StyledLogoIcon = styled(LogoIcon)`
    width: 4em;
    height: 4em;
`;

const Title = styled.div`
    margin-top: 0.5em;
    font-size: 1.5em;
    font-weight: 800;
    color: #8E59FF;
`;

const LogoText = styled.div`
    margin-top: 1em;
    color: #D0D1D9;
`;

const ButtonsWrapper = styled.div`
    margin-top: 1em;
`;

const StyledButton = styled.button`
    margin: 0.1786em;
    border: none;
    border-radius: 8px;
    width: 10em;
    height: 2.2em;
    background-color: ${({ isActive }) => (isActive ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)')}; 
    color: white;
    font-size: 1.4em;
    cursor: pointer;
`;

const PostsWrapper = styled.div`
    margin: 2.5em 0 6em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const PostOptionWrapper = styled.div`
    margin-bottom: 2.5em;
    width: 57.125em;
    display: flex;
`;

const CategorySelect = styled.select`
    margin-right: 1.2em;
    padding-left: 1em;
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 28.8125em;
    height: 3.1875em;
    background-color: transparent;
    color: #8E59FF;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

const HashtagInputWrapper = styled.div`
    padding-left: 1.5em;
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 27.5em;
    height: 3.1875em;
    line-height: 3.185em;
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
    margin: 1em;
    color: #161A3F;
    font-weight: 800;
`;

const HashtagWrapper = styled.div`
    margin-bottom: 0.7em;
    width: 57.125em;
    display: flex;
`;
