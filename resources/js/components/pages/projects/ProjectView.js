import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { publicUrl } from "../../constant";
import TaskCreate from "../tasks/TaskCreate";
import TaskView from "../tasks/TaskView";
import ProjectEdit from "./ProjectEdit";


function ProjectView() {
    const [projectList, setProjectList]= useState([]);
    const [loading, setLoading] = useState(false);
    const [toggleTask, setToggleTask] = useState(false);
    const [toggleProject, setToggleProject] = useState(false);

    const userId = useParams();

    // console.log('data ', userId);
    
    useEffect(()=>{
        // console.log('data is comming');
        getProjectDetails();
    },[])

    const getProjectDetails =()=>{
        axios.get(`http://localhost/lreact/api/projects/${userId.id}`)
        .then(res => {
            setProjectList(res.data.data);
            setLoading(true);
        });
    }

    function toggleTaskAdd(){
        setToggleTask(!toggleTask);
        setToggleProject(false);
    }

    function toggleProjectEdit(){
        setToggleProject(!toggleProject);
        setToggleTask(false);
    }

    const handleTask =(task)=> {
        setToggleTask(false);
        let tasks = projectList.tasks;
        tasks.unshift(task);
    }
    
    const handleProject =(data)=> {
        setToggleProject(false);
        setProjectList(data);
    }
    const handleEditTask =()=> {
        getProjectDetails();
        console.log('yyyyyy');
    }
    
    return ( 
        <>
        <div className="header-part">
            <div className="float-left">
                <h2>Project View : <Badge bg="secondary">{ loading ? projectList?.length : '' }</Badge></h2>
            </div>
            <div className="float-right">
                <Link className="btn btn-sm btn-info" to={`${publicUrl}projects`}>See All Project</Link>
                <Button className="btn btn-sm btn-primary ml-2" onClick={toggleProjectEdit}>{!toggleProject ? "Edit Project": "Cancel Project"}</Button>
                <Button className="btn btn-sm btn-info ml-2" onClick={toggleTaskAdd}>{!toggleTask ? "Add Task": "Cancel Task"}</Button>
            </div>
            <div className="clearfix"></div>
        </div>
        <hr />
        {
            toggleTask ?
            <TaskCreate projectId={userId?.id} onCreateTask={handleTask} />
            :
            null
        }
        {
            toggleProject ?
            <ProjectEdit projectList={projectList} onCreateProject={handleProject} />
            :
            null
        }
        <hr />
        {
            !loading ? <div className="text-center"><Spinner animation="grow" /></div> :
            <>
                <Card className="mb-2">
                    <Card.Header>{ projectList?.name } <Badge bg="secondary">{ projectList?.tasks.length }</Badge></Card.Header>
                    <Card.Body>
                        <Card.Text>{ projectList?.description }</Card.Text>
                    </Card.Body>
                    
                </Card>

                <hr />
                <br />

                <TaskView projectList={projectList} onEditTask={handleEditTask} />
            </> 
         
        }
        
        </>
     );
}

export default ProjectView;