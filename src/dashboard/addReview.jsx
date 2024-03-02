import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register,reset,formState: { errors }, handleSubmit } = useForm();
   const [rating, setRating] = useState(4);

const admin ="false"

  const onSubmit = data => {


    const review = {
      email :user?.email ,
      review : rating ,
      comment : data.comment
    }
    
    

    axios.post('http://localhost:5000/addreview',review)
    .then(res=> {
        if(res.data.insertedId){
            reset()
            toast.success('Review add successfully')

        }
        
    
    } )
  

      
      }


  return (

    <div className='h-screen mb-40'>
    <div className=' mx-auto card h-[500px] max-w-lg min-w-80 bg-base-100 shadow-xl px-6 my-8 pb-10 flex justify-center items-center'>
      <h1 className='mt-3 text-2xl mb-4 text-secondary'> 👍 Please Add Review 👍 </h1>
      <form className='flex flex-col gap-2 ' onSubmit={handleSubmit(onSubmit)}>
      <label className="label">
    <span className="label-text">User Email</span>
  </label>
      <input  type="text" readOnly value={user?.email} placeholder="Type here user name" className="input input-bordered w-full max-w-xs" />
    
      <label className="label">
    <span className="label-text">Rating</span>
  </label>



<Rating className=' gap-2'
      style={ {maxWidth: 180 }}
      value={rating}
      onChange={setRating}
    />
    


  

      <label className="label">
    <span className="label-text">Comment</span>
  </label>
      <input {...register("comment")} type="text" placeholder="Type here description" className="input input-bordered w-full max-w-xs" required />
     
     {
      user && 
       <input className='btn btn-md btn-primary w-40 mx-auto mb-8 mt-3 ' type="submit" value='Add Review' /> 

     }

    </form>
    </div>
    </div>
  );
};

export default AddReview;