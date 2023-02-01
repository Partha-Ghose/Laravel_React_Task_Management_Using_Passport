import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { publicUrl } from "../../constant";
import { updateProject } from "../../services/ProjectService";


function ProjectEdit(props) {
    const [projectList, setProjectList]= useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(props.projectList.name);
    const [description, setDescription] = useState(props.projectList.description);
    const [status, setStatus] = useState(props.projectList.status);

    const [validationError,setValidationError] = useState({})

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        
        const postData = {
            name : name,
            description : description,
            status : status,
        }
        const response = await updateProject(postData, props.projectList.id);

        // // console.log('getData ', getData);
        if(response.success){
            // setName('');
            // setDescription('');
            // alert('Project Added');
            // console.log('new response ', response);
            props.onCreateProject(response.data);
            setLoading(false);
            // navigate(`${publicUrl}projects/view/${props.projectList.id}`);
        }else{
            // console.log(response);
            setValidationError(response.message);
            setLoading(false);
            // alert('Error');
        }
    }
    
    return ( 
        <>
        <Card>
            <Card.Body>
            <h5>Project Edit</h5>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Project Status</Form.Label>
                                <Form.Select aria-label="Default select example" value={status} onChange={(e)=> setStatus(e.target.value)}>
                                    <option>--select--</option>
                                    <option value="0">Pending</option>
                                    <option value="1">Complete</option>
                                </Form.Select>                                {
                                    validationError.status ?
                                    <p className="text-danger">{validationError.status}</p>
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
                        </div>
                        <div className="col-md-6">
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
                        </div>
                    </div>
                    
                </Form>
            </Card.Body>
        </Card>
        </>
     );
}

export default ProjectEdit;