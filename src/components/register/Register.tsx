import React, { useEffect } from 'react'
import { Form, FormGroup, FormControl, Row, Col, Container, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
// import Test from '../../redux/actions/Test'

import { counter, onSubmit } from '../../callbacks/register/register'

const Register = () => {

    const count:number = useSelector((state:any):number => state.counter.count)

    const registerResult = useSelector((state:any):any => console.log('reg state',state))

    const dispatch = useDispatch()

    const { register, handleSubmit, watch, errors } = useForm();

    useEffect(counter(dispatch),[])

    useEffect(() => console.log('errors',errors),[errors])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12} className="d-flex justify-content-center">
                        <Form onSubmit={handleSubmit(onSubmit(dispatch))} className="col-lg-4 col-md-5 col-sm-10 col-xs-10">
                            <FormGroup>
                                <h3>Register</h3>
                                {/* <p>Clicked {count} times</p> */}
                            </FormGroup>
                            <FormGroup>
                                <FormControl 
                                    type="text" 
                                    ref={register({
                                        required:true,
                                        pattern:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                                    })} 
                                    name="email" 
                                    placeholder="Email"
                                    autoComplete="off" />
                                {errors.email?.type === "required" && <span className="text-danger">This field is required.</span>}
                                {errors.email?.type === "pattern" && <span className="text-danger">Please enter valid email.</span>}
                            </FormGroup>
                            <FormGroup>
                                <FormControl type="password" ref={register({
                                    required:true,
                                    minLength:8,
                                    maxLength:13,
                                    pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                })} name="password" placeholder="Password" autoComplete="off" />
                                {errors.password?.type === "required" && <span className="text-danger">This field is required.</span>}
                                {errors.password?.type === "minLength" && <span className="text-danger">Password should be minimum 8 characters.</span>}
                                {errors.password?.type === "maxLength" && <span className="text-danger">Password should not exceed maximum 8 characters.</span>}
                                {errors.password?.type === "pattern" && <span className="text-danger">Password should have atleast one uppercase letter, one lowercase letter, one number and one special character.</span>}
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" onClick={counter(dispatch)} variant="success">Sign Up</Button>
                            </FormGroup>
                            <FormGroup>
                                <label>If you already have account, please 
                                    <Link to="/login"> signin</Link>
                                </label>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register