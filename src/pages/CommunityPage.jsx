import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/communityBackground.png';
import LogoIcon from '../assets/logos/logo.svg?react';
import CommunityHomePosts from '../components/communityMain/CommunityHomePosts';

const CommunityPage = () => {
    /* state 관리 */
    const [activeButton, setActiveButton] = useState('커뮤니티 홈');
    const [title, setTitle] = useState('커뮤니티');

    /* 버튼 클릭 시 상태 변경 */
    const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
        setTitle(buttonText === '커뮤니티 홈' ? '커뮤니티' : buttonText);
    };

    return (
        <>
            <HeaderWrapper>
                <StyledLogoIcon />
                <Title>{title}</Title>
                <LogoText>'가지'고 싶은 지식을 나누고 성장해요 !</LogoText>
                <ButtonsWrapper>
                    <StyledButton 
                        isActive={activeButton === '커뮤니티 홈'}
                        onClick={() => handleButtonClick('커뮤니티 홈')}
                    >
                        커뮤니티 홈
                    </StyledButton>
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
            <PostsWrapper>
                <HotPostText>HOT 게시물</HotPostText>
                <CommunityHomePosts activeButton={activeButton}/>
            </PostsWrapper>
        </>
    );
};

export default CommunityPage;

const HeaderWrapper = styled.div`
    margin-top: 2em;
    height: 16.5em;
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
    margin: 4px;
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
    padding-top: 2.5em;
    height: 15em;
    background-color: #F0EAFF;
    text-align: center;
`;

const HotPostText = styled.div`
    font-size: 1.5em;
    font-weight: 800;
    color: #8E59FF;
`;
