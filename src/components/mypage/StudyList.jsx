import React from 'react';
import styled from 'styled-components';
import { Color } from '../style/Color';
import studyProfileUrl from '../../assets/images/common/studyprofile.png';
import { useNavigate } from 'react-router-dom';

const dummyStudyList = [
    {
        name: 'React 기본 스터디',
        description: 'React의 기본 개념과 Hooks를 공부하는 스터디입니다.',
    },
    {
        name: 'JavaScript 심화 스터디',
        description: 'JavaScript의 심화 개념을 공부하고 프로젝트를 진행합니다.',
    },
    {
        name: '알고리즘 문제 풀이',
        description: '알고리즘 문제를 함께 풀고 토론하는 스터디입니다.',
    },
    {
        name: '웹 디자인 스터디',
        description: '웹 디자인의 기본 원리와 최신 트렌드를 공부합니다.',
    },
    {
        name: '풀스택 개발 스터디',
        description: '풀스택 개발의 전체 과정을 함께 배우고 프로젝트를 진행합니다.',
    },
];

const StudyList = ({ isCurrent }) => {
    
    const navigate = useNavigate();
    return (
        <StudyListWrapper>
            <Wrapper>
                <RowWrapper>
                    <ExtraBold>{isCurrent ? "현재 스터디룸" : "이전 스터디룸"}</ExtraBold>
                </RowWrapper>
                <ListWrapper>
                    {dummyStudyList.map((study, index) => (
                        <ListItem key={index}>
                            <StudyProfile />
                            <ColumnWrapper onClick={()=>navigate('/studyroom')}>
                                <StudyName>{study.name}</StudyName>
                                <StudyText>{study.description}</StudyText>
                            </ColumnWrapper>
                        </ListItem>
                    ))}
                </ListWrapper>
            </Wrapper>
        </StudyListWrapper>
    );
};

export default StudyList;

const StudyListWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 2em;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1em;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
`;

const ListWrapper = styled.div`
    box-sizing: border-box;
    height: 20em;
    overflow-y: hidden;
    border: 1px solid #8E59FF;
    border-radius: 20px;
    padding: 2.5em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    &:hover {
        overflow-y: scroll;
    }

    @media (max-width: 768px) {
        padding: 1.5em;
        height: auto;
    }
`;

const ListItem = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 1em;
    border-bottom: 1px solid #8E59FF;
    padding-bottom: 1.25em;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5em;
        padding-bottom: 0.75em;
    }
`;

const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5em;
`;

const ExtraBold = styled(Color)`
    font-weight: 800;
    font-size: 1.25em;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const StudyName = styled.div`
    font-size: 1em;
    font-weight: 700;
`;

const StudyText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #7E7D80;
`;

const StudyProfile = styled.div`
    background-image: url(${studyProfileUrl});
    background-size: contain;
    background-repeat: no-repeat;
    width: 20%;
    height: 3em;

    @media (max-width: 768px) {
        width: 100%;
        height: 5em;
    }
`;
