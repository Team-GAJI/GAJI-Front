import React from 'react';
import styled from 'styled-components';
import backGroundUrl from '../../assets/images/mypage/mypageBackground.png';
import { PuppleButton } from '../style/Button';

const PageHeader = ({ pageTitle, headerTitles, activeButtonIndex, onButtonClick, changeColorOnClick, changeColorOnHover, large }) => {
    return (
        <>
            <Header pageTitle={pageTitle}>
                <PageHeaderTitle>{pageTitle}</PageHeaderTitle>
                <RowWrapper large={large}>
                    {headerTitles.map((title, index) => (
                        <StyledPuppleButton
                            key={index}
                            $isActive={activeButtonIndex === index}
                            $changeColorOnClick={changeColorOnClick}
                            $changeColorOnHover={changeColorOnHover}
                            onClick={() => onButtonClick(index)}
                        >
                            {title}
                        </StyledPuppleButton>
                    ))}
                </RowWrapper>
            </Header>
        </>
    );
};

export default PageHeader;

const Header = styled.div`
    display: flex;
    z-index: 2;
    position: ${({ pageTitle }) => (pageTitle === '마이페이지' ? 'fixed' : 'relative')};
    top: ${({ pageTitle }) => (pageTitle === '마이페이지' ? '60px' : '')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 16.1875em;
    background-color: #FBFAFF;
    background-image: url(${backGroundUrl});
    @media (max-width: 768px) {
        margin-bottom : ${({ large }) => (large ? '0' : '3em')};
    }
`;

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

const RowWrapper = styled.div`
    display: flex;
    gap: 1em;
    justify-content: center;

    @media (max-width: 768px) {
        display: ${({ large }) => (large ? 'grid' : 'flex')};
        grid-template-columns: ${({ large }) => (large ? '1fr 1fr' : '')};
        place-items : center center;
        width : auto;
        
        font-size: 1em;
    }

`;

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
        width : ${({ large }) => (large ? '3em' : '10em')};
        height: 3em;
        font-size: 0.8125em;
    }
`;
