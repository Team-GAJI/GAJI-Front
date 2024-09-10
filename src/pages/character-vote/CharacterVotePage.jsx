import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ContentWrapper } from '../../components/common/MediaWrapper.jsx';
import Character from '../../assets/images/common/character.svg?react';
import SubmitIcon from '../../assets/icons/common/submitIcon.svg?react';
import { characterListAPI, characterRegisterAPI, characterVoteAPI } from './api/characterAPI.jsx';
import { useNavigate } from 'react-router-dom';

function CharacterVotePage() {
    const [nicknames, setNicknames] = useState([]);
    const [email, setEmail] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const fetchCharacterList = async () => {
        try {
            const data = await characterListAPI();
            if (Array.isArray(data.characterNameList)) {
                setNicknames(data.characterNameList);
            } else {
                console.error('Received data is not an array:', data);
                setNicknames([]);
            }
        } catch (error) {
            console.error('캐릭터 목록을 가져오는 중 오류 발생:', error);
            setNicknames([]);
        }
    };

    useEffect(() => {
        fetchCharacterList();
    }, []);

    const handleSubmit = async () => {
        try {
            const newNickname = {
                characterName: characterName,
                email: email,
            };
            await characterRegisterAPI(newNickname);
            setCharacterName('');
            setEmail('');
            setModalOpen(true);

            const updatedList = await characterListAPI();
            if (Array.isArray(updatedList.characterNameList)) {
                setNicknames(updatedList.characterNameList);
            } else {
                setNicknames([]);
            }
        } catch (error) {
            console.error('닉네임 제출 중 오류 발생:', error);
            alert('닉네임 제출 중 오류가 발생했습니다.');
        }
    };

    const handleVote = async (characterId) => {
        try {
            await characterVoteAPI(characterId);
            setModalOpen(true);

            const updatedList = await characterListAPI();
            if (Array.isArray(updatedList.characterNameList)) {
                setNicknames(updatedList.characterNameList);
            } else {
                setNicknames([]);
            }
        } catch (error) {
            console.error('투표 처리 중 오류 발생:', error);
            alert('투표 처리 중 오류가 발생했습니다.');
        }
    };

    const closeModal = () => {
        console.log('모달 닫기');
        setModalOpen(false);
    };

    const goToMain = () => {
        console.log('메인으로 가기');
        navigate('/');
    };

    return (
        <StyledContentWrapper>
            <Container>
                <StyledCharacterPoster>
                    <StyledCharacter />
                </StyledCharacterPoster>

                <Title>GAJI 캐릭터의 이름을 정해주세요!</Title>
                <SubTitle>이메일당 하나의 닉네임 제출이 가능해요</SubTitle>

                <RankingContainer>
                    <RankingDropFilter>
                        {nicknames.map((nickname, index) => (
                            <NicknameRow key={nickname.characterId} rank={index + 1}>
                                <NicknameText rank={index + 1}>
                                    {index + 1}위: {nickname.characterName} ({nickname.voteCount}표)
                                </NicknameText>
                                <VoteButton onClick={() => handleVote(nickname.characterId)}>투표하기</VoteButton>
                            </NicknameRow>
                        ))}
                    </RankingDropFilter>
                </RankingContainer>

                <InputRow>
                    <RowColumn>
                        <InputField
                            type="email"
                            placeholder="이메일 입력"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputField
                            type="text"
                            placeholder="캐릭터명 입력"
                            value={characterName}
                            onChange={(e) => setCharacterName(e.target.value)}
                        />
                    </RowColumn>
                    <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
                    <CreatePostButton onClick={handleSubmit}>
                        <StyledSubmitIcon />
                    </CreatePostButton>
                </InputRow>
            </Container>

            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <Title2>성공적으로 처리되었습니다!</Title2>
                        <Row>
                            <ModalButton onClick={goToMain}>메인으로 가기</ModalButton>
                            <ModalButton onClick={closeModal}>닉네임 둘러보기</ModalButton>
                        </Row>
                    </ModalContent>
                </ModalOverlay>
            )}
        </StyledContentWrapper>
    );
}

export default CharacterVotePage;

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(10deg);
    }
    100% {
        transform: rotate(0deg);
    }
`;

const StyledCharacter = styled(Character)`
    animation: ${rotateAnimation} 2s infinite ease-in-out;
    transform-origin: center center;
`;
const StyledCharacterPoster = styled.div`
    margin-top: 2em;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    gap: 0.5em;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 2em;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.1);
`;

const ModalButton = styled.button`
    padding: 0.5em 1em;
    margin: 0.5em 0;
    background-color: #8e59ff;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'NanumSquareNeo', sans-serif;
    font-size: 1em;
    &:hover {
        background-color: #6f42c1;
    }
`;

const RankingContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    padding: 1.5em;
    border-radius: 1em;
    margin-top: -2em;
    box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    overflow-y: scroll;
    max-height: 80vh; /* 스크롤 가능한 최대 높이 설정 */
`;

const NicknameRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 1em;
    box-sizing: border-box;
    ${({ rank }) =>
        rank === 1 &&
        `
        border : 1px solid gold;
    `}
    ${({ rank }) =>
        rank === 2 &&
        `
        border : 1px solid silver;
    `}
    ${({ rank }) =>
        rank === 3 &&
        `
        border : 1px solid brown;
    `}
`;

const NicknameText = styled.span`
    flex: 1;
    color: #495057;
`;

const VoteButton = styled.button`
    padding: 0.5em 1em;
    background-color: #8e59ff;
    color: white;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    font-family: 'NanumSquareNeo', sans-serif;
    &:hover {
        background-color: #6f42c1;
    }
`;

const RankingDropFilter = styled.div`
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4));
        pointer-events: none;
    }
`;

const StyledContentWrapper = styled(ContentWrapper)`
    background-color: #ffffff;
    width: 100%;
`;

const RowColumn = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5em;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-items: center;
    }
`;

const StyledSubmitIcon = styled(SubmitIcon)`
    width: 1.5em;
    height: 1.5em;
`;

const Title = styled.h1`
    font-family: 'NanumSquareNeo', sans-serif;
    font-size: 2em;
    font-weight: 800;
    color: #8e59ff;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
    @media (max-width: 480px) {
        font-size: 1.25em;
    }
`;

const SubTitle = styled.div`
    margin-bottom: 4em;
    color: #8e59ff;
    border: none;

    @media (max-width: 768px) {
        font-size: 1em;
        margin-bottom: 3em;
    }
    @media (max-width: 480px) {
        font-size: 0.8125em;
        margin-bottom: 3em;
    }
`;

const Title2 = styled(Title)`
    margin-bottom: 1em;
    @media (max-width: 768px) {
        margin-bottom: 0.75em;
    }
    @media (max-width: 480px) {
        margin-bottom: 0.5em;
    }
`;

const CreatePostButton = styled.button`
    border: none;
    display: none;

    @media (max-width: 768px) {
        background-color: #8e59ff;
        color: white;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0.2em 1em rgba(22, 26, 63, 0.2);
        }
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        border-radius: 100%;
        width: 3em;
        height: 3em;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    box-sizing: border-box;
    padding-bottom: 2em;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    align-items: center;
    padding: 1.5em;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 1em;
    box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const InputField = styled.input`
    padding: 0.5em;
    margin-right: 1em;
    box-sizing: border-box;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    font-family: 'NanumSquareNeo', sans-serif;
    font-size: 1em;
    color: #495057;
    &:focus {
        outline: 1px solid #8e59ff;
    }
`;

const SubmitButton = styled.button`
    padding: 0.5em 1em;
    min-width: 10em;
    color: #ffffff;
    background: #8e59ff;
    border: none;
    border-radius: 0.5em;
    font-family: 'NanumSquareNeo', sans-serif;
    font-size: 1em;
    cursor: pointer;
    &:hover {
        background-color: #6f42c1;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
