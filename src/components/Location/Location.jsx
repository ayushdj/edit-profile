import React from 'react'
//import TextField from '@material-ui/core/TextField';
import { Row, Col, Form } from 'react-bootstrap';

function Location(props) {
    return(
        <div className="location py-1">
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}> <Form.Label>Location</Form.Label> </Col> 
            </Row>

            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} ><Form.Control type="text"
                    placeholder="e.g. San Francisco, CA" onChange={props.handleLocationChange} value={props.location} name="location"/>
                </Col>
            </Row>
        </div>
    )
}
// <TextField hiddenLabel id="filled-hidden-label-small" defaultValue="Small" variant="filled" size="small"/>
export default Location;