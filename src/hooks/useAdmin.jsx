
import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = user => {
    const axiosSecure = useAxiosSecure()
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);


    useEffect( () =>{
        const email = user?.email;

        if(email){

   
        axiosSecure.get(`/users/admin/${email}`)
     .then(res=>{
    
     setAdmin(res.data.admin)
        setAdminLoading(false)
        })
            
    }     
       
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;