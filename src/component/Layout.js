import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet ></Outlet>
            </main>
            <Footer className="position-fixed"></Footer>

        </>      
    );
}

export default Layout;
