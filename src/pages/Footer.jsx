import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logos/logo.svg';

const Footer = () => {
    return (
        <FooterWrapper>
            <RowWrapper>
                <Text>홈</Text>
                <Text>스터디</Text>
                <Text>커뮤니티</Text>
                <Text>로드맵</Text>
                <Text>강의</Text>
                <Text>마이페이지</Text>
            </RowWrapper>
            <RowLogoWrapper>
                <LogoImage src={Logo} alt="로고" />
                <LogoText>가지고 싶은 스터디, <ColorText>GAJI</ColorText></LogoText>
            </RowLogoWrapper>
            <FooterText>@ Copyright 2024_GAJI</FooterText>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.div`
    background-color: #E8E9EC;
    width: 100%;
    height: 277px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.75em;
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 3.75em;
    justify-content: center;
    align-items: center;
`;

const RowLogoWrapper = styled(RowWrapper)`
    gap: 1.5em;
`;

const Text = styled.div`
    color: #697077;
    font-size: 0.8125em;
    font-weight: 400;
`;

const LogoImage = styled.img`
    width: 40px;
    height: auto;
`;

const LogoText = styled.div`
    font-size: 1em;
    font-weight: 700;
`;

const ColorText = styled.span`
    color: #8E59FF;
`;

const FooterText = styled.div`
    color: #959595;
    font-size: 0.8125em;
    font-weight: 700;
`;
