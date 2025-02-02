import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReportCheck from '../../assets/icons/studyDetail/reportCheck.svg?react';
import BackgroundImage from '../../assets/images/community/communityBackground.png';
import UserProfileImg from '../../assets/images/community/userProfile.png';
import ReportIcon from '../../assets/icons/troubleShooting/postReport.svg?react';
import BookMarkIcon from '../../assets/icons/troubleShooting/postBookMark.svg?react';
import LikeIcon from '../../assets/icons/troubleShooting/postLike.svg?react';
import PageHeader from '../../components/common/PageHeader';

import CommentContainer from '../study-trouble/ui/CommentContainer';
import ReportModal from '../study-detail/ui/ReportModal';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import StudyPostWriterInfo from '../study-detail/ui/StudyPostWriterInfo';

import {
    addBookmark,
    removeBookmark,
    addLike,
    removeLike,
    fetchTroubleShootingPost,
    delTroubleShootingPost,
} from '../study-trouble/api/troubleShootingInfoAPI';

// 세 자리마다 콤마 추가 함수
const formatNumberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const StudyTroubleDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const roomId = location.state?.roomId || {};
    const postId = location.state?.postId || {};
    console.log(roomId, postId);

    const [postDetails, setPostDetails] = useState({
        title: '',
        content: '',
        bookMarkState: false,
        likeState: false,
        bookMarkCount: 0,
        likeCount: 0,
        authorName: '',
        createdAt: '',
        viewCount: 0,
        commentCount: 0,
    });

    const [isWriterInfoVisible, setIsWriterInfoVisible] = useState(false);
    const [isReportModalVisible, setIsReportModalVisible] = useState(false);
    const [isReportNoticeVisible, setIsReportNoticeVisible] = useState(false);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const { result } = await fetchTroubleShootingPost(postId);
                setPostDetails({
                    title: result.title,
                    content: result.body,
                    bookMarkState: result.bookmarked || false,
                    likeState: result.liked || false,
                    bookMarkCount: result.bookmarkCount || 0,
                    likeCount: result.likeCount || 0,
                    authorName: result.authorName,
                    createdAt: result.createdAt,
                    viewCount: result.viewCount || 0,
                    commentCount: result.commentCount,
                });
            } catch (error) {
                console.error('Failed to fetch post details:', error);
            }
        };
        fetchPostDetails();
    }, [postId]);

    //게시글 삭제 API 삭제를 했는데도 postId가 남아있어 삭제가 안됨
    const handledelPost = async () => {
        try {
            // 게시물 삭제 API 호출
            const delpost = await delTroubleShootingPost(postId);
            console.log('삭제된 게시물:', delpost);

            // 상태에서 해당 게시물 제거
            // setPostId(null); // 삭제 후 postId를 null로 설정
            setPostDetails({
                title: '',
                content: '',
                bookMarkState: false,
                likeState: false,
                bookMarkCount: 0,
                likeCount: 0,
                authorName: '',
                createdAt: '',
                viewCount: 0,
                commentCount: 0,
            }); // 게시물 내용 초기화

            // localStorage에서 해당 게시물 제거 -> 이거 확인해보기 및 기존에 잘못...삭제된 거....어떻게 지우지?
            const savedItems = JSON.parse(localStorage.getItem('items')) || [];
            const updatedItems = savedItems.filter((item) => item.id !== postId); // 삭제할 item 필터링
            localStorage.setItem('items', JSON.stringify(updatedItems));
            navigate('/study/trouble');
        } catch (error) {
            console.error('게시물 삭제 실패:', error.message);
        }
    };

    const handleInteraction = async (interactionType) => {
        try {
            const { bookMarkState, likeState } = postDetails;
            if (!roomId || !postId) {
                throw new Error('Invalid roomId or postId');
            }

            if (interactionType === 'bookmark') {
                if (bookMarkState) {
                    await removeBookmark(roomId, postId);
                    setPostDetails((prevState) => ({
                        ...prevState,
                        bookMarkState: false,
                        bookMarkCount: Math.max(prevState.bookMarkCount - 1, 0),
                    }));
                    console.log(bookMarkState);
                } else {
                    await addBookmark(roomId, postId);
                    setPostDetails((prevState) => ({
                        ...prevState,
                        bookMarkState: true,
                        bookMarkCount: prevState.bookMarkCount + 1,
                    }));
                    console.log(bookMarkState);
                }
            } else if (interactionType === 'like') {
                if (likeState) {
                    await removeLike(roomId, postId);
                    setPostDetails((prevState) => ({
                        ...prevState,
                        likeState: false,
                        likeCount: Math.max(prevState.likeCount - 1, 0),
                    }));
                } else {
                    await addLike(roomId, postId);
                    setPostDetails((prevState) => ({
                        ...prevState,
                        likeState: true,
                        likeCount: prevState.likeCount + 1,
                    }));
                }
            }
        } catch (error) {
            console.error(`Error handling ${interactionType}:`, error);
        }
    };
    console.log(postId); // 이 값을 StudyTroublePage에 넘김
    // console.log(postDetails.postId);

    // 임시 헤더입니다.
    const headerTitles = ['스터디 홈', '트러블 슈팅 게시판', '정보나눔 게시판', '채팅방'];
    const [activeButtonIndex, setActiveButtonIndex] = useState(1);
    const handleNavigate = (index) => {
        if (index === 0) {
            navigate('/study/room');
        }
        if (index === 1) {
            navigate('/study/trouble', { state: { roomId: roomId, postId: postId } });
        } else {
            setActiveButtonIndex(index);
        }
    };
    return (
        <>
            {/* 임시 헤더입니다. */}
            <PageHeader
                large="true" // large prop을 문자열로 변환하여 전달
                pageTitle="트러블슈팅 게시판 글쓰기"
                headerTitles={headerTitles}
                activeButtonIndex={activeButtonIndex}
                onButtonClick={handleNavigate}
                changeColorOnClick={false}
                changeColorOnHover={true}
            />
            <HeaderWrapper>
                <ReportNoticeWrapper isVisible={isReportNoticeVisible ? 1 : 0}>
                    <ReportNotice>
                        <StyledReportCheck />
                        신고가 완료되었습니다
                    </ReportNotice>
                </ReportNoticeWrapper>
                <TitleWrapper>
                    <TitleDetail
                        authorName={postDetails.authorName}
                        createdAt={postDetails.createdAt}
                        viewCount={postDetails.viewCount}
                        commentCount={postDetails.commentCount}
                        setIsWriterInfoVisible={setIsWriterInfoVisible}
                    />
                    <PostWriterInfoWrapper
                        isVisible={isWriterInfoVisible ? 1 : 0}
                        setIsWriterInfoVisible={setIsWriterInfoVisible}
                    >
                        <StudyPostWriterInfo nickName={postDetails.authorName} />
                    </PostWriterInfoWrapper>

                    <Title>{postDetails.title}</Title>
                    <InteractionWrapper>
                        <InteractionItem
                            Icon={StyledBookMarkIcon}
                            count={postDetails.bookMarkCount}
                            active={postDetails.bookMarkState}
                            onClick={() => handleInteraction('bookmark')}
                        />
                        <InteractionItem
                            Icon={StyledLikeIcon}
                            count={postDetails.likeCount}
                            active={postDetails.likeState}
                            onClick={() => handleInteraction('like')}
                        />
                        <InteractionItem
                            Icon={StyledReportIcon}
                            count="신고"
                            onClick={() => setIsReportModalVisible(true)}
                        />
                        <ReportModal
                            isVisible={isReportModalVisible ? 1 : 0}
                            onClose={() => setIsReportModalVisible(false)}
                            onReport={() => setIsReportNoticeVisible(true)}
                            title={postDetails.title}
                        />
                        <DelButton onClick={() => handledelPost(postDetails.postId)}>삭제하기</DelButton>
                    </InteractionWrapper>
                </TitleWrapper>
            </HeaderWrapper>
            <PostContentWrapper>
                <PostContent>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{postDetails.content}</ReactMarkdown>
                </PostContent>
                <StyledHr />
                <CommentContainer troublePostId={postId} />
                {/* <CommentContainer troublePostId={postDetails.postId} /> */}
            </PostContentWrapper>
        </>
    );
};

export default StudyTroubleDetailPage;

// InteractionItem 컴포넌트 분리
const InteractionItem = ({ Icon, count, active, onClick }) => (
    <BookMarkWrapper onClick={onClick}>
        <Icon active={active} />
        <InteractionText>{count}</InteractionText>
    </BookMarkWrapper>
);

// TitleDetail 컴포넌트 분리
const TitleDetail = ({ authorName, createdAt, viewCount, commentCount, setIsWriterInfoVisible }) => (
    <>
        <TitleDetailWrapper>
            <StyledUserProfileImg
                onMouseEnter={() => setIsWriterInfoVisible(true)}
                onMouseLeave={() => setIsWriterInfoVisible(false)}
                src={UserProfileImg}
                alt="user profile"
            />
            <Writer
                onMouseEnter={() => setIsWriterInfoVisible(true)}
                onMouseLeave={() => setIsWriterInfoVisible(false)}
            >
                {authorName}
            </Writer>
            <StyledBar>|</StyledBar>
            {createdAt ? new Date(createdAt).toLocaleDateString() : '현재날짜'}
            <StyledBar>|</StyledBar>
            조회 {formatNumberWithCommas(viewCount)}
            <StyledBar>|</StyledBar>
            댓글 {commentCount}
        </TitleDetailWrapper>
    </>
);

const DelButton = styled.button`
    border: none;
    border-radius: 10px;
    width: 7em;
    height: 2.0769em;
    // line-height: 2.0769em;
    background-color: #8e59ff;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

const HeaderWrapper = styled.div`
    padding: 0 13em;
    height: 16.1875em;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8125em;
    position: relative;

    @media (max-width: 768px) {
        padding: 0 2em;
        height: 10em;
        font-size: 0.7em;
        background-position: center;
    }

    @media (max-width: 480px) {
        padding: 0 1em;
        height: 8em;
        font-size: 0.6em;
    }
`;

const ReportNoticeWrapper = styled.div`
    width: 86.17em;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 1em;
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
    position: relative;
`;

const TitleDetailWrapper = styled.div`
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
    width: 25em;
    color: #8e59ff;
    font-size: 2em;
    font-weight: 800;
    word-wrap: break-word;
`;

const StyledBookMarkIcon = styled(BookMarkIcon)`
    margin-bottom: 0.1em;
    width: 1em;
    height: 1.3125em;
    cursor: pointer;
    fill: ${(props) => (props.active ? '#8E59FF' : 'none')};
`;

const StyledLikeIcon = styled(LikeIcon)`
    margin-bottom: 0.1em;
    width: 1.375em;
    height: 1.25em;
    cursor: pointer;
    fill: ${(props) => (props.active ? '#8E59FF' : 'none')};
`;

const StyledReportIcon = styled(ReportIcon)`
    margin-bottom: 0.1em;
    width: 1.5em;
    height: 1.25em;
    cursor: pointer;
`;

const InteractionText = styled.div`
    color: #ddd1d9;
    font-size: 0.6875em;
    text-align: center;
    white-space: nowrap;
`;

const InteractionWrapper = styled.div`
    display: flex;
    text-align: center;
    gap: 2em;
    text-align: center;
`;

const BookMarkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    font-size: 1.2em;
`;

const PostContentWrapper = styled.div`
    margin-bottom: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostContent = styled.div`
    margin: 1.5em 0;
    width: 68em;
    min-height: 22em;
    color: #161a3f;
    font-size: 1em;

    @media (max-width: 768px) {
        width: 95%;
        font-size: 0.9em;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 1em 0;
        font-size: 0.8em;
    }
`;

const StyledHr = styled.hr`
    margin: 2em 0;
    border: none;
    width: 84.5588em;
    height: 1.5px;
    font-size: 0.85em;
    background-color: rgba(162, 163, 178, 0.4);

    @media (max-width: 768px) {
        width: 95%;
        font-size: 0.75em;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin: 1em 0;
        font-size: 0.7em;
    }
`;
