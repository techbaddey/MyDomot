import React from "react";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import myDomot from "../assets/myDomotLogo.png";
import {
  FiHome,
  FiShoppingCart,
  FiLogIn,
  FiList,
  FiSearch,
  FiClock,
} from "react-icons/fi";
import login from "../assets/login.png";
import signup from "../assets/signnup.jpeg";
import Flowchart from "../components/Flowchart";
import Category from "./Category";
import Grocery from "../components/Grocery";
import Values from "../components/Values";
import Footer from "../components/Footer";
import About from "../components/About";
import Market from "../components/Market";
import Tracker from "./Tracker";
import Cart from "./Cart";
import { Categories } from "./Category";
import groceryOne from "../assets/grocery_one.png";
import groceryTwo from "../assets/grocery_two.png";
import groceryThree from "../assets/grocery_three.png";
import groceryFour from "../assets/grocery_four.png";
import grocerySix from "../assets/grocery_six.png";
import grocerySeven from "../assets/grocery_seven.png";

export const Navigation = () => {
  return (
    <div className="navbar">
      <img src={myDomot} alt="myDomot" className="logo" />
      <div className="search">
        <FiSearch className="iconsearch" />
        <input type="search" id="search" placeholder="what do you need?" />
        <button>SEARCH</button>
      </div>
      <nav className="desktop-nav">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/"
        >
          <FiHome className="icon" />
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/market"
        >
          <FiList className="icon" />
          Category
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/tracker"
        >
          <FiClock className="icon" />
          Tracker
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/cart"
        >
          <FiShoppingCart className="icon" />
          Cart
          <div className="cart-count">0</div>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/login"
        >
          <FiLogIn className="icon" />
          Login/SignUp
        </NavLink>
      </nav>
      <nav className="mobile-nav">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/"
        >
          <FiHome className="icon" />
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/market"
        >
          <FiList className="icon" />
          Category
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/tracker"
        >
          <FiClock className="icon" />
          Tracker
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/cart"
        >
          <FiShoppingCart className="icon" />
          Cart
          <div className="cart-count">0</div>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "#B3561B" } : { color: "#828282" }
          }
          className="nav-link"
          to="/login"
        >
          <FiLogIn className="icon" />
          Login/SignUp
        </NavLink>
      </nav>
    </div>
  );
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  handleSlideChange(slideIndex) {
    this.setState({ currentSlide: slideIndex });
  }

  render() {
    const slides = [
      {
        image: grocerySix,
        btnText: "Shop With MyDomot Today",
        text: "We are ONLY operating in Lagos, Nigeria at the moment.",
        subtext:
          "We are your one-stop shop for all your grocery needs. Make a grocery list and we'll take care of the rest. We'll make sure you get everything you need in one convenient doorstep delivery.",

        imagetwo: groceryThree,
      },
      {
        image: groceryOne,
        btnText: "Happy Easter from us at MyDomot!",
        text: "Get Your Groceries Delivered Easily and Affordably this Easter.",
        subtext:
          "Let our experienced shoppers bring the groceries you need right to your doorstep, so  you can enjoy more time doing the things you love this Easter.",

        imagetwo: grocerySeven,
      },
      {
        image: groceryFour,
        btnText: "Become a Shopper",
        text: "Earn Money With MyDomot: Become a Shopper And Make It Happen!",
        subtext:
          "Apply today, to become one of our professionally trained shoppers, make money while helping others enjoy the Flexibility and Security of Shopping at Home with MyDomot.",

        imagetwo: groceryTwo,
      },
    ];

    return (
      <>
        <Navigation />
        <div className="slider-container">
          <div className="slider">
            {slides.map((slide, index) => {
              const slideClasses = `slide ${
                index === this.state.currentSlide ? "active" : ""
              }`;
              return (
                <>
                  <div className={slideClasses} key={index}>
                    <img src={slide.image} alt={slide.text} />
                    <img
                      src={slide.imagetwo}
                      alt={slide.text}
                      className="web-image-two"
                    />

                    <div className="slide-text">
                      <button
                        onClick={() => this.handleSlideChange(index)}
                        className="slide-btn"
                      >
                        {slide.btnText}
                      </button>
                      <p className="first-text">{slide.text}</p>
                      <p className="second-text">{slide.subtext}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="slider-nav">
            {slides.map((slide, index) => {
              const navClasses = `slider-nav-btn ${
                index === this.state.currentSlide ? "active" : ""
              }`;
              return (
                <button
                  className={navClasses}
                  key={index}
                  onClick={() => this.handleSlideChange(index)}
                ></button>
              );
            })}
          </div>
          <div className="slider-arrows">
            <button
              className="slider-arrow-btn left-btn"
              onClick={() =>
                this.handleSlideChange(
                  this.state.currentSlide === 0
                    ? slides.length - 1
                    : this.state.currentSlide - 1
                )
              }
            >
              &#8592;
            </button>
            <button
              className="slider-arrow-btn right-btn"
              onClick={() =>
                this.handleSlideChange(
                  this.state.currentSlide === slides.length - 1
                    ? 0
                    : this.state.currentSlide + 1
                )
              }
            >
              &#8594;
            </button>
          </div>
        </div>
        <Flowchart />
        <Categories />
        <Grocery />
        <Values />
        <Footer />
      </>
    );
  }
}

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // store values of email and password in localStorage
    localStorage.setItem("email", this.state.email);
    localStorage.setItem("password", this.state.password);
    alert("Account created successfully");
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="login-signup">
        <img src={signup} alt="myDomot" className="logotwo" />
        <div className="form">
          <p className="p-two">Hi there!</p>
          <p className="p-three">Create a new account</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name<span>*</span>
            </label>
            <input type="text" placeholder="First Name" required />
            <label>
              Last Name<span>*</span>
            </label>
            <input type="text" placeholder="Last Name" required />
            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              required
            />
            <label>
              Phone Number<span>*</span>
            </label>
            <input type="text" placeholder="Phone Number" required />
            <label>
              Location<span>*</span>
            </label>
            <select>
              <option value="Lagos">Lagos </option>
            </select>
            <label>
              Password<span>*</span>
            </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
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
    );
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // retrieve values of email and password from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    // if the stored email and password match the inputted values, redirect user to homepage
    if (
      storedEmail === this.state.email &&
      storedPassword === this.state.password
    ) {
      window.location.href = "/";
    } else {
      alert("Incorrect email or password");
    }
  };

  render() {
    return (
      <>
        <div className="login-signup">
          <img src={login} alt="myDomot" className="logo" />
          <div className="form">
            <p className="p-two">Hello there! Welcome back</p>
            <p className="p-three">Log in to your account</p>
            <form onSubmit={this.handleSubmit}>
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
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
  }
}

function Path() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/market" element={<Market />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
export default Path;
