import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft, faArrowRight, faBackspace, faBackward, faBackwardStep, faGift,  faKey,  faMessage,  faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../feature/auth/authSlice';

const Register = () => {
    //1.  Hook Area

    const [payload,setPayload ] = useState({
                                                "mobilenumber":null,                                       
                                                "otp":null,                                           
                                                "password":null, 
                                                "rafcode":null                                          
                                            });

    let userInfo = useSelector(selectUserInfo);

    //2.  Function Define Area

    let handleChange=(e)=>{
        console.log("e.target.name======>",e.target.name)
        console.log("e.target.value======>",e.target.value)
        setPayload({
            ...payload,
            [e.target.name]:e.target.value,
        })
    }
    
    let submitData = ()=>{
        // alert("lllll ")
        console.log("to be submit pYLOAD",payload)
        
        
    }

    return (
        <>   
            {
                console.log("UserInfo----->",userInfo.userInfo.fname)
            }   
            {
                console.log("payload--->",payload)
            }
            <Row>
                <Col sm={11} className='' style={{background: "rgb(0, 148, 133)" ,height:"70px"}}>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-white fs-3 mt-4 ms-3' ></FontAwesomeIcon>
                    <span className='text-white fs-2 ms-3'>Register</span>
                </Col>    
            </Row> 
            <Form className='container mt-5'>
                <Form.Group className="mb-4 border-none position-relative ">
                    <FontAwesomeIcon icon={faMobileAlt} style={{position:"absolute", top:"15px", left:"10px"}}/>
                    <Form.Control  type="number" value={} className='ps-5 myform shadow' name='mobilenumber' onChange={handleChange} placeholder="Mobile Number" />
                </Form.Group>

                <Form.Group className="mb-4 border-none position-relative ">
                    <Row>
                        <Col sm={12} className=''>
                           <Row>
                                <Col className=''>
                                    <FontAwesomeIcon icon={faMessage} style={{position:"absolute", top:"15px", left:"10px"}}/>    
                                    <Form.Control type="text " className='ps-5 myform shadow' name='otp' onChange={handleChange} placeholder="Verification Code" />  
                                </Col>
                                <Col >
                                     <Button type="button" className='btn text-dark shadow w-50 float-end rounded-0 pt-2 pb-2 border-0 'style={{background:"#f5f5f5"}}>OTP</Button>
                                </Col>
                           </Row>
                        </Col>
                    </Row>
                    
                </Form.Group>

                <Form.Group className="mb-4 position-relative">
                <FontAwesomeIcon icon={faKey} style={{position:"absolute", top:"15px", left:"10px"}}/> 
                    <Form.Control className='ps-5'  type="password" name='password' onChange={handleChange} placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4 position-relative">
                    <FontAwesomeIcon icon={faGift} style={{position:"absolute", top:"15px", left:"10px"}}/> 
                    <Form.Control className='ps-5 myform shadow'  type="text" name="rafcode" onChange={handleChange} placeholder="Ref. Code" />
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Row className='text-center '>
                    <Col>
                        <Button className='text-decoration-none text-white rounded-0 pt-2 pb-2 border-0 w-100' 
                            type="button" style={{background:"#009688"}}
                            onClick={()=>{submitData()}}>
                            Register
                        </Button>
                    </Col>
                </Row>
            </Form>
    </>

    );
}

export default Register;
