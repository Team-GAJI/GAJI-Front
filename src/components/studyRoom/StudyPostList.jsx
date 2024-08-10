import React from 'react';
import StudyRecruitment from './StudyRecruitment';
import Plus from '../../assets/icons/studyRoom/Plus.png';
import { MinorText } from './StudySummary';
import styled from 'styled-components';

const StudyPostList = () => {
    const cardData = Array.from({ length: 3 }, (_, index) => ({
        id: index,
        title: `제목 ${index + 1}`,
        daysLeft: `D-${index + 1}`,
        description: `설명입니다. ${index + 1}`,
        imageUrl: `https://via.placeholder.com/250x150?text=Image${index + 1}`
    }));

    return (
        <>
            <GridContainer>
                <ButtonWrapper>
                    <MinorText>게시글</MinorText>
                    <PostButton>
                        <Icons src={Plus} alt="플러스" style={{ width: '10px', height:'10px' }} />
                        게시글 작성하기
                    </PostButton>
                </ButtonWrapper>
                <GridRow>
                    {cardData.map(item => (
                        <StudyRecruitment
                            key={item.id}
                            title={item.title}
                            daysLeft={item.daysLeft}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </GridRow>
            </GridContainer>
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
`

const Icons = styled.img`
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 1.25em;
`;

const GridContainer = styled.div`
    display: grid;
    gap: 1.25em;
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25em;

    @media (max-width: 768px) {
        display : flex;
        overflow-x: auto; 
        gap: 0.625em; 
        width: 100%;
    }
`;
