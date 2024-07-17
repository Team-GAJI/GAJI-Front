import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../../assets/icons/plusicon.svg?react';

const Header = () => {
    return (
        <HeaderWrapper>
            <RowWrapper>
                <StyledPlusIcon/>
                <Text>홈</Text>
                <Text>스터디</Text>
                <Text>커뮤니티</Text>
                <Text>로드맵</Text>
                <Text>강의</Text>
            </RowWrapper>
                <AuthButton>LOG IN</AuthButton>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    z-index : 5;
    background-color:#FBFAFF;
    position : fixed;
    box-sizing: border-box; 
    top: 0;
    left: 0;
    right: 0;
    display : flex;
    width: 100%;
    height : 104px;
    justify-content : space-between;
    align-items : center;
    padding-left : 3.1em;
    padding-right : 3.1em;
`;

const RowWrapper = styled.div`
    width : 100%;
    display : flex;
    gap : 4.25em;
`;

const StyledPlusIcon = styled(PlusIcon)`
    width : 1.44em;
`;

const Text = styled.div`
    font-size : 1em;
    color : #8E59FF;
    font-weight : 700;
`;

const AuthButton = styled.div`
    font-size : 0.8125em;
    width : 123px;
    border: 1px solid #161A3F;
    border-radius: 10px;
    font-weight : 800;
    padding : 0.8125em;
    text-align : center;
`