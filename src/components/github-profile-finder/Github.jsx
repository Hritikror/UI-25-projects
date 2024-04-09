import React from 'react'
import { useState } from 'react'
import User from './User';
import './index.css';
const Github = () => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);  
    const [userName, setUserName] = useState("");


    async function handleSubmit() {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        console.log("App ", data)
        if (data) {
          setUserData(data);
          setLoading(false);
          setUserName('')
        }
    }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData ? <User user={userData}/>  : null}
    </div>
  )
}

export default Github
