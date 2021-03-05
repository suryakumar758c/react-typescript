import React from 'react'
import { Form, FormGroup, FormControl, Row, Col, Container, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import { onSubmit } from '../../callbacks/login/login'

const Login = () => {

    const dispatch = useDispatch()

    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-center">
                        <Form onSubmit={handleSubmit(onSubmit(dispatch))} className="col-lg-4 col-md-5 col-sm-10 col-xs-10">
                            <FormGroup>
                                <h3>Login</h3>
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    type="text" 
                                    ref={register({
                                        required:true
                                    })} 
                                    name="email" 
                                    placeholder="Email"
                                    autoComplete="off" />
                                {errors.email?.type === "required" && <span className="text-danger">This field is required.</span>}
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="password" ref={register({
                                    required:true
                                })} name="password" placeholder="Password" autoComplete="off" />
                                {errors.password?.type === "required" && <span className="text-danger">This field is required.</span>}
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" variant="success">Sign In</Button>
                            </FormGroup>
                            <FormGroup>
                                <label>If you don't have account to signin please 
                                    <Link to="/register"> signup</Link>
                                </label>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login