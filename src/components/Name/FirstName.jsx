import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function FirstName(props) {
    return(
        <div >
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>First Name</Form.Label> </Col> 
            </Row>

            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} ><Form.Control type="text"
                    placeholder="John" onChange={props.handleFirstName} value={props.firstName} name="firstName"/>
                </Col>
            </Row>
        </div>
    )
}
export default FirstName;