import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import "../style.css"
const Layout = () => {
    return (
        <>
            <Header />
                <main className="ps-3 pe-3" style={{marginBottom:"80px"}}>
                   <Outlet />
                </main>
            <Footer />

        </>      
    );
}

export default Layout;
