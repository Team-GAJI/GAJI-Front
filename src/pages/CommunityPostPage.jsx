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
                        게시글 제목입니다
                    </Title>
                    {/* 게시글 기술 */}
                    <SkillsWrapper>
                        <Skill>#Spring</Skill>
                        <Skill>#Spring</Skill>
                        <Skill>#Spring</Skill>
                    </SkillsWrapper>
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
                <PostContent>
                    세상에는 정말 다양한 이야기들이 존재합니다. 예를 들어, 어느 한적한 마을에는 작은 고양이 카페가 있었어요. <br />
                    그 카페에는 고양이들이 마음껏 뛰어놀 수 있는 커다란 나무 구조물이 있고, 창밖으로는 아름다운 정원이 펼쳐져 있었어요. <br />
                    손님들은 고양이들과 놀기도 하고, 향기로운 커피를 마시며 여유로운 시간을 보낼 수 있었죠. <br />
                    그 마을의 주민들은 매일 아침 일찍 일어나서 정원을 가꾸고, 고양이들에게 맛있는 간식을 주며 하루를 시작했어요. <br />
                    어느 날, 그 마을에 여행객들이 찾아왔어요. 그들은 도시의 번잡함에서 벗어나 조용한 휴식을 찾고 있었죠. <br />
                    여행객들은 고양이 카페에 들러 고양이들과 함께 시간을 보내면서 마음의 안정을 찾았어요. <br />
                    그 중 한 명은 화가였는데, 그는 이곳에서 영감을 받아 멋진 그림을 그리기 시작했어요. <br />
                    고양이들이 뛰어노는 모습을 담은 그의 그림은 많은 사람들에게 사랑을 받았고, 결국 그는 이 마을에 정착하게 되었답니다. <br />
                    시간이 지나면서, 그 마을은 점점 유명해졌어요. 사람들이 소문을 듣고 하나둘씩 방문하기 시작했고, 고양이 카페는 더욱 번창하게 되었어요. <br />
                    마을 사람들은 여행객들을 환영하며, 그들과 함께 마을의 평화로운 분위기를 즐겼죠. 고양이들도 여행객들과 금방 친해졌고, 그들은 마을의 작은 스타가 되었어요. <br />
                    어느 날, 고양이 카페에 특별한 손님이 찾아왔어요. 그는 세계적으로 유명한 작가였는데, 이곳의 아름다움에 반해 새로운 소설을 쓰기로 결심했어요. <br />
                    그는 고양이 카페와 마을 사람들의 이야기를 소재로 한 소설을 집필하기 시작했어요. <br />
                    그의 소설은 출간되자마자 베스트셀러가 되었고, 많은 독자들이 그 마을에 방문하게 되었어요. <br />
                    마을은 점점 더 번영하게 되었고, 사람들은 서로의 이야기를 나누며 따뜻한 우정을 쌓아갔어요. <br />
                    이처럼 한적한 마을의 작은 고양이 카페가 많은 사람들에게 기쁨과 영감을 주게 된 이야기는 매우 특별해요. <br />
                    사람들은 이곳에서 일상의 소소한 행복을 찾고, 고양이들과의 교감을 통해 마음의 평화를 얻었죠. 결국, <br />
                    이 마을은 고양이들과 사람들이 함께 어우러져 살아가는 평화로운 낙원이 되었어요. <br />
                    이야기를 마치며, 우리는 때때로 작은 것들이 우리에게 큰 기쁨을 줄 수 있다는 것을 잊지 말아야 해요. <br />
                    고양이 카페처럼 소박하지만 특별한 곳에서 우리는 삶의 소중한 순간들을 찾을 수 있어요. <br />
                    이 이야기처럼 우리도 일상의 작은 행복을 소중히 여기며 살아간다면, 더 행복한 삶을 살 수 있을 거예요. <br />
                    이렇게 아무 말 대잔치를 해보았습니다. 조금이나마 재미있으셨길 바라요!
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

const SkillsWrapper = styled.div`
    display: flex;
    text-align: center;
`;

const Skill = styled.div`
    margin-right: 0.4em;
    border-radius: 15px;
    width: 7em;
    height: 1.8182em;
    background-color: #8E59FF;
    color: white;
    font-size: 0.6875em;
    line-height: 1.8182em;
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
    transition: all ease 0.5s;
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
