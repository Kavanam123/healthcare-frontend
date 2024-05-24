
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './EditFeedback.css';
 
const EditFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getfeedback = async () => {
      const feedbacks = await axios.get("https://localhost:7249/api/Feedbacks");
      const feedbacksWithUserDetails = await Promise.all(
        feedbacks.data.map(async (feedback) => {
          // Assuming you have an API endpoint to get user details by reg_Id
          const userDetails = await axios.get(`https://localhost:7249/api/Registrations/${feedback.reg_Id}`);
          return { ...feedback, user: userDetails.data };
        })
      );
      setFeedbacks(feedbacksWithUserDetails);
    };
    getfeedback();
  }, []);
  // useEffect(()=>{
  //   const getfeedback = async ()=>{
  //     const feedbacks = await axios.get("https://localhost:7249/api/Feedbacks")
  //     setFeedbacks(feedbacks.data)
  //   }
  //   getfeedback()
  // }, [])
 
  return (
    <div className="feedback-container">
      <h1>Feedbacks</h1>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback-card">
         
          <p> Name : {feedback.user.first_Name}</p>
          <p>Feedback : {feedback.command}</p>
          <p>Rating : {feedback.rating}</p> 
        </div>
      ))}
    </div>
  );
};
 
export default EditFeedback;
 

