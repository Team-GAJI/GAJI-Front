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
                <SubmitButton onClick={() => {navigate("/studydetail");}}>
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


// import React from 'react';
// import styled from 'styled-components';
// import backImage from '../assets/images/common/mypageBackground.png';

// import Detail from '../components/createStudy/CreateDetailed.jsx';
// import CreateBasics from '../components/createStudy/CreateBasics.jsx';
// import CreateDate from '../components/createStudy/CreateDate.jsx';
// const StudyCreatePage = () => {

//     return (
//     <>
//     <Wrapper>
//         <RowLogoWrapper>
//                 <MainText>스터디 만들기</MainText>
//                 <Text>`가지`고 싶은 스터디를 만들어보세요!</Text>
//                 <MainButton>스터디 만들기</MainButton>
//         </RowLogoWrapper>

//         <MainSection>
//            <CreateBasics/>
//            <CreateDate/>
//            <Detail/>
//         </MainSection>
//     </Wrapper>

//     </> 
//     );
// };

// export default StudyCreatePage;
// const Wrapper = styled.div`
//     z-index: 5;
//     background-color: #FBFAFF;
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column; 
//     padding: 0 3.1em;
//     width: 100%;
// `;


// const MainText = styled.p`
//     font-size: 1.3em;
//     font-weight: 800;
//     color: #8E59FF;
//     margin-bottom: 0.2em;
    
// `;

// const MainButton = styled.button`
//     font-size: 0.8125em;
//     width: 18.25em;
//     background-color: #8E59FF;
//     border: 1px solid #8E59FF;
//     border-radius: 1em;
//     font-weight: 800;
//     padding: 0.8125em;
//     text-align: center;
//     color: #fff;
// `;


// const RowLogoWrapper = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 0.2em;
//     flex-direction: column;
//     justify-content: center;
//     padding: 1.125em; 
//     background-image: url(${backImage});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
// `;

// const Text = styled.p`
//     color: #D0D1D9;
//     font-size: 0.9375em; 
//     font-weight: 700;
// `;


// /* 화면 분활 (오른쪽 사이드) */
// const MainSection = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   min-height: 100vh; 
//   padding: 20px;
//   box-sizing: border-box;
// `;
