import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {


    const [user] = useAuthState(auth)

    const admin ="false"


    return (
        <div className="drawer drawer-mobile h-80 ">
            
        {/* <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">Dashboard
      </label> */}
       <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
       <div className="drawer-content">
           <h2 className='lg:text-2xl sm:text-sm ml-4 font-bold text-purple-500'>Welcome <span className='text-primary'>{user?.displayName}</span> to your Dashboard</h2>

           {
       user&&  <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost bg-blue-500 w-28 mt-3 ml-52 lg:hidden md:hidden flex justify-end">Dashboard
      </label>
      }     
    
           
           <Outlet></Outlet>
       </div>
       
       <div className="drawer-side mt-10 ">
           <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
           <ul className="menu p-4 overflow-y-auto w-32 bg-base-100 text-base-content rounded-lg">
               {/* <!-- Sidebar content here --> */}
               
       
               {
                (user) && <>
               <li><NavLink to='myorders' >My Orders</NavLink></li>
               <li><NavLink to="addreview">Add Review</NavLink></li>
               
                   </>
               }


               {/* { admin && <>
               <li><Link to="users">Users</Link></li>
               <li><NavLink to="addproduct">Add Product</NavLink></li>
               <li><NavLink to="manageorders">Manage All Orders</NavLink></li>
               <li><NavLink to="manageproducts">Manage All Products</NavLink></li>
              
               </>
               
               } */}
               
           </ul>
          
       </div>
   </div>
    );
};

export default Dashboard;