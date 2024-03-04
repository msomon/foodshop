
import { useQuery } from "@tanstack/react-query";
import useAxiosPublick from "./useAxiosPublick";



 const useHooks = ()=>{ 

  const axiosPublick = useAxiosPublick()

    const { refetch, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () =>{
       const res = await axiosPublick.get("/foods")
       return res.data ;
    
    
    }
      })

 
    return [data ,refetch]
}


export default useHooks