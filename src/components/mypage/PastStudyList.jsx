import React from 'react';
import { RowWrapper, StudyListWrapper, Wrapper,ExtraBold, RowWrapper2, GreyText, ListWrapper, ListItem, ColumnWrapper, StudyName, StudyProfile, StudyText, StyledRightArrow } from './CurrentStudyList';


const PastStudyList = () => {
    return (
        <StudyListWrapper>
            <Wrapper>
                <RowWrapper>
                    <ExtraBold>이전 스터티룸</ExtraBold>
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

export default PastStudyList;