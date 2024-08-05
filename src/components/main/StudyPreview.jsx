import React from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

const StudyPreview = ({key, title, content, background, ago, dday, recruiter, state, applicant}) => {
    // useNavigate
    // const navigate = useNavigate();

    return (
        <PostWrapper key={key}>
            <BackgroundWrapper background={background}>
                <TagWrapper>
                    <Tag>{state}</Tag>
                    <Tag>{applicant}명 지원</Tag>
                </TagWrapper>
            </BackgroundWrapper>
            <DetailsWrapper>
                <TitleWrapper>
                    <Title>{title}</Title>
                    <Dday>D-{dday}</Dday>
                </TitleWrapper>
                <Content>{content}</Content>
                <BottomWrapper>
                    <Ago>{ago}</Ago>
                    <Recruiter>{recruiter}명 모집중</Recruiter>
                </BottomWrapper>
            </DetailsWrapper>
        </PostWrapper>
    );
};

export default StudyPreview;

/* CSS */
const PostWrapper = styled.div`
    border-radius: 10px;
    margin: 1em 0.5em;
    width: 13.2425em;
    height: 16.8125em;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover{
        transform: translateY(-0.8em);
        box-shadow: 0 0.625em 1.25em #C8C8C8;
    }
`;

const BackgroundWrapper = styled.div`
    border: 1px solid #D0D1D9;
    border-radius: 10px 10px 0 0;
    height: 50%;
    display: flex;
    position: relative;
    background-image: ${({background}) => `url(${background})`};
    background-size: cover;
`;

const TagWrapper = styled.div`
    margin-left: 0.8em;
    position: absolute;
    bottom: 0;
`;

const Tag = styled.div`
    margin: 0 0.7em 0.6em 0;
    padding: 0 1em;
    border: 1px solid #D0D1D9;
    border-radius: 30px;
    min-width: 2.6409em;
    height: 1.6436em;
    line-height: 1.6436em;
    background-color: white;
    color: gray;
    font-size: 0.6875em;
    font-weight: bold;
    text-align: center;
    display: inline-block;
`;

const DetailsWrapper = styled.div`
    border: 1px solid #D0D1D9;
    border-top: none;
    border-radius: 0 0 10px 10px;
    height: 50%;
    display: flex;
    flex-direction: column;
`;

const TitleWrapper = styled.div`
    margin: 1.1em 1.2em 0.5em 1.2em;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    font-size: 0.875;
    font-weight: 800;
`;

const Dday = styled.div`
    font-size: 0.875;
    font-weight: 800;
`;

const Content = styled.div`
    margin: 0 1.4769em;
    font-size: 0.8125em;
    line-height: 1.4em;
    // 말줄임 처리
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;    
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

const BottomWrapper = styled.div`
    margin: 0.5em 1.2em 0 1.2em;
    display: flex;
    justify-content: space-between;
`;

const Ago = styled.div`
    color: silver;
    font-size: 0.8125em;
    font-weight: bold;
`;

const Recruiter = styled.div`
    color: silver;
    font-size: 0.8125em;
    font-weight: bold;
`;