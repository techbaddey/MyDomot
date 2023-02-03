import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import myDomot from "../assets/myDomotLogo.png";
import domotHero from "../assets/domotHero.jpg";
import login from "../assets/login.png";
import signup from "../assets/signnup.png";




export const Navigation = () => {
  return (
    <div className="hero">
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
      <div class="hero-section">
  <img src={domotHero} alt="myDomot" className="hero-img" />
  <div class="hero-section-content">
    <h1>Grocery Shopping Made Easy</h1>
    <p>Get Your Groceries Delivered Easily and Affordably with <span className="mydomot">My Domot</span></p>
    <button>Get Started</button>
<p>Say goodbye to tedious grocery shopping. Let our experienced shoppers bring the groceries you need right to your doorstep, so you can enjoy more time doing the things you love.</p>

  </div>
</div>
    </div>
  );
};




class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // store values of email and password in localStorage
    localStorage.setItem('email', this.state.email);
    localStorage.setItem('password', this.state.password);
    window.location.href = '/login';
  }

  render() {
  return (
      <div className="login-signup">
        <img src={signup} alt="myDomot" className="logo" />
        <div className="form">
          <p className="p-two">Hi there!</p>
          <p className="p-three">Create a new account</p>
      <form onSubmit={this.handleSubmit}>
            <label>First Name<span>*</span></label>
            <input
              type="text"
              placeholder="First Name"
              required
            />
            <label>Last Name<span>*</span></label>
            <input
              type="text"
              placeholder="Last Name"
              required
            />
            <label>Email<span>*</span></label>
            <input type="email" name="email" value={this.state.email} 
          onChange={this.handleChange} placeholder="Email" required />
            
            <label>Password<span>*</span></label>
            <input type="password" name="password" value={this.state.password} 
          onChange={this.handleChange} placeholder="Password" required />
           
            <input type="submit" value="SIGN UP" />
          </form>
          <p className="p-four">Have an account already?</p>
          <NavLink to="/login">
            <button className="p-one">LOGIN</button>
          </NavLink>
        </div>
      </div>
  );
}
}


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // retrieve values of email and password from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    // if the stored email and password match the inputted values, redirect user to homepage
    if (storedEmail === this.state.email && storedPassword === this.state.password) {
      window.location.href = '/';
    }
  }

  render () {
  return (
    <>
      <div className="login-signup">
        <img src={login} alt="myDomot" className="logo" />
        <div className="form">
          <p className="p-two">Hello there! Welcome back</p>
          <p className="p-three">Log in to your account</p>
      <form onSubmit={this.handleSubmit}>
            <label>Email<span>*</span></label>
            <input type="email" name="email" value={this.state.email} 
          onChange={this.handleChange} required />
            <label>Password<span>*</span></label>
            <input type="password" name="password" value={this.state.password} 
          onChange={this.handleChange} required />
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
}
}


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