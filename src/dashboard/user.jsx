import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,refetch}) => {

    const {name,email,role} = user ;



    const makeAdmin =(email)=>{

    axios.put(`http://localhost:5000/users/admin/${email}`)
    .then(res=>{

       if(res.status == "404"){
        toast.error("Somthing Error")
       }

        if(res.data.modifiedCount > 0 ){
         toast("New Admin Added")
         refetch()
        }
    })


    }


    return (
       
       
        <div className=' md:flex lg:flex ms-5 mt-2'>
        <div className='flex w-[120px] mx-auto justify-center my-4 pt-4'> {email}  </div>
        
       <div className='sm:flex justify-center items-center gap-3 mx-auto' >

       <div>{role != "admin" ?  <button onClick={() => makeAdmin(email)} className='btn btn-secondary'>Add Admin</button> : <button className='btn btn-success '  disabled >Already Admin</button> }</div>
        <div><button className='btn btn-warning'>Remove</button></div>
       </div>

       <div className="divider"></div>
       </div>
       
      
    );
};

export default User;