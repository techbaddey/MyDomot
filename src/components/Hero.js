import React, { useState } from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import myDomot from "./myDomotLogo.png";



export const Navigation = () => {
  return (
    <>
      <div className="navbar">
        <img src={myDomot} alt="myDomot" className="logo" />
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/login" className="nav-link nav-btn">
            Login/SignUp
          </Link>
        </nav>
      </div>
    </>
  );
};


export const SignupPage = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <img src={myDomot} alt="myDomot" className="logo" />
        <div className="form">
          <p className="p-two">Hi there!</p>
          <p className="p-three">Create a new account</p>
          <form onSubmit={``}>
            <label>First Name<span>*</span></label>
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={onFirstNameChange}
              required
            />
            <label>Last Name<span>*</span></label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={onLastNameChange}
              required
            />
            <label>Email<span>*</span></label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
              required
            />
            <label>Password<span>*</span></label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
              required
            />
            <input type="submit" value="SIGN UP" />
          </form>
          <p className="p-four">Have an account already?</p>
          <NavLink to="/login">
            <button className="p-one">LOGIN</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};


export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <img src={myDomot} alt="myDomot" className="logo" />
        <div className="form">
          <p className="p-two">Hello there! Welcome back</p>
          <p className="p-three">Log in to your account</p>
          <form onSubmit={``}>
            <label>Email<span>*</span></label>
            <input type="text" value={email} onChange={onEmailChange} required />
            <label>Password<span>*</span></label>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              required
            />
            <a href="#" className="forgot">
              Forgot Password?
            </a>
            <input type="submit" value="LOGIN" />
          </form>
          <p className="p-four">Don't have an account?</p>
          <NavLink to="/signup">
            <button className="p-one">CREATE AN ACCOUNT</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};


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