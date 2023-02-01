import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { publicUrl } from "../../constant";
import { storeNewProject } from "../../services/ProjectService";


function ProjectCreate() {
    const [projectList, setProjectList]= useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [validationError,setValidationError] = useState({})
    console.log('validationError ', validationError);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        
        const postData = {
            name : name,
            description : description,
        }
        const response = await storeNewProject(postData);

        // console.log('getData ', getData);
        if(response.success){
            setName('');
            setDescription('');
            // alert('Project Added');
            setLoading(false);
            navigate(`${publicUrl}projects`);
        }else{
            console.log(response);
            setValidationError(response.message);
            setLoading(false);
            // alert('Error');
        }
    }
    
    return ( 
        <>
      <div className="header-part">
            <div className="float-left">
                <h2>Project Add : <Badge bg="secondary">55</Badge></h2>
            </div>
            <div className="float-right">
                <Link to={`${publicUrl}projects`} className="btn btn-sm btn-info">All Project</Link>
            </div>
            <div className="clearfix"></div>
        </div>
        <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter project name" value={name} onChange={(e)=> setName(e.target.value)} />
                        {
                            validationError.name ?
                            <p className="text-danger">{validationError.name}</p>
                            :
                            ''
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="description" value={description} as="textarea" onChange={(e)=> setDescription(e.target.value)} />
                        {
                            validationError.description ?
                            <p className="text-danger">{validationError.description}</p>
                            :
                            ''
                        }
                    </Form.Group>

                    {
                        loading ? 
                        <Button variant="primary" type="submit" disabled>
                            Saving...
                        </Button>
                        :
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    }
                    
                </Form>
            </Card.Body>
        </Card>
        </>
     );
}

export default ProjectCreate;