import React from 'react'
import { Form, FormGroup, FormControl, Row, Col, Container, Button } from 'react-bootstrap'

const CreatePost = ():JSX.Element => {
    return <>
        <Row className="mt-2">
            <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-center">
                <Form onSubmit={()=>{}} className="col-lg-4 col-md-5 col-sm-10 col-xs-10">
                    <FormGroup>
                        <FormControl 
                            type="text"
                            as="textarea" 
                            name="email" 
                            placeholder="Post something here..."
                            autoComplete="off" />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" variant="success">Post</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </>
}

export default CreatePost