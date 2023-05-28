import React from 'react'
import ImageInput from '../../imageInput/ImageInput'
import '../loginPage/LoginPage.css' 

function LoginPage({type}) {
  return (
  <div className="title-container" >
    <h1 className="title">Log In</h1>
  
  <div className="login-form">
   <form method='POST' action='/login'>
    <ImageInput type="Profile Picture" />
    <input type="text" className="user-name" placeholder="user name" />
    <input type="number" className="user-phone"  placeholder="Phone Number"/>
    <input type="email" className="user-email" placeholder="Email Address" />
    <input type="password" className="user-password"  placeholder="Password"/>
    <input type="text" className="state"  placeholder="State"/>
    <input type="text" className="city"  placeholder="City"/>
    <input type="number" className="pincode" placeholder="Postal Code"/>
    <ImageInput type="document"/>
    <input type="submit" className="submit" value="Login" placeholder="Login"/>
    {(type==='shop')?
     <h1>Ask additional shop details</h1>
    : <h1>Good to go</h1>}

   </form>
  </div>
  </div>
  
    
    
  )
}

export default LoginPage