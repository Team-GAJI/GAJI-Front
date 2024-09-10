import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Book from '../../../assets/images/studyRoom/Rectangle 34624913.png';
// import BellIcon from '../../../assets/icons/studyRoom/bellIcon.svg?react';
//import { useNavigate } from 'react-router-dom';
import { studyDetailAPI } from '../../study-detail/api/studyDetailAPI';
// import { studyNoticeAPI } from '../../utils/studyRoom/studyNoticeAPI';

const StudySummary = ({ studyInfo, roomId }) => {
    const [description, setDescription] = useState('');
    const [materialList, setMaterialList] = useState(null);
    // const [ firstNotice, setFirstNotice] = useState('');
    // const alarmData = {
    //     1: 3,
    //     2: 5,
    // };
    // const navigate = useNavigate();
    // const id = 1;
    // const alarmCount = alarmData[id] || 0;
    useEffect(() => {
        const fetchStudyDetail = async () => {
            try {
                const response = await studyDetailAPI(roomId);
                setDescription(response.description);
                setMaterialList(response.materialList);
                // const notice = await studyNoticeAPI(roomId);
                // setFirstNotice(notice[0]);
            } catch (error) {
                console.error('Failed to fetch study details', error);
            }
        };

        fetchStudyDetail();
    }, [roomId]);

    return (
        <>
            <Container>
                <MainText>{studyInfo.name}</MainText>
                <OpenButton>모집중 D-{studyInfo.daysLeftForRecruit}</OpenButton>
            </Container>
            <Container>
                <CloudyText>
                    {studyInfo.startDay} ~ {studyInfo.endDay}
                </CloudyText>
                <CountText>{studyInfo.applicantCount}명 지원</CountText>
            </Container>

            <StudyDescription>{description}</StudyDescription>
            <DescriptionDetail>자세히보기 &gt;</DescriptionDetail>

            <DivisionLine />

            {/* <NoticeWrapper onClick={() => navigate('/studynotice', { state: { roomId: roomId } })}>
                <BellIcon />
                <>공지사항</>
                <DivisionLine3 />
                <RecentNotice>{firstNotice}</RecentNotice>
                <NoticeButton1>{alarmCount}</NoticeButton1>
            </NoticeWrapper> */}

            <StudyDocument>
                <DataGridContainer>
                    {materialList &&
                        materialList.map((material) => (
                            <StudyData key={material.index}>
                                <LeftSide />
                                <RightSide>
                                    <StudyText>제목</StudyText>
                                    <Textarea placeholder="설명을 입력하세요" />
                                </RightSide>
                            </StudyData>
                        ))}
                    {materialList && materialList.length === 0 && (
                        <BlankMaterialList>스터디 자료가 없습니다</BlankMaterialList>
                    )}
                </DataGridContainer>
            </StudyDocument>
        </>
    );
};

export default StudySummary;

const BlankMaterialList = styled.div`
    width: 100%;
    font-size: 0.8125em;
    color: #a2a3b2;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5em;
`;

const StudyDocument = styled.div`
    margin-top: 2.625em;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const MainText = styled.h1`
    font-size: 1.25em;
    font-weight: 800;
    color: #8e59ff;
`;

const OpenButton = styled.div`
    background-color: #8e59ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.625em;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    margin-left: auto;
`;

const CloudyText = styled.div`
    color: #a2a3b2;
    font-size: 0.9375em;
    font-weight: 700;
`;

const StudyDescription = styled.div`
    color: #444765;
    font-size: 0.625em;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* 4줄까지만 표시하고 이후에 ... 표시 */
    line-clamp: 4;
    max-width: 400ch;
    max-height: calc(1.2em * 4); /* 4줄의 높이 계산 */
    line-height: 1.2em;
`;

const CountText = styled.p`
    color: #a2a3b2;
    font-size: 0.9375em;
    font-weight: 700;
`;

const DescriptionDetail = styled.div`
    font-weight: 500;
    margin-top: 1em;
    font-size: 0.625em;
`;

export const DivisionLine = styled.div`
    border-top: 0.0625em solid #a2a3b2;
    opacity: 60%;
    margin: 1.25em 0px;
    width: 100%;
`;

// const NoticeWrapper = styled.div`
//     display : flex;
//     justify-content : flex-start;
//     align-items : center;
//     gap  : 0.75em;
//     position : relative;
//     color : #A2A3B2;
//     font-size : 0.8125em;
//     font-weight : 800;
//     box-sizing : border-box;
//     padding : 1em 1em;
//     width: 100%;
//     border-radius: 0.5em;
//     border: 0.0625em solid #8E59FF;
// `;

// const RecentNotice = styled.div`
//     font-weight : 700;
//     @media(max-width : 768px){
//         font-size : 0.8125em;
//     }
// `;

// const DivisionLine3 = styled.div`
//     height : 50%;
//     width  : 2px;
//     background-color : #A2A3B2;
//     box-sizing : border-box;
// `;

// const NoticeButton1 = styled.button`
//     border-radius: 50%;
//     border: 0.0625em solid #FF0043;
//     width: 1.875em;
//     height: 1.875em;
//     background-color: #FF0043;
//     color: white;
//     font-size: 0.8125em;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: -0.825em;
//     right: 0.425em;
// `;

const DataGridContainer = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 0.875em;
    width: 100%;
`;

const StudyData = styled.div`
    min-width: 13.75em;
    height: 5.0625em;
    border: 0.0625em solid #8e59ff;
    border-radius: 0.625em;
    display: flex;
    position: relative;
`;

const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${Book});
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 0.625em;
    border-top-left-radius: 0.625em;
`;

const RightSide = styled.div`
    width: 50%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.3125em;
`;

const StudyText = styled.div`
    font-size: 0.9125em;
    font-weight: 800;
    margin-top: 1.25em;
`;

const Textarea = styled.textarea`
    width: calc(100% - 2.5em);
    height: calc(100% - 2.5em);
    resize: none;
    border: none;
    font-size: 0.875em;
    margin-top: 0.125em;
    outline: none;
    overflow: hidden;
`;

export const MinorText = styled.h3`
    font-size: 1em;
    font-weight: 800;
`;
