import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logos/logo.svg';
import backImage from '../assets/images/mypageBackground.png';
import StudyRecruitment from './StudyRecruitment';
import DetailCategory from './DetailCategory';
import SortingCategory from './SortingCategory';
import FilterCategory from './FilterCategory';

const HeaderWrapper = styled.div`
    z-index: 5;
    background-color: #FBFAFF;
    box-sizing: border-box;
    display: flex;
    flex-direction: column; 
    padding: 0 3.1em;
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
    color: #E8E9EC;
    font-weight: 700;
`;

const InputStudy = styled.input`
    width: 50%;
    height: 25px;
    border-radius: 8px;
    border: 1px solid #C8C8C8;
    padding: 0.5em;
    margin-top: 0.5em;

    &::placeholder {
        color: #C8C8C8; 
    }
`;

const RowSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
    gap: 10px; 
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
    gap: 10px; 
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
    margin-right: 20px;
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
    margin-top: 20px;
    margin-bottom: 20px;
`;

const DivisionLine = styled.div`
    border-top: 1px solid #C8C8C8;
    margin: 20px 0px;
`;

const ContentWrapper = styled.div`
    overflow-y: auto;
    flex-grow: 1;
`;

const GridContainer = styled.div`
    display: grid;
    gap: 20px;
`;

const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

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

    return (
        <HeaderWrapper>
            <ContentWrapper>

                {/* 로고와 로고 텍스트 */}
                <RowLogoWrapper>
                    <LogoImage src={Logo} alt="로고" />
                    <LogoText>스터디</LogoText>
                    <Text>`가지`고 싶은 스터디를 검색해보세요!</Text>
                    <InputStudy placeholder="검색어를 입력해주세요" />
                </RowLogoWrapper>

                {/* 카테고리 메뉴 선택 */}
                <RowSelectWrapper>
                    <SelectButton>카테고리 &nbsp; &or;</SelectButton>
                    <DetailCategory/> 
                    <SelectButton>정렬 &nbsp; &nbsp; &or;</SelectButton>
                    <SortingCategory/>
                    <SelectButton>필터 &nbsp; &nbsp; &or;</SelectButton>
                    <FilterCategory/>
                    <CreateButton>스터디 만들기</CreateButton>
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
                                <StudyRecruitment
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
    );
};

export default StudyCategory;
