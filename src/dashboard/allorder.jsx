import React, { useState } from 'react';

const Allorder = ({order}) => {

    // const deleteItem =()=>{
        
    // }

   
    
    
    return (

        <div className="">


{
    

    order?.map(a=>(



<div className='flex flex-row w-[320px] lg:w-[350px] bg-base-100 shadow-xl mx-auto' key={a._id}>
    <div>
    <figure><img className='h-20 w-40 rounded-lg mt-2' src={a.image} alt="Shoes" /></figure>

    </div>

  <div className="card-body justify-center text-center">
    <h2 className="text-2xl">{a.name}</h2>
   
  </div>

  <div>
    <h1 className="text-xl">${a.price}</h1>

    </div>
    
    {/* <div className="card-actions justify-center ">
      <button onClick={()=> deleteItem(order)}   className="btn cartBtn">Add to cart</button>
    </div> */}

 </div>





        
    ))

}



</div>
    );
};

export default Allorder;