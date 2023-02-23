import React from 'react'
import axios from 'axios'


export default function Login() {
  const loginHandle = () =>{
    e.preventDefault()
    try{
      const res = await axios.get("/login/",{
        mobile,
        pwd,
    }
      )
  }
}
   
  
  return (
    <div>
        <botton type="submit" className="btn btn-primary" onClick={loginHandle}>
            Login
        </botton>
    </div>
  )
}

