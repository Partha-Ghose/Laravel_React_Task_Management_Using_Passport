export const getTaskList =()=>{
    
}
export const storeNewTask =async (data)=>{
    return await axios.post('http://localhost/lreact/api/tasks', data)
        .then(res => {
            return res.data;
        });
}

export const updateTask =async (data)=>{
    return await axios.put(`http://localhost/lreact/api/tasks/${data.id}`, data)
        .then(res => {
            return res.data;
        });
}

export const deleteTask = async (id)=>{
    return await axios.delete(`http://localhost/lreact/api/tasks/${id}`)
        .then(res => {
            return res.data;
        });
}