import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundimage from '../assets/images/login/background.png';
import Logo from '../components/common/Logo';
import { Color } from '../components/style/Color';
import { GoogleLoginButton, PuppleButton } from '../components/style/Button';
import GoogleLogo from '../assets/icons/login/googlelogo.svg?react';
import { useDispatch } from 'react-redux';
import { loadTokens, setTokens } from '../feautres/auth/authSlice'; 
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


const LoginPage = () => {
    const [register, setRegister] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false); // 첫 번째 체크박스 상태 관리
    const [modal, setModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        dispatch(loadTokens());
    }, [dispatch]);

    const handleGoogleLogin = async () => {
        // 구글 로그인 화면으로 이동시키기
        // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
        //     client_id=${import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
        //     &redirect_uri=${import.meta.env.VITE_REDIRECT_URI}
        //     &response_type=code
        //     &scope=email profile`;

        //토근 발급용
        // try {
        //     await axios.get('https://www.googleapis.com/oauth2/v3/userinfo/',
        //         {
        //         headers: {
        //         'Authorization': `Bearer ${123123}`
        //         }
        //     });
        // setUserInfo(response.data);
        // } catch (error) {
        // console.error('Error fetching user info:', error);
        // }
    };
    
    const handleLogin = async () => {
        console.log('로그인시작');
        // 구글 로그인 로직을 여기서 처리하고 토큰을 받아옵니다.
        handleGoogleLogin();
        const userToken = 'sampleToken'; // 예제 토큰
        dispatch(setTokens(userToken));
        setModal(true)
    };

    const hadnleRegister = () => {
        if (isAgreed) {
            console.log('로그인시작');
            // 구글 로그인 로직을 여기서 처리하고 토큰을 받아옵니다.
            const userToken = { accessToken: 'sampleAccessToken', refreshToken: 'sampleRefreshToken' }; // 예제 토큰
            dispatch(setTokens(userToken));
            setModal(true)
        } else {
            alert("필수 약관에 동의해야 합니다.");
        }
    }

    const submitNickname = () => {
        //서버에 닉네임 저장 로직 추가
        setModal(false)  
        navigate('/')
        
    }

    return (
            <LoginWrapper image={backgroundimage}>
                {modal && 
                    <ModalWrapper>
                        <Modal>
                            <ColumnWrapper2>
                                <Text4>스터디 가지기 전</Text4>
                                <Text5><Color>닉네임</Color>을 입력해주세요</Text5>
                                <NickNameInput placeholder='닉네임 입력시 제한 사항 적기'/>
                                <NickNameSubmitButton onClick={()=>submitNickname()}>닉네임 가지기</NickNameSubmitButton>
                            </ColumnWrapper2>
                        </Modal>
                    </ModalWrapper> 
                }
                <StyledLogo/>
                <Title>가지고 싶은 스터디, <Color>GAJI</Color></Title>
                {register ? 
                <ColumnWrapper>
                <RowWrapper>
                    <RowWrapper>
                        <Radio
                            checked={isAgreed} 
                            onChange={(e) => setIsAgreed(e.target.checked)}/>
                        <Text2>개인정보 수집 및 이용에 동의합니다(필수)</Text2>
                    </RowWrapper>
                    <Text3>약관보기</Text3>
                </RowWrapper>
                <RowWrapper>
                    <RowWrapper>
                        <Radio/><Text2>마케팅 수신에 동의합니다(선택)</Text2>
                    </RowWrapper>
                    <Text3>약관보기</Text3>
                </RowWrapper>
                <Padding/>
                <GoogleLoginButton onClick={()=>hadnleRegister()} disabled={!isAgreed}>
                    <GoogleLogo/>
                    Sign in with Google
                </GoogleLoginButton> 
                </ColumnWrapper>
                :
                <ColumnWrapper>
                    <GoogleLoginButton onClick={()=>handleLogin()}>
                        <GoogleLogo/>
                        Login in with Google
                    </GoogleLoginButton>
                    <Text onClick={()=>setRegister(true)}>회원가입하기</Text>
                </ColumnWrapper>
                }
                <LoginFooter>@ Copyright 2024_GAJI</LoginFooter>
                
            </LoginWrapper>
    );
};

export default LoginPage;

const LoginWrapper = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    gap : 5%;
`;

const ColumnWrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 1em;
`

const ColumnWrapper2 = styled.div`
    width : 80%;
    height : 100%;
    display : flex;
    flex-direction : column;
    gap : 0.8125em;
    justify-content : center;
    align-items : center;
`

const RowWrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    gap : 1.25em;
`


const Title = styled.div`
    font-size : 2em;
    font-weight : 700;
`;


const Text = styled.div`
    color : #C1C7CD;
    text-align : center;
    font-size : 0.8125em;
`;

const Text2 = styled.div`
    text-align : center;
    font-size : 0.8125em;
    font-weight : 700;
`;

const Text3 = styled.div`
    text-align : center;
    font-size : 0.8125em;
    font-weight : 700;
    color : #D0D1D9;
    text-decoration : underline;
`;


const Padding = styled.div`
    height: 2em;
`


const Radio = styled.input.attrs({ type: 'checkbox' })`
    width: 16px;
    height: 16px;
    appearance: none;
    background-color: #fff;
    border: 1px solid #C1C7CD;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    outline: none;

    &:checked {
        background-color: #8E59FF;
        border: 1px solid #8E59FF;
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
    position : fixed;
    bottom : 2.5em;
    color : #D0D1D9;
    font-size : 0.81em;
    text-align : center;
`;

const StyledLogo = styled(Logo)`
    width : 180px;
`

const ModalWrapper = styled.div`
    backdrop-filter: blur(2px);
    position : absolute;
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 100%;
    z-index : 1;
`;

const Modal = styled.div`
    width: 35%;
    height: 280px;
    display : flex;
    justify-content : center;
    aligin-items : center;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.5px);
    border-radius: 10px;

`;

const Text4 = styled.div`
    font-size : 0.81252em;
    color : B2B2B2;
    font-weight : 700;
`;

const Text5 = styled.div`
    font-size : 1.5em;
    font-weight : 700;
`;


const NickNameInput = styled.input`
    margin-top : 1em;
    width : 100%;
    padding-left : 5%;
    box-sizing: border-box;
    height: 41px;
    background-color: #FFFFFF;
    border: 1px solid #D0D1D9;
    border-radius: 10px;

    &:focus {
        outline : none;
        border: 1px solid #8E59FF;
    }
`

const NickNameSubmitButton = styled(PuppleButton)`
    width : 100%;
    height : 41px;
    font-weight : 800;
`;