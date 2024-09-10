import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundimage from '../assets/images/login/background.png';
import Logo from '../components/common/Logo';
import { Color } from '../../components/container/Color';
import { LoginButton, PuppleButton } from '../components/style/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { nickNameAPI } from './api/nickNameAPI';
import { userIdAPI } from './api/userIdAPI';
import GoogleLogo from '../assets/icons/login/googlelogo.svg?react';

const LoginRedirectPage = () => {
    const [modal, setModal] = useState(true);
    const [nickName, setNickName] = useState('');
    const navigate = useNavigate();

    function handleRedirect() {
        // 서버에서 설정한 헤더에서 토큰 추출
        const authHeader = document.cookie.split('; ').find((row) => row.startsWith('Authorization='));
        if (authHeader) {
            const accessToken = authHeader.split('=')[1];
            // 토큰을 안전한 저장소에 저장 (예: localStorage)
            localStorage.setItem('accessToken', accessToken);
            // 헤더 쿠키 삭제 (선택적)
            document.cookie = 'Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
    }

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('access_token');

    const submitNickname = async (nickName) => {
        try {
            const response = await nickNameAPI(nickName);
            console.log(response.data);
        } catch (error) {
            console.error('닉네임 저장 중 오류 발생:', error);
            // 오류 처리 추가
        } finally {
            setModal(false);
            navigate('/'); // 로그인 후 메인 페이지로 이동
        }
    };

    const saveTokenToLocalStorage = (token) => {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('refreshToken', token);
    };

    useEffect(() => {
        handleRedirect();
        const fetchUserId = async () => {
            if (token) {
                saveTokenToLocalStorage(token);
                try {
                    const userId = await userIdAPI();
                    console.log(userId);
                } catch (error) {
                    console.error('User ID 불러오기 실패:', error);
                }
            }
        };

        fetchUserId();
    }, [token, navigate]);

    return (
        <LoginWrapper image={backgroundimage}>
            {modal && (
                <ModalWrapper>
                    <Modal>
                        <ColumnWrapper2>
                            <Text4>스터디 가지기 전</Text4>
                            <Text5>
                                <Color>닉네임</Color>을 입력해주세요
                            </Text5>
                            <NickNameInput
                                placeholder="닉네임 입력시 제한 사항 적기"
                                value={nickName}
                                onChange={(e) => setNickName(e.target.value)}
                            />
                            <NickNameSubmitButton onClick={() => submitNickname(nickName)}>
                                닉네임 가지기
                            </NickNameSubmitButton>
                        </ColumnWrapper2>
                    </Modal>
                </ModalWrapper>
            )}
            <StyledLogo />
            <Title>
                가지고 싶은 스터디, <Color>GAJI</Color>
            </Title>
            <ColumnWrapper>
                <RowWrapper>
                    <RowWrapper>
                        <Radio onChange={(e) => e.target.checked} />
                        <Text2>개인정보 수집 및 이용에 동의합니다(필수)</Text2>
                    </RowWrapper>
                    <Text3>약관보기</Text3>
                </RowWrapper>
                <RowWrapper>
                    <RowWrapper>
                        <Radio />
                        <Text2>마케팅 수신에 동의합니다(선택)</Text2>
                    </RowWrapper>
                    <Text3>약관보기</Text3>
                </RowWrapper>
                <Padding />
                <LoginButton>
                    <GoogleLogo />
                    구글로 회원가입하기
                </LoginButton>
                <LoginButton>
                    <NaverLogo>N</NaverLogo>
                    네이버로 회원가입하기
                </LoginButton>
            </ColumnWrapper>

            <LoginFooter>@ Copyright 2024_GAJI</LoginFooter>
        </LoginWrapper>
    );
};

export default LoginRedirectPage;

const NaverLogo = styled.div`
    font-weight: 1000;
    color: #03c75a;
`;

const LoginWrapper = styled.div`
    background-image: url(${(props) => props.image});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
`;

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const ColumnWrapper2 = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8125em;
    justify-content: center;
    align-items: center;
`;

const RowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25em;
`;

const Title = styled.div`
    font-size: 2em;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`;

const Text2 = styled.div`
    text-align: center;
    font-size: 0.8125em;
    font-weight: 700;
`;

const Text3 = styled.div`
    text-align: center;
    font-size: 0.8125em;
    font-weight: 700;
    color: #d0d1d9;
    text-decoration: underline;
`;

const Padding = styled.div`
    height: 2em;
`;

const Radio = styled.input.attrs({ type: 'checkbox' })`
    width: 16px;
    height: 16px;
    appearance: none;
    background-color: #fff;
    border: 1px solid #c1c7cd;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    outline: none;

    &:checked {
        background-color: #8e59ff;
        border: 1px solid #8e59ff;
    }

    &:checked::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const LoginFooter = styled.div`
    position: fixed;
    bottom: 2.5em;
    color: #d0d1d9;
    font-size: 0.81em;
    text-align: center;
`;

const StyledLogo = styled(Logo)`
    width: 180px;
    @media (max-width: 768px) {
        width: 90px;
    }
`;

const ModalWrapper = styled.div`
    backdrop-filter: blur(2px);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const Modal = styled.div`
    width: 35%;
    height: 280px;
    display: flex;
    justify-content: center;
    aligin-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.5px);
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const Text4 = styled.div`
    font-size: 0.81252em;
    color: B2B2B2;
    font-weight: 700;
`;

const Text5 = styled.div`
    font-size: 1.5em;
    font-weight: 700;
`;

const NickNameInput = styled.input`
    margin-top: 1em;
    width: 100%;
    padding-left: 5%;
    box-sizing: border-box;
    height: 41px;
    background-color: #ffffff;
    border: 1px solid #d0d1d9;
    border-radius: 10px;

    &:focus {
        outline: none;
        border: 1px solid #8e59ff;
    }
`;

const NickNameSubmitButton = styled(PuppleButton)`
    width: 100%;
    height: 41px;
    font-weight: 800;
`;
