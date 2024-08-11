import React, { useState } from 'react';
import styled from 'styled-components';
import WriteSelectBox from '../communityWrite/WriteSelectBox';
import StudyCreateLinkEmbed from './StudyCreateLinkEmbed';

const StudyInfo = () => {
    // state 관리
    const [memberCount, setMemberCount] = useState(0);
    const [styledHr, setStyledHr] = useState(false);
    const [isOn, setisOn] = useState(false);

    // 인원수 카운터
    const increaseCount = () => {
        setMemberCount(memberCount + 1);
    }
    const decreaseCount = () => {
        if (memberCount !== 0) {
        setMemberCount(memberCount - 1);
        }
    }

    // 제목 하단바 색상 관리
    const handlePurpleHr = () => {
        setStyledHr(true);
    };
    const handleGrayHr = () => {
        setStyledHr(false);
    };
    
    // 토글 기능
    const toggleHandler = () => {
        setisOn(!isOn)
    };

    return (
        <ComponentWrapper>
            {/* 카테고리, 인원수 영역 */}
            <TopWrapper>
                <WriteSelectBox/>
                <TotalMembersWrapper>
                    <Text>최대 인원수 설정</Text>
                    <CountButton onClick={decreaseCount}>-</CountButton>
                    <TotalCount>{memberCount}</TotalCount>
                    <CountButton onClick={increaseCount}>+</CountButton>
                </TotalMembersWrapper>
            </TopWrapper>

            {/* 제목 입력 영역 */}
            <TitleWrapper>
                <TitleInput
                    onFocus={handlePurpleHr}
                    onBlur={handleGrayHr}
                    placeholder='스터디 명을 입력해주세요'/>
                <StyledTitleHr styledHr={styledHr}/>
            </TitleWrapper>

            {/* 썸네일 업로드 영역 */}
            <ThumbNailWrapper>
                <Title>
                    대표 이미지 
                </Title>
                <UploadWrapper>
                    <ImageWrapper>
                        <FileInputWrapper>
                            <HiddenFileInput id="file-upload" />
                            <FileInputLabel htmlFor="file-upload">이미지 업로드</FileInputLabel>
                        </FileInputWrapper>
                        <ImageText>용량 제한: 232123mb</ImageText>
                        <ImageText>파일 형식: png만 가능</ImageText>
                    </ImageWrapper>
                    <PreivewWrapper></PreivewWrapper>
                </UploadWrapper>
            </ThumbNailWrapper>

            {/* 스터디자료 링크 영역 */}
            <StudyDataWrapper>
                <Title>
                    스터디 자료 링크 
                </Title>
                <LinkInput placeholder='링크를 입력해주세요'/>
                <LinkEmbedWrapper>
                    <StudyCreateLinkEmbed/>
                    <StudyCreateLinkEmbed/>
                    <StudyCreateLinkEmbed/>
                </LinkEmbedWrapper>

                <FlexContainer>
                    <ToggleContainer onClick={toggleHandler}>
                        <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`}/>
                        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}/>
                    </ToggleContainer>
                    <Text7 className={`text ${isOn ? "OFF" : "ON"}`}>공개</Text7>
                    <Text6 className={`text ${isOn ? "ON" : "OFF"}`}>비공개</Text6>
                </FlexContainer>

            </StudyDataWrapper>
        </ComponentWrapper>
    );
};

export default StudyInfo;

/* CSS */
const ComponentWrapper = styled.div`
    padding: 3em 3em 1em 3em;
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 59em;
    display: flex;
    flex-direction: column;
`;

const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TotalMembersWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.div`
    margin-right: 2em;
    color: #8E59FF;
    font-size: 0.8125em;
    font-weight: 800;
`;

const CountButton = styled.div`
    border-radius: 30px;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    background-color: #A2A3B2;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
`;

const TotalCount = styled.div`
    margin: 0 0.5em;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 3.2694em;
    height: 1.915em;
    line-height: 1.915em;
    text-align: center;
    font-weight: bold;
`;

const TitleWrapper = styled.div`
    margin: 1em 0;
    width: 100%;
`;

const TitleInput = styled.input`
    border: none;
    border-radius: 10px;
    width: 71.4em;
    widht: 100%;
    height: 3em;
    background-color: transparent;
    font-size: 0.8125em;
    font-family: 'NanumSquareNeo';
    font-weight: bold;
    &:focus{
        outline: none;
    }
    transition: all 0.3s ease;
    &::placeholder{
        color: #A2A3B2;
        font-weight: bold;
    }
`;

const StyledTitleHr = styled.hr`
    margin: 0;
    border: none;
    height: 1.5px;
    background-color: ${(props) => (props.styledHr ? '#8E59FF' : '#A2A3B2')};
    box-shadow: ${(props) => (props.styledHr ? '0 -0.3125em 0.8em rgba(142,89,255,0.5)' : 'none')};
    transition: all 0.3s ease
`;


const ThumbNailWrapper = styled.div`
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin: 1em 0 0.7em 0;
    color: #8E59FF;
    font-weight: 800;
`;

const UploadWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #A2A3B2;
    border-radius: 10px; 
    width: 25em; 
    height: 11.625em; 
    align-items: center;
    gap: 0.3125em; 
`;

const ImageText = styled.p`
    color: #D0D1D9;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-bottom: -0.625em; 
`;

const FileInputWrapper = styled.div`
    position: relative;
    display: inline-block;
`;

const HiddenFileInput = styled.input.attrs({ type: 'file' })`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
`;

const FileInputLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    z-index: 0;
    font-size: 0.8125em; 
    width: 7.5em; 
    border: 1px solid #8E59FF;
    border-radius: 10px;
    font-weight: 800;
    padding: 0.7em; 
    text-align: center;
    color: #8E59FF;
    margin-top: 6.25em; 
    background-color: transparent;
`;

const PreivewWrapper = styled.div`
    border: 1px solid #A2A3B2;
    border-radius: 10px; 
    width: 31.3125em; 
    height: 11.625em; 
`;

const StudyDataWrapper = styled.div`
    width: 58em;
    display: flex;
    flex-direction: column;
`;

const LinkInput = styled.input`
    padding-left: 1em;
    border: 1px solid #A2A3B2;
    border-radius: 10px;
    width: 100%;
    height: 2.8125em;
    background-color: transparent;
    font-family: 'NanumSquareNeo';
    font-weight: bold;
    &:focus{
        outline: none;
    }
    transition: all 0.3s ease;
    &::placeholder{
        color: #A2A3B2;
        font-size: 0.9em;
        font-weight: bold;
    }
`;

const LinkEmbedWrapper = styled.div`
    margin-top: 1em;
    width: 100%;
    display: flex;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.5em;
`;

const ToggleContainer = styled.div`
    position: relative;
    left: 6.3em;
    cursor: pointer;

    .toggle-container {
        width: 3.4375em; 
        height: 1.5em; 
        border-radius: 1.875em; 
        border: 1px solid #8E59FF;
    }
    .toggle--checked.toggle-container {
        left: 2em; 
        background-color: #FFFFFF;
    }
    .toggle--checked {
        transition: 0.5s;
    }

    .toggle-circle {
        position: absolute;
        top: 0.1em; 
        left: 0.14375em;
        width: 1.375em; 
        height: 1.375em; 
        border-radius: 50%;
        background-color: #8E59FF;
        transition: 0.5s;
    }

    .toggle--checked.toggle-circle {
        left: 2em;
        background-color: #8E59FF;
    }
`;

const Text6 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 5em;
    
    &.OFF {
        color: #A2A3B2;
    }

    &.ON {
        color: #8E59FF;
    }
`;

const Text7 = styled.p`
    color: #8E59FF;
    font-size: 0.9375em; 
    font-weight: 700;
    margin-left: 0;
    padding: 0.3125em; 
  &.OFF {
    color: #A2A3B2;
  }

  &.ON {
    color: #8E59FF;
  }
`;
