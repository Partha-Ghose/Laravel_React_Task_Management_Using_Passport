import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { publicUrl } from "../../constant";
import { deleteTask, updateTask } from "../../services/TaskService";
import { FaSearch } from 'react-icons/fa';

function TaskView(props) {
    
    const toggleTaskStatus = async (task)=> {
        // alert('ok', taskId);
        if(task.status === 0){
            task.status = 1;
        }else{
            task.status = 0;
        }
        
        const response = await updateTask(task);

        props.onEditTask();
        console.log(response);
    }

    const handleDeleteTask = async (id)=> {
        
        const response = await deleteTask(id);

        // console.log('getData ', getData);
        if(response.success){
            // getAllProject();
            props.onEditTask();
        }else{
            console.log(response);
            // setLoading(false);
        }
    }
    const [projectList, setProjectList]= useState(props.projectList.tasks);
    const [searchList, setSearchList]= useState(props.projectList.tasks);
    const setSearchData =(e)=> {
        let searchText = e.target.value;
        // setLoading(false);
        if(searchText.length>0){
            // setLoading(false);
            const searchData = projectList.filter(function(item){
                const itemData = item.name +' '+item.description;
                const textData = searchText.trim().toLowerCase();
                return itemData.toLowerCase().indexOf(textData) !== -1;
            });
            setSearchList(searchData);
            // setLoading(true);
        }else{
            setSearchList(projectList)
            // props.onEditTask();
            console.log('xxx');
            // setLoading(true);
        }
        // console.log('searchList ', searchList);
    }
    
    return ( 
        <>
        <div className="row">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
                <Form.Control
                placeholder="Search......."
                aria-label="Username"
                aria-describedby="basic-addon1" onChange={(e)=>setSearchData(e)}
                />
            </InputGroup>
                {
                    searchList?.map((task, index)=> (
                        <div className="col-md-6 mb-3" key={index}>
                            <Card>
                                
                                <Card.Header>
                                    <div className="float-left">{ task?.name }</div>
                                    <div className="float-right">
                                        <Button className={`btn btn-sm btn-${task.status ? 'success' : 'primary'}`} onClick={() => toggleTaskStatus(task)}>{task.status ? 'Complete' : 'Pending'}</Button>
                                        <Button className={`btn btn-sm btn-danger`} onClick={() => handleDeleteTask(task.id)}>Delete</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>{ task?.description }</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
                </div>
        </>
     );
}

export default TaskView;