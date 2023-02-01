export const getProjectList = async ()=>{
    return await axios.get('http://localhost/lreact/api/projects')
        .then(res => {
            return res.data;
        });
}
export const storeNewProject =async (data)=>{
    return await axios.post('http://localhost/lreact/api/projects', data)
        .then(res => {
            return res.data;
        });
}

export const updateProject =async (data, id)=>{
    return await axios.put(`http://localhost/lreact/api/projects/${id}`, data)
        .then(res => {
            return res.data;
        });
}

export const deleteProject = async (id)=>{
    return await axios.delete(`http://localhost/lreact/api/projects/${id}`)
        .then(res => {
            return res.data;
        });
}