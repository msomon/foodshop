
import { useQuery } from "@tanstack/react-query";
import axios from "axios";



 const useHooks = ()=>{ 



    const { refetch, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () =>{
       const res = await axios.get("https://foodshop-server.onrender.com/foods")
       return res.data ;
    
    
    }
      })

 
    return [data ,refetch]
}


export default useHooks