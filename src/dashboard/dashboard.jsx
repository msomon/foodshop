import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex'>

        <div className='flex-1'>
          
            <Outlet></Outlet>
        </div>
            
        </div>
    );
};

export default Dashboard;