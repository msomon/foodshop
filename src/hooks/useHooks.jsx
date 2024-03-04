import axios from "axios";
import { useQuery } from "@tanstack/react-query";



 const useHooks = ()=>{ 

    const { refetch, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () =>{
       const res = await  axios.get("http://localhost:5000/foods", { headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }})
       
       return res.data ;
    
    
    }
      })

 
    return [data ,refetch]
}


export default useHooks