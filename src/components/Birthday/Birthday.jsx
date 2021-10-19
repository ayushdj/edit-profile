/*
    Importing the necessary react components
*/
import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

/**
 * Function to create birthday component
 * @param {*} props the props passed to the function
 * @returns the birthday component
 */
function Birthday(props) {
    return(
        <div className="birthday">
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Birthday</Form.Label> </Col> 
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}><Form.Control type="date" onChange={props.handleBirthdayChange} value={props.birthday}/>
                    </Col>
                </Row>
            </Form.Group>
        </div>
    )
}

export default Birthday;