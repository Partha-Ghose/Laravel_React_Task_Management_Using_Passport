import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { publicUrl } from "../constant";
import { loginUser } from "../services/AuthService";


function Login() {
    const [projectList, setProjectList]= useState([]);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validationError,setValidationError] = useState({});
    const [messError,setMessError] = useState({});
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
                email : email,
                password : password,
            }
            const response = await loginUser(postData);
    
            console.log('xx response ', response);
            if(response.success){
                setEmail('');
                setPassword('');
                // alert('Project Added');
                setLoading(false);
                localStorage.setItem('loginData', JSON.stringify(response));
                // navigate(`${publicUrl}projects`);
                window.location.href = publicUrl;
            }else{
                console.log(response);
                setValidationError(response.message);
                setMessError(response.message);
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
                <h2>User Login</h2>
            </div>
            <div className="clearfix"></div>
        </div>
        <Card>
            <Card.Body>
                
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    {
                                validationError.length > 0 ?
                                <p className="text-danger">{validationError}</p>
                                :
                                ''
                            }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
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


                        {
                            loading ? 
                            <Button variant="info" type="submit" disabled>
                                Signing In...
                            </Button>
                            :
                            <Button variant="success" type="submit">
                                Sign In
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

export default Login;