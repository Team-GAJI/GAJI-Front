import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    background-color: rgba(22, 26, 63, 0.7);
    border: 1px solid rgba(22, 26, 63, 0.7);;
    border-radius: 8px;
    width: 115px;
    height : 270px;
    margin-top: 20px;
    overflow: hidden;
`;

const Selectbutton = styled.div`
    font-size: 0.5em;
    width: 100px;
    min-width: 100px;
    border-radius: 8px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
    margin-top: 5px;
    transition: border-color 0.5s ease; 

    &:hover {
        border: 1px solid #fff;
    }
`;

const DetailCategory = () => {
    return (
        <ContentWrapper>
            <Selectbutton>개발</Selectbutton>
            <Selectbutton>인공지능</Selectbutton>
            <Selectbutton>하드웨어</Selectbutton>
            <Selectbutton>보안</Selectbutton>
            <Selectbutton>네트워크-클라우드</Selectbutton>
            <Selectbutton>어학</Selectbutton>
            <Selectbutton>디자인</Selectbutton>
            <Selectbutton>비즈니스 &#40;pm&#41;</Selectbutton>
            <Selectbutton>독서 모임</Selectbutton>
        </ContentWrapper>
    );
};

export default DetailCategory;