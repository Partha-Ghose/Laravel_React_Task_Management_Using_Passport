import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { publicUrl } from "../../constant";
import { storeNewTask } from "../../services/TaskService";


function TaskCreate(props) {
    const [projectList, setProjectList]= useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [project_id, setProjectId] = useState('');
    const [validationError,setValidationError] = useState({})
    console.log('projectId ', props.projectId);

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setLoading(true);
        
        const postData = {
            name : name,
            description : description,
            project_id : parseInt(props.projectId),
        }
        const response = await storeNewTask(postData);

        // console.log('getData ', getData);
        if(response.success){
            setName('');
            setDescription('');
            // alert('Project Added');
            console.log('new response ', response);
            props.onCreateTask(response.data);
            setLoading(false);
            navigate(`${publicUrl}projects/view/${props.projectId}`);
        }else{
            console.log(response);
            setValidationError(response.message);
            setLoading(false);
            // alert('Error');
        }
    }
    
    return ( 
        <>
        <Card>
            <Card.Body>
            <h5>Task Add</h5>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Task Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter project name" value={name} onChange={(e)=> setName(e.target.value)} />
                                {
                                    validationError.name ?
                                    <p className="text-danger">{validationError.name}</p>
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

export default TaskCreate;