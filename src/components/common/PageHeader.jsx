import React from 'react';
import styled from 'styled-components';
import backGroundUrl from '../../assets/images/mypage/mypageBackground.png';
import { PuppleButton } from '../style/Button';

// PageHeader 컴포넌트 정의, 이 컴포넌트는 페이지 헤더를 렌더링합니다.
const PageHeader = ({ pageTitle, headerTitles, activeButtonIndex, onButtonClick, changeColorOnClick, changeColorOnHover }) => {
    return (
        <>
            {/* Header 스타일을 가진 div로 헤더 영역을 감쌉니다. */}
            <Header pageTitle={pageTitle}>
                {/* 페이지 제목을 표시합니다. */}
                <PageHeaderTitle>{pageTitle}</PageHeaderTitle>
                <RowWrapper>
                    {/* headerTitles 배열을 순회하며 버튼을 생성합니다. */}
                    {headerTitles.map((title, index) => (
                        <StyledPuppleButton
                            key={index}
                            $isActive={activeButtonIndex === index} // 현재 활성화된 버튼인지 확인합니다.
                            $changeColorOnClick={changeColorOnClick} // 클릭 시 색상을 변경할지 여부를 결정합니다.
                            $changeColorOnHover={changeColorOnHover} // 호버 시 색상을 변경할지 여부를 결정합니다.
                            onClick={() => onButtonClick(index)} // 버튼 클릭 시 실행할 함수입니다.
                        >
                            {title} {/* 버튼의 텍스트입니다. */}
                        </StyledPuppleButton>
                    ))}
                </RowWrapper>
            </Header>
        </>
    );
};

export default PageHeader;

// Header 스타일을 정의합니다. 배경 이미지와 색상을 포함합니다.
const Header = styled.div`
    display: flex;;
    z-index: 2;
    position: ${({ pageTitle }) => ( pageTitle === '마이페이지' ? 'fixed' : 'relative')};
    top : ${({ pageTitle }) => ( pageTitle === '마이페이지' ? '60px' : '')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 16.1875em;
    background-color: #FBFAFF;
    background-image: url(${backGroundUrl});

    @media (max-width: 768px) {
        top: 80px;
        height: auto;
        padding: 2em 1em;
    }
`;

// PageHeaderTitle 스타일을 정의합니다. 제목의 폰트 크기와 색상을 포함합니다.
const PageHeaderTitle = styled.div`
    margin-top: 1.0625em;
    margin-bottom: 1.5625em;
    font-size: 1.5em;
    font-weight: 800;
    color: #8E59FF;

    @media (max-width: 768px) {
        font-size: 1.25em;
        margin-top: 0.75em;
        margin-bottom: 1em;
    }
`;

// RowWrapper 스타일을 정의합니다. 버튼들을 가로로 나열합니다.
const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
`;

// StyledPuppleButton 스타일을 정의합니다. 버튼의 크기, 색상, 폰트 스타일을 포함합니다.
const StyledPuppleButton = styled(PuppleButton)`
    box-sizing: border-box;
    width: 10em;
    height: 2.25em;
    font-size: 1.25em;
    font-weight: 700;
    background-color: ${({ $isActive }) => ($isActive ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)')};
    background-color: ${({ $changeColorOnClick, $isActive }) => $changeColorOnClick && $isActive ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)'};

    &:hover {
        background-color: ${({ $changeColorOnHover }) => $changeColorOnHover ? '#8E59FF' : 'rgba(137, 87, 255, 0.6)'};
    }

    @media (max-width: 768px) {
        width: 5em;
        height: 3em;
        font-size: 1em;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        width: 10em;
        height: 3em;
        font-size: 1em;
    }
`;

