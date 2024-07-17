import React from 'react';
import styled from 'styled-components';
import { Color } from '../../components/style/Color';
import RightArrow from '../../assets/icons/rightarrow.svg?react';
import studyProfileUrl from '../../assets/images/studyprofile.png';

const CurrentStudyList = () => {
    return (
        <StudyListWrapper>
            <Wrapper>
                <RowWrapper>
                    <ExtraBold>현재 스터티룸</ExtraBold>
                    <RowWrapper2><GreyText>모두 보기</GreyText><StyledRightArrow/></RowWrapper2>
                </RowWrapper>
                <ListWrapper>
                    <ListItem>
                        <StudyProfile/>
                        <ColumnWrapper>
                            <StudyName>스터디 명</StudyName>
                            <StudyText>스터디 설명 50자까지만 보이게</StudyText>
                        </ColumnWrapper>
                    </ListItem>
                    <ListItem>
                        <StudyProfile/>
                        <ColumnWrapper>
                            <StudyName>스터디 명</StudyName>
                            <StudyText>스터디 설명 50자까지만 보이게</StudyText>
                        </ColumnWrapper>
                    </ListItem>
                    <ListItem>
                        <StudyProfile/>
                        <ColumnWrapper>
                            <StudyName>스터디 명</StudyName>
                            <StudyText>스터디 설명 50자까지만 보이게</StudyText>
                        </ColumnWrapper>
                    </ListItem>
                </ListWrapper>
            </Wrapper>
        </StudyListWrapper>
    );
};

export default CurrentStudyList;

export const StyledRightArrow = styled(RightArrow)`
    width : 0.495em;
`;

export const StudyListWrapper = styled.div`
    width : 100%;
    display : flex;
    gap :2em;
`

export const Wrapper = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    gap : 2em;
`;

export const ListWrapper = styled.div`
    border: 1px solid #8E59FF;
    border-radius: 20px;
    padding : 2.5em;
    display : flex;
    flex-direction : column;
    gap : 1em;
`

export const ListItem = styled.div`
    display : flex;
    gap : 1em;
    border-bottom : 1px solid #8E59FF;
    padding-bottom : 1.25em;
`

export const RowWrapper = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content: space-between;
`
export const RowWrapper2 = styled.div`
    display : flex;
    align-items : center;
    gap : 0.5em;
`;

export const ColumnWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 0.5em;
`;

export const GreyText = styled.div`
    color : #D0D1D9;
    font-size : 1em;
    font-weight : 800;
`;

export const ExtraBold = styled(Color)`
    font-weight : 800;
    font-size : 1.25em;
`;

export const StudyName = styled.div`
    font-size : 1em;
    font-weight : 700
`

export const StudyText = styled.div`
    font-size : 1em;
    font-weight : 700;
    color : #7E7D80;
`;

export const StudyProfile = styled.div`
    background-image: url(${studyProfileUrl});
    width : 60px;
    height : 60px;
`;