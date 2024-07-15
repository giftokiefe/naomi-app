import React from 'react'
import './Reasons.css'
import { useNavigate } from 'react-router-dom';


const Reasons = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/todowrapper')
  }

  return (
   <div className="card">
     <p className="text">
       I love you because you are kind, sweet,
       and beautiful both inside and out.
       Your intelligence and emotional understanding amaze me every day.
       You care deeply for those around you,
       and your presence makes my world brighter
      </p>
      <button className="btn" onClick={handleClick}>
        Here's something i built for you ❤
      </button>
   </div>
  )
}

export default Reasons