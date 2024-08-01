import React from 'react';
import styled from 'styled-components';
import StudyRecruitment from '../StudyCategory/StudyRecruitment';
import BackStudyRecruitment from '../StudyCategory/BackStudyRecruitment';


const FlippingCard = () => {
    return (
        <FlipContainer>
            <Flipper>
                <Front>
                    <StudyRecruitment />
                </Front>
                <Back>
                    <BackStudyRecruitment />
                </Back>
            </Flipper>
        </FlipContainer>
    );
};

export default FlippingCard;

const FlipContainer = styled.div`
    perspective: 1000px;
    width: 18.75em;
    height: 25em; 
`;

const Flipper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;

    &:hover {
        transform: rotateY(180deg);
    }
`;

const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`;

const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;
