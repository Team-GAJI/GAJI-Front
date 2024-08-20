import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BoldIcon from '../../assets/icons/communityWrite/bold.svg?react';
import ItalicIcon from '../../assets/icons/communityWrite/italic.svg?react';
import ThroughIcon from '../../assets/icons/communityWrite/through.svg?react';
import ImageIcon from '../../assets/icons/communityWrite/image.svg?react';
import LinkIcon from '../../assets/icons/communityWrite/link.svg?react';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import { communityWriteAPI } from '../../utils/communityWrite/communityWriteAPI';
import { setTitle, setBody } from '../../features/community/communityWriteSlice';

const CommunityWritePost = () => {
    // 상태 관리
    const [markdown, setMarkdown] = useState('');
    const [lengthCount, setLengthCount] = useState(markdown.length);
    const [styledHr, setStyledHr] = useState(false);
    const [fontSize, setFontSize] = useState('0');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const textareaRef = useRef(null);

    // Redux 관리
    const dispatch = useDispatch();
    dispatch(setBody(markdown));
    const { title, body, hashtagList, categoryId } = useSelector((state) => state.communityWrite);
    const { type } = useSelector((state) => state.community);
    // 서버로 전달할 데이터
    const data = {
        "title": title,
        "body": body,
        // "thumbnailUrl": thumbnailUrl,
        "type": type,
        "hashtagList": hashtagList,
        "categoryId": categoryId
    };

    const handleSubmit = async () => {
        try {
            const postId = await communityWriteAPI(data);
            navigate("/community/post", { state: {data: postId} }); 
            console.log(postId);

        } catch (error) {
            console.error('스터디 생성 중 오류 발생:', error);
            // 필요에 따라 오류 처리 로직을 추가할 수 있습니다.
        }
    };

    // 제목 입력
    const handleTitleChange = (e) => {
        dispatch(setTitle(e.target.value));
    };

    // 제목 하단바 색상 관리
    const handlePurpleHr = () => {
        setStyledHr(true);
    };
    const handleGrayHr = () => {
        setStyledHr(false);
    };

    // 제목 크기 적용 함수
    const applyFontSize = (e) => {
        const value = e.target.value;
        setFontSize(value);
        if (value === '0') return;

        const headerSyntax = '#'.repeat(value) + ' ';
        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const before = markdown.substring(0, selectionStart);
        const after = markdown.substring(selectionEnd);

        setMarkdown(`${before}${headerSyntax}${after}`);
        textarea.setSelectionRange(selectionStart + headerSyntax.length, selectionStart + headerSyntax.length);
        textarea.focus();
    };

    // 엔터 키 이벤트 핸들러
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setFontSize('0');
        }
    };

    // 포맷팅 적용 함수
    const applyFormatting = (syntax) => {
        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const before = markdown.substring(0, selectionStart);
        const selected = markdown.substring(selectionStart, selectionEnd);
        const after = markdown.substring(selectionEnd);

        if (selected.length > 0) {
            // 선택된 텍스트에 포맷팅 적용
            setMarkdown(`${before}${syntax}${selected}${syntax}${after}`);
            textarea.setSelectionRange(selectionStart + syntax.length, selectionEnd + syntax.length);
        } else {
            // 빈 공간에서 포맷팅 문법 추가
            setMarkdown(`${before}${syntax}${after}`);
            textarea.setSelectionRange(selectionStart + syntax.length, selectionStart + syntax.length);
        }
        textarea.focus();
    };

    // 링크 추가 함수
    const addLink = () => {
        const textarea = textareaRef.current;
        const { selectionStart, selectionEnd } = textarea;
        const before = markdown.substring(0, selectionStart);
        const selected = markdown.substring(selectionStart, selectionEnd);
        const after = markdown.substring(selectionEnd);

        // 선택된 텍스트가 없으면 기본 텍스트 'text' 사용
        const linkText = selected.length > 0 ? selected : 'text';
        const linkSyntax = `[${linkText}]()`;
        setMarkdown(`${before}${linkSyntax}${after}`);
        textarea.setSelectionRange(selectionStart + linkSyntax.length - 4, selectionEnd + linkSyntax.length - 4);
        textarea.focus();
    };

    // 마크다운 내용, 글자 수 관리
    const handleMarkdownChange = (e) => {
        setMarkdown(e.target.value);
        setLengthCount(e.target.value.length);
    };

    // useNavigate
    const navigate = useNavigate();

    // 모달 열고 닫기 함수
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Wrapper>
            {/* 제목 */}
            <TitleWrapper>
                <TitleInput
                    value={title}
                    onChange={handleTitleChange}
                    onFocus={handlePurpleHr}
                    onBlur={handleGrayHr}
                    placeholder='게시글의 제목을 입력해주세요'/>
                <StyledTitleHr styledHr={styledHr}/>
            </TitleWrapper>

            {/* 툴바 */}
            <ToolbarWrapper>
                <StyledFontSizeSelect name="fontSize" value={fontSize} onChange={applyFontSize}>
                    <option value="0">폰트크기</option>
                    <option value="1">1h</option>
                    <option value="2">2h</option>
                    <option value="3">3h</option>
                    <option value="4">4h</option>
                    <option value="5">5h</option>
                    <option value="6">6h</option>
                </StyledFontSizeSelect>
                <StyledBar>|</StyledBar>
                <StyledBoldIcon onClick={() => applyFormatting('**')}/>
                <StyledItalicIcon onClick={() => applyFormatting('*')}/>
                <StyledThroughIcon onClick={() => applyFormatting('~~')}/>
                <StyledBar>|</StyledBar>
                <FileInputLabel htmlFor="thumbNail">
                    <StyledImageIcon/>
                </FileInputLabel>
                <ImageUploadInput type="file" id="thumbNail" accept="image/*"/>
                <StyledLinkIcon onClick={addLink}/>
                <StyledBar>|</StyledBar>
                <StyledPreviewButton onClick={openModal}>
                    미리보기
                </StyledPreviewButton>
            </ToolbarWrapper>

            {/* 내용 */}
            <TextareaWrapper>
                <StyledTextarea
                    ref={textareaRef}
                    value={markdown}
                    onChange={handleMarkdownChange}
                    onKeyDown={handleKeyDown}
                    placeholder='게시글의 내용을 입력해주세요.'
                    maxLength='20000'
                />
                <TextareaBottom>
                    <TextLength lengthCount={lengthCount}>{lengthCount}/20000 자</TextLength>
                    <StyledContentHr/>
                </TextareaBottom>
            </TextareaWrapper>

            {/* 업로드 버튼 */}
            <SubmitButton onClick={()=>handleSubmit()}>
                게시글 업로드
            </SubmitButton>

            {/* 모달 */}
            {isModalOpen && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={closeModal}>x</CloseButton>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Wrapper>
    );
}

export default CommunityWritePost;

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 100%;
    margin-bottom :1em;
`
const TitleWrapper = styled.div`
    width : 100%;
`;

const TitleInput = styled.input`
    border: none;
    border-radius: 10px;
    width : 100%;
    
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
    margin-bottom : 1em;
    width : 100%;
    border: none;
    height: 1.5px;
    background-color: ${(props) => (props.styledHr ? '#8E59FF' : '#A2A3B2')};
    box-shadow: ${(props) => (props.styledHr ? '0 -0.3125em 0.8em rgba(142,89,255,0.5)' : 'none')};
    transition: all 0.3s ease
`;

const ToolbarWrapper = styled.div`
    margin-top : 0.6em;
    width : 100%;
    height: 2em;
    display: flex;
    align-items: center;
    background-color: #FBFAFF;
    font-size: 0.9em;
    overflow-x : scorll;
    position: sticky;
    top: 60px;
`;

const StyledFontSizeSelect = styled.select`
    display : flex;
    justify-content : center;
    padding-left : 0.25em;
    box-sizing : border-box;
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 6em;
    height: 1.75em;
    background-color: transparent;
    color: #8E59FF;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    &:focus{
        outline: none;
    }

    @media(max-width:768px){
        font-size : 0.75em;

    }
`;

const StyledBar = styled.div`
    margin: 0 1.2em;
    color: #A2A3B2;
`;

const StyledBoldIcon = styled(BoldIcon)`
    width: 0.825em;
    height: 1.1em;
    &:hover{
        filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
    }
    @media(max-width:768px){
        width : 0.75em;
    }
`;

const StyledItalicIcon = styled(ItalicIcon)`
    margin: 0 2em;
    width: 0.857em;
    height: 1em;
    &:hover{
        filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
    }
    @media(max-width:768px){
        width : 0.75em;
    }
`;

const StyledThroughIcon = styled(ThroughIcon)`
    width: 1.0625em;
    height: 1.125em;
    &:hover{
        filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
    }
    @media(max-width:768px){
        width : 0.75em;
    }
`;

const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    @media(max-width:768px){
        width : 0.75em;
    }
`;

const ImageUploadInput = styled.input`
    display: none;
    
`;

const StyledImageIcon = styled(ImageIcon)`
    width: 1.2716em;
    height: 1.2em;
    &:hover{
        filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
    }
            @media(max-width:768px){
        width : 0.75em;
    }
`;

const StyledLinkIcon = styled(LinkIcon)`
    margin-left:2em;
    width: 1.2em;
    height: 1.2em;
    &:hover{
        filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
    }
    @media(max-width:768px){
        width : 0.8125em;
        margin-left:1em;
    }
`;

const TextareaWrapper = styled.div`
    border-radius: 15px;
    width: 100%;
    height: auto;
    padding : 1em;
    padding-bottom : 0em;
    margin-top : 0.8125em;
    box-sizing : border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:focus-within{
        box-shadow: 0 0.25em 1.25em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;
`;

const StyledTextarea = styled.textarea`
    padding: 1.23em 1.23em 0 1.23em;
    border: none;
    width: 100%;
    height: 65.19em;
    line-height: 1.845em;
    background-color: transparent;
    font-size: 0.8125em;
    font-weight: 700;
    font-family: 'NanumSquareNeo';
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: #A2A3B2;
        font-weight: 700;
    }
    resize: none;
`;

const TextareaBottom = styled.div`
    width : 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
`;

const TextLength = styled.div`
    font-size : 0.8125em;
    margin-left: auto;
    font-weight: bold;
    color: ${(props) => (props.lengthCount >= 20000 ? 'red' : '#A2A3B2')};
`;

const StyledContentHr = styled.hr`
    margin: 1em 0 2em 0;
    border: none;
    width : 100%;
    height: 1.5px;
    background-color: rgba(162, 163, 178, 0.4);
`;

const StyledPreviewButton = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 10px;
    width: 6em;
    box-sizing : border-box;
    padding-left : 0.25em;
    padding-right : 0.25em;
    height: 1.75em;
    line-height: 1.75em;
    text-align: center;
    background-color: transparent;
    color: #8E59FF;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
    @media(max-width:768px){
        font-size: 0.75em;
    }
`;

const SubmitButton = styled.button`
    border: none;
    border-radius: 10px;
    margin-top : 1em;
    width: 9.1em;
    height: 2.25em;
    background-color: #8E59FF;
    color: white;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;

    @media(max-width : 768px){
        width: 7em;
        height: 2.25em;
        font-size: 0.8125em;
    }
`;

// 모달
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

`;
const ModalContent = styled.div`
    background-color: #fff;
    padding: 2.4615em;
    border-radius: 10px;
    width: 68em;
    max-height: 30.7692em;
    font-size: 0.8125em;
    overflow-y: auto;
    position: relative;
    @media(max-width:768px){
        width : 80%;
    }
`;
const CloseButton = styled.button`
    position: absolute;
    top: 1em;
    right: 1em;
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
`;

// import React, { useState, useRef } from 'react';
// import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import BoldIcon from '../../assets/icons/communityWrite/bold.svg?react';
// import ItalicIcon from '../../assets/icons/communityWrite/italic.svg?react';
// import ThroughIcon from '../../assets/icons/communityWrite/through.svg?react';
// import ImageIcon from '../../assets/icons/communityWrite/image.svg?react';
// import LinkIcon from '../../assets/icons/communityWrite/link.svg?react';
// import ReactMarkdown from "react-markdown";
// import remarkGfm from 'remark-gfm';
// import { communityWriteAPI } from '../../utils/communityWrite/communityWriteAPI';
// import { setTitle, setBody, setThumbnailUrl } from '../../features/community/communityWriteSlice';

// const CommunityWritePost = () => {
//     const [markdown, setMarkdown] = useState('');
//     const [lengthCount, setLengthCount] = useState(markdown.length);
//     const [styledHr, setStyledHr] = useState(false);
//     const [fontSize, setFontSize] = useState('0');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [imageLinks, setImageLinks] = useState([]); // 이미지 링크를 저장할 배열
//     const textareaRef = useRef(null);

//     // Redux 상태 관리
//     const dispatch = useDispatch();
//     dispatch(setBody(markdown));
//     const { title, body, thumbnailUrl, hashtagList, categoryId } = useSelector((state) => state.communityWrite);
//     const { type } = useSelector((state) => state.community);

//     // 서버로 전달할 데이터
//     const data = {
//         "title": title,
//         "body": body,
//         "thumbnailUrl": thumbnailUrl,
//         "type": type,
//         "hashtagList": hashtagList,
//         "categoryId": categoryId
//     };

//     // 서버로 파일을 업로드하고 URL을 반환하는 가상의 함수
//     const uploadFileToServer = async (file) => {
//         const formData = new FormData();
//         formData.append('file', file);

//         // 서버로 파일 전송
//         try {
//             const response = await fetch('your-server-endpoint', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 return data.url;  // 서버에서 반환된 이미지 URL
//             } else {
//                 console.error('File upload failed');
//             }
//         } catch (error) {
//             console.error('Error uploading file:', error);
//         }
//     };

//     // 파일 선택 시 호출되는 함수
//     const handleFileChange = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const url = await uploadFileToServer(file);

//             // 이미지 링크를 커서 위치에 삽입
//             const textarea = textareaRef.current;
//             const startPos = textarea.selectionStart;
//             const endPos = textarea.selectionEnd;

//             const imageMarkdown = `![alt text](${url})`;
//             const newText = markdown.substring(0, startPos) + imageMarkdown + markdown.substring(endPos);

//             setMarkdown(newText);

//             // 이미지 링크를 배열에 저장
//             setImageLinks((prevLinks) => [...prevLinks, url]);

//             // 첫 번째 이미지 링크를 data.thumbnailUrl에 저장
//             if (imageLinks.length === 0) {
//                 dispatch(setThumbnailUrl(url));
//                 // Update your data store or perform any required action with the thumbnailUrl
//             }

//             // 커서 위치 갱신
//             setTimeout(() => {
//                 textarea.selectionStart = textarea.selectionEnd = startPos + imageMarkdown.length;
//                 textarea.focus();
//             }, 0);
//         }
//     };

//     const handleSubmit = async () => {
//         try {
//             const result = await communityWriteAPI(data);
//             navigate("/community/post", { state: {data: data} }); 
//             console.log(result);

//         } catch (error) {
//             console.error('스터디 생성 중 오류 발생:', error);
//             // 필요에 따라 오류 처리 로직을 추가할 수 있습니다.
//         }
//     };

//     // 제목 입력
//     const handleTitleChange = (e) => {
//         dispatch(setTitle(e.target.value));
//     };

//     // 제목 하단바 색상 관리
//     const handlePurpleHr = () => {
//         setStyledHr(true);
//     };
//     const handleGrayHr = () => {
//         setStyledHr(false);
//     };

//     // 제목 크기 적용 함수
//     const applyFontSize = (e) => {
//         const value = e.target.value;
//         setFontSize(value);
//         if (value === '0') return;

//         const headerSyntax = '#'.repeat(value) + ' ';
//         const textarea = textareaRef.current;
//         const { selectionStart, selectionEnd } = textarea;
//         const before = markdown.substring(0, selectionStart);
//         const after = markdown.substring(selectionEnd);

//         setMarkdown(`${before}${headerSyntax}${after}`);
//         textarea.setSelectionRange(selectionStart + headerSyntax.length, selectionStart + headerSyntax.length);
//         textarea.focus();
//     };

//     // 엔터 키 이벤트 핸들러
//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             setFontSize('0');
//         }
//     };

//     // 포맷팅 적용 함수
//     const applyFormatting = (syntax) => {
//         const textarea = textareaRef.current;
//         const { selectionStart, selectionEnd } = textarea;
//         const before = markdown.substring(0, selectionStart);
//         const selected = markdown.substring(selectionStart, selectionEnd);
//         const after = markdown.substring(selectionEnd);

//         if (selected.length > 0) {
//             // 선택된 텍스트에 포맷팅 적용
//             setMarkdown(`${before}${syntax}${selected}${syntax}${after}`);
//             textarea.setSelectionRange(selectionStart + syntax.length, selectionEnd + syntax.length);
//         } else {
//             // 빈 공간에서 포맷팅 문법 추가
//             setMarkdown(`${before}${syntax}${after}`);
//             textarea.setSelectionRange(selectionStart + syntax.length, selectionStart + syntax.length);
//         }
//         textarea.focus();
//     };

//     // 링크 추가 함수
//     const addLink = () => {
//         const textarea = textareaRef.current;
//         const { selectionStart, selectionEnd } = textarea;
//         const before = markdown.substring(0, selectionStart);
//         const selected = markdown.substring(selectionStart, selectionEnd);
//         const after = markdown.substring(selectionEnd);

//         // 선택된 텍스트가 없으면 기본 텍스트 'text' 사용
//         const linkText = selected.length > 0 ? selected : 'text';
//         const linkSyntax = `[${linkText}]()`;
//         setMarkdown(`${before}${linkSyntax}${after}`);
//         textarea.setSelectionRange(selectionStart + linkSyntax.length - 4, selectionEnd + linkSyntax.length - 4);
//         textarea.focus();
//     };

//     // 마크다운 내용, 글자 수 관리
//     const handleMarkdownChange = (e) => {
//         setMarkdown(e.target.value);
//         setLengthCount(e.target.value.length);
//     };

//     // useNavigate
//     const navigate = useNavigate();

//     // 모달 열고 닫기 함수
//     const openModal = () => {
//         setIsModalOpen(true);
//     };
//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <Wrapper>
//             {/* 제목 */}
//             <TitleWrapper>
//                 <TitleInput
//                     value={title}
//                     onChange={handleTitleChange}
//                     onFocus={handlePurpleHr}
//                     onBlur={handleGrayHr}
//                     placeholder='게시글의 제목을 입력해주세요'/>
//                 <StyledTitleHr styledHr={styledHr}/>
//             </TitleWrapper>

//             {/* 툴바 */}
//             <ToolbarWrapper>
//                 <StyledFontSizeSelect name="fontSize" value={fontSize} onChange={applyFontSize}>
//                     <option value="0">폰트크기</option>
//                     <option value="1">1h</option>
//                     <option value="2">2h</option>
//                     <option value="3">3h</option>
//                     <option value="4">4h</option>
//                     <option value="5">5h</option>
//                     <option value="6">6h</option>
//                 </StyledFontSizeSelect>
//                 <StyledBar>|</StyledBar>
//                 <StyledBoldIcon onClick={() => applyFormatting('**')}/>
//                 <StyledItalicIcon onClick={() => applyFormatting('*')}/>
//                 <StyledThroughIcon onClick={() => applyFormatting('~~')}/>
//                 <StyledBar>|</StyledBar>
//                 {/* 이미지 업로드 아이콘과 파일 입력 */}
//                 <FileInputLabel htmlFor="thumbNail">
//                     <StyledImageIcon/>
//                 </FileInputLabel>
//                 <ImageUploadInput
//                     type="file"
//                     id="thumbNail"
//                     accept="image/*"
//                     onChange={handleFileChange}  // 파일 선택 시 handleFileChange 호출
//                 />
//                 <StyledLinkIcon onClick={addLink}/>
//                 <StyledBar>|</StyledBar>
//                 <StyledPreviewButton onClick={openModal}>
//                     미리보기
//                 </StyledPreviewButton>
//             </ToolbarWrapper>

//             {/* 내용 */}
//             <TextareaWrapper>
//                 <StyledTextarea
//                     ref={textareaRef}
//                     value={markdown}
//                     onChange={handleMarkdownChange}
//                     onKeyDown={handleKeyDown}
//                     placeholder='게시글의 내용을 입력해주세요.'
//                     maxLength='20000'
//                 />
//                 <TextareaBottom>
//                     <TextLength lengthCount={lengthCount}>{lengthCount}/20000 자</TextLength>
//                     <StyledContentHr/>
//                 </TextareaBottom>
//             </TextareaWrapper>

//             {/* <TextareaWrapper>
//                 <StyledTextarea
//                     ref={textareaRef}
//                     value={markdown}
//                     onChange={(e) => setMarkdown(e.target.value)}
//                     onKeyDown={(e) => setFontSize('0')}
//                     placeholder='게시글의 내용을 입력해주세요.'
//                     maxLength='20000'
//                 />
//                 <TextareaBottom>
//                     <TextLength lengthCount={lengthCount}>{lengthCount}/20000 자</TextLength>
//                     <StyledContentHr/>
//                 </TextareaBottom>
//             </TextareaWrapper> */}

//             {/* 업로드 버튼 */}
//             <SubmitButton onClick={()=>handleSubmit()}>
//                 게시글 업로드
//             </SubmitButton>

//             {/* 모달 */}
//             {isModalOpen && (
//                 <ModalOverlay onClick={closeModal}>
//                     <ModalContent onClick={(e) => e.stopPropagation()}>
//                         <CloseButton onClick={closeModal}>x</CloseButton>
//                         <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
//                     </ModalContent>
//                 </ModalOverlay>
//             )}
//         </Wrapper>
//     );
// }

// export default CommunityWritePost;

// const Wrapper = styled.div`
//     display : flex;
//     flex-direction : column;
//     align-items : center;
//     width : 100%;
//     margin-bottom :1em;
// `
// const TitleWrapper = styled.div`
//     width : 100%;
// `;

// const TitleInput = styled.input`
//     border: none;
//     border-radius: 10px;
//     width : 100%;
    
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

// const StyledTitleHr = styled.hr`
//     margin-bottom : 1em;
//     width : 100%;
//     border: none;
//     height: 1.5px;
//     background-color: ${(props) => (props.styledHr ? '#8E59FF' : '#A2A3B2')};
//     box-shadow: ${(props) => (props.styledHr ? '0 -0.3125em 0.8em rgba(142,89,255,0.5)' : 'none')};
//     transition: all 0.3s ease
// `;

// const ToolbarWrapper = styled.div`
//     margin-top : 0.6em;
//     width : 100%;
//     height: 2em;
//     display: flex;
//     align-items: center;
//     background-color: #FBFAFF;
//     font-size: 0.9em;
//     overflow-x : scorll;
//     position: sticky;
//     top: 60px;
// `;

// const StyledFontSizeSelect = styled.select`
//     display : flex;
//     justify-content : center;
//     padding-left : 0.25em;
//     box-sizing : border-box;
//     border: 1px solid #8E59FF;
//     border-radius: 10px;
//     width: 6em;
//     height: 1.75em;
//     background-color: transparent;
//     color: #8E59FF;
//     font-size: 1em;
//     font-weight: 800;
//     cursor: pointer;
//     &:focus{
//         outline: none;
//     }

//     @media(max-width:768px){
//         font-size : 0.75em;

//     }
// `;

// const StyledBar = styled.div`
//     margin: 0 1.2em;
//     color: #A2A3B2;
// `;

// const StyledBoldIcon = styled(BoldIcon)`
//     width: 0.825em;
//     height: 1.1em;
//     &:hover{
//         filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
//     }
//     @media(max-width:768px){
//         width : 0.75em;
//     }
// `;

// const StyledItalicIcon = styled(ItalicIcon)`
//     margin: 0 2em;
//     width: 0.857em;
//     height: 1em;
//     &:hover{
//         filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
//     }
//     @media(max-width:768px){
//         width : 0.75em;
//     }
// `;

// const StyledThroughIcon = styled(ThroughIcon)`
//     width: 1.0625em;
//     height: 1.125em;
//     &:hover{
//         filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
//     }
//     @media(max-width:768px){
//         width : 0.75em;
//     }
// `;

// const FileInputLabel = styled.label`
//     display: flex;
//     align-items: center;
//     @media(max-width:768px){
//         width : 0.75em;
//     }
// `;

// const ImageUploadInput = styled.input`
//     display: none;
    
// `;

// const StyledImageIcon = styled(ImageIcon)`
//     width: 1.2716em;
//     height: 1.2em;
//     &:hover{
//         filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
//     }
//             @media(max-width:768px){
//         width : 0.75em;
//     }
// `;

// const StyledLinkIcon = styled(LinkIcon)`
//     margin-left:2em;
//     width: 1.2em;
//     height: 1.2em;
//     &:hover{
//         filter: invert(42%) sepia(59%) saturate(4229%) hue-rotate(238deg) brightness(100%) contrast(105%);
//     }
//     @media(max-width:768px){
//         width : 0.8125em;
//         margin-left:1em;
//     }
// `;

// const TextareaWrapper = styled.div`
//     border-radius: 15px;
//     width: 100%;
//     height: auto;
//     padding : 1em;
//     padding-bottom : 0em;
//     margin-top : 0.8125em;
//     box-sizing : border-box;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     &:focus-within{
//         box-shadow: 0 0.25em 1.25em rgba(22,26,63,0.2);
//     }
//     transition: all 0.3s ease;
// `;

// const StyledTextarea = styled.textarea`
//     padding: 1.23em 1.23em 0 1.23em;
//     border: none;
//     width: 100%;
//     height: 65.19em;
//     line-height: 1.845em;
//     background-color: transparent;
//     font-size: 0.8125em;
//     font-weight: 700;
//     font-family: 'NanumSquareNeo';
//     &:focus{
//         outline: none;
//     }
//     &::placeholder{
//         color: #A2A3B2;
//         font-weight: 700;
//     }
//     resize: none;
// `;

// const TextareaBottom = styled.div`
//     width : 100%;
//     margin-top: 1em;
//     display: flex;
//     flex-direction: column;
// `;

// const TextLength = styled.div`
//     font-size : 0.8125em;
//     margin-left: auto;
//     font-weight: bold;
//     color: ${(props) => (props.lengthCount >= 20000 ? 'red' : '#A2A3B2')};
// `;

// const StyledContentHr = styled.hr`
//     margin: 1em 0 2em 0;
//     border: none;
//     width : 100%;
//     height: 1.5px;
//     background-color: rgba(162, 163, 178, 0.4);
// `;

// const StyledPreviewButton = styled.div`
//     border: 1px solid #8E59FF;
//     border-radius: 10px;
//     width: 6em;
//     box-sizing : border-box;
//     padding-left : 0.25em;
//     padding-right : 0.25em;
//     height: 1.75em;
//     line-height: 1.75em;
//     text-align: center;
//     background-color: transparent;
//     color: #8E59FF;
//     font-size: 1em;
//     font-weight: 800;
//     cursor: pointer;
//     @media(max-width:768px){
//         font-size: 0.75em;
//     }
// `;

// const SubmitButton = styled.button`
//     border: none;
//     border-radius: 10px;
//     margin-top : 1em;
//     width: 9.1em;
//     height: 2.25em;
//     background-color: #8E59FF;
//     color: white;
//     font-size: 1em;
//     font-weight: bold;
//     cursor: pointer;
//     &:hover{
//         box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
//     }
//     transition: all 0.3s ease;

//     @media(max-width : 768px){
//         width: 7em;
//         height: 2.25em;
//         font-size: 0.8125em;
//     }
// `;

// // 모달
// const ModalOverlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: 10;

// `;
// const ModalContent = styled.div`
//     background-color: #fff;
//     padding: 2.4615em;
//     border-radius: 10px;
//     width: 68em;
//     max-height: 30.7692em;
//     font-size: 0.8125em;
//     overflow-y: auto;
//     position: relative;
//     @media(max-width:768px){
//         width : 80%;
//     }
// `;
// const CloseButton = styled.button`
//     position: absolute;
//     top: 1em;
//     right: 1em;
//     background: none;
//     border: none;
//     font-size: 1.5em;
//     cursor: pointer;
// `;
