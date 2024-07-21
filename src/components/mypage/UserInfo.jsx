import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import BellIcon from '../../assets/icons/mypage/bellicon.svg?react';
import SendIcon from '../../assets/icons/mypage/sendicon.svg?react';
import { Color } from '../../style/Color';
import { PuppleButton, PuppleButton2, PuppleButton3 } from '../../style/Button';
import userProfileUrl from '../../assets/images/mypage/userProfile.png';

const UserInfo = forwardRef((props, ref) => {
    const [userName, setUserName] = useState('USER 1023');
    const [isEditing, setIsEditing] = useState(false);

    const userGrade = 'Gold';

    const handleNameEdit = () => {
        if (isEditing) {
            // Save the new user name
            setIsEditing(false);
        } else {
            // Enable editing mode
            setIsEditing(true);
        }
    };

    const handleNameChange = (event) => {
        setUserName(event.target.value);
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
                        <MarketingButton><BellIcon /></MarketingButton>
                        <GreyText>마케팅 수신</GreyText>
                    </ColumnWrapper2>
                    <ColumnWrapper2>
                        <MarketingButton><SendIcon /></MarketingButton>
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
`;

const RowWrapper3 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 188px;
    height: auto;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: auto;
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
`;

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 166px;
    border-radius: 10px;
    background-color: #F0EAFF;
`;

const UserName = styled(Color)`
    font-size: 1.25em;
    font-weight: 800;
`;

const UserGrade = styled(PuppleButton)`
    width: 125px;
    height: 25px;
`;

const WelcomeText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #A2A3B2;
`;

const NameEditButton = styled(PuppleButton2)`
    background-color: #B693FF;
    width: 100%;
    height: 40px;
    font-weight: 700;
`;

const MarketingButton = styled(PuppleButton3)`
    width: 90px;
    height: 40px;
`;

const GreyText = styled.div`
    text-align: center;
    font-size: 0.6875em;
    color: #C9C7DA;
    font-weight: 700;
`;

const UserNameInput = styled.input`
    color : #8E59FF;
    font-size: 1.25em;
    font-weight: 800;
    border: none;
    outline: none;
    background-color : transparent;
    width: 100%;
    & : focus {
        outline: none;
    }
`;
