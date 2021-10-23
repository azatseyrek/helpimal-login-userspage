import React, { useEffect, useState } from "react";

import "../App.css";

const Login = (props) => {

    const {email, setEmail,setPassword, password, hasAccount, setHasAccount, handleLogin, handleSignup, emailError, passwordError} = props


  
  return (

    <section className="login">
    <div className="loginContainer">
      <label>Email</label>
      <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="errorMsg">{emailError}</p>
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="errorMsg">{passwordError}</p>

      <div className="btnContainer">
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Sign in</button>
            <p>
              Don't have an account ?{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>Sign up </button>
            <p>
              Have an account{" "}
              <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
            </p>
          </>
        )}
      </div>
    </div>
  </section>
    
  );
};

export default Login;
