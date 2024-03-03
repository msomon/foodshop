import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';



const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [profiles,setProfiles] = useState([]);
  const [loading,setLoading] = useState(false);
  
  useEffect( ()=>{
    // setLoading(true)
    fetch(`http://localhost:5000/user/myprofile/${user?.email}`, {
      method: 'GET',
      headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
  })
    .then(res =>res.json())
    .then(data=>{
      setLoading(false)
      setProfiles(data)
    })
  },[user]);

  if(loading){
    return <Loading> </Loading>
  }
     

  return (
    <div className=' sm:mx-4 mx-auto w-full  justify-between mt-8 mb-3'>
      
    <div className="card w-[320px] md:w[400px] lg:w-[460px] bg-base-100 shadow-2xl mx-auto "><h3 className='text-center mt-3 text-3xl text-green-500 '>🌹 My Profile 🌹</h3>
<div className="card-body items-center text-center">
<h2 className="card-title">Name:{profiles?.user}</h2>
 <h2 className="card-title">Email: {user?.email}</h2> 
 <h2 className="card-title">Address: {profiles?.address}</h2>
 <h2 className="card-title">Number: {profiles?.number}</h2>
 <h2 className="card-title">Education: {profiles?.education}</h2>
 {
  !user ? <button disabled className='btn btn-primary text-black'><Link to='/login'>Please Login</Link></button> :
      <button className='btn btn-primary'><Link to='/dashboard/updatemyprofile'>ADD OR Update Your Profile</Link></button>
 }
 
</div>

</div>
</div >

  );
};

export default MyProfile;