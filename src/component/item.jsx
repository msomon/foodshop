import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import CartItem from '../hooks/CartItem';

const Item = ({item}) => {
    const {_id,name,image,price,quantity,email} = item 
    const [,refetch] = CartItem()


    const shortName = name.split(' ')[0]




const deleteItem = (data)=>{

    if(data.quantity <= 1){

        axios.delete(`http://localhost:5000/deleteCartItem/${data._id}`)
        .then(res =>{
           if(res.data.acknowledged){
            toast.success("Delete Successfully")
            refetch()
        
           }
        })
    } else{
        const deleteItem ={
            name:data.name,
          image:data.image ,
          price:data.price ,
          email:data?.email ,
          quantity: parseFloat(quantity) - 1 
            
            
          }

        
    
          axios.put(`http://localhost:5000/updateCartItem/${data._id}`,deleteItem)
                 .then( res =>{
    
                  if(res.data.acknowledged){
                    toast.success(`Delete successfully`)
                    refetch()
                  
                  } }   )
    }







}

  
    return (

       
        <div className="flex mb-3 gap-2 lg:gap-5  flex-row h-40 card w-[320px] lg:w-[500px]  bg-base-100 shadow-xl justify-center  items-center mx-auto p-2">
        <div className=" circle ">
                <img className='h-32 w-32 lg:w-40 rounded-lg' src={image} alt="Image Component" />
              </div>
        
          <h1 className="text-2xl">{shortName}</h1>
          <h1 className="text-xl">${price}</h1>
          <h1 className="text-xl">{quantity}</h1>
          <button onClick={()=> deleteItem(item)} className='btn btn-primary'>Delete</button>
         
      </div>

   

      
    );
};

export default Item;