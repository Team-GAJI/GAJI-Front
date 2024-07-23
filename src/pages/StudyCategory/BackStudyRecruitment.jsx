import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logos/logo.svg';
import Backimage from '../../assets/images/Rectangle 16.png';


const BackStudyRecruitment = () => {
    return (
        <CardItemWrapper>
            <StyledWrapper>
                    <InfoTextWrapper>
                        <Text>모집중</Text>
                        <Text>n명 지원</Text>
                        <DeadlineTitle>D-5</DeadlineTitle>
                    </InfoTextWrapper>
                    <SecondInfoText>
                        <ActivityTitle>제목입니다</ActivityTitle>
                    </SecondInfoText>
                    <ExplanationTitle>설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명설명 설명설명입니다 설명.... </ExplanationTitle>
                    <TextWrapper>
                    <TimeText>1시간</TimeText>
                    <DetailButton>N명 모집중!</DetailButton> 
                    </TextWrapper>
            </StyledWrapper>  
        </CardItemWrapper>
    );
};

export default BackStudyRecruitment;


const CardItemWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.2); 
    background-image: url(${Backimage});
    background-size: cover; 
    background-position: center; 
    border: 1px solid #C8C8C8; 
    border-radius: 8px;
    width: 250px;
    height : 300px;
    margin-top: 20px;
    padding : 20px 10px; 0px; 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const StyledWrapper = styled.div`
    width: 100%;
`;

const InfoTextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
    gap: 6px; 
`;
const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 160px; 
    margin-top: 40px;
`;
const Text = styled.p`
    border: 1px solid #C8C8C8;
    border-radius: 10px;
    font-weight: 800;
    font-size: 0.8em;
    width: 60px;
    height: 20px;
    text-align: center;
    color: #fff;
    line-height: 20px; 
    margin: 0; 
`;
const SecondInfoText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;
const ActivityTitle = styled.h2`
    color: #fff;
    font-size: 1.125em;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 800; 
`;
const DeadlineTitle = styled.div`
    color: #fff;
    font-size: 1.125em;
    margin-top: 5px;
    margin-left: 80px;
    margin-bottom: 8px;
    font-weight: 800; 

`;
const ExplanationTitle = styled.h3`
    color: #fff;
    cursor: pointer;
    font-size: 0.875em;
    margin: 0;
    word-break: break-word; 
`;
const DetailButton = styled.div`
    font-size: 0.7em;
    font-weight: 700;
    color: #747881;
    cursor: pointer;
    margin-top: auto;
    text-align: right;
`;
const TimeText = styled.div`
    font-size: 0.7em;
    font-weight: 700;
    color: #747881;
    cursor: pointer;
    margin-top: auto;
    text-align: left;
`;