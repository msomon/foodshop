import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {useQuery} from '@tanstack/react-query'




 const CartItem = ()=>{

    const [user] = useAuthState(auth)
   

        const { refetch, data:cart } = useQuery({
            queryKey: ['cart'],
            queryFn: async () =>{
           const res = await axios.get(`https://foodshop-server.onrender.com/carts?email=${user?.email}`,);

          return res.data ;
        
        
        }
          })
        
       
       
    
  return [cart,refetch]
}


export default CartItem
