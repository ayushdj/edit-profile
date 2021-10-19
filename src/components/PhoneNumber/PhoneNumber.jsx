/*
    Importing the necessary react components
*/
import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

/**
 * Function that renders the phone number component
 * @param {*} props the props passed to this function
 * @returns the phone number component
 */
function PhoneNumber(props) {
    return (
        <div className="phoneNumber py-2">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Phone Number</Form.Label> </Col> 
            </Row>    
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}><PhoneInput placeholder="Enter phone number" onChange={props.handlePhoneNumber} value={props.number}/>
                </Col>
            </Row>
        </div>
    )
}

export default PhoneNumber;