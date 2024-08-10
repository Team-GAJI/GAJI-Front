import React, { useState } from "react";
import styled from "styled-components";
import StudyPostWriterInfo from "./StudyPostWriterInfo";
import BackgroundImage from "../../assets/images/community/communityBackground.png";
import UserProfileImg from "../../assets/images/community/userProfile.png";
import BookMarkIcon from "../../assets/icons/communityPost/postBookMark.svg?react";
import LikeIcon from "../../assets/icons/communityPost/postLike.svg?react";
import ReportIcon from "../../assets/icons/communityPost/postReport.svg?react";
import ThumbNailImg from "../../assets/images/studyDetail/thumbNailImg.png";

// 세자리마다 콤마 기능
const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

    const StudyDetailHeader = () => {
    // state 관리
    const [bookMarkState, setBookMarkState] = useState(false);
    const [likeState, setLikeState] = useState(false);
    const [bookMarkCount, setBookMarkCount] = useState(300);
    const [likeCount, setLikeCount] = useState(6000);
    const [isWriterInfoVisible, setIsWriterInfoVisible] = useState(false);

    // 북마크, 좋아요 기능
    const handleBookMark = () => {
        if (bookMarkState) {
            setBookMarkState(false);
            setBookMarkCount(prevCount => prevCount - 1);
        } else {
            setBookMarkState(true);
            setBookMarkCount(prevCount => prevCount + 1);
        }
    };
    const handleLike = () => {
        if (likeState) {
            setLikeState(false);
            setLikeCount(prevCount => prevCount - 1);
        } else {
            setLikeState(true);
            setLikeCount(prevCount => prevCount + 1);
        }
    };

    // 작성자 정보 모달 기능
    const showWriterInfo = () => {
        setIsWriterInfoVisible(true);
    };
    const hideWriterInfo = () => {
        setIsWriterInfoVisible(false);
    };

    // 게시글 제목
    const title = "스터디 이름";

    return (
        <HeaderWrapper>
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
                    2024.03.01
                    <StyledBar>|</StyledBar>
                    조회 300
                    <StyledBar>|</StyledBar>
                    댓글 3
                </TitleDetail>

                {/* 작성자 정보 모달창 */}
                <PostWriterInfoWrapper
                    isVisible={isWriterInfoVisible}
                    onMouseEnter={showWriterInfo}
                    onMouseLeave={hideWriterInfo}
                >
                    <StudyPostWriterInfo />
                </PostWriterInfoWrapper>

                {/* 게시글 제목 */}
                <Title>{title}</Title>
                {/* 게시글 해시태그 */}
                <Category>스터디 카테고리</Category>
                {/* 게시글 상호작용 */}
                <InteractionWrapper>
                    <JoinButton>
                        스터디 가지기
                    </JoinButton>
                    <BookMarkWrapper>
                        <StyledBookMarkIcon onClick={handleBookMark} bookMarkState={bookMarkState}/>
                        <InteractionText>
                            {formatNumberWithCommas(bookMarkCount)}
                        </InteractionText>
                    </BookMarkWrapper>
                    <BookMarkWrapper>
                        <StyledLikeIcon onClick={handleLike} likeState={likeState}/>
                        <InteractionText>
                            {formatNumberWithCommas(likeCount)}
                        </InteractionText>
                    </BookMarkWrapper>
                    <BookMarkWrapper>
                        <StyledReportIcon />
                        <InteractionText>신고</InteractionText>
                    </BookMarkWrapper>
                </InteractionWrapper>
            </TitleWrapper>

            {/* 게시글 상태 div */}
            <HeaderRightWrapper>
                {/* 상태 버튼 */}
                <PostStateButton>
                    모집 중
                </PostStateButton>
                {/* 썸네일 사진 */}
                <ThumbNailImgWrapper>
                </ThumbNailImgWrapper>
            </HeaderRightWrapper>
        </HeaderWrapper>
    );
};

export default StudyDetailHeader;

/* CSS */
const HeaderWrapper = styled.div`
    padding: 0 13em;
    height: 16.1875em;
    background-image: url(${BackgroundImage});
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8125em;
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
    z-index: 1;
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

const Category = styled.div`
    margin-right: 0.7em;
    padding: 0 0.8em;
    border: solid 1.3px #8E59FF;
    border-radius: 15px;
    height: 1.5em;
    line-height: 1.5em;
    color: #8E59FF;
    font-weight: bold;
    text-align: center;
    display: inline-block;
    white-space: nowrap;
`;

const InteractionWrapper = styled.div`
    margin-top: 0.5em;
    display: flex;
    text-align: center;
    align-items: center;
`;

const JoinButton = styled.div`
    border-radius: 10px;
    width: 15.3125em;
    height: 2.3125em;
    line-height: 2.3015em;
    background-color: #8e59ff;
    color: white;
    font-size: 1.2308em;
    font-weight: bold;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0.2em 1em rgba(22,26,63,0.2);
    }
    transition: all 0.3s ease;
`;

const BookMarkWrapper = styled.div`
    margin: 0.5em 0 0 1em;
    width: 2.2em;
    font-size: 1.2em;
`;

const StyledBookMarkIcon = styled(BookMarkIcon)`
    margin-bottom: 0.1em;
    width: 1em;
    height: 1.3125em;
    cursor: pointer;
    fill: ${(props) => (props.bookMarkState ? "#8E59FF" : "none")};
`;
const StyledLikeIcon = styled(LikeIcon)`
    margin-bottom: 0.1em;
    width: 1.375em;
    height: 1.25em;
    cursor: pointer;
    fill: ${(props) => (props.likeState ? "#8E59FF" : "none")};
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

const HeaderRightWrapper = styled.div`
    color: white;
    text-align: center;
    display: flex;
`;

const PostStateButton = styled.div`
    border-radius: 10px;
    margin: 2em 3em 0 0;
    width: 9.6923em;
    height: 2.3015em;
    line-height: 2.3015em;
    background-color: #8e59ff;
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

const ThumbNailImgWrapper = styled.div`
    border: 1px solid #D0D1D9;
    border-radius: 10px;
    width: 22.4375em;
    height: 13.125em;
    background-image: url(${ThumbNailImg});
    background-size: cover;
`;
