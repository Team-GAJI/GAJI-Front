import React from 'react';
import styled from 'styled-components';
import userProfileUrl from '../assets/images/userprofile.png';
import SendIcon from '../assets/icons/sendicon.svg?react';

const User = () => {
    const userName = 'USER 1023';
    const userGrade = 'Gold';

    return (
        <div>
            <MyPageWrapper>
                <ContentWrapper>
                    <UserWrapper>
                        <RowWrapper2>
                            <UserImage/>
                            <ColumnWrapper>
                            <UserName>{userName} 님</UserName>
                            <UserGrade>{userGrade} Member</UserGrade>
                            <WelcomeText>마지막 활동 | 1시간 전</WelcomeText>
                            </ColumnWrapper>
                        </RowWrapper2>
                        <ColumnWrapper2>
                            <NameEditButton><Icons src={SendIcon} alt="쪽지" /></NameEditButton>
                            <GreyText>쪽지 보내기</GreyText>
                        </ColumnWrapper2>
                    </UserWrapper>
            </ContentWrapper>

            </MyPageWrapper>
        </div>
    );
};

export default User;

const MyPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-top: 259px;
    gap: 4em;
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 600px;
    height: 166px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RowWrapper2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 41px;
    height: auto;
`;

const UserImage = styled.div`
    width: 138px;
    height: 138px;
    border-radius: 10px;
    background-image: url(${userProfileUrl});
    background-size: cover;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: auto;
`;

const ColumnWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: auto;
    margin-left : 100px;
`;
const UserName = styled.div`
    font-size: 1.25em;
    font-weight: 800;
    color: #8E59FF;
`;

const UserGrade = styled.div`
    width: 125px;
    height: 25px;
    background-color: #8E59FF; 
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 700;
`;

const WelcomeText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #A2A3B2;
`;

const NameEditButton = styled.button`
    background-color: #8E59FF;
    width : 90px;
    height : 40px;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: 5px;
`;

const GreyText = styled.div`
    text-align: center;
    font-size: 0.6875em;
    color: #C9C7DA;
    font-weight: 700;
`;

const Icons = styled.img`
    width: 16px; 
    height: auto;
    margin-top : 10px;
`;