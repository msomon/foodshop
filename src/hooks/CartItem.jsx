import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {useQuery} from '@tanstack/react-query'
import useAxiosPublick from "./useAxiosPublick";



 const CartItem = ()=>{

    const [user] = useAuthState(auth)
    const axiosPublick = useAxiosPublick()
    

        const { refetch, data:cart } = useQuery({
            queryKey: ['cart'],
            queryFn: async () =>{
           const res = await axiosPublick.get(`/carts?email=${user?.email}`,);

          return res.data ;
        
        
        }
          })
        
       
       
    
  return [cart,refetch]
}


export default CartItem
