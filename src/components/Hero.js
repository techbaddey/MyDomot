import React, { useState } from 'react';
import { NavLink, Link, Routes, Route } from "react-router-dom";



export const Navigation = () => {
  return (
    <>
      <div className="navbar">
         <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">About Us</Link>
          <Link to="/" className="nav-link">Contact Us</Link>
          <Link to="/login" className="nav-link nav-btn">Login/SignUp</Link>
        </nav>
      </div>
      </>
  );
};


export const SignupPage = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <>
    <div className="login-signup">
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" value={firstname} onChange={onFirstNameChange} />
        <label>Last Name</label>
        <input type="text" value={lastname} onChange={onLastNameChange} />
        <label>Email</label>
        <input type="text" value={email} onChange={onEmailChange} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordChange} />
        <input type="submit" value="SIGN UP" />
      </form>
    </div>
    </div>
    </>
  );
};
;



export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <>
    <div className="login-signup">
    <div className="form">
      <p>Log in to your account</p>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={onEmailChange} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordChange} />
        <a href="#" className='forgot'>Forgot Password?</a>
        <input type="submit" value="LOGIN" />
      </form>
    </div>
    </div>
    </>
  );
};
;


function Path() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
export default Path;
