import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '../../assets/icons/common/menuBar.svg?react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../feautres/auth/authSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleLogout = () => {
        dispatch(removeToken());
        setAuth(false);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <HeaderWrapper>
            <RowWrapper>
                <StyledMenuIcon onClick={toggleMenu} />
                {menuVisible && (
                    <MenuWrapper>
                        <Text onClick={() => navigate('/')}>홈</Text>
                        <Text onClick={() => navigate('/study')}>스터디</Text>
                        <Text onClick={() => navigate('/community')}>커뮤니티</Text>
                        <Text onClick={() => navigate('/')}>로드맵</Text>
                        <Text onClick={() => navigate('/')}>강의</Text>
                    </MenuWrapper>
                )}
            </RowWrapper>
            {auth ? (
                <AuthButton onClick={handleLogout}>LOG OUT</AuthButton>
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
`;

const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 4.25em;
    align-items: center;
`;

const MenuWrapper = styled.div`
    display: flex;
    gap: 4.25em;
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const StyledMenuIcon = styled(MenuIcon)`
    width: 1.44em;
    cursor: pointer;
    fill: ${(props) => (props.menuVisible ? '#8E59FF' : '#c8c8c8')};
`;

const Text = styled.div`
    font-size: 1em;
    color: #8e59ff;
    font-weight: 700;
    cursor: pointer;
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
`;
