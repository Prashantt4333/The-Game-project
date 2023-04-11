import {  faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {  Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <header className='w-100 shadow mb-3'>
            <Card className='ps-3 pt-3 w-100'>
                <Card.Body className='w-100'>
                    <Link to="/" className='text-white text-decoration-none w-25'>
                        <Card.Title ><FontAwesomeIcon icon={faLongArrowAltLeft} className='me-4'/><span >Register</span></Card.Title>
                    </Link>
                </Card.Body>
            </Card>
       </header>
    );
}

export default Header;
