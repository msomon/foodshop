import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../Share/Loading';
import { toast } from 'react-toastify';


const AllOrders = () => {

    const { refetch, data } = useQuery({
        queryKey: ['allorders'],
        queryFn: async () =>{
       const res = await axios.get('http://localhost:5000/allorders');
      return res.data ;
    
    }
      })


      if(!data){
        return <Loading></Loading>
      }


      const deleteItem = async(item)=>{

        const res = await axios.delete(`http://localhost:5000/admincancelorder/${item._id}`);

        
        if(res?.data.deletedCount > 0){
        
          toast("Cancel Order")
          refetch()
        }
 

        
    }
      

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3'>
    
            {
                data?.map(order => (

 <div  key={order._id} className="foodCart card card-compact h-fit w-[320px] lg:w-[350px] bg-base-100 shadow-xl justify-center items-center mx-auto gap-3">
    
  <div className="card-body justify-center text-center">
   
    
        <div className=''>  
        {
        order.item.map(i =>
            <div key={i.id} className=' mt-2 flex justify-between items-center ' > 
            <h1 className='text-xl' >{i.name}</h1>
            <img className='rounded-lg h-20 w-32 ' src={i.image} ></img>
        </div>
        )
        }
        </div>
        <h2 className="text-2xl ">{order.email}</h2>
    <h1 className="text-xl">Total:{order.total}</h1>
    <h1 className="text">Time:{order.date}</h1>
    <h1 className="">TransId:{order.transactionId}</h1>
    <div className="card-actions justify-center ">
      <button onClick={()=> deleteItem(order)}   className="btn cartBtn">Cancel Order</button>
    </div>
  </div>
   </div>
                ))
            }
        </div>
    );
};

export default AllOrders;