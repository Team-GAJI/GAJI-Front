import React from 'react';
import styled from 'styled-components';
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
    border-radius: 0.5em; 
    width: 15.625em;  
    height : 20.32em;
    margin-top: 1.25em; 
    padding: 1.25em 0.625em 0 0.625em;
    overflow: hidden;
    box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1); 
`;

const StyledWrapper = styled.div`
    width: 100%;
`;

const InfoTextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.5em; 
    gap: 0.375em;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10em; 
    margin-top: 2.5em; 
`;

const Text = styled.p`
    border: 1px solid #C8C8C8;
    border-radius: 0.625em; 
    font-weight: 800;
    font-size: 0.8em;
    width: 4.75em; 
    height: 1.25em; 
    text-align: center;
    color: #fff;
    line-height: 1.25em; 
    margin: 0;
`;

const SecondInfoText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em; 
`;

const ActivityTitle = styled.h2`
    color: #fff;
    font-size: 1.125em;
    margin: 0;
    margin-bottom: 0.5em; 
    font-weight: 800; 
`;

const DeadlineTitle = styled.div`
    color: #fff;
    font-size: 1.125em;
    margin-top: 0.3125em;
    margin-left: 4em; 
    margin-bottom: 0.5em; 
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
