import React, { useState } from 'react';
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

    const handleDetailClick = () => {
        setShowDetail(prev => !prev);
        setShowSorting(false); 
        setShowFilter(false); 
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowDetail(false);
    };

    const handleSortingClick = () => {
        setShowSorting(prev => !prev);
        setShowDetail(false); 
        setShowFilter(false); 
    };

    const handleSortingSelect = (sorting) => {
        setSelectedSorting(sorting);
        setShowSorting(false);
    };

    const handleFilterClick = () => {
        setShowFilter(prev => !prev);
        setShowDetail(false); 
        setShowSorting(false); 
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
                <SelectButton onClick={handleDetailClick}>{selectedCategory} 
                <Icons src={Arrow} alt="아래보기" style={{width: '10px', height: 'auto',  marginLeft: '20px'}}/>
                </SelectButton>
                {showDetail && (
                    <AbsoluteContainer1>
                        <DetailCategory onSelect={handleCategorySelect} />
                    </AbsoluteContainer1>
                )}
            </Container>
            <Container>
                <SelectButton onClick={handleSortingClick}>{selectedSorting} 
                <Icons src={Arrow} alt="아래보기" style={{width: '10px', height: 'auto', marginLeft: '40px'}}/>
                </SelectButton>
                {showSorting && (
                    <AbsoluteContainer2>
                        <SortingCategory onSelect={handleSortingSelect} />
                    </AbsoluteContainer2>
                )}
            </Container>
            <Container>
                <SelectButton onClick={handleFilterClick}>{selectedFilter} 
                <Icons src={Arrow} alt="아래보기" style={{width: '10px', height: 'auto' ,marginLeft: '40px'}}/>
                </SelectButton>
                {showFilter && (
                    <AbsoluteContainer3>
                        <FilterCategory onSelect={handleFilterSelect} />
                    </AbsoluteContainer3>
                )}
            </Container>
            <CreateButton><Icons src={Plus} alt="플러스" style={{width: '10px', height: 'auto' }}/>스터디 만들기</CreateButton>
        </RowSelectWrapper>

                <DivisionLine />

                {/* 그리드 컨테이너 시작 */}
                {categories.map((category, index) => (
                    <GridContainer key={index}>
                        <ButtonWrapper>
                            <CategoryButton>{category.title}</CategoryButton>
                            <OpenButton>{category.buttonText} &nbsp; &gt; </OpenButton>
                        </ButtonWrapper>
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
    padding-top: 20px;
    display: flex;
    align-items: center;
    gap: 60em; 
    margin-top: 10px; 
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    gap: 10px; 
`;
const SidebarToggle = styled.div`
    cursor: pointer;
    font-size: 20px;
    padding: 0.8125em;
`;

const AuthButton = styled.div`
    font-size: 0.8125em;
    width: 123px;
    border: 1px solid #161A3F;
    border-radius: 10px;
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
    padding: 20px; 

    background-image: url(${backImage}); 
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center;
`;

const LogoImage = styled.img`
    width: 40px; 
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
  height: 25px;
  border-radius: 8px;
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
  width: 16px;
  height: 16px;
`;
const RowSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
    gap: 10px; 
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
    left: 143px;
    background: transparent; 
    border: none; 
    z-index: 1000;

`;
const AbsoluteContainer3 = styled.div`
    position: absolute;
    top: 60%;
    left: 285px;
    background: transparent; 
    border: none; 
    z-index: 1000;

`;

const CategoryButton = styled.div`
    font-size: 0.8125em;
    width: 100px;
    background-color: #BB9CFF;
    border-radius: 8px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #fff;
    margin-right: 10px; 
`;

const SelectButton = styled.div`
    font-size: 0.8125em;
    width: 100px;
    border: 1px solid #C8C8C8;
    border-radius: 8px;
    font-weight: 800;
    padding: 0.8125em;
    text-align: center;
    color: #C8C8C8;
    margin-right: 10px; 
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    gap: 1px; 
    margin-top : 20px;
`;

const CreateButton = styled(SelectButton)`
    background-color: #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: auto;
    width: 100px;
    margin-right: 20px;
`;

const OpenButton = styled(SelectButton)`
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #C8C8C8;
    cursor: pointer;
    margin-left: auto;
    width: 100px;
    margin-right: 60px;
`;

const MoreButton = styled.div`
    background-color: #8E59FF;
    border-radius: 8px;
    font-size: 0.8125em;
    font-weight: 700;
    text-align: center;
    padding: 0.8125em;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: auto;
    width: 300px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 30px;
`;

const DivisionLine = styled.div`
    border-top: 1px solid #C8C8C8;
    margin: 20px 0px;
`;

const ContentWrapper = styled.div`
    /*overflow-y: auto;*/
    flex-grow: 1;
`;

const GridContainer = styled.div`
    display: grid;
    gap: 16px;
    max-width: 100%; 
    padding: 1px; 
    box-sizing: border-box;
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const Icons = styled.img`
    width: 12px; 
    height: auto;
    margin-top : 5%;
    margin-right : 8px;
`;