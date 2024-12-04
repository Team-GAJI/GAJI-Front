import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReportCheck from '../../assets/icons/studyDetail/reportCheck.svg?react';
import PostWriterInfo from './ui/PostWriterInfo';
import BackgroundImage from '../../assets/images/community/communityBackground.png';
import UserProfileImg from '../../assets/images/community/userProfile.png';
import BookMarkIcon from '../../assets/icons/communityPost/postBookMark.svg?react';
import LikeIcon from '../../assets/icons/communityPost/postLike.svg?react';
import ReportIcon from '../../assets/icons/communityPost/postReport.svg?react';
import DownArrowIcon from '../../assets/icons/communityPost/whiteDownArrow.svg?react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ReportModal from '../study-detail/ui/ReportModal';
import { ContentWrapper } from '../../components/common/MediaWrapper';
import StudyCommentContainer from '../study-detail/ui/StudyCommentContainer';
import {
    CommunityAddLike,
    CommunityRemoveLike,
    CommunityAddBookmark,
    CommunityRemoveBookmark,
} from './api/communityInteractionAPI';
import { communityPostAPI } from './api/communityPostAPI';

// 세자리마다 콤마 기능
// const formatNumberWithCommas = (number) => {
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

const CommunityDetailPage = () => {
    // 게시글 작성에서 정보 가져오기
    const location = useLocation();

    //const postId = location.state?.postId || {}; // `postId`가 존재하지 않으면 빈 객체로 초기화
    const { postDetail } = location.state || {};
    const { postId } = location.state;

    // state 관리
    const [bookMarkState, setBookMarkState] = useState(postDetail.bookmarkStatus);
    const [likeState, setLikeState] = useState(postDetail.likeStatus);
    const [bookMarkCount, setBookMarkCount] = useState(postDetail.bookmarkCnt);
    const [likeCount, setLikeCount] = useState(postDetail.likeCnt);
    const [isWriterInfoVisible, setIsWriterInfoVisible] = useState(false);
    const [isOptionVisible, setIsOptionVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(postDetail.status);
    const [isReportModalVisible, setIsReportModalVisible] = useState(false);
    const [isReportNoticeVisible, setIsReportNoticeVisible] = useState(false);

    // 댓글 개수
    const [commentCount, setCommentCount] = useState(0);

    // 새로고침 시 게시물 정보 다시 가져오기
    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
                const postDetail = await communityPostAPI(postId);

                setLikeState(postDetail.likeStatus); // 서버로부터 좋아요 상태를 가져와 설정
                setLikeCount(postDetail.likeCnt); // 좋아요 개수 설정
                setLikeState(postDetail.bookmarkStatus); // 서버로부터 북마크 상태를 가져와 설정
                setLikeCount(postDetail.bookmarkCnt); // 북마크 개수 설정
            } catch (error) {
                console.error('게시물 정보를 불러오는 중 오류 발생:', error);
            }
        };

        // fetchPostDetail을 호출하여 데이터를 가져옵니다.
        fetchPostDetail();
    }, [postId]);

    // 북마크, 좋아요 기능
    const handleBookMark = async () => {
        console.log(postId);
        try {
            if (bookMarkState) {
                await CommunityRemoveBookmark(postId); // 좋아요 취소 api
                setBookMarkState(false);
                setBookMarkCount((prevCount) => prevCount - 1);
            } else {
                await CommunityAddBookmark(postId); // 좋아요 api
                setBookMarkState(true);
                setBookMarkCount((prevCount) => prevCount + 1);
            }
        } catch (error) {
            console.error('게시글 북마크 기능 중 오류 발생:', error.response ? error.response.data : error.message);
            // 오류가 발생 시 원상태로 복구
            setBookMarkState((prev) => !prev);
            setBookMarkCount((prevCount) => (bookMarkState ? prevCount + 1 : prevCount - 1));
        }
    };
    // const handleBookMark = () => {
    //     if (bookMarkState) {
    //         setBookMarkState(false);
    //         setBookMarkCount((prevCount) => prevCount - 1);
    //     } else {
    //         setBookMarkState(true);
    //         setBookMarkCount((prevCount) => prevCount + 1);
    //     }
    // };

    const handleLike = async () => {
        console.log(postId);
        console.log('초기 좋아요 상태: ', postDetail.likeStatus);
        console.log('초기 좋아요 개수: ', postDetail.likeCnt);
        try {
            if (likeState) {
                await CommunityRemoveLike(postId); // 좋아요 취소 api
                setLikeState(false);
                setLikeCount((prevCount) => prevCount - 1);
                console.log('좋아요 취소 후 상태: ', postDetail.likeStatus);
                console.log('좋아요 취소 후 개수: ', postDetail.likeCnt);
            } else {
                await CommunityAddLike(postId); // 좋아요 api
                setLikeState(true);
                setLikeCount((prevCount) => prevCount + 1);
                console.log('좋아요 후 상태: ', postDetail.likeStatus);
                console.log('좋아요 후 개수: ', postDetail.likeCnt);
            }
        } catch (error) {
            console.error('게시글 좋아요 기능 중 오류 발생:', error.response ? error.response.data : error.message);
            // 오류가 발생 시 원상태로 복구
            setLikeState((prev) => !prev);
            setLikeCount((prevCount) => (likeState ? prevCount + 1 : prevCount - 1));
        }
    };

    // const handleLike = () => {
    //     if (likeState) {
    //         setLikeState(false);
    //         setLikeCount((prevCount) => prevCount - 1);
    //     } else {
    //         setLikeState(true);
    //         setLikeCount((prevCount) => prevCount + 1);
    //     }
    // };

    // 게시글 상태 버튼 텍스트
    const toggleOptionVisibility = () => {
        setIsOptionVisible(!isOptionVisible);
    };

    // 게시글 상태 옵션 선택
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOptionVisible(false);
    };

    // 작성자 정보 모달 기능
    const showWriterInfo = () => setIsWriterInfoVisible(true);
    const hideWriterInfo = () => setIsWriterInfoVisible(false);

    // 신고 모달 기능
    const showReportModal = () => setIsReportModalVisible(true);
    const hideReportModal = () => setIsReportModalVisible(false);

    // 신고 확인 메시지
    const showReportNotice = () => {
        setIsReportNoticeVisible(true);
        setTimeout(() => {
            setIsReportNoticeVisible(false);
        }, 2000);
    };

    return (
        <>
            {postDetail && (
                <>
                    {/* 헤더 */}
                    <HeaderWrapper>
                        {/* 신고 알림 */}
                        <ReportNoticeWrapper isVisible={isReportNoticeVisible}>
                            <ReportNotice>
                                <StyledReportCheck />
                                신고가 완료되었습니다
                            </ReportNotice>
                        </ReportNoticeWrapper>

                        {/* 제목 div */}
                        <TitleWrapper>
                            {/* 게시글 상세정보 */}
                            <TitleDetail>
                                <StyledUserProfileImg
                                    onMouseEnter={showWriterInfo}
                                    onMouseLeave={hideWriterInfo}
                                    src={UserProfileImg}
                                    alt="user profile"
                                />
                                <Writer onMouseEnter={showWriterInfo} onMouseLeave={hideWriterInfo}>
                                    {postDetail.userNickname}
                                </Writer>
                                <StyledBar>|</StyledBar>
                                {postDetail.type} &gt; {postDetail.category}
                                <StyledBar>|</StyledBar>
                                {postDetail.createdAt}
                                <StyledBar>|</StyledBar>
                                조회 {postDetail.hit}
                                <StyledBar>|</StyledBar>
                                댓글 {commentCount}
                            </TitleDetail>

                            {/* 작성자 정보 모달창 */}
                            <PostWriterInfoWrapper
                                isVisible={isWriterInfoVisible}
                                onMouseEnter={showWriterInfo}
                                onMouseLeave={hideWriterInfo}
                            >
                                <PostWriterInfo nickName={postDetail.userNickname} />
                            </PostWriterInfoWrapper>

                            {/* 게시글 제목 */}
                            <Title>{postDetail.title}</Title>

                            {/* 게시글 해시태그 */}
                            {postDetail.hashtagList && postDetail.hashtagList.length > 0 && (
                                <>
                                    <HashtagWrapper>
                                        {postDetail.hashtagList.map((hashtag, index) => (
                                            <Hashtag key={index}>#{hashtag.hashtagName}</Hashtag>
                                        ))}
                                    </HashtagWrapper>
                                </>
                            )}

                            {/* 게시글 상호작용 */}
                            <InteractionWrapper>
                                <BookMarkWrapper>
                                    <StyledBookMarkIcon onClick={handleBookMark} bookMarkState={bookMarkState} />
                                    <InteractionText>{bookMarkCount}</InteractionText>
                                </BookMarkWrapper>
                                <BookMarkWrapper>
                                    <StyledLikeIcon onClick={handleLike} likeState={likeState} />
                                    <InteractionText>{likeCount}</InteractionText>
                                </BookMarkWrapper>
                                <BookMarkWrapper>
                                    <StyledReportIcon onClick={showReportModal} />
                                    <InteractionText>신고</InteractionText>
                                </BookMarkWrapper>

                                {/* 신고 모달창 */}
                                <ReportModal
                                    isVisible={isReportModalVisible}
                                    onClose={hideReportModal}
                                    onReport={showReportNotice}
                                    title={postDetail.title}
                                />
                            </InteractionWrapper>
                        </TitleWrapper>

                        {/* 게시글 상태 div */}
                        <PostStateWrapper>
                            {/* 작성자일 경우 상태버튼 */}
                            {postDetail.writer ? (
                                <>
                                    <PostStateButton onClick={toggleOptionVisibility} writerTrue={postDetail.writer}>
                                        {selectedOption}
                                        <StyledDownArrowIcon isVisible={isOptionVisible} />
                                    </PostStateButton>
                                    {/* 상태 옵션 */}
                                    <PostStateOptionWrapper isVisible={isOptionVisible}>
                                        <PostStateOption
                                            onClick={() => handleOptionSelect('모집 중')}
                                            isSelected={selectedOption === '모집 중'}
                                        >
                                            모집 중
                                        </PostStateOption>
                                        <PostStateOption
                                            onClick={() => handleOptionSelect('모집 완료')}
                                            isSelected={selectedOption === '모집 완료'}
                                        >
                                            모집 완료
                                        </PostStateOption>
                                        <PostStateOption
                                            onClick={() => handleOptionSelect('미완료 질문')}
                                            isSelected={selectedOption === '미완료 질문'}
                                        >
                                            미완료 질문
                                        </PostStateOption>
                                        <PostStateOption
                                            onClick={() => handleOptionSelect('완료 질문')}
                                            isSelected={selectedOption === '완료 질문'}
                                        >
                                            완료 질문
                                        </PostStateOption>
                                    </PostStateOptionWrapper>
                                </>
                            ) : (
                                // 작성자 아닐 경우 상태버튼
                                <PostStateButton writerTrue={postDetail.writer}>{selectedOption}</PostStateButton>
                            )}
                        </PostStateWrapper>
                    </HeaderWrapper>

                    <ContentWrapper>
                        {/* 게시글 내용 */}
                        <PostContentWrapper>
                            {/* 게시글 본문 */}
                            <PostContent>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{postDetail.body}</ReactMarkdown>
                            </PostContent>

                            {/* 다음 게시물 div */}
                            {/* <ExtraPostsWrapper>
          <ExtraPostPreview />
          <ExtraPostPreview />
        </ExtraPostsWrapper> */}

                            <StyledHr />
                            {/* 댓글 영역 */}
                            {/* <CommentContainer /> */}
                            <StudyCommentContainer postId={postId} type="community" setCommentCount={setCommentCount} />
                        </PostContentWrapper>
                    </ContentWrapper>
                </>
            )}
        </>
    );
};

export default CommunityDetailPage;

/* CSS */
const HeaderWrapper = styled.div`
    padding-left: 10%;
    padding-right: 10%;
    height: 16.1875em;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8125em;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
        flex-direction: column;
        gap: 1em;
        align-items: flex-start;
    }
`;

const ReportNoticeWrapper = styled.div`
    width: 86.17em;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -10%);

    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: all 0.3s ease;
`;

const ReportNotice = styled.div`
    border-radius: 10px;
    width: 14em;
    height: 2.3077em;
    background-color: white;
    color: #8e59ff;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.25em 1.25em rgba(22, 26, 63, 0.2);
`;

const StyledReportCheck = styled(ReportCheck)`
    margin-right: 0.5em;
    width: 1em;
    height: 1em;
`;

const TitleWrapper = styled.div`
    width: 80%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const TitleDetail = styled.div`
    display: flex;
    color: #d0d1d9;
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
    color: #8e59ff;
    cursor: pointer;
`;

const StyledBar = styled.div`
    margin: 0 0.7em 0 0.7em;
`;

const PostWriterInfoWrapper = styled.div`
    width: 41em;
    height: 11em;
    position: absolute;
    z-index: 2;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: all 0.3s ease;
`;

const Title = styled.div`
    margin: 0.8em 0 0.5em 0;
    width: 100%;
    color: #8e59ff;
    font-size: 2em;
    font-weight: 800;
    word-wrap: break-word;
`;

const HashtagWrapper = styled.div`
    display: flex;
`;

const Hashtag = styled.div`
    margin-right: 0.7em;
    padding: 0 1.2em;
    border-radius: 15px;
    height: 1.8182em;
    line-height: 1.8182em;
    background-color: #8e59ff;
    color: white;
    font-size: 0.6875em;
    font-weight: bold;
    text-align: center;
`;

const InteractionWrapper = styled.div`
    display: flex;
    text-align: center;
`;

const BookMarkWrapper = styled.div`
    margin: 1em 1em 0 0;
    width: 2.2em;
    font-size: 1.2em;
`;

const StyledBookMarkIcon = styled(BookMarkIcon)`
    margin-bottom: 0.1em;
    width: 1em;
    height: 1.3125em;
    cursor: pointer;
    fill: ${(props) => (props.bookMarkState ? '#8E59FF' : 'none')};
`;
const StyledLikeIcon = styled(LikeIcon)`
    margin-bottom: 0.1em;
    width: 1.375em;
    height: 1.25em;
    cursor: pointer;
    fill: ${(props) => (props.likeState ? '#8E59FF' : 'none')};
`;
const StyledReportIcon = styled(ReportIcon)`
    margin-bottom: 0.1em;
    width: 1.5em;
    height: 1.25em;
    cursor: pointer;
`;

const InteractionText = styled.div`
    color: #d0d1d9;
    font-size: 0.6875em;
`;

const PostStateWrapper = styled.div`
    color: white;
    width: 100%;
    font-size: 0.8125em;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: end;
    @media (max-width: 768px) {
        align-items: start;
    }
`;

const PostStateButton = styled.div`
    border-radius: 8px;
    width: 10em;
    height: 2.4em;
    background-color: #8e59ff;
    font-weight: 800;
    line-height: 2.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${(props) => (props.writerTrue ? 'pointer' : 'default')};
`;

const StyledDownArrowIcon = styled(DownArrowIcon)`
    margin-left: 0.8em;
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
    color: ${(props) => (props.isSelected ? 'white' : '#D0D1D9')};
    font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
    &:hover {
        color: white;
        font-weight: bold;
    }
`;

const PostContentWrapper = styled.div`
    width: 100%;
    margin-bottom: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostContent = styled.div`
    margin: 1.5em 0;
    width: 100%;
    padding: 1em;
    min-height: 22em;
    color: #161a3f;
    @media (max-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

// const ExtraPostsWrapper = styled.div`
//   width: 75em;
//   display: flex;
//   justify-content: space-between;
// `;

const StyledHr = styled.hr`
    margin: 2em 0;
    border: none;
    width: 100%;
    height: 1.5px;
    font-size: 0.85em;
    background-color: rgba(162, 163, 178, 0.4);
`;
