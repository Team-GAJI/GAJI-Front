import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/logos/logo.svg';

const StudyRecruitment = () => {
    return (
        <CardItemWrapper>
            <StyledWrapper>
                <ImageWrapper>
                    <Image src={Logo} alt="로고" />
                </ImageWrapper>
                <ContentWrapper>
                    <InfoTextWrapper>
                        <Text>모집중</Text>
                        <Text>n명 지원</Text>
                    </InfoTextWrapper>
                    <SecondInfoText>
                        <ActivityTitle>제목입니다</ActivityTitle>
                        <ActivityTitle>D-5</ActivityTitle> {/* 기능 넣어야한다아아앙 */}
                    </SecondInfoText>
                    <ExplanationTitle>설명며어어어어어어어엉어어어어ㅓ어어 </ExplanationTitle>
                    <DetailButton>N명 모집중!</DetailButton>
                </ContentWrapper>
            </StyledWrapper>
        </CardItemWrapper>
    );
};

export default StudyRecruitment;

const CardItemWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #c8c8c8;
    border-radius: 8px;
    min-width: 250px;
    width: 250px;
    margin-top: 20px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledWrapper = styled.div`
    width: 100%;
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 0;
    padding-top: 75%;
    overflow: hidden;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
`;

const ContentWrapper = styled.div`
    padding: 16px;
`;

const InfoTextWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 8px;
    gap: 6px;
`;

const Text = styled.p`
    border: 1px solid #c8c8c8;
    border-radius: 10px;
    font-weight: 800;
    font-size: 0.8em;
    width: 60px;
    height: 20px;
    text-align: center;
    color: #747881;
    line-height: 20px;
    margin: 0;
`;

const SecondInfoText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

const ActivityTitle = styled.h2`
    color: #000;
    font-size: 1.125em;
    margin: 0;
    margin-bottom: 8px;
    font-weight: 800;
`;

const ExplanationTitle = styled.h3`
    color: #000;
    cursor: pointer;
    font-size: 0.875em;
    margin: 0;
    margin-bottom: 16px;
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
