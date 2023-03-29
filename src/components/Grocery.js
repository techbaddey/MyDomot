import React from 'react'
import '../components/Grocery.css'
import {
  FiArrowRight,
} from "react-icons/fi";
import { Link, Route } from "react-router-dom";
import apple from "../groceries/apples.jfif";
import banana from "../groceries/banana.jpeg";
import bellpepper from "../groceries/bellpepper.jpg";
import carrot from "../groceries/carrot.jpg";
import cashew from "../groceries/cashew.jpg";
import date from  "../groceries/date.jpg";
import blackpepper from "../groceries/blackpepper.jpg";
import onions from "../groceries/onions.jpg";
import cocoyam from "../groceries/cocoyam.jpg";
import crabs from "../groceries/crabs.jpg";
import crayfish from "../groceries/crayfish.jpg";
import palmoil from "../groceries/palmoil.png";
import potatoes from "../groceries/potatoes.jpg";
import semovita from "../groceries/semovita.jpg";
import soybean from "../groceries/soybean.jpg";
import tigernut from "../groceries/tigernut.jpg";
import vegetableoil from "../groceries/vegetableoil.jpg";
import beef from "../groceries/beef.jpg";
import chicken from "../groceries/chicken.png";
import cowskin from "../groceries/cowskin.jpg";
import gizard from "../groceries/gizard.jpg";
import bournvita from "../groceries/bournvita.jpg";
import butter from "../groceries/butter.jpg";
import coke from "../groceries/coke.jpg";
import cornedbeef from "../groceries/cornedbeef.jpg";
import dano from "../groceries/dano.jpg";
import geisha from "../groceries/geisha.jpg";
import eggs from "../groceries/eggs.jpg";
import tomatoes from "../groceries/tomatoes.jpeg";
import beans from "../groceries/beans.jfif";
import bitterleaf from "../groceries/bitterleaf.jpg";
import Market from './Market';



const foodstuffs = [
    {
      name: "Eggs",
      quantity: "1 crate",
      price: "₦ 700 - ₦ 1000",
      image: eggs
    },
    {
      name: "Tomatoes",
      quantity: "1 paint bucket",
      price: "₦ 500 - ₦ 1200",
      image: tomatoes
    },
    {
      name: "Onions",
      quantity: "2 paint bucket",
      price: "₦ 600 - ₦ 800",
      image: onions
    },
    {
      name: "Beans",
      quantity: "1 paint bucket",
      price: "₦ 1500 - ₦ 2000",
      image: beans
    },
    {
      name: "Bitter Leaf",
      quantity: "15g",
      price: "₦ 600 - ₦ 800",
      image: bitterleaf
    },
    {
      name: "Coco Yam",
      quantity: "15 tubers",
      price: "₦ 1200 - ₦ 1500",
      image: cocoyam
    },
  ];
  

const fruitsAndVegetables = [
    {
      name: "Carrots",
      quantity: "1 dozen",
      price: "₦ 200 - ₦ 500",
      image: carrot
    },
    {
      name: "Apples",
      quantity: "2 dozens",
      price: "₦ 500 - ₦ 700",
      image: apple
    },
    {
      name: "Banana",
      quantity: "1 dozen",
      price: "₦ 600 - ₦ 800",
      image: banana
    },
    {
      name: "Bell Pepper",
      quantity: "1 paint bucket",
      price: "₦ 500 - ₦ 700",
      image: bellpepper
    },
    {
      name: "Cashew",
      quantity: "14g",
      price: "₦ 400 - ₦ 600",
      image: cashew
    },
    {
      name: "Dates",
      quantity: "1 dozen",
      price: "₦ 200 - ₦ 500",
      image: date
    },
  ];

  const oilsAndSeasonings = [
    {
      name: "Vegetable Oil",
      quantity: "5kg",
      price: "₦ 700 - ₦ 1000",
      image: vegetableoil
    },
    {
      name: "Palm Oil",
      quantity: "2kg",
      price: "₦ 850 - ₦ 1200",
      image: palmoil
    },
    {
      name: "Onions",
      quantity: "2 paint bucket",
      price: "₦ 600 - ₦ 800",
      image: onions
    },
    {
      name: "Bell Pepper",
      quantity: "1 paint bucket",
      price: "₦ 500 - ₦ 700",
      image: bellpepper
    },
    {
      name: "Crayfish",
      quantity: "15g",
      price: "₦ 200 - ₦ 500",
      image: crayfish
    },
    {
      name: "Black Pepper",
      quantity: "1kg",
      price: "₦ 500 - ₦ 700",
      image: blackpepper
    },
  ];
  
  const tubersAndGrains = [
    {
      name: "Coco Yam",
      quantity: "15 tubers",
      price: "₦ 1200 - ₦ 1500",
      image: cocoyam
    },
    {
      name: "Potatoes",
      quantity: "10 tubers",
      price: "₦ 500 - ₦ 700",
      image: potatoes
    },
    {
      name: "Semovita",
      quantity: "5kg",
      price: "₦ 3500 - ₦ 4000",
      image: semovita
    },
    {
      name: "Soybean",
      quantity: "1kg",
      price: "₦ 500 - ₦ 700",
      image: soybean
    },
    {
      name: "Carrots",
      quantity: "1 dozen",
      price: "₦ 200 - ₦ 500",
      image: carrot
    },
    {
      name: "Tiger Nut",
      quantity: "25g",
      price: "₦ 200 - ₦ 500",
      image: tigernut
    },
  ];

  const beveragesAndCannedFoods = [
    {
      name: "Bournvita",
      quantity: "1 pack",
      price: "₦ 1200 - ₦ 1500",
      image: bournvita
    },
    {
      name: "Butter",
      quantity: "3 packs",
      price: "₦ 1200 - ₦ 1600",
      image: butter
    },
    {
      name: "Coca Cola",
      quantity: "1 pack",
      price: "₦ 1200 - ₦ 1800",
      image: coke 
    },
    {
      name: "Corned Beef",
      quantity: "2 tins",
      price: "₦ 1200 - ₦ 1400",
      image: cornedbeef
    },
    {
      name: "Dano Milk",
      quantity: "2 tins",
      price: "₦ 800 - ₦ 1000",
      image: dano
    },
    {
      name: "Geisha",
      quantity: "5 tins",
      price: "₦ 500 - ₦ 700",
      image: geisha
    },
  ];

  const meatAndSeaFoods = [
    {
      name: "Crabs",
      quantity: "1 dozen",
      price: "₦ 500 - ₦ 700",
      image: crabs
    },
    {
      name: "Crayfish",
      quantity: "15g",
      price: "₦ 200 - ₦ 500",
      image: crayfish
    },
    {
      name: "Beef",
      quantity: "1kg",
      price: "₦ 700 - ₦ 1000",
      image: beef
    },
    {
      name: "Chicken",
      quantity: "2kg",
      price: "₦ 1500 - ₦ 2000",
      image: chicken
    },
    {
      name: "Cow Skin",
      quantity: "200g",
      price: "₦ 600 - ₦ 800",
      image: cowskin
    },
    {
      name: "Gizzard",
      quantity: "1kg",
      price: "₦ 500 - ₦ 700",
      image: gizard
    },
  ];

export default function Grocery() {
    return (
      <> 
      <div className='card-head head-one'>
      <h2>Food stuffs</h2>
      <Link to="/market">
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </Link>
        </div> 
        <p className='price-range'>Price range of Foodstuffs in Lagos Markets</p>
      <div className="cardall">
      {foodstuffs.map(item => (
            <div className="card">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="card__content">
              <p className="card__title">{item.name}</p>
              <p className="card__quantity">{item.quantity}</p>
              <p className="card__price">{item.price}</p>
            </div>
            </div>
             ))}
             </div> 
             <div className='card-head head-two'>
      <h2>Fruits and Vegetables</h2>
      <Link to="/market">
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </Link>
        </div>
        <p className='price-range'>Price range of Fruits and Vegetables in Lagos Markets</p>
        <div className="cardall">
          {fruitsAndVegetables.map(item => (
            <div className="card">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="card__content">
              <p className="card__title">{item.name}</p>
              <p className="card__quantity">{item.quantity}</p>
              <p className="card__price">{item.price}</p>
            </div>
            </div>
             ))}
        </div> 
        <div className='card-head head-three'>
      <h2>Oils and Seasonings</h2>
      <Link to="/market">
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </Link>
        </div>
        <p className='price-range'>Price range of Oils and Seasonings in Lagos Markets</p>
        <div className="cardall">
          {oilsAndSeasonings.map(item => (
            <div className="card">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="card__content">
              <p className="card__title">{item.name}</p>
              <p className="card__quantity">{item.quantity}</p>
              <p className="card__price">{item.price}</p>
            </div>
            </div>
             ))}
        </div>
        <div className='card-head head-four'>
      <h2>Tubers and Grains</h2>
      <Link to="/market">
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </Link>
        </div>
        <p className='price-range'>Price range of Tubers and Grains in Lagos Markets</p>
        <div className="cardall">
          {tubersAndGrains.map(item => (
           <div className="card">
           <img
             className="card__image"
             src={item.image}
             alt={item.name}
           />
           <div className="card__content">
             <p className="card__title">{item.name}</p>
             <p className="card__quantity">{item.quantity}</p>
             <p className="card__price">{item.price}</p>
           </div>
           </div>
            ))}
        </div> 
        <div className='card-head head-five'>
      <h2>Beverages and Canned Foods</h2>
      <Link to="/market">
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </Link>
        </div>
        <p className='price-range'>Price range of Beverages and Canned Foods in Lagos Markets</p>
        <div className="cardall">
          {beveragesAndCannedFoods.map(item => (
           <div className="card">
           <img
             className="card__image"
             src={item.image}
             alt={item.name}
           />
           <div className="card__content">
             <p className="card__title">{item.name}</p>
             <p className="card__quantity">{item.quantity}</p>
             <p className="card__price">{item.price}</p>
           </div>
           </div>
            ))}
        </div>
        <div className='card-head head-six'>
      <h2>Meat and Seafoods</h2>
      <Link to="/market">
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </Link>
        </div> 
        <p className='price-range'>Price range of Meats and Seafoods in Lagos Markets</p>
        <div className="cardall">
          {meatAndSeaFoods.map(item => (
           <div className="card">
           <img
             className="card__image"
             src={item.image}
             alt={item.name}
           />
           <div className="card__content">
             <p className="card__title">{item.name}</p>
             <p className="card__quantity">{item.quantity}</p>
             <p className="card__price">{item.price}</p>
           </div>
           </div>
            ))}
        </div>
      </>
    );
  }

 
 <Route path="/market" element={<Market />} />
       