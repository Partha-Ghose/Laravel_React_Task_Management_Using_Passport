import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { publicUrl } from "../../constant";
import { deleteProject, getProjectList } from "../../services/ProjectService";
import { FaSearch } from 'react-icons/fa';

function ProjectLists() {
    const [projectList, setProjectList]= useState([]);
    const [searchList, setSearchList]= useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        console.log('data is comming');
        getAllProject();
    },[])

    const getAllProject = async()=>{
        
        const response = await getProjectList();

        // console.log('getData ', getData);
        if(response.success){
            setProjectList(response.data);
            setSearchList(response.data);
            setLoading(true);
            // navigate(`${publicUrl}projects`);
        }else{
            console.log(response);
            setLoading(false);
        }
    }
    console.log('projectList ',projectList);

    const handleDeleteProject = async (id)=> {
        
        const response = await deleteProject(id);

        // console.log('getData ', getData);
        if(response.success){
            getAllProject();
        }else{
            console.log(response);
            setLoading(false);
        }
    }

    const setSearchData =(e)=> {
        let searchText = e.target.value;
        // setLoading(false);
        if(searchText.length>0){
            setLoading(false);
            const searchData = projectList.filter(function(item){
                const itemData = item.name +' '+item.description;
                const textData = searchText.trim().toLowerCase();
                return itemData.toLowerCase().indexOf(textData) !== -1;
            });
            setSearchList(searchData);
            setLoading(true);
        }else{
            getAllProject();
            setLoading(true);
        }
        console.log('searchList ', searchList);
    }

    return ( 
        <>
        <div className="header-part">
            
            <div className="float-left">
                <h2>Project List : <Badge bg="secondary">{ loading ? projectList?.length : '' }</Badge></h2>
            </div>
            <div className="float-right">
                <Link className="btn btn-sm btn-info" to={`${publicUrl}projects/create`}>+ Create Project</Link>
            </div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                placeholder="Search......."
                aria-label="Username"
                aria-describedby="basic-addon1" onChange={(e)=>setSearchData(e)}
                />
            </InputGroup>
            <div className="clearfix"></div>
        </div>
        <hr />
        {
            searchList.length == 0 ?
            <p className="text-center">No Projects Found</p>
            : null
        }
        {
            !loading ? <div className="text-center"><Spinner animation="grow" /></div> :
            searchList?.map((project, index)=> (
                <Card key={index} className="mb-2">
                    <Card.Header>{ project?.name } <Badge bg="secondary">{ project?.tasks_count }</Badge></Card.Header>
                    <Card.Body>
                        <Card.Text>{ project?.description }</Card.Text>
                        <Button variant="primary" className="m-1 btn-sm">
                            <Link className="text-white" to={`${publicUrl}projects/view/${project.id}`}>View & Edit</Link>
                        </Button>
                        <Button variant="danger" className="m-1 btn-sm" onClick={()=>handleDeleteProject(project.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            ))
        }
        
        </>
     );
}

export default ProjectLists;