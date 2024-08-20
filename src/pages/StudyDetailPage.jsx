import React from "react";
import styled from "styled-components";
import StudyDetailHeader from "../components/studyDetail/StudyDetailHeader";
import StudyLinkEmbed from "../components/studyDetail/StudyLinkEmbed";
import StudyCommentContainer from "../components/studyDetail/StudyCommentContainer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HeightLine from "../assets/icons/studyDetail/heightLine.svg?react";
import { useLocation } from "react-router-dom";

const StudyDetailPage = () => {
    
    const location = useLocation();
    const { studyDetail } = location.state || {};


    return (
        <>
        {studyDetail && 
            <>
            {/* 페이지 헤더 */}
            <StudyDetailHeader 
                title={studyDetail.name}
                bookmarks={studyDetail.bookmarks}
                views={studyDetail.views}
                nickName={studyDetail.userNickName}
                category={studyDetail.studyCategory || "카테고리 없음"}
                imageUrl={studyDetail.imageUrl}
                likes={studyDetail.likes}
                recruitPostTypeEnum={studyDetail.recruitPostTypeEnum === "RECRUITING" ? "모집 중" : "모집 완료"}
            />

            {/* 게시글 정보 */}
            <PostInfoWrapper>
                {/* 기간 영역 */}
                <PeriodContainer>
                    <PeriodWrapper>
                        <SubTitle>모집 기간</SubTitle>
                        <Period>{`${studyDetail.recruitStartTime} - ${studyDetail.recruitEndTime}`}</Period>
                    </PeriodWrapper>
                    <RightPeriodWrapper>
                        <StyledHeightLine/>
                        <PeriodWrapper>
                            <SubTitle>스터디 진행 기간</SubTitle>
                            <Period>{`${studyDetail.studyStartTime} - ${studyDetail.studyEndTime}`}</Period>
                        </PeriodWrapper>
                    </RightPeriodWrapper>
                </PeriodContainer>
                <StyledHr />

                {/* 스터디 자료 */}
                <StudyDataWrapper>
                    <SubTitle>스터디 자료</SubTitle>
                    <LinkEmbedWrapper>
                    {studyDetail.materialList.map((material, index) => (
                        <StudyLinkEmbed key={index} link={material} />
                    ))}
                    </LinkEmbedWrapper>
                </StudyDataWrapper>
                <StyledHr />

                {/* 게시글 본문 */}
                <ContentWrapper>
                    <SubTitle>스터디 설명</SubTitle>
                    <PostContentWrapper>
                        <PostContent>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{studyDetail.description}</ReactMarkdown>
                        </PostContent>
                    </PostContentWrapper>
                </ContentWrapper>

                <StyledHr />
                {/* 댓글 영역 */}
                <StudyCommentContainer />
            </PostInfoWrapper>
            </>
        }
        </>
    );
};

export default StudyDetailPage;


/* CSS */
const PostInfoWrapper = styled.div`
    margin-bottom: 2.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PeriodContainer = styled.div`
    margin-top: 1.5em;
    width: 70em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PeriodWrapper = styled.div`
    width: 32em;
`;

const SubTitle = styled.div`
    margin-bottom: 1em;
    color: #8E59FF;
    font-weight: 800;
`;

const Period = styled.div`
    color: #161A3F;
    font-size: 0.8125em;
    font-weight: bold;
`;

const RightPeriodWrapper = styled.div`
    display: flex;
`;

const StyledHeightLine = styled(HeightLine)`
    margin-right: 3.2em;
`;

const StudyDataWrapper = styled.div`
    width: 70em;
`;

const LinkEmbedWrapper = styled.div`
    padding-bottom: 1em;
    width: 70em;
    display: flex;
    // 스크롤
    overflow-x: auto;
    &::-webkit-scrollbar {
        height: 8px;
        background: none;
    }
    &:hover::-webkit-scrollbar-thumb {
        width: 1px;
        border-radius: 30px;
        background-color: rgb(142,89,255,0.5);
    }
`;

const ContentWrapper = styled.div`
    width: 70em;
    display: flex;
    flex-direction: column;
`;
 
const PostContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostContent = styled.div`
    margin: 0 0 1.5em 0;
    width: 68em;
    min-height: 22em;
    color: #161A3F;
`;

const StyledHr = styled.hr`
    margin: 1.5em 0;
    border: none;
    width: 70em;
    height: 1.5px;
    background-color: rgba(162, 163, 178, 0.4);
`;
