import React from "react";
import ImageInput from "../../imageInput/ImageInput";
import "../loginPage/SignUpPage.css";

function SignUpPage({ type }) {
  return (
    <div className="title-container">
      <div className="login-form">
        <form method="POST" action="/login">
          <ImageInput
            type={type === "shop" ? "Library Image" : "Profile Picture"}
          />
          <input
            type="text"
            className="user-name"
            placeholder={type === "shop" ? "Shop Name" : "user name"}
          />
          <input
            type="number"
            className="user-phone"
            placeholder="Phone Number"
          />
          <input
            type="email"
            className="user-email"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="user-password"
            placeholder="Password"
          />
          <input type="text" className="state" placeholder="State" />
          <input type="text" className="city" placeholder="City" />
          <input type="number" className="pincode" placeholder="Postal Code" />
          <ImageInput type="document" />
          {type === "shop" ? (
            <div>
              <h1>Ask Geolocation </h1>
            </div>
          ) : (
            ""
          )}

          <input
            type="submit"
            className="submit"
            value="Let's Go"
            placeholder="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
