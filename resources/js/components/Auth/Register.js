import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { publicUrl } from "../constant";
import { registerUser } from "../services/AuthService";


function Register() {
    const [projectList, setProjectList]= useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const [validationError,setValidationError] = useState({});
    console.log('validationError ', validationError);
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setLoading(false);
        }

        setValidated(true);

        if (form.checkValidity()){
            const postData = {
                name : name,
                email : email,
                password : password,
                password_confirmation : password_confirmation,
            }
            const response = await registerUser(postData);
    
            // console.log('getData ', getData);
            if(response.success){
                setName('');
                setEmail('');
                setPassword('');
                setPasswordConfirmation('');
                // alert('Project Added');
                setLoading(false);
                localStorage.setItem('loginData', JSON.stringify(response));
                navigate(`${publicUrl}login`);
            }else{
                console.log(response);
                setValidationError(response.message);
                setLoading(false);
                localStorage.setItem('loginData', null);
                // alert('Error');
            }
        }
        
    }
    
    return ( 
        <>
        <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
      <div className="header-part">
            <div className="float-left">
                <h2>User Register</h2>
            </div>
            <div className="clearfix"></div>
        </div>
        <Card>
            <Card.Body>
                
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)} />
                            {
                                validationError.name ?
                                <p className="text-danger">{validationError.name}</p>
                                :
                                ''
                            }
                            <Form.Control.Feedback type="invalid">
                                Please Give your name
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                            {
                                validationError.email ?
                                <p className="text-danger">{validationError.email}</p>
                                :
                                ''
                            }
                            <Form.Control.Feedback type="invalid">
                                Please Give your email address
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                            {
                                validationError.password ?
                                <p className="text-danger">{validationError.password}</p>
                                :
                                ''
                            }
                            
                            <Form.Control.Feedback type="invalid">
                                Please Give your password
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter your confirm password" value={password_confirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} />
                            {
                                validationError.password_confirmation ?
                                <p className="text-danger">{validationError.password_confirmation}</p>
                                :
                                ''
                            }
                            
                            <Form.Control.Feedback type="invalid">
                                Please Give your confirm password
                            </Form.Control.Feedback>
                        </Form.Group>


                        {
                            loading ? 
                            <Button variant="info" type="submit" disabled>
                                Signing Up...
                            </Button>
                            :
                            <Button variant="success" type="submit">
                                Sign Up
                            </Button>
                        }
                        
                    </Form>
            </Card.Body>
        </Card>
                    </div>
                    <div className="col-md-3"></div>
                </div>
        </>
     );
}

export default Register;