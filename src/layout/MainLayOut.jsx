import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const MainLayOut = () => {
    return (
        <>
            <Header/>
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