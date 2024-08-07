import React from 'react';
import styled from 'styled-components';
import WritePost from './PostPage.jsx';

const StudyPost = () => {
    return(
        <>
            <MainText>스터디 설명</MainText>
            <WritePost/>
        </>

    );
};

export default StudyPost;

const MainText = styled.h1`
 font-size: 1.25em; 
 font-weight: 800;
 color: #8E59FF;
  margin-left : 1em;
`;