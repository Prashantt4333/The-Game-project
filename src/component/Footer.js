import { faHome, faSearch, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Footer = () => {
    return (
        <>
           <footer>
                <Navigation />
           </footer>
        </>

    );
}

export default Footer;
