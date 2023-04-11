import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const dashboard =  <React.Fragment>
        <li><Link to='/order'>Order</Link></li>
         <li><Link to='/booking'>Booking</Link></li>
        <li><Link to='/about'>About</Link></li>
    </React.Fragment>
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
        
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-accent text-base-content">
            {dashboard}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;