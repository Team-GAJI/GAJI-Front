import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PostWriterInfo from '../components/communityPost/PostWriterInfo';
import BackgroundImage from '../assets/images/community/communityBackground.png';
import UserProfileImg from '../assets/images/community/userProfile.png';
import BookMarkIcon from '../assets/icons/community/postBookMark.svg?react';
import LikeIcon from '../assets/icons/community/postLike.svg?react';
import ReportIcon from '../assets/icons/community/postReport.svg?react';
import DownArrowIcon from '../assets/icons/community/downArrow.svg?react';
import ExtraPostPreview from '../components/communityPost/ExtraPostPreview';
import CommentContainer from '../components/communityPost/CommentContainer';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import Hashtag from '../components/communityWritePost/Hashtag';

/* 세자리마다 콤마 기능 */
const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const CommunityPostPage = () => {
    /* 북마크, 좋아요 개수 */
    const bookMarkCount = 300;
    const likeCount = 6000;

    /* state 관리 */
    const [isOptionVisible, setIsOptionVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('모집 완료');
    const [isWriterInfoVisible, setIsWriterInfoVisible] = useState(false);

    /* 작성자 정보 모달 외부 클릭 감지 */
    const modalRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsWriterInfoVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);

    /* 게시글 상태 버튼 텍스트 */
    const toggleOptionVisibility = () => {
        setIsOptionVisible(!isOptionVisible);
    };

    /* 게시글 상태 옵션 선택 */
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOptionVisible(false);
    };

    /* 작성자 정보 모달 기능 */
    const toggleWriterInfoVisibility = () => {
        setIsWriterInfoVisible(!isWriterInfoVisible);
    };

    /* 게시글 작성에서 정보 가져오기 */
    const location = useLocation();
    const title = location.state?.title || "게시글 제목입니다";
    const content = location.state?.content || "게시글 내용입니다. 어쩌구 저쩌구";
    
    return (
        <>
            {/* 헤더 */}
            <HeaderWrapper>
                {/* 제목 div */}
                <TitleWrapper>
                    {/* 게시글 상세정보 */}
                    <TitleDetail>
                        <StyledUserProfileImg onClick={toggleWriterInfoVisibility} src={UserProfileImg} alt='user profile'/>
                        <Writer onClick={toggleWriterInfoVisibility}>user1023</Writer>
                        <StyledBar>|</StyledBar>
                        프로젝트
                        <StyledBar>|</StyledBar>
                        2024.03.01
                        <StyledBar>|</StyledBar>
                        조회 300
                        <StyledBar>|</StyledBar>
                        댓글 3
                    </TitleDetail>

                    {/* 작성자 정보 모달창 */}
                    <PostWriterInfoWrapper isVisible={isWriterInfoVisible}>
                        <PostWriterInfo ref={modalRef} />
                    </PostWriterInfoWrapper>

                    {/* 게시글 제목 */}
                    <Title>
                        {title}
                    </Title>
                    {/* 게시글 해시태그 */}
                    <HashtagWrapper>
                        <Hashtag/>
                        <Hashtag/>
                        <Hashtag/>
                    </HashtagWrapper>
                    {/* 게시글 상호작용 */}
                    <InteractionWrapper>
                        <BookMarkWrapper>
                            <StyledBookMarkIcon/>
                            <InteractionText>{formatNumberWithCommas(bookMarkCount)}</InteractionText>
                        </BookMarkWrapper>
                        <BookMarkWrapper>
                            <StyledLikeIcon/>
                            <InteractionText>{formatNumberWithCommas(likeCount)}</InteractionText>
                        </BookMarkWrapper>
                        <BookMarkWrapper>
                            <StyledReportIcon/>
                            <InteractionText>신고</InteractionText>
                        </BookMarkWrapper>
                    </InteractionWrapper>
                </TitleWrapper>

                {/* 게시글 상태 div */}
                <PostStateWrapper>
                    {/* 상태 버튼 */}
                    <PostStateButton onClick={toggleOptionVisibility}>
                        {selectedOption}
                        <StyledDownArrowIcon isVisible={isOptionVisible}/>
                    </PostStateButton>
                    {/* 상태 옵션 */}
                    <PostStateOptionWrapper isVisible={isOptionVisible}>
                        <PostStateOption
                            onClick={() => handleOptionSelect('모집 완료')}
                            isSelected={selectedOption === '모집 완료'}
                        >
                            모집 완료
                        </PostStateOption>
                        <PostStateOption
                            onClick={() => handleOptionSelect('모집 중')}
                            isSelected={selectedOption === '모집 중'}
                        >
                            모집 중
                        </PostStateOption>
                        <PostStateOption
                            onClick={() => handleOptionSelect('완료 질문')}
                            isSelected={selectedOption === '완료 질문'}
                        >
                            완료 질문
                        </PostStateOption>
                        <PostStateOption
                            onClick={() => handleOptionSelect('미완료 질문')}
                            isSelected={selectedOption === '미완료 질문'}
                        >
                            미완료 질문
                        </PostStateOption>
                    </PostStateOptionWrapper>
                </PostStateWrapper>
            </HeaderWrapper>

            {/* 게시글 내용 */}
            <PostContentWrapper>
                {/* 게시글 본문 */}
                <PostContent>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                </PostContent>

                {/* 다음 게시물 div */}
                <ExtraPostsWrapper>
                    <ExtraPostPreview/>
                    <ExtraPostPreview/>
                </ExtraPostsWrapper>

                <StyledHr/>
                {/* 댓글 영역 */}
                <CommentContainer/>

            </PostContentWrapper>
        </>
    )
}

export default CommunityPostPage;

/* CSS */
const HeaderWrapper = styled.div`
    padding: 0 8em 0 8em;
    height: 16.1875em;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleWrapper = styled.div`
    position: relative;
`;

const TitleDetail = styled.div`
    margin-bottom: 1.5em;
    display: flex;
    color: #D0D1D9;
    font-size: 0.8125em;
    line-height: 1.5em;
`;

const StyledUserProfileImg = styled.img`
    padding-right: 0.6em;
    width: 1.5em;
    height: 1.55em;
    cursor: pointer;
`;

const Writer = styled.div`
    color: #8E59FF;
    cursor: pointer;
`;

const StyledBar = styled.div`
    margin: 0 0.7em 0 0.7em;
`;

const PostWriterInfoWrapper = styled.div`
    width: 41em;
    height: 11em;
    position: absolute;
    z-index: 1;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: all 0.3s ease;
`;

const Title = styled.div`
    margin-bottom: 0.5em;    
    color: #8E59FF;
    font-size: 2em;
    font-weight: 800;
`;

const HashtagWrapper = styled.div`
    display: flex;
`;

const InteractionWrapper = styled.div`
    display: flex;
    text-align: center;
`;

const BookMarkWrapper = styled.div`
    margin: 1em 2em 0 0;
`;

const StyledBookMarkIcon = styled(BookMarkIcon)`
    margin-bottom: 0.1em;
    width: 1em;
    height: 1.3125em;
    cursor: pointer;
`;
const StyledLikeIcon = styled(LikeIcon)`
    margin-bottom: 0.1em;
    width: 1.375em;
    height: 1.25em;
    cursor: pointer;
`;
const StyledReportIcon = styled(ReportIcon)`
    margin-bottom: 0.1em;
    width: 1.5em;
    height: 1.25em;
    cursor: pointer;
`;

const InteractionText = styled.div`
    color: #D0D1D9;
    font-size: 0.6875em;
`;

const PostStateWrapper = styled.div`
    color: white;
    font-size: 0.8125em;
    font-weight: 800;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostStateButton = styled.div`
    border-radius: 10px;
    width: 9.3077em;
    height: 2.2308em;
    background-color: #8E59FF;
    line-height: 2.2308em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const StyledDownArrowIcon = styled(DownArrowIcon)`
    margin-left: 0.4em;
    width: 0.9em;
    height: 0.9em;
    transition: all 0.5s ease;
    transform: rotate(${(props) => (props.isVisible ? '-180deg' : '0deg')});
`;

const PostStateOptionWrapper = styled.div`
    margin-top: 0.3em;
    border-radius: 10px;
    width: 11em;
    height: 11.5385em;
    background-color: rgba(22, 26, 63, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: all 0.3s ease;
`;

const PostStateOption = styled.div`
    border: ${(props) => (props.isSelected ? '1px solid #D0D1D9' : 'none')};
    border-radius: 10px;
    width: 9.923em;
    height: 2.0769em;
    line-height: 2.0769em;
    cursor: pointer;
    text-align: center;
    color: white;
`;

const PostContentWrapper = styled.div`
    margin-bottom: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostContent = styled.div`
    margin: 3em 0 1.5em 0;
    padding: 4em 3em;
    border: 1px solid #A2A3B2;
    border-radius: 10px;
    width: 69em;
    min-height: 20em;
    line-height: 1.7em;
    color: #A2A3B2;
`;

const ExtraPostsWrapper = styled.div`
    width: 75em;
    display: flex;
    justify-content: space-between;
`;

const StyledHr = styled.hr`
    margin: 2em 0 2em 0;
    border: none;
    width: 75em;
    height: 1.5px;
    background-color: rgba(162, 163, 178, 0.4);
`;
