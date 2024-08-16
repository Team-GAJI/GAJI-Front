import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ReportCheck from "../assets/icons/studyDetail/reportCheck.svg?react";
import BackgroundImage from "../assets/images/community/communityBackground.png";
import UserProfileImg from "../assets/images/community/userProfile.png";
import ReportIcon from "../assets/icons/communityPost/postReport.svg?react";
import CommentIconSrc from "../assets/images/troubleshooting/troubleComment.png";

import PostWriterInfo from "../components/troubleshooting/PostWriterInfo";
import CommentContainer from "../components/troubleshooting/CommentContainer";
import ReportModal from "../components/studyDetail/ReportModal";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// 세자리마다 콤마 기능
const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const TroubleshootingDetailPage = () => {
  // state 관리
  const [isWriterInfoVisible, setIsWriterInfoVisible] = useState(false);
  const [isReportModalVisible, setIsReportModalVisible] = useState(false);
  const [isReportNoticeVisible, setIsReportNoticeVisible] = useState(false);

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

  // 게시글 작성에서 정보 가져오기
  const location = useLocation();
  const title = location.state?.title || "게시글 제목입니다";
  const content = location.state?.content || "게시글 내용입니다. 어쩌구 저쩌구";
  const commentCount = location.state?.commentCount || 0; // 댓글수

  return (
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
              user1023
            </Writer>
            <StyledBar>|</StyledBar>
            프로젝트 &gt; 보안
            <StyledBar>|</StyledBar>
            2024.03.01
            <StyledBar>|</StyledBar>
            조회 300
            <StyledBar>|</StyledBar>
            댓글 {commentCount}
          </TitleDetail>

          {/* 작성자 정보 모달창 */}
          <PostWriterInfoWrapper
            isVisible={isWriterInfoVisible}
            onMouseEnter={showWriterInfo}
            onMouseLeave={hideWriterInfo}
          >
            <PostWriterInfo />
          </PostWriterInfoWrapper>

          {/* 게시글 제목 */}
          <Title>{title}</Title>

          {/* 게시글 상호작용 */}
          <InteractionWrapper>
            <CommentWrapper>
              <StyledCommentIcon src={CommentIconSrc} alt="댓글 아이콘" />
              <InteractionText>
                {formatNumberWithCommas(commentCount)}
              </InteractionText>
            </CommentWrapper>
            <ReportWrapper>
              <StyledReportIcon onClick={showReportModal} />
              <InteractionText>신고</InteractionText>
            </ReportWrapper>

            {/* 신고 모달창 */}
            <ReportModal
              isVisible={isReportModalVisible}
              onClose={hideReportModal}
              onReport={showReportNotice}
              title={title}
            />
          </InteractionWrapper>
        </TitleWrapper>
      </HeaderWrapper>

      {/* 게시글 내용 */}
      <PostContentWrapper>
        {/* 게시글 본문 */}
        <PostContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </PostContent>
        <StyledHr />
        {/* 댓글 영역 */}
        <CommentContainer />
      </PostContentWrapper>
    </>
  );
};

export default TroubleshootingDetailPage;

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
    padding: 0 2em; /* 좌우 패딩을 줄여서 모바일 화면에 맞춤 */
    height: 10em; /* 높이를 줄여서 모바일 화면에 맞춤 */
    font-size: 0.7em; /* 폰트 크기를 줄여서 모바일 화면에 맞춤 */
    background-position: center; /* 배경 이미지의 중심을 맞춤 */
  }

  @media (max-width: 480px) {
    padding: 0 1em; /* 더 작은 모바일 화면에 맞게 패딩 추가 조정 */
    height: 8em; /* 더 작은 모바일 화면에 맞게 높이 조정 */
    font-size: 0.6em; /* 더 작은 폰트 크기 조정 */
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

const InteractionWrapper = styled.div`
  display: flex;
  text-align: center;
`;

const CommentWrapper = styled.div`
  margin: 1em 1em 0 0;
  width: 2.2em;
  font-size: 1.2em;
  display: flex;
  align-items: center;
`;

const StyledCommentIcon = styled.img`
  margin-right: 0.3em;
  width: 1.2em;
  height: 1.2em;
  cursor: pointer;
`;

const ReportWrapper = styled.div`
  margin: 1em 1em 0 0;
  width: 2.2em;
  font-size: 1.2em;
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
`;

const StyledHr = styled.hr`
  margin: 2em 0;
  border: none;
  width: 84.5588em;
  height: 1.5px;
  font-size: 0.85em;
  background-color: rgba(162, 163, 178, 0.4);
`;
