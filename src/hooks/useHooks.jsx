import axios from "axios";
import { useQuery } from "@tanstack/react-query";



 const useHooks = ()=>{ 

    const { refetch, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () =>{
       const res = await  axios.get("http://localhost:5000/foods")
       
       return res.data ;
    
    
    }
      })

 
    return [data]
}


export default useHooks