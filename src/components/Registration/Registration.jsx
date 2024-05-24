 
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Registration.css';

function Registration() {

  const navigate = useNavigate()

  const [info, setInfo] = useState({})
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.name]:e.target.value}))
    if (!e.target.value) {
      setErrors((prev) => ({...prev, [e.target.name]: 'This field is required'}));}
    
    else if (e.target.name === 'Phn_No' && e.target.value.length !== 10) {
      setErrors((prev) => ({...prev, Phn_No: 'Phone number must be exactly 10 digits.'}));
    } else if (e.target.name === 'Email_Id' && !e.target.value.endsWith('@gmail.com')) {
      setErrors((prev) => ({...prev, Email_Id: 'Email should end with @gmail.com'}));
    }
    else if (e.target.name === 'confirmPassword' && e.target.value !== info.password) {
      setErrors((prev) => ({...prev, confirmPassword: 'Password not matched'}));}
     else {
      setErrors((prev) => ({...prev, Phn_No: null, Email_Id: null,confirmPassword: null}));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['first_Name', 'last_Name', 'Email_Id', 'password', 'confirmPassword', 'Phn_No'];
    for (let field of requiredFields) {
      if (!info[field]) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }
  
    if (errors.Phn_No || errors.Email_Id || errors.confirmPassword) {
      alert(errors.Phn_No || errors.Email_Id || errors.confirmPassword);
      return;
    }
    try{
      const res = await axios.post("https://localhost:7249/api/Registrations", info)
      console.log(res.data)
      alert("Registered successfully. Please login now!")
      navigate("/login")
    }
    catch(e){
      alert(e.response.data.title)
    }
  }

  return (
    <div className='reg-container'>
    <div className='reg-box'>
    <h1>Register Now</h1>
    <form className="form">
      <label>
        First Name:
        <input type="text" name="first_Name" onChange={handleChange}/>
      </label>
      <label>
        Last Name:
        <input type="text" name="last_Name" onChange={handleChange}/>
      </label>
      <label>
        Email:
        <input type="email" name="Email_Id" onChange={handleChange}/> 
        {errors.Email_Id && <p>{errors.Email_Id}</p>}
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange}/>
        
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" onChange={handleChange}/>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </label>
      <label>
        Phone Number:
        <input type="tel" name="Phn_No" onChange={handleChange}/>
        {errors.Phn_No && <p>{errors.Phn_No}</p>}
      </label>
      <input type="submit" value="Register" onClick={handleSubmit} />

      <label>
        Already registered?<Link>
        <Link to="/Login" className='login-link'> Login</Link></Link>
      </label>
    </form>

    </div>
   
    </div>
  );
}

export default Registration;

