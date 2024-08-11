import React from 'react';
import styled from 'styled-components';

import StudyName from '../components/studyDetail/StudyName.jsx';
import StudyData from '../components/studyDetail/StudyData.jsx';
import StudyPost from '../components/studyDetail/StudyPost.jsx';
const StudyDetail = () => {

        return (
            <HeaderWrapper>
                <StudyName/>
                <StudyData/>
                <StudyPost/>
                
            </HeaderWrapper>    
        );
    };
    
    export default StudyDetail;
    const HeaderWrapper = styled.div`
        z-index: 5;
        background-color: #FBFAFF;
        box-sizing: border-box;
        display: flex;
        flex-direction: column; 
        padding: 0 3.1em;
    
    `;