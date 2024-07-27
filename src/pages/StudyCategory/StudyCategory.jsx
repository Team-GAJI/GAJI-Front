import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logos/logo.svg';
import backImage from '../../assets/images/mypageBackground.png';
import Footer from '../Footer';
import StudyRecruitment from '../StudyCategory/StudyRecruitment';
import FlippingCard from '../StudyCategory/FlippingCard';

import DetailCategory from '../StudyCategory/DetailCategory';
import SortingCategory from '../StudyCategory/SortingCategory';
import FilterCategory from '../StudyCategory/FilterCategory';

import Plus from '../../assets/icons/Plus.png';
import Arrow from '../../assets/icons/Arrow.png';
import Vector from '../../assets/icons/Vector.png';

const StudyCategory = () => {
    const categories = [
        { title: '# 백엔드', buttonText: '모두보기' },
        { title: '# 프론트엔드', buttonText: '모두보기' },
        { title: '# 데이터사이언스', buttonText: '모두보기' },
        { title: '# 웹개발', buttonText: '모두보기' },
    ];

    const cardData = Array.from({ length: 4 }, (_, index) => ({
        id: index,
        title: `제목 ${index + 1}`,
        daysLeft: `D-${index + 1}`,
        description: `설명입니다. ${index + 1}`,
        imageUrl: `https://via.placeholder.com/250x150?text=Image${index + 1}`
    }));

    const [showDetail, setShowDetail] = useState(false);
    const [showSorting, setShowSorting] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    
    const [selectedCategory, setSelectedCategory] = useState("카테고리");
    const [selectedSorting, setSelectedSorting] = useState("정렬");
    const [selectedFilter, setSelectedFilter] = useState("필터");

    const [isLongText, setIsLongText] = useState(false);
    
    const buttonRef = useRef(null);
    //정렬, 카테고리, 필터를 하나라도 선택하면 카테고리 안 보이게, 버튼 색상 바꾸고
    const [isCategorySelected, setIsCategorySelected] = useState(false);
    const [isSortingSelected, setIsSortingSelected] = useState(false);  
    const [isFilterSelected, setIsFilterSelected] = useState(false); 

    // 카테고리, 필터 버튼 선택할 때 긴 글이 나오면 줄바꿈이 일어나서 글자 크기를 줄이도록 하기위해 설정함...
    useEffect(() => {
        const checkTextLength = () => {
            if (buttonRef.current) {
                setIsLongText(buttonRef.current.scrollWidth > buttonRef.current.clientWidth);
            }
        };

        checkTextLength(); 
        window.addEventListener('resize', checkTextLength); 

        return () => window.removeEventListener('resize', checkTextLength); 
    }, [selectedCategory],[selectedFilter]);

    const handleDetailClick = () => {
        setShowDetail(!showDetail); 
        setShowSorting(false); 
        setShowFilter(false);
        setIsCategorySelected(!isCategorySelected); 
        setIsSortingSelected(false);   
        setIsFilterSelected(false);   
    };
    
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowDetail(false);
    };
    
    const handleSortingClick = () => {
        setShowSorting(!showSorting);
        setShowDetail(false); 
        setShowFilter(false);
        setIsSortingSelected(!isSortingSelected); 
    };
    
    const handleSortingSelect = (sorting) => {
        setSelectedSorting(sorting);
        setShowSorting(false);
    };
    
    const handleFilterClick = () => {
        setShowFilter(!showFilter);
        setShowDetail(false); 
        setShowSorting(false);
        setIsFilterSelected(!isFilterSelected); 
    };
    
    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        setShowFilter(false);
    };

    return (
        <>
        <HeaderWrapper>
            <ContentWrapper>
                {/* 상단 사이드바 토글 버튼과 로그인 버튼 */}
                <RowWrapper>
                    <SidebarToggle>☰</SidebarToggle>
                    <AuthButton>LOG IN</AuthButton>
                </RowWrapper>

                {/* 로고와 로고 텍스트 */}
                <RowLogoWrapper>
                    <LogoImage src={Logo} alt="로고" />
                    <LogoText>스터디</LogoText>
                    <Text>'가지'고 싶은 스터디를 검색해보세요!</Text>
                    <InputWrapper>
                        <Icon src={Vector} alt="검색 아이콘" />
                        <InputStudy placeholder="    검색어를 입력해주세요" />
                    </InputWrapper>
                </RowLogoWrapper>

                {/* 카테고리 메뉴 선택 */}
                <RowSelectWrapper>
                <Container>
                    <SelectButton
                        ref={buttonRef}
                        isLongText={isLongText}
                        onClick={handleDetailClick}
                        isSelected={isCategorySelected} 
                    >
                        <SelectButtonContent>
                            {selectedCategory}
                        </SelectButtonContent>
                        <Icons src={Arrow} alt="아래보기" />
                    </SelectButton>
                    {showDetail && (
                        <AbsoluteContainer1>
                            <DetailCategory onSelect={handleCategorySelect} />
                        </AbsoluteContainer1>
                    )}
                </Container>
                <Container>
                    <SelectButton
                        onClick={handleSortingClick}
                        isSelected={isSortingSelected}
                    >
                        {selectedSorting} 
                        <Icons src={Arrow} alt="아래보기" style={{width: '0.625em', height: 'auto', marginLeft: '2.5em'}}/>
                    </SelectButton>
                    {showSorting && (
                        <AbsoluteContainer2>
                            <SortingCategory onSelect={handleSortingSelect} />
                        </AbsoluteContainer2>
                    )}
                </Container>
                <Container>
                    <SelectButton
                        ref={buttonRef}
                        isLongText={isLongText}
                        onClick={handleFilterClick}
                        isSelected={isFilterSelected} 
                    >
                        <SelectButtonContent>
                            {selectedFilter}
                        </SelectButtonContent>
                        <Icons src={Arrow} alt="아래보기" />
                    </SelectButton>
                    {showFilter && (
                        <AbsoluteContainer3>
                            <FilterCategory onSelect={handleFilterSelect} />
                        </AbsoluteContainer3>
                    )}
                </Container>
            <CreateButton><PlusIcons src={Plus} alt="플러스" style={{width: '0.625em', height: 'auto' }}/>스터디 만들기</CreateButton>
        </RowSelectWrapper>

                <DivisionLine />

                {/* 그리드 컨테이너 시작 */}
                {categories.map((category, index) => (
                    <GridContainer key={index}>
                        {!isCategorySelected && (
                            <ButtonWrapper>
                                <CategoryButton>{category.title}</CategoryButton>
                                <OpenButton>{category.buttonText} &nbsp; &gt; </OpenButton>
                            </ButtonWrapper>
                        )}
                        <GridRow>
                            {cardData.map(item => (
                                <FlippingCard
                                    key={item.id}
                                    title={item.title}
                                    daysLeft={item.daysLeft}
                                    description={item.description}
                                    imageUrl={item.imageUrl}
                                />
                            ))}
                        </GridRow>
                    </GridContainer>
                ))}
                {/* 그리드 컨테이너 끝 */}

                <MoreButton>더보기</MoreButton>

            </ContentWrapper>
          
        </HeaderWrapper>
        {/* Footer-아래 */}
        <Footer />
        </>
    );
};

export default StudyCategory;
const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
`;

const RowWrapper = styled.div`
    padding-top: 1.25em; 
    display: flex;
    align-items: center;
    gap: 60em; 
    margin-top: 0.625em; 
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 0.625em; 
`;
const SidebarToggle = styled.div`
    cursor: pointer;
    font-size: 1.25em; 
    padding: 0.8125em;
`;

const AuthButton = styled.div`
    font-size: 0.8125em;
    width: 7.6875em; 
    border: 1px solid #161A3F;
    border-radius: 0.625em; 
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
`;

const RowLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9em;
    flex-direction: column; 
    justify-content: center; 
    padding: 1.25em; 

    background-image: url(${backImage}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
`;

const LogoImage = styled.img`
    width: 2.5em; 
    height: auto;
`;

const LogoText = styled.div`
    font-size: 1em;
    font-weight: 700;
    color: #8E59FF;
`;

const Text = styled.div`
    font-size: 1em;
    color: #D0D1D9;
    font-weight: 700;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 50%;
  margin-top: 0.5em;
`;

const InputStudy = styled.input`
  width: 100%;
  height: 1.5625em;
  border-radius: 0.5em; 
  border: 1px solid #C8C8C8;
  padding: 0.5em;
  padding-left: 2em; 
  
  &::placeholder {
    color: #C8C8C8; 
  }
`;
const Icon = styled.img`
  position: absolute;
  left: 0.5em;
  top: 50%;
  transform: translateY(-50%);
  width: 1em;
  height: 1em;
`;
const RowSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.625em; 
    margin-left: 1.25em; 
    gap: 0.625em; 
    position: relative; 
`;
const AbsoluteContainer1 = styled.div`
    position: absolute;
    top: 60%;
    left: 0;
    background: transparent; 
    border: none; 
    z-index: 1000;
`;
const AbsoluteContainer2 = styled.div`
    position: absolute;
    top: 60%;
    left: 8.9375em;
    background: transparent; 
    border: none; 
    z-index: 1000;
`;
const AbsoluteContainer3 = styled.div`
    position: absolute;
    top: 60%;
    left: 17.8125em;
    background: transparent; 
    border: none; 
    z-index: 1000;
`;

const CategoryButton = styled.div`
    font-size: 0.8125em;
    width: 7.75em; 
    background-color: #BB9CFF;
    border-radius: 0.5em; 
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
    margin-right: 0.625em; 
`;
const SelectButton = styled.div`
    font-size: 0.8em; 
    width: 7.75em;
    min-width: 7.75em; 
    border-radius: 0.5em; 
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    margin-right: 0.625em;
    margin-top: 0.3125em;
    margin-left: 0.25em;
    overflow: hidden; 
    text-overflow: ellipsis; 
    white-space: nowrap; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    
    color: ${props => props.isSelected ? '#8E59FF' : '#C8C8C8'}; 
    background-color: ${props => props.isSelected ? '#FFF' : '#FFF'}; 
    border: ${props => props.isSelected ? '1px solid  #8E59FF' : '1px solid #C8C8C8'}; 

    ${props => props.isLongText && `
        font-size: 0.8em;
        span {
            display: inline-block;
            transform: scale(0.875); 
            transform-origin: left;
            margin-right: -1.1em; 
        }
    `}

    &:hover {
        border: 1px solid #fff;
    }
`;

const SelectButtonContent = styled.span`
    display: inline-block;
   
`;
const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.25em; 
    gap: 0.0625em;
    margin-top: 1.25em; 
`;

const CreateButton = styled(SelectButton)`
    background-color: #8E59FF;
    border-radius: 0.5em; 
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: auto;
    width: 7.25em; 
    margin-right: 1em; 
`;

const OpenButton = styled(SelectButton)`
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #C8C8C8;
    cursor: pointer;
    margin-left: auto;
    width: 6.25em; 
    margin-right: 3.75em; 
`;

const MoreButton = styled.div`
    background-color: #8E59FF;
    border-radius: 0.5em; 
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: auto;
    width: 18.75em; 
    margin: 0 auto;
    margin-top: 3.125em;
    margin-bottom: 1.875em; 
`;

const DivisionLine = styled.div`
    border-top: 1px solid #C8C8C8;
    margin: 1.25em 0px; 
`;

const ContentWrapper = styled.div`
    /*overflow-y: auto;*/
    flex-grow: 1;
`;

const GridContainer = styled.div`
    display: grid;
    gap: 1em; 
    max-width: 100%; 
    padding: 0.0625em; 
    box-sizing: border-box;
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const Icons = styled.img`
    width: 0.75em; 
    height: auto;
    margin-top: 0.3125em;
    margin-left : 2em;
`;
const PlusIcons = styled.img`
    width: 1em; 
    height: auto;
    margin-top: 0.2em;
    margin-right : 0.5em;
`;