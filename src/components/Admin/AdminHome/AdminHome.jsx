import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navbar';
import './AdminHome.css';
 
const AdminHome = () => {
  // const adminFunctions = ['Manage Users', 'Manage Posts', 'Manage Comments', 'Site Settings'];
 
  return (
   <>
 
   <Navigation />
   <div className='panel-box'>
    <div className='panel-container'>
 
   
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <ul>
        <Link to="/adminbooking">
        <li>Bookings</li>
        </Link>
        <Link to="/adminservices">
        <li>Services</li>
 
        </Link>
        <Link to="/adminslot">
        <li>Slots</li>
 
        </Link>
       
       
      </ul>
    </div>
    </div>
    </div>
   
   </>
  );
};
 
export default AdminHome;