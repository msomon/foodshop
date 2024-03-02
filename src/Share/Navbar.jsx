
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom'
import auth from '../../firebase.init';
import { BsCart3 } from "react-icons/bs";
import CartItem from '../hooks/CartItem';

function Navbar() {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeItem('accessToken');
};


const [cart] = CartItem()
  const manuItem = <>
  
        <li ><NavLink className='sm:w-20 justify-center' to='/'>Home</NavLink></li>
        <li><NavLink className='sm:w-20 justify-center'  to="/manu">Manu</NavLink></li>

        <li className='relative'><NavLink className='sm:w-20 justify-center '  to="/cart" ><div className="badge text-red-600 absolute -mt-10 -mr-6">+{cart?.length}</div><BsCart3 className='text-2xl' /> </NavLink></li>

        <li className='sm:block md:hidden ms-3 lg:hidden'><NavLink className='sm:w-20 justify-center'  to="/dashboard">Dashboard</NavLink></li>

        <div className="dropdown sm:hidden md:block  lg:block dropdown-hover  mt-2 ">
     <NavLink tabIndex={0} role="button" className=" text-center  btn-md ">Dashboard</NavLink>
     <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box gap-2 w-42">
    <li><NavLink className='sm:w-20 justify-center'  to="dashboard/addreview" >Add Review</NavLink></li>
    <li><NavLink className='sm:w-20 justify-center'  to="dashboard/myOrders" >Myorders</NavLink></li>
    

  </ul>
</div>
    
    <li className='p-0 h-4'>{user ? <button className="text-white text-center justify-center bg-primary font-bold text-sm  " onClick={logout} >Sign Out</button> : <NavLink to="/login">Login</NavLink>}</li>
        
  </>

  return (
    <div className=" mx-auto mt-3 sm:mt-0 bg-base-100 w-full sticky top-0 z-10 ">
    <div className="">


      <div className="dropdown flex sm:flex-row-reverse justify-between sm:mx-8 ">
        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden mb- ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
       
        <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-40 p-2 shadow bg-base-100 rounded-box w-32 gap-3 h-fit pb-2 ">
       {manuItem}
      
        </ul>
        
        <h1 className="text-xl flex items-center md:hidden lg:hidden">Sumon Food </h1>
      </div>
    </div>

        <div className='flex justify-around p-2 sm:bg-white lg:w-2/4 mx-auto rounded-lg '>

       <div className='flex items-center'>
      <h1 className="text-xl hidden  text-center md:block lg:block">Sumon Food </h1>
     </div>

    <div>
      <ul className="menu menu-horizontal px-1 hidden md:flex lg:flex gap-6">
        {manuItem}
        
      </ul>
    </div>

        </div>

  </div>
  )
}

export default Navbar