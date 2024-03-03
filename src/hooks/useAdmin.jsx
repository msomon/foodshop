import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const UseAdmin = () => {

    const [adminLoading, setAdminLoading] = useState(true);

    const [admin, setAdmin] = useState();
    const [user]= useAuthState(auth)

    useEffect( ()=>{

        if(user?.email){

        

        axios.get(`http://localhost:5000/users/admin/${user?.email}`)
        .then(res=>{
    
        console.log(res.data.role);
    
        setAdminLoading(false)
        })

    }
    },[])

   
   
};

export default UseAdmin;