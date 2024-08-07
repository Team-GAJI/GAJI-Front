import React, { useState } from 'react';
import styled from 'styled-components';
import DownArrowIcon from "../../assets/icons/communityPost/downArrow2.svg?react";

const SelectBox = () => {

    // 필터 상태 관리
    const [isCategoryOptionVisible, setIsCategoryOptionVisible] = useState(false);
    const [selectedCategoryOption, setSelectedCategoryOption] = useState("카테고리");
    
    const [isSortOptionVisible, setIsSortOptionVisible] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState("정렬");

    const [isFilterOptionVisible, setIsFilterOptionVisible] = useState(false);
    const [selectedFilterOption, setSelectedFilterOption] = useState("필터");

    // 필터 버튼 텍스트
    const toggleOptionVisibility = () => {
        setIsCategoryOptionVisible(!isCategoryOptionVisible);
    };
    const toggleOptionVisibility2 = () => {
        setIsSortOptionVisible(!isSortOptionVisible);
    };
    const toggleOptionVisibility3 = () => {
        setIsFilterOptionVisible(!isFilterOptionVisible);
    };

    // 필터 옵션 선택
    const handleOptionSelect = (option) => {
        setSelectedCategoryOption(option);
        setIsCategoryOptionVisible(false);
    };
    const handleOptionSelect2 = (option) => {
        setSelectedSortOption(option);
        setIsSortOptionVisible(false);
    };
    const handleOptionSelect3 = (option) => {
        setSelectedFilterOption(option);
        setIsFilterOptionVisible(false);
    };

    return (
        <SelectWrapper>
            {/* 카테고리 */}
            <PostStateWrapper>
                {/* 버튼 */}
                <PostStateButton onClick={toggleOptionVisibility}>
                    {selectedCategoryOption}
                    <StyledDownArrowIcon isVisible={isCategoryOptionVisible} />
                </PostStateButton>
                {/* 옵션 */}
                <PostStateOptionWrapper isVisible={isCategoryOptionVisible}>
                    <PostStateOption
                        onClick={() => handleOptionSelect("개발")}
                        isSelected={selectedCategoryOption === "개발"}
                    >개발</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("인공지능")}
                        isSelected={selectedCategoryOption === "인공지능"}
                    >인공지능</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("하드웨어")}
                        isSelected={selectedCategoryOption === "하드웨어"}
                    >하드웨어</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("보안")}
                        isSelected={selectedCategoryOption === "보안"}
                    >보안</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("네트워크 - 클라우드")}
                        isSelected={selectedCategoryOption === "네트워크 - 클라우드"}
                    >네트워크 - 클라우드</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("어학")}
                        isSelected={selectedCategoryOption === "어학"}
                    >어학</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("디자인")}
                        isSelected={selectedCategoryOption === "디자인"}
                    >디자인</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("비즈니스 (pm)")}
                        isSelected={selectedCategoryOption === "비즈니스 (pm)"}
                    >비즈니스 &#40;pm&#41;</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("독서모임")}
                        isSelected={selectedCategoryOption === "독서모임"}
                    >독서 모임</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect("기타")}
                        isSelected={selectedCategoryOption === "기타"}
                    >기타</PostStateOption>
                </PostStateOptionWrapper>
            </PostStateWrapper>

            {/* 정렬 */}
            <PostStateWrapper>
                {/* 버튼 */}
                <PostStateButton onClick={toggleOptionVisibility2}>
                    {selectedSortOption}
                    <StyledDownArrowIcon isVisible={isSortOptionVisible} />
                </PostStateButton>
                {/* 옵션 */}
                <PostStateOptionWrapper isVisible={isSortOptionVisible}>
                    <PostStateOption
                        onClick={() => handleOptionSelect2("인기순")}
                        isSelected={selectedSortOption === "인기순"}
                    >인기순</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect2("최신순")}
                        isSelected={selectedSortOption === "최신순"}
                    >최신순</PostStateOption>
                </PostStateOptionWrapper>
            </PostStateWrapper>

            {/* 필터 */}
            <PostStateWrapper>
                {/* 버튼 */}
                <PostStateButton onClick={toggleOptionVisibility3}>
                    {selectedFilterOption}
                    <StyledDownArrowIcon isVisible={isFilterOptionVisible} />
                </PostStateButton>
                {/* 옵션 */}
                <PostStateOptionWrapper isVisible={isFilterOptionVisible}>
                    <PostStateOption
                        onClick={() => handleOptionSelect3("모집 중")}
                        isSelected={selectedFilterOption === "모집 중"}
                    >모집 중</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect3("모집 완료")}
                        isSelected={selectedFilterOption === "모집 완료"}
                    >모집 완료</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect3("미완료 질문")}
                        isSelected={selectedFilterOption === "미완료 질문"}
                    >미완료 질문</PostStateOption>
                    <PostStateOption
                        onClick={() => handleOptionSelect3("완료 질문")}
                        isSelected={selectedFilterOption === "완료 질문"}
                    >완료 질문</PostStateOption>
                </PostStateOptionWrapper>
            </PostStateWrapper>
        </SelectWrapper>
    )
}

export default SelectBox;

/* CSS */
const SelectWrapper = styled.div`
    display: flex;
    position: relative;
`;

const PostStateWrapper = styled.div`
    margin-right: 0.8em;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostStateButton = styled.div`
    padding-left: 1.5em;
    border: 1px solid #C8C8C8;
    border-radius: 10px;
    width: 7.3077em;
    height: 2.3846em;
    line-height: 2.3846em;
    background-color: transparent;
    color: #D0D1D9;
    font-size: 0.8125em;
    font-weight: bold;
    text-align: start;
    position: relative;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

const StyledDownArrowIcon = styled(DownArrowIcon)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.7em 0.9em;
    width: 1em;
    height: 1em;
    transition: all 0.5s ease;
    transform: rotate(${(props) => (props.isVisible ? "-180deg" : "0deg")});
`;

const PostStateOptionWrapper = styled.div`
    margin-top: 3.5em;
    padding: 1.5em 0;
    border-radius: 10px;
    width: 13em;
    background-color: rgba(22, 26, 63, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.6875em;
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: all 0.3s ease;
    position: absolute;
`;

const PostStateOption = styled.div`
    margin: 0.5em 0;
    border: ${(props) => (props.isSelected ? "1px solid #D0D1D9" : "none")};
    border-radius: 10px;
    width: 11em;
    height: 2.0769em;
    line-height: 2.0769em;
    cursor: pointer;
    text-align: center;
    color: ${(props) => (props.isSelected ? "white" : "#D0D1D9")};
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
    &:hover{
        color: white;
        font-weight: bold;
    }
`;