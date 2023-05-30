import React, { useState } from 'react';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import "../loginPage/LoginPage.css";

function LoginPage() {
  const [currentPage, setCurrentPage] = useState('signup');

  const setCurrentPageHandler = (page) => {
    page === 'signup' ? setCurrentPage('signin') : setCurrentPage('signup');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>{currentPage === 'signup' ? 'Sign Up' : 'Log In'}</h1>
      </div>

      <div className="login-content">
        {currentPage === 'signup' ? <SignUpPage /> : <SignInPage />}
      </div>

      <div className="login-toggle">
        <button onClick={() => setCurrentPageHandler(currentPage)}>
          {currentPage === 'signup' ? 'Log In' : 'Sign Up'}
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
