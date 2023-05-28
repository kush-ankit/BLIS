import React from 'react'
import '../loginPage/LoginPage.css' 

function LoginPage({type}) {
  return (<>
  <div className="title-container" >
    <h1 className="title">Log In</h1>
  </div>
  <div className="login-form">
   <form method='POST' action='/login'>
    <input type="file" className="user-image"  placeholder="user image"  />
    <input type="text" className="user-name" placeholder="user name" />
    <input type="number" className="user-phone"  placeholder="Phone Number"/>
    <input type="email" className="user-email" placeholder="Email Address" />
    <input type="password" className="user-password"  placeholder="Password"/>
    <input type="text" className="state"  placeholder="State"/>
    <input type="text" className="city"  placeholder="City"/>
    <input type="number" className="pincode" placeholder="Postal Code"/>
    <input type="file" className="user-document" placeholder="id proff" />
    <input type="submit" className="submit" value="Login" placeholder="Login"/>

   </form>
  </div>
  </>
    
    
  )
}

export default LoginPage