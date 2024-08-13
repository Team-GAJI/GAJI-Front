import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backGroundUrl from '../assets/images/mypage/mypageBackground.png';
import StudyInfo from '../components/studyCreate/StudyInfo';
import StudyPeriod from '../components/studyCreate/StudyPeriod';
import StudyDetail from '../components/studyCreate/StudyDetail';


const StudyCreatePage = () => {
    // useNavigate
    const navigate = useNavigate();

    const data = {
            "name": "string",
            "description": "string",
            "thumbnailUrl": "string",
            "materialList": [
            "string"
            ],
            "recruitStartDay": "2024-08-13",
            "recruitEndDay": "2024-08-13",
            "studyStartDay": "2024-08-13",
            "studyEndDay": "2024-08-13",
            "peopleLimited": true,
            "peopleMaximum": -1,
            "categoryList": [
            "개발"
        ],
        "private": true
    }

    return (
        <PageWrapper>
            {/* 페이지 헤더 */}
            <Header>
                <PageHeaderTitle>스터디 만들기</PageHeaderTitle>
                <SubTitle>&#039;가지&#039;고싶은 스터디를 만들어보세요!</SubTitle>
                <RowWrapper>
                </RowWrapper>
            </Header>

            {/* 내용 */}
            <ContentContainer>

                {/* 스터디 기본정보 */}
                <ContentWrapper>
                    <Title>스터디 기본정보</Title>
                    <StudyInfo/>
                </ContentWrapper>

                {/* 스터디 기한 */}
                <ContentWrapper>
                    <Title>스터디 기한</Title>
                    <StudyPeriod/>
                </ContentWrapper>

                {/* 스터디 상세정보 */}
                <ContentWrapper>
                    <Title>스터디 상세정보</Title>
                    <StudyDetail/>
                </ContentWrapper>

                {/* 제출 버튼 */}
                <SubmitButton onClick={() => navigate("/studydetail", { state: data })}>
                스터디 만들기
            </SubmitButton>
            </ContentContainer>
        </PageWrapper>
    );
};

export default StudyCreatePage;

/* CSS */
const PageWrapper = styled.div`
    margin-bottom: 6em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubTitle = styled.div`
    color : #D0D1D9;
    font-weight : 700;
`;

const Header = styled.div`
    display: flex;
    z-index: 2;
    position: relative;
    top: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10em;
    gap : 1em;
    background-color: #FBFAFF;
    background-image: url(${backGroundUrl});
`;

const PageHeaderTitle = styled.div`
    font-size: 1.5em;
    font-weight: 800;
    color: #8E59FF;

    @media (max-width: 768px) {
        font-size: 1.25em;
        margin-top: 0.75em;
        margin-bottom: 1em;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 1em;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 65em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Title = styled.div`
    margin: 1.5em 0;
    color: #8E59FF;
    font-weight: 800;
`;

const SubmitButton = styled.button`
    margin-top: 2.5em;
    border: none;
    border-radius: 10px;
    width: 17.2308em;
    height: 2.5em;
    background-color: #8E59FF;
    color: white;
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;
`;
