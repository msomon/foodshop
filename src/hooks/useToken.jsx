
import axios from "axios";
import { useEffect, useState } from "react"

import useAxiosPublick from "./useAxiosPublick";
const useToken = ( user) =>{
    const [token, setToken] = useState('');
    const axiosPublick = useAxiosPublick()
   



    useEffect( () =>{
        
        
        const email =user?.user?.email;
        const name = user?.user?.displayName ;

        const currentUser = {
            email: email ,
            name : name
           };

          


        if(email){

        axiosPublick.put(`/user/${email}`,currentUser)
         .then(res=>{
            if(res?.data.token){
                const accessToken = res.data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            }
            

       
})
  
        }else{



            localStorage.removeItem('accessToken');
        }

    }, [user]);
    return [token];
}

export default useToken;