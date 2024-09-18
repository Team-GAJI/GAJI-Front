import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import WriteSelectBox from '../../community-write/ui/WriteSelectBox';
import ThumbNailImg from '../../../assets/images/studyDetail/thumbNailImg.png';
import LinkData from './LinkData';

const StudyManageInfo = () => {
    // state 관리
    const [memberCount, setMemberCount] = useState(0);
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const [lengthCount, setLengthCount] = useState(0);
    const [styledHr, setStyledHr] = useState(false);
    const [isOn, setIsOn] = useState(true);
    const [imgFile, setImgFile] = useState('');

    // 인원수 카운터
    // const increaseCount = () => {
    //     setMemberCount(memberCount + 1);
    //     setIsWarningVisible(false);
    // };
    // const decreaseCount = () => {
    //     if (memberCount === 0) {
    //         setIsWarningVisible(true);
    //     } else if (memberCount === 1) {
    //         setMemberCount(memberCount - 1);
    //         setIsWarningVisible(true);
    //     } else {
    //         setMemberCount(memberCount - 1);
    //         setIsWarningVisible(false);
    //     }
    // };

    const handleCountChange = (direction) => {
        //인원수 증가할 경우
        if (direction === 'increase') {
            setMemberCount((prevCount) => prevCount + 1);
            setIsWarningVisible(false);
            return;
        }
        // 인원수 감소할 경우
        setMemberCount((prevCount) => {
            if (prevCount === 0) {
                setIsWarningVisible(true); // 경고문
                return prevCount;
            }
            //인원수 1명 이상인 경우 감소할 때
            const newCount = prevCount - 1;
            setIsWarningVisible(newCount === 0); //1 -> 0명인 경우에 경고문
            return newCount;
        });
    };

    // 제목 글자 수 관리
    const handleTitleLength = (e) => {
        setLengthCount(e.target.value.length);
    };

    // 제목 하단바 색상 관리
    const handlePurpleHr = () => setStyledHr(true);
    const handleGrayHr = () => setStyledHr(false);

    // 이미지 업로드 input의 onChange
    const imgRef = useRef();
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    };

    // 토글 기능
    // const handleToggle = () => setIsOn(!isOn);
    // const onToggle = () => setIsOn(true);
    // const offToggle = () => setIsOn(false);

    // 토글 통합함
    const handleToggle = (value = null) => {
        if (value !== null) {
            setIsOn(value);
            return;
        }
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return (
        <>
            <Title>스터디 기본정보</Title>

            <ComponentWrapper>
                {/* 카테고리, 인원수 영역 */}
                <TopWrapper>
                    <WriteSelectBox />
                    <TotalMembersWrapper>
                        <CounterWrapper>
                            <Text>최대 인원수 설정</Text>
                            <CountButton onClick={() => handleCountChange('decrease')}>-</CountButton>
                            <TotalCount>{memberCount}</TotalCount>
                            <CountButton onClick={() => handleCountChange('increase')}>+</CountButton>
                        </CounterWrapper>
                        <WanringText isVisible={isWarningVisible}>인원수는 1명 이상이어야 합니다!</WanringText>
                    </TotalMembersWrapper>
                </TopWrapper>

                {/* 제목 입력 영역 */}
                <TitleWrapper>
                    <InputWrapper>
                        <TitleInput
                            onFocus={handlePurpleHr}
                            onBlur={handleGrayHr}
                            onChange={handleTitleLength}
                            placeholder="스터디 명을 입력해주세요"
                            maxLength="20"
                        />
                        <TextLength lengthCount={lengthCount}>{lengthCount}/20 자</TextLength>
                    </InputWrapper>
                    <StyledTitleHr styledHr={styledHr} />
                </TitleWrapper>

                {/* 썸네일 업로드 영역 */}
                <ThumbNailWrapper>
                    <Title>대표 이미지</Title>
                    <UploadWrapper>
                        {/* 업로드 버튼 */}
                        <ImageWrapper>
                            <FileInputLabel htmlFor="file">이미지 업로드</FileInputLabel>
                            <ImageUploadInput type="file" id="file" accept=".png" onChange={saveImgFile} ref={imgRef} />
                            <ImageText>용량 제한: 232123mb</ImageText>
                            <ImageText>파일 형식: png만 가능</ImageText>
                        </ImageWrapper>
                        {/* 미리보기 */}
                        <PreivewWrapper isImgFile={imgFile}></PreivewWrapper>
                    </UploadWrapper>
                </ThumbNailWrapper>

                {/* 스터디자료 링크 영역 */}
                <LinkData />

                {/* 공개/비공개 토글 영역 */}
                <ToggleWrapper>
                    <OnToggleText onClick={() => handleToggle(true)} isOn={isOn}>
                        공개
                    </OnToggleText>
                    <ToggleBox onClick={handleToggle}>
                        <Toggle isOn={isOn}></Toggle>
                    </ToggleBox>
                    <OffToggleText onClick={() => handleToggle(false)} isOn={isOn}>
                        비공개
                    </OffToggleText>
                </ToggleWrapper>
            </ComponentWrapper>
        </>
    );
};

export default StudyManageInfo;

/* CSS */
const ComponentWrapper = styled.div`
    padding: 3em 3em 2em 3em;
    box-sizing: border-box;
    border: 1px solid #8e59ff;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const TopWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        gap: 1em;
    }
`;

const TotalMembersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    position: relative;
    width: 49%;
`;

const CounterWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const WanringText = styled.div`
    margin-top: 3em;
    color: red;
    font-size: 0.8125em;
    font-weight: bold;
    visibility: ${(props) => (props.isVisible ? 'visibility' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    transition: all 0.3s ease;
    position: absolute;
`;

const Text = styled.div`
    margin-right: 2em;
    color: #8e59ff;
    font-size: 0.8125em;
    font-weight: 800;
`;

const CountButton = styled.div`
    border-radius: 30px;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
    background-color: #a2a3b2;
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

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleInput = styled.input`
    border: none;
    border-radius: 10px;
    widht: 100%;
    height: 3em;
    background-color: transparent;
    font-size: 0.8125em;
    font-family: 'NanumSquareNeo';
    font-weight: bold;
    &:focus {
        outline: none;
    }
    transition: all 0.3s ease;
    &::placeholder {
        color: #a2a3b2;
        font-weight: bold;
    }
`;

const TextLength = styled.div`
    margin-right: 1em;
    font-size: 0.9em;
    font-weight: bold;
    color: ${(props) => (props.lengthCount >= 20 ? 'red' : '#A2A3B2')};
    transition: all 0.3s ease;
`;

const StyledTitleHr = styled.hr`
    margin: 0;
    border: none;
    height: 1.5px;
    background-color: ${(props) => (props.styledHr ? '#8E59FF' : '#A2A3B2')};
    box-shadow: ${(props) => (props.styledHr ? '0 -0.3125em 0.8em rgba(142,89,255,0.5)' : 'none')};
    transition: all 0.3s ease;
`;

const ThumbNailWrapper = styled.div`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    margin: 1em 0 0.7em 0;
    color: #8e59ff;
    font-weight: 800;
    width: 100%;
`;

const UploadWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1em;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #a2a3b2;
    border-radius: 10px;
    width: 50%;
    height: 11.625em;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FileInputLabel = styled.label`
    margin: 1em;
    border: 1.2px solid #8e59ff;
    border-radius: 10px;
    height: 2.2308em;
    line-height: 2.2308em;
    text-align: center;
    color: #8e59ff;
    font-size: 0.8125em;
    font-weight: bold;
    cursor: pointer;
`;

const ImageUploadInput = styled.input`
    display: none;
`;

const ImageText = styled.div`
    margin-bottom: 0.3em;
    color: #a2a3b2;
    font-size: 0.6875em;
    font-weight: bold;
`;

const PreivewWrapper = styled.div`
    border: 1px solid #a2a3b2;
    border-radius: 10px;
    width: 40%;
    height: 11.625em;
    background-image: url(${(props) => (props.isImgFile ? props.isImgFile : ThumbNailImg)});
    background-size: cover;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ToggleWrapper = styled.div`
    margin-top: 2em;
    display: flex;
    align-items: center;
`;

const OnToggleText = styled.div`
    color: ${(props) => (props.isOn ? '#8E59FF' : '#A2A3B2')};
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
`;

const OffToggleText = styled.div`
    color: ${(props) => (props.isOn ? '#A2A3B2' : '#8E59FF')};
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
`;

const ToggleBox = styled.div`
    margin: 0 0.8em;
    border: 1.5px solid #8e59ff;
    border-radius: 10px;
    width: 3.5em;
    height: 1.4375em;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`;

const Toggle = styled.div`
    border-radius: 30px;
    width: 1em;
    height: 1em;
    background-color: #8e59ff;
    position: absolute;
    left: ${(props) => (props.isOn ? '0.2em' : '2.2em')};
    transition: all 0.3s ease-out;
`;

//아래가 기존 코드인데 혹시 필요한 속성은 골라서 사용해주세요
/* CSS */
// const ComponentWrapper = styled.div`
//     padding: 2em 2em 1em 2em;
//     border: 1px solid #8E59FF;
//     border-radius: 10px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     box-sizing : border-box;

//     @media(max-width : 786px){
//         border : none;
//         flex-direction : column;
//         align-items: center;
//         justify-content: flex-start;

//     }
// `;

// const TopWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     @media(max-width : 786px){
//         flex-direction : row;
//         align-items: center;
//         justify-content: flex-start;
//     }

// `;

// const TotalMembersWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: end;

//     @media(max-width: 768px) {
//         margin-top : 2em;
//         font-size: 0.4em;
//     }
// `;

// const CounterWrapper = styled.div`
//     display: flex;
//     align-items: center;

//     @media(max-width: 768px) {
//         width : 100%;
//         padding-left : 20em;
//     }

// `;

// const WanringText = styled.div`
//     margin-top: 0.5em;
//     color: red;
//     font-size: 0.8125em;
//     font-weight: bold;
//     visibility: ${(props) => (props.isVisible ? 'visibility' : 'hidden')};
//     opacity: ${(props) => (props.isVisible ? '1' : '0')};
//     transition: all 0.3s ease;
// `;

// const Text = styled.div`
//     margin-right: 2em;
//     color: #8E59FF;
//     font-size: 0.8125em;
//     font-weight: 800;
// `;

// const CountButton = styled.div`
//     border-radius: 30px;
//     width: 1.5em;
//     height: 1.5em;
//     line-height: 1.5em;
//     text-align: center;
//     background-color: #A2A3B2;
//     color: white;
//     font-size: 1.2em;
//     cursor: pointer;
// `;

// const TotalCount = styled.div`
//     margin: 0 0.5em;
//     border: 1px solid lightgray;
//     border-radius: 10px;
//     width: 3.2694em;
//     height: 1.915em;
//     line-height: 1.915em;
//     text-align: center;
//     font-weight: bold;
// `;

// const TitleWrapper = styled.div`
//     margin: 1em 0;
//     width: 100%;

// `;

// const InputWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

// `;

// const TitleInput = styled.input`
//     border: none;
//     border-radius: 10px;
//     width: 60em;
//     height: 3em;
//     background-color: transparent;
//     font-size: 0.8125em;
//     font-family: 'NanumSquareNeo';
//     font-weight: bold;
//     &:focus{
//         outline: none;
//     }
//     transition: all 0.3s ease;
//     &::placeholder{
//         color: #A2A3B2;
//         font-weight: bold;
//     }

// `;

// const TextLength = styled.div`
//     margin-right: 0.2em;
//     font-size: 0.7em;
//     font-weight: bold;
//     color: ${(props) => (props.lengthCount >= 20 ? 'red' : '#A2A3B2')};
//     transition: all 0.3s ease;
//     @media(max-width : 768px){
//        width: 12%;
//        font-size: 0.3em;
//     }
// `;

// const StyledTitleHr = styled.hr`
//     margin: 0;
//     border: none;
//     height: 1.5px;
//     background-color: ${(props) => (props.styledHr ? '#8E59FF' : '#A2A3B2')};
//     box-shadow: ${(props) => (props.styledHr ? '0 -0.3125em 0.8em rgba(142,89,255,0.5)' : 'none')};
//     transition: all 0.3s ease;

// `;

// const ThumbNailWrapper = styled.div`
//     margin-bottom: 1em;
//     display: flex;
//     flex-direction: column;
//     @media(max-width : 768px ){
//         margin-right : 20em;
//     }

// `;

// const Title = styled.div`
//     color: #8E59FF;
//     font-size: 1.25em;
//     font-weight: 800;
//     text-align: left;
//     margin-bottom  :1em;
//     width : 100%;
//     @media(max-width : 768px){
//         font-size: 1.1em;
//     }
// `;

// const UploadWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;

//     @media(max-width : 786px){
//         flex-direction : row;
//         align-items: center;
//         justify-content: space-between;
//         gap : 1em;
//         margin-left : 13em;
//         height : 11em;
//         width : 86%;
//     }

// `;

// const ImageWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     border: 1px solid #A2A3B2;
//     border-radius: 10px;
//     width: 60%;
//     height: 11.625em;
//     align-items: center;
//     justify-content: center;

// `;

// const FileInputLabel = styled.label`
//     margin: 1em;
//     border: 1.2px solid #8E59FF;
//     border-radius: 10px;
//     width: 8.4615em;
//     height: 2.2308em;
//     line-height: 2.2308em;
//     text-align: center;
//     color: #8E59FF;
//     font-size: 0.8125em;
//     font-weight: bold;
//     cursor: pointer;

// `;

// const ImageUploadInput = styled.input`
//     display: none;
// `;

// const ImageText = styled.div`
//     margin-bottom: 0.3em;
//     color: #A2A3B2;
//     font-size: 0.6875em;
//     font-weight: bold;
// `;

// const PreivewWrapper = styled.div`
//     border: 1px solid #A2A3B2;
//     border-radius: 10px;
//     width: 19.8732em;
//     height: 11.625em;
//     background-image: url(${(props) => (props.isImgFile ? props.isImgFile : ThumbNailImg)});
//     background-size: cover;

//     @media(max-width : 768px){
//         background-position: center 50%;
//     }
// `;

// const ToggleWrapper = styled.div`
//     margin-top: 2em;
//     display: flex;
//     align-items: center;
// `;

// const OnToggleText = styled.div`
//     color: ${(props) => (props.isOn ? '#8E59FF' : '#A2A3B2')};
//     font-size: 0.9em;
//     font-weight: bold;
//     cursor: pointer;
//     transition: all 0.3s ease;
// `;

// const OffToggleText = styled.div`
//     color: ${(props) => (props.isOn ? '#A2A3B2' : '#8E59FF')};
//     font-size: 0.9em;
//     font-weight: bold;
//     cursor: pointer;
//     transition: all 0.3s ease;
// `;

// const ToggleBox = styled.div`
//     margin: 0 0.8em;
//     border: 1.5px solid #8E59FF;
//     border-radius: 10px;
//     width: 3.5em;
//     height: 1.4375em;
//     display: flex;
//     align-items: center;
//     position: relative;
//     cursor: pointer;
// `;

// const Toggle = styled.div`
//     border-radius: 30px;
//     width: 1em;
//     height: 1em;
//     background-color: #8E59FF;
//     position: absolute;
//     left: ${(props) => (props.isOn ? '0.2em' : '2.2em')};
//     transition: all 0.3s ease-out;
// `;

// const Title2 = styled.div`
//     margin: 1em 0 0.7em 0;
//     color: #8E59FF;
//     font-weight: 800;
// `;
