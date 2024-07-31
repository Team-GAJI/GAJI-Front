import React from 'react';
import Header from '../../components/common/Header';
import styled from 'styled-components';
import backgroundimage from '../../assets/images/login/background.png';
import Logo from '../../components/common/Logo';
import { Color } from '../../components/style/Color';
import { GoogleLoginButton } from '../../components/style/Button';
import GoogleLogo from '../../assets/icons/login/googlelogo.svg?react';


const RegisterPage = () => {
    return (
            <RegisterWrapper image={backgroundimage}>
                <Header />
                <StyledLogo/>
                <Title>가지고 싶은 스터디, <Color>GAJI</Color></Title>
                    <ColumnWrapper>
                        <GoogleLoginButton>
                            <GoogleLogo/>
                            Sign in with Google
                        </GoogleLoginButton>
                        <Text>회원가입하기</Text>
                    </ColumnWrapper>
                <RegisterFooter>@ Copyright 2024_GAJI</RegisterFooter>
            </RegisterWrapper>
    );
};

export default RegisterPage;

const RegisterWrapper = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    gap : 5%;
`;

const ColumnWrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1em;
`

const Title = styled.div`
    font-size : 2em;
    font-weight : 700;
`;


const Text = styled.div`
    color : #C1C7CD;
    text-align : center;
    font-size : 0.81em;
`;

const RegisterFooter = styled.div`
    position : fixed;
    bottom : 2.5em;
    color : #D0D1D9;
    font-size : 0.81em;
    text-align : center;
`;

const StyledLogo = styled(Logo)`
    width : 180px;
`