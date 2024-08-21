import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReportCheck from "../assets/icons/studyDetail/reportCheck.svg?react";
import BackgroundImage from "../assets/images/community/communityBackground.png";
import UserProfileImg from "../assets/images/community/userProfile.png";
import ReportIcon from "../assets/icons/troubleShooting/postReport.svg?react";
import BookMarkIcon from "../assets/icons/troubleShooting/postBookMark.svg?react";
import LikeIcon from "../assets/icons/troubleShooting/postLike.svg?react";

import PostWriterInfo from "../components/troubleshooting/PostWriterInfo";
import CommentContainer from "../components/troubleshooting/CommentContainer";
import ReportModal from "../components/studyDetail/ReportModal";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import StudyPostWriterInfo from "../components/studyDetail/StudyPostWriterInfo";

import {
  addBookmark,
  removeBookmark,
  addLike,
  removeLike,
  fetchTroubleShootingPost,
} from "../utils/troubleShooting/troubleShootingInfoAPI";

// 세 자리마다 콤마 추가 함수
const formatNumberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const TroubleshootingDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const roomId = location.state?.roomId || {};
  const postId = location.state?.postId || {};

  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    bookMarkState: false,
    likeState: false,
    bookMarkCount: 0,
    likeCount: 0,
    authorName: "",
    createdAt: "",
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
        console.error("Failed to fetch post details:", error);
      }
    };
    fetchPostDetails();
  }, [postId]);

  const handleInteraction = async (interactionType) => {
    try {
      const { bookMarkState, likeState } = postDetails;
      if (!roomId || !postId) {
        throw new Error("Invalid roomId or postId");
      }

      if (interactionType === "bookmark") {
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
      } else if (interactionType === "like") {
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

  return (
    <>
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
              onClick={() => handleInteraction("bookmark")}
            />
            <InteractionItem
              Icon={StyledLikeIcon}
              count={postDetails.likeCount}
              active={postDetails.likeState}
              onClick={() => handleInteraction("like")}
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
          </InteractionWrapper>
        </TitleWrapper>
      </HeaderWrapper>
      <PostContentWrapper>
        <PostContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {postDetails.content}
          </ReactMarkdown>
        </PostContent>
        <StyledHr />
        <CommentContainer troublePostId={postDetails.postId} />
      </PostContentWrapper>
    </>
  );
};

export default TroubleshootingDetailPage;

// InteractionItem 컴포넌트 분리
const InteractionItem = ({ Icon, count, active, onClick }) => (
  <BookMarkWrapper onClick={onClick}>
    <Icon active={active} />
    <InteractionText>{formatNumberWithCommas(count)}</InteractionText>
  </BookMarkWrapper>
);

// TitleDetail 컴포넌트 분리
const TitleDetail = ({
  authorName,
  createdAt,
  viewCount,
  commentCount,
  setIsWriterInfoVisible,
}) => (
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
      {createdAt ? new Date(createdAt).toLocaleDateString() : "현재날짜"}
      <StyledBar>|</StyledBar>
      조회 {formatNumberWithCommas(viewCount)}
      <StyledBar>|</StyledBar>
      댓글 {commentCount}
    </TitleDetailWrapper>
  </>
);

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
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
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
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
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
  fill: ${(props) => (props.active ? "#8E59FF" : "none")};
`;

const StyledLikeIcon = styled(LikeIcon)`
  margin-bottom: 0.1em;
  width: 1.375em;
  height: 1.25em;
  cursor: pointer;
  fill: ${(props) => (props.active ? "#8E59FF" : "none")};
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
