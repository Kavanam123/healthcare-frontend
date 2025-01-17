import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import Navigation from '../Navigation/Navbar';
import './Feedback.css';
 
function Feedback() {
  const navigate = useNavigate()
  const {userid} = useContext(AuthContext)
 
  const[info,setInfo] = useState()
 
  const handleChange = (e)=>{
    setInfo((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
 
  const handleSubmit = async (e)=>{
    e.preventDefault()
 
    try{
      const reqObj = {
        ...info,
        // service_Id:1,
        reg_Id: userid,
        commenting_Date: new Date()
 
      }
      const feed= await axios.post("https://localhost:7249/api/Feedbacks", reqObj)
     
        alert("Feedback submitted successfully")
        navigate("/confirmfeedback")
 
        }
        catch(e){
          console.log(e);
          alert(`An error occurred: ${e.message}`);
        }
   
 
  }
 
  return (
    <>
    <Navigation />
    <div className='reg-container'>
    <div className='reg-box'>
    <h1>Feedback</h1>
    <form className="form">
      <label>
        Comment:
        <textarea name="command" onChange={handleChange}/>
      </label>
      <label>
        Rating:
        <select name="rating" onChange={handleChange}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
     
        <button onClick={handleSubmit} className="feedback-btn" >Submit feedback </button>
    </form>
    </div>
    </div>
    </>
  );
}
 
export default Feedback;