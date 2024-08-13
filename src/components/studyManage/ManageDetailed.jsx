import React from 'react';
import styled from 'styled-components';
import WritePost from './ManageWrithePost.jsx';

const ManageDetailed = () => {

    return (
    <Container>
        <Text2>스터디 상세정보</Text2>
        <MainWrapper>
            <WritePost/>
        </MainWrapper> 
    </Container>

    );
};

export default ManageDetailed;


const MainWrapper = styled.div`
  background-color: #FBFAFF;
  display: flex;
  flex-direction: column;
  border: 1px solid #8E59FF;
  border-radius: 0.5em; 
  width: 59.375em; 
  height: 25em;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.625em; 
`;
const Text2 = styled.p`
    color: #8E59FF;
    font-size: 1.25em; 
    font-weight: 800;
`;