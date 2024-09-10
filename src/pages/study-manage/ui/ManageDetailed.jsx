import React from 'react';
import styled from 'styled-components';
import StudyManageDetail from './StudyManageDetail.jsx';

const ManageDetailed = () => {
    return (
        <>
            <Text2>스터디 상세정보</Text2>
            <StudyManageDetail />
        </>
    );
};

export default ManageDetailed;

const Text2 = styled.p`
    color: #8e59ff;
    font-size: 1.25em;
    font-weight: 800;
    width: 100%;
    @media (max-width: 768px) {
    }
`;
