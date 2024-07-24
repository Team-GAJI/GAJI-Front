import React, { useState } from 'react';
import styled from 'styled-components';
import CloseButton from '../../assets/icons/community/closeButton.svg?react';

const ExtraPostPreview = () => {
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

export default ExtraPostPreview;

/* CSS */
const PostWrapper = styled.div`
    border: 1px solid #A2A3B2;
    border-radius: 10px;
    width: 36em;
    height: 8.125em;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    cursor: pointer;
`;

const LeftWrapper = styled.div`
    border-right: 1px solid #A2A3B2;
    border-radius: 8px 0 0 8px;
    width: 12.375em;
    background-color: rgba(162,163,178,0.3);
`;

const RightWrapper = styled.div`
    margin: 0.7em 0.7em 0.7em 3em;
    width: 23em;
    display: flex;
    justify-content: space-between;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.div`
    margin-bottom: 0.8em;
    color: #161A3F;
    font-size: 1.25em;
    font-weight: 800;
`;

const Content = styled.div`
    color: #A2A3B2;
    font-weight: bold;
`;

const StyledCloseButton = styled(CloseButton)`
    width: 1.4375em;
    height: 1.4375em;
`;