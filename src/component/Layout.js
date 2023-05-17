import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import "../style.css"
const Layout = () => {
    return (
        <>
            <Header />
                <main style={{height:"50px"}} className='overflow-auto main-div'>
                    <Outlet />
                </main>
            <Footer />

        </>      
    );
}

export default Layout;
