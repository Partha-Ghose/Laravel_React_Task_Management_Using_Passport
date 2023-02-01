
export const checkIfAuthenticate =()=> {
    const getLoginData = localStorage.getItem('loginData');

    // console.log('getLoginData xxx ', getLoginData);

    if(getLoginData !== null){
        const data = JSON.parse(getLoginData);

        // console.log('getLoginData ', data.user);
        if(data.success && data.access_token !==null){
            return data.user;
    }
    }
    
    // console.log('xxxxx');
    return false;
}

export const registerUser =async (data)=>{
    return await axios.post('http://localhost/lreact/api/auth/register', data)
        .then(res => {
            return res.data;
        });
}

export const loginUser =async (data)=>{
    return await axios.post('http://localhost/lreact/api/auth/login', data)
        .then(res => {
            return res.data;
        });
}
