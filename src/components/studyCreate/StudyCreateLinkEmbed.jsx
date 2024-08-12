import React, { useState } from 'react';
import styled from 'styled-components';
import CloseButton from '../../assets/icons/community/closeButton.svg?react';

const StudyCreateLinkEmbed = () => {
    // state 관리
    const [isPostVisible, setIsPostVisible] = useState(true);

    // 창 닫기 기능
    const postVisibility = () => {
        setIsPostVisible(!isPostVisible);
    };

    return (
        <PostWrapper isVisible={isPostVisible}>
            <LeftWrapper></LeftWrapper>
            <RightWrapper>
                <TextWrapper>
                    <Title>
                        제목
                    </Title>
                    <Content>
                        설명입니다. 어쩌면 좋아요
                    </Content>
                </TextWrapper>
                <StyledCloseButton onClick={postVisibility}/>
            </RightWrapper>
        </PostWrapper>
    )
}

export default StudyCreateLinkEmbed;

/* CSS */
const PostWrapper = styled.div`
    margin-right: 0.5em;
    border: 1.2px solid #8E59FF;
    border-radius: 10px;
    width: 17em;
    height: 5.4375em;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    cursor: pointer;
`;

const LeftWrapper = styled.div`
    border-right: 1.2px solid #8E59FF;
    border-radius: 10px 0 0 10px;
    width: 4.4188em;
    background-color: #F4EFFF;
`;

const RightWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    margin-left: 1em;
    width: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.div`
    margin-bottom: 0.8em;
    color: #161A3F;
    font-weight: 800;
    // 말줄임 처리
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`;

const Content = styled.div`
    color: #A2A3B2;
    font-size: 0.8125em;
    font-weight: bold;
    // 말줄임 처리
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
`;

const StyledCloseButton = styled(CloseButton)`
    margin: 0.3em 0.3em 0 0em;
    width: 1.4375em;
    height: 1.4375em;
`;