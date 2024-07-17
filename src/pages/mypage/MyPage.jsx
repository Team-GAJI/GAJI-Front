import React from 'react';
import styled from 'styled-components';
import backGroundUrl from '../../assets/images/mypageBackground.png';
import userProfileUrl from '../../assets/images/userprofile.png';
import { PuppleButton, PuppleButton2, PuppleButton3 } from '../../components/style/Button';
import Logo from '../../components/common/Logo';
import BellIcon from '../../assets/icons/bellicon.svg?react';
import SendIcon from '../../assets/icons/sendicon.svg?react';
import { Color } from '../../components/style/Color';
import Calendar from './Calendar';
import MyPost from './MyPost';
import PastStudyList from './PastStudyList';
import CurrentStudyList from './CurrentStudyList';

const MyPage = () => {

    const userName = 'USER 1023';
    const userGrade = 'Gold';

    return (
        <MyPageWrapper>
            <Header>
                <MyPageLogo/>
                <MyPageTitle>마이페이지</MyPageTitle>
                <RowWrapper>
                    <StyledPuppleButton>홈</StyledPuppleButton>
                    <StyledPuppleButton2>스터디룸</StyledPuppleButton2>
                    <StyledPuppleButton2>일정</StyledPuppleButton2>
                    <StyledPuppleButton2>내가 쓴 글</StyledPuppleButton2>
                </RowWrapper>
            </Header>
            <ContentWrapper>
                <UserWrapper>
                    <RowWrapper2>
                        <UserImage/>
                        <ColumnWrapper>
                            <UserName>{userName} 님</UserName>
                            <UserGrade>{userGrade} Member</UserGrade>
                            <WelcomeText>마이페이지에 오신 것을 환영합니다!</WelcomeText>
                        </ColumnWrapper>
                    </RowWrapper2>
                    <ColumnWrapper>
                        <NameEditButton>닉네임 수정하기</NameEditButton>
                        <RowWrapper3>
                            <ColumnWrapper2>
                                <MarketingButton><BellIcon/></MarketingButton>
                                <GreyText>마케팅 수신</GreyText>
                            </ColumnWrapper2>
                            <ColumnWrapper2>
                            <MarketingButton><SendIcon/></MarketingButton>
                            <GreyText>쪽지 보내기</GreyText>
                            </ColumnWrapper2>
                        </RowWrapper3>
                    </ColumnWrapper>
                </UserWrapper>

                <RowWrapper4>
                    <CurrentStudyList/><PastStudyList/>
                </RowWrapper4>

                <RowWrapper4>
                    <Calendar/><Calendar/>
                </RowWrapper4>

                <MyPost/>

            </ContentWrapper>
        </MyPageWrapper>
    );
};

export default MyPage;

const MyPageWrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const Header = styled.div`
    top : 104px;
    z-index : 1;
    position :fixed;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100%;
    height : 259px;
    background-color : #FBFAFF;
    background-image: url(${backGroundUrl});
`;

const MyPageLogo = styled(Logo)`
    width : 64px;
`

const MyPageTitle = styled(Color)`
    margin-top : 1.0625em;
    margin-bottom : 1.5625em;
    font-size : 1.5em;
    font-weight : 800;
    
`;

const RowWrapper = styled.div`
    display :flex;
    gap : 7px;
`

const RowWrapper2 = styled.div`
    display :flex;
    justify-content : space-evenly;
    align-items : center;
    gap : 41px;
    height : auto;
`;

const RowWrapper3 = styled.div`
    display :flex;
    justify-content : space-between;
    width : 188px;
    height : auto;
`;

const RowWrapper4 = styled.div`
    display : flex;
    gap : 2em;
`

const ColumnWrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1em;
    height : auto;

`;

const ColumnWrapper2 = styled(ColumnWrapper)`
    gap : 0.5em;
`;

const StyledPuppleButton = styled(PuppleButton)`
    width : 223px;
    height : 54px;
    font-size : 1.25em;
    font-weight : 700;

`;

const StyledPuppleButton2 = styled(StyledPuppleButton)`
    opacity : 60%;
`;

const UserImage = styled.div`
    width : 138px;
    height : 138px;
    border-radius : 10px;
    background-image: url(${userProfileUrl});
    background-size : cover;


`
const ContentWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : 65%;
    margin-top : 259px;
    gap : 4em;
`;
const UserWrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    width : 100%;
    height : 166px;
    border-radius : 10px;
    background-color : #F0EAFF;

`;

const UserName = styled(Color)`
    font-size : 1.25em;
    font-weight : 800;

`

const UserGrade = styled(PuppleButton)`
    width : 125px;
    height : 25px;

`;

const WelcomeText = styled.div`
    font-size : 1em;
    font-weight : 700;
    color : #A2A3B2;

`;

const NameEditButton = styled(PuppleButton2)`
    background-color : #B693FF;
    width : 100%;
    height : 40px;
    font-weight : 700;


`;

const MarketingButton = styled(PuppleButton3)`
    width : 90px;
    height : 40px;

`;

const GreyText = styled.div`
    text-align : center;
    font-size : 0.6875em;
    color : #C9C7DA;
    font-weight : 700;
`;
