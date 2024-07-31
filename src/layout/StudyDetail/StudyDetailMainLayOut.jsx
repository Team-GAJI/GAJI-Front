import React from 'react';
import { Outlet } from 'react-router-dom';
import Header2 from '../../components/common/StudyDetail/Header2.jsx';
import Footer from '../../components/common/Footer';
import styled from 'styled-components';

const MainLayOut = () => {
    return (
        <>
            <Header2/>
            <Padding>
                <Outlet/>
            </Padding>  
            <Footer/>
        </>
    );
};

export default MainLayOut;

const  Padding = styled.div`
    padding-top : 104px;
`;