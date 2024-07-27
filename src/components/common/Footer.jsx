import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { Color } from '../style/Color';

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
                <StyledLogo/>
                <LogoText>가지고 싶은 스터디, <Color>GAJI</Color></LogoText>
            </RowLogoWrapper>
            <FooterText>@ Copyright 2024_GAJI</FooterText>
        </FooterWrapper>
    );
};

export default Footer;

const StyledLogo = styled(Logo)`
    width : 57px;
`;

const FooterWrapper = styled.div`
    background-color : #E8E9EC;
    width : 100%;
    height : 277px;
    box-sizing: border-box; 
    display  : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap : 3.75em;
    

`;

const RowWrapper = styled.div`
    display : flex;
    gap :  3.75em;
    justify-content : center;
    align-items : center;
`

const RowLogoWrapper = styled(RowWrapper)`
    gap : 1.5em;
`;

const Text = styled.div`
    color : #697077;
    font-size : 0.8125em;
    font-size : 400;
`;

const LogoText = styled.div`
    font-size : 1em;
    font-weight : 700;
`

const FooterText = styled.div`
    color : #959595;
    font-size : 0.8125em;
    font-wiehgt: 700;
`;