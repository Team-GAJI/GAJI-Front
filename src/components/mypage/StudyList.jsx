import React from 'react';
import styled from 'styled-components';
import { Color } from '../style/Color';
import studyProfileUrl from '../../assets/images/common/studyprofile.png';
import { useNavigate } from 'react-router-dom';
import { studyInfoAPI } from '../../utils/mypage/studyInfoAPI';

const StudyList = ({ isCurrent, studyList }) => {
    const navigate = useNavigate();

    const handleStudyRoom = async () => {
        try {
            const roomId = 3;
            const response = await studyInfoAPI(roomId);
            navigate('/studyroom', { state: { data: response } });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StudyListWrapper>
            <Wrapper>
                <RowWrapper>
                    <ExtraBold>{isCurrent ? "현재 스터디룸" : "이전 스터디룸"}</ExtraBold>
                </RowWrapper>
                {/* 임시구현 */}
                <ListWrapper onClick={() => handleStudyRoom()} > 
                    {studyList && studyList.length > 0 ? (
                        studyList.map((study, index) => (
                            <ListItem key={index}>
                                <StudyProfile />
                                <ColumnWrapper>
                                {/* <ColumnWrapper onClick={() => handleStudyRoom(study.roomId)}> */}
                                    <StudyName>{study.name}</StudyName>
                                    <StudyText>{study.description}</StudyText>
                                </ColumnWrapper>
                            </ListItem>
                        ))
                    ) : (
                        <NoDataText>스터디룸 정보가 없습니다.</NoDataText>
                    )}
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

const NoDataText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #7E7D80;
    text-align: center;
    margin-top: 1em;
`;
