import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import BellIcon from '../../assets/icons/mypage/bellicon.svg?react';
import SendIcon from '../../assets/icons/mypage/sendicon.svg?react';
import { Color } from '../../style/Color';
import { PuppleButton, PuppleButton2, PuppleButton3 } from '../../style/Button';
import userProfileUrl from '../../assets/images/mypage/userProfile.png';

const UserInfo = forwardRef((props, ref) => {
    const [userName, setUserName] = useState('GAJI');
    const [isEditing, setIsEditing] = useState(false);

    const userGrade = 'Gold';

    const handleNameEdit = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleMarketingClick = () => {
        alert('마케팅 수신 설정이 변경되었습니다.');
    };

    const handleSendMessageClick = () => {
        alert('준비중인 기능입니다.');
    };

    return (
        <UserWrapper ref={ref}>
            <RowWrapper2>
                <UserImage />
                <ColumnWrapper>
                    {isEditing ? (
                        <UserNameInput
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                            autoFocus
                        />
                    ) : (
                        <UserName>{userName} 님</UserName>
                    )}
                    <UserGrade>{userGrade} Member</UserGrade>
                    <WelcomeText>마이페이지에 오신 것을 환영합니다!</WelcomeText>
                </ColumnWrapper>
            </RowWrapper2>
            <ColumnWrapper>
                <NameEditButton onClick={handleNameEdit}>
                    {isEditing ? '닉네임 수정완료' : '닉네임 수정하기'}
                </NameEditButton>
                <RowWrapper3>
                    <ColumnWrapper2>
                        <MarketingButton onClick={handleMarketingClick}><BellIcon /></MarketingButton>
                        <GreyText>마케팅 수신</GreyText>
                    </ColumnWrapper2>
                    <ColumnWrapper2>
                        <MarketingButton onClick={handleSendMessageClick}><SendIcon /></MarketingButton>
                        <GreyText>쪽지 보내기</GreyText>
                    </ColumnWrapper2>
                </RowWrapper3>
            </ColumnWrapper>
        </UserWrapper>
    );
});

UserInfo.displayName = 'UserInfo';

export default UserInfo;

const RowWrapper2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 41px;
    height: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const RowWrapper3 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 188px;
    height: auto;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        gap : 1em;
    }
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: auto;

    @media (max-width: 768px) {
        align-items: center;
        gap: 1em;
    }
`;

const ColumnWrapper2 = styled(ColumnWrapper)`
    gap: 0.5em;
`;

const UserImage = styled.div`
    width: 138px;
    height: 138px;
    border-radius: 10px;
    background-image: url(${userProfileUrl});
    background-size: cover;

    @media (max-width: 768px) {
        width: 90px;
        height: 90px;
    }
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 166px;
    border-radius: 10px;
    background-color: #F0EAFF;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding :1em;
        box-sizing : border-box;
    }
`;

const UserName = styled(Color)`
    font-size: 1.25em;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const UserGrade = styled(PuppleButton)`
    width: 7.8125em;
    height: 1.5625em;

    @media (max-width: 768px) {
        box-sizing : border-box;
    }
`;

const WelcomeText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #A2A3B2;

    @media (max-width: 768px) {
        margin-bottom : 1em;
    }
`;

const NameEditButton = styled(PuppleButton2)`
    background-color: #B693FF;
    width: 100%;
    height: 40px;
    font-weight: 700;

    @media (max-width: 768px) {
        height: 35px;
    }
`;

const MarketingButton = styled(PuppleButton3)`
    width: 90px;
    height: 40px;

    @media (max-width: 768px) {
        width: 80px;
        height: 35px;
    }
`;

const GreyText = styled.div`
    text-align: center;
    font-size: 0.6875em;
    color: #C9C7DA;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 0.625em;
    }
`;

const UserNameInput = styled.input`
    color : #8E59FF;
    font-size: 1.25em;
    font-weight: 800;
    // 아래 font-family추가
    font-family: 'NanumSquareNeo';
    border: none;
    outline: none;
    background-color : transparent;
    width: 100%;
    & : focus {
        outline: none;
    }

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;
