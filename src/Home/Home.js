import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import { useState } from 'react';
const Home = () => {
  const [url,setUrl] = useState("/test/SQL");
  return (
    <>
    <h1>Quiz App</h1>
    <div>
        <label htmlFor='selectid'>exam</label>
    <select id='selectid' onChange={(e)=>{
      setUrl("/test/"+e.target.value);
    }}>
        <option value="SQL">SQL</option>
        <option>Linux</option>
        <option>Devops</option>
        <option>Docker</option>
    </select>
    </div>
    <Link to={url}><button>Submit</button></Link>
    </>
  )
}

export default Home
