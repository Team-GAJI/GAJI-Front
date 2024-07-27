import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../../assets/icons/common/menuBar.svg?react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeTokens } from '../../feautres/auth/authSlice';
import userProfileUrl from '../../assets/images/common/userProfile.png';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.accessToken);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleLogout = () => {
        dispatch(removeTokens());
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <HeaderWrapper>
            <RowWrapper>
                <StyledMenuIcon onClick={toggleMenu} $menuVisible={menuVisible} />
                <MenuWrapper $menuVisible={menuVisible}>
                    <Text onClick={() => navigate('/')}>홈</Text>
                    <Text onClick={() => navigate('/study')}>스터디</Text>
                    <Text onClick={() => navigate('/community')}>커뮤니티</Text>
                    <Text onClick={() => navigate('/')}>로드맵</Text>
                    <Text onClick={() => navigate('/')}>강의</Text>
                </MenuWrapper>
            </RowWrapper>
            {accessToken ? (
                <>
                    <MyPageButton onClick={() => navigate('/mypage')} />
                    <AuthButton onClick={handleLogout}>LOG OUT</AuthButton>
                </>
            ) : (
                <AuthButton onClick={() => navigate('/login')}>LOG IN</AuthButton>
            )}
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #fbfaff;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 104px;
    justify-content: space-between;
    align-items: center;
    padding-left: 3.1em;
    padding-right: 3.1em;

    @media (max-width: 768px) {
        height: 80px;
        padding-left: 1.5em;
        padding-right: 1.5em;
    }
`;

const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 4.25em;
    align-items: center;

    @media (max-width: 768px) {
        gap: 1em;
    }
`;

const MenuWrapper = styled.div`
    visibility: ${(props) => (props.$menuVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$menuVisible ? '1' : '0')};
    transition: visibility 0.3s ease, opacity 0.3s ease;
    display: flex;
    gap: 4.25em;

    @media (max-width: 768px) {
        flex-direction: column;
        position: absolute;
        top: 79px;
        left: 0;
        right: 0;
        background-color: #FBFAFF;
        padding: 2.1em;
    }
`;

const StyledMenuIcon = styled(MenuIcon)`
    width: 1.44em;
    cursor: pointer;
    fill: ${(props) => (props.$menuVisible ? '#8E59FF' : '#000000')};
    transition: fill 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;

    @media (max-width: 768px) {
        width: 1.44em;
    }
`;

const Text = styled.div`
    font-size: 1em;
    color: #8e59ff;
    font-weight: 700;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 0.5em 0;
    }
`;

const AuthButton = styled.div`
    font-size: 0.8125em;
    width: 123px;
    border: 1px solid #161a3f;
    border-radius: 10px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100px;
        font-size: 0.75em;
        padding: 0.5em;
    }
`;

const MyPageButton = styled.div`
    width: 2.25em;
    height: 2.25em;
    border-radius: 100%;
    margin-right: 2em;
    background-image: url(${userProfileUrl});
    background-size: cover;

    @media (max-width: 768px) {
        width: 1.5em;
        height: 1.5em;
        margin-right: 1em;
    }
`;
