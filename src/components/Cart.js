import React from 'react'
import { Navigation } from './Hero'
import '../components/Cart.css';
import emptycart from "../assets/empty-cart.png";
import { Link, Route } from "react-router-dom";
import Category from './Category';
import Footer from './Footer'

export default function Cart() {
  return (
    <>
    <Navigation />
        <div className="cart-container">
        <img src={emptycart} alt="emptycart" className="empty-cart" />
            <h2>You have no items in your cart at the moment.</h2>
            <p>Before you can proceed to checkout, you must have added some groceries to your cart. You will find a lot of groceries in different Category.</p>
            <Link to="/category">
            <button>Start Shopping Now!</button>
            </Link>
            </div>
     <Footer />
    </>
  )
}


<Route path="/category" element={<Category />} />