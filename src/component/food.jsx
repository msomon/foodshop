import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import CartItem from '../hooks/CartItem';


const Food = ({food}) => {
  
    const {_id,name,image,price,description} = food ;

  ;

    const navigate = useNavigate()

    const [cart,refetch] = CartItem()
    const [quantity ,setQuantity] = useState()
    const[user] =useAuthState(auth)


    const AddtoCart =(item)=>{
    

  //     if(user && user.email){

  //       const cartItem ={
  //         name:item.name,
  //         image:item.image ,
  //         price:item.price ,
  //         quantity:quantity,
  //         email:user?.email
  //       }
  
    
  // // console.log(cartItem);

  //       axios.put(`http://localhost:5000/addToCart/${item._id}`,cartItem)
  //              .then( res =>{
  
  //               if(res.data){
  //                 toast.success(`${item.name} Added successfully`)
  //                 refetch()
  //               } }   )


  //     } else{

  //       navigate("/login")
  //       toast("Please login")
  //     }


  //     const selected =cart?.find(data=> data?.name == item?.name )
      
  //     if(selected?.quantity){
  //       const quantity = selected?.quantity + 1
      
  //         setQuantity(quantity)
         
  //       }
  //       else{
    
  //         setQuantity(1)
  //       }
      
  



    }

    return (
        <div className="foodCart card card-compact w-96 bg-base-100 shadow-xl justify-center items-center mx-auto">
      
  <figure><img className='h-60 w-60 rounded-lg mt-2' src={image} alt="Shoes" /></figure>
  <div className="card-body justify-center text-center">
    <h2 className="text-2xl">{name}</h2>
    <p>{description}</p>
    <h1 className="text-xl">${price}</h1>
    <div className="card-actions justify-center ">
      <button onClick={()=> AddtoCart(food)}  className="btn cartBtn">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default Food;