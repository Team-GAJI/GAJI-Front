import React from 'react';
import Plus from '../../assets/icons/studyRoom/Plus.png';
import { MinorText } from './StudySummary';
import styled from 'styled-components';
import BlogPreview from '../community/BlogPreview';
import { useNavigate } from 'react-router-dom';

const StudyPostList = ({roomId}) => {
    console.log(roomId)
    const navigate = useNavigate();
    const cardData = []

    return (
        <>
            <StudyPostWrapper>
                <ButtonWrapper>
                    <MinorText>게시글</MinorText>
                    <PostButton onClick={()=>navigate('/studyweekwrite', {state : {roomId : roomId}})}>
                        <Icons src={Plus} alt="플러스" style={{ width: '10px', height:'10px' }} />
                        게시글 작성하기
                    </PostButton>
                </ButtonWrapper>
                <GridRow>
                    {cardData.map(item => (
                        <BlogPreview
                            link={'community'}
                            key={item.id}
                            title={item.title}
                            daysLeft={item.daysLeft}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </GridRow>
            </StudyPostWrapper>
        </>
    );
};

export default StudyPostList;

const PostButton = styled.div`
    background-color : #8E59FF;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 0.625em;
    font-size: 0.8125em;
    font-weight: 700;
    padding: 0em 0.8125em;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
    height : 2.25em;
`

const Icons = styled.img`
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 1.25em;
    align-items : center;
`;

const StudyPostWrapper = styled.div`
    display: flex;
    flex-direction : column;
    gap: 1.25em;
`;

const GridRow = styled.div`
    display: grid;
    gap: 1.25em;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
        display : flex;
        overflow-x: auto; 
        gap: 0.625em; 
        width: 100%;
    }
`;
