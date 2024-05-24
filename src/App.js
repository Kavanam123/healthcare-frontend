
import './App.css';
import Booking from './components/Booking/Booking';

import Registration from './components/Registration/Registration';
import Feedback from './components/Feedback/Feedback';
import Homepage from './components/Home/Homepage';
import {Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import EditServices from './components/Admin/EditServices/EditServices';
import Viewbooking from './components/Booking/Viewbooking';
import ConfirmFeedback from './components/Feedback/ConfirmFeedback';
import EditBooking from './components/Admin/EditBooking/EditBooking';
import Navigation from './components/Navigation/Navbar'
import EditSlot from './components/Admin/EditSlot/EditSlot';
import PrivateRoutesAdmin from './components/util/PrivateRoutesAdmin';
import PrivateRoutesUser from './components/util/PrivateRoutesUser';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import EditFeedback from './components/Admin/EditFeedback/EditFeedback';
import EditServiceModel from './components/Admin/EditServices/EditServiceModel';
import AdminRegistration from './components/Admin/AdminRegistrations/AdminRegistration';
function App() {
  return (

    <div className="App">
      <Navigation/>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Registration />} />
     
        <Route element={<PrivateRoutesUser />} >
        <Route path='/booking' element={<Booking />} />
        <Route path='/feedback' element={<Feedback />} />
     
        <Route path='/viewbooking' element={<Viewbooking />} />  
        <Route path='/confirmfeedback' element={<ConfirmFeedback />}/>
        </Route>
 
          <Route element={<PrivateRoutesAdmin />} >  
        <Route path='/admin/home' element={<AdminHome/>}/>
        <Route path='/adminbooking' element={<EditBooking/>}/>
        <Route path='/adminservices' element={<EditServices/>}/>
        <Route path='/adminfeedback' element={<EditFeedback/>}/>
        <Route path='/adminedit' element={<EditServiceModel/>}/>
       
        <Route path='/adminslot' element={<EditSlot/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/adminregistrations' element={<AdminRegistration/>}/>

          </Route>   
          
      </Routes>
    </div>
  );
}

export default App;
