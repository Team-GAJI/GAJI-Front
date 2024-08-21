import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../components/common/MediaWrapper';
import CharacterPoster from '../assets/images/common/characterPoster.svg?react';
import SubmitIcon from '../assets/icons/common/submitIcon.svg?react';
import { characterListAPI, characterRegisterAPI, characterVoteAPI } from '../utils/common/characterAPI.jsx';

function CharacterVotePage() {
    const [nicknames, setNicknames] = useState([]);
    const [email, setEmail] = useState('');
    const [characterName, setCharacterName] = useState('');

    useEffect(() => {
        const fetchCharacterList = async () => {
            try {
                const data = await characterListAPI();
                setNicknames(data);
            } catch (error) {
                console.error('캐릭터 목록을 가져오는 중 오류 발생:', error);
            }
        };
        fetchCharacterList();
    }, []);

    const handleSubmit = async () => {
        try {
            const newNickname = {
                characterName: characterName,
                email: email,
            };
            await characterRegisterAPI(newNickname);
            alert('닉네임이 성공적으로 제출되었습니다.');
            setCharacterName('');
            setEmail('');
            
            // 업데이트된 목록 다시 가져오기
            const updatedList = await characterListAPI();
            setNicknames(updatedList);
        } catch (error) {
            console.error('닉네임 제출 중 오류 발생:', error);
            alert('닉네임 제출 중 오류가 발생했습니다.');
        }
    };

    const handleVote = async (characterId) => {
        try {
            await characterVoteAPI(characterId);
            alert('투표가 성공적으로 처리되었습니다.');

            // 업데이트된 목록 다시 가져오기
            const updatedList = await characterListAPI();
            setNicknames(updatedList);
        } catch (error) {
            console.error('투표 처리 중 오류 발생:', error);
            alert('투표 처리 중 오류가 발생했습니다.');
        }
    };

    return (
        <StyledContentWrapper>
            <Container>
                <StyledCharacterPoster/>

                <Title>GAJI 캐릭터의 이름을 정해주세요!</Title>
                
                <RankingContainer>
                    <RankingDropFilter>
                    {nicknames && nicknames.map((nickname, index) => (
                    <NicknameRow key={nickname.characterId} rank={index + 1}>
                        <NicknameText rank={index + 1}>{index + 1}위: {nickname.characterName}</NicknameText>
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
                    <SubmitButton onClick={()=>handleSubmit()}>제출하기</SubmitButton>
                    <CreatePostButton onClick={()=>handleSubmit()}><StyledSubmitIcon /></CreatePostButton>
                </InputRow>
            </Container>
        </StyledContentWrapper>
    );
}

export default CharacterVotePage;
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
    background-color: #FFFFFF;
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
    font-weight : 800;
    color: #8E59FF;
    margin-bottom : 2em;
    @media(max-width : 768px){
        font-size : 1.5em;
        margin-bottom : 3em;
    }
    @media(max-width : 480px){
        font-size : 1.25em;
        margin-bottom : 2em;
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
    box-sizing : border-box;
    padding-bottom  : 2em;
    
    @media(max-width: 768px) {
        width: 90%;
    }
`;

const StyledCharacterPoster = styled(CharacterPoster)`
    align-self: center;
    margin-top: 2em;
`;


const RankingContainer = styled.div`
    width: 50%;
    background-color: #ffffff;
    padding: 1.5em;
    border-radius: 1em;
    margin-top : -2em;
    box-shadow: 0 0.5em 1.5em rgba(0, 0, 0, 0.1);
    box-sizing : border-box;
    overflow-y : scroll;
    
    @media(max-width: 768px) {
        margin-top : -1em;
        width: 100%;
    }
`;

const NicknameRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding : 1em;
    border-radius : 1em;
    box-szing : border-box;
    ${({ rank }) => rank === 1 && `
        border : 1px solid gold;
    
    `}
    ${({ rank }) => rank === 2 && `
        border : 1px solid silver;
    `}
    ${({ rank }) => rank === 3 && `
        border : 1px solid brown;
    `}
`;

const NicknameText = styled.span`
    flex: 1;
    ${({ rank }) => rank <= 3 && `
        
    `}
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
