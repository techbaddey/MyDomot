import React from "react";
import { Navigation } from "./Hero";
import "../components/Tracker.css";
import emptycart from "../assets/empty-cart.png";
import { Link, Route } from "react-router-dom";
import Category from "./Category";
import Footer from "./Footer";

export default function Tracker() {
  return (
    <>
      <Navigation />
      <div className="tracker-container">
        <img src={emptycart} alt="emptycart" className="empty-cart" />
        <h2>You have no item to be tracked yet.</h2>
        <p>
          You must have checkout the groceries in your cart before you can
          proceed to track them. Kindly ensure you have groceries in your cart
          or use the button below to start shopping.{" "}
        </p>
        <Link to="/category">
          <button>Start Shopping Now!</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

<Route path="/category" element={<Category />} />;
