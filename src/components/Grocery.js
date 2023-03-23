import React from 'react'
import '../components/Grocery.css'
import {
  FiArrowRight,
} from "react-icons/fi";
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



const foodstuffs = [
    {
      name: "Eggs",
      price: "₦ 700",
      image: eggs
    },
    {
      name: "Tomatoes",
      price: "₦ 500",
      image: tomatoes
    },
    {
      name: "Onions",
      price: "₦ 600",
      image: onions
    },
    {
      name: "Beans",
      price: "₦ 1500",
      image: beans
    },
    {
      name: "Bitter Leaf",
      price: "₦ 600",
      image: bitterleaf
    },
    {
      name: "Coco Yam",
      price: "₦ 1200",
      image: cocoyam
    },
  ];
  

const fruitsAndVegetables = [
    {
      name: "Carrots",
      price: "₦ 200",
      image: carrot
    },
    {
      name: "Apples",
      price: "₦ 500",
      image: apple
    },
    {
      name: "Banana",
      price: "₦ 600",
      image: banana
    },
    {
      name: "Bell Pepper",
      price: "₦ 500",
      image: bellpepper
    },
    {
      name: "Cashew",
      price: "₦ 400",
      image: cashew
    },
    {
      name: "Dates",
      price: "₦ 200",
      image: date
    },
  ];

  const oilsAndSeasonings = [
    {
      name: "Vegetable Oil",
      price: "₦ 700",
      image: vegetableoil
    },
    {
      name: "Palm Oil",
      price: "₦ 850",
      image: palmoil
    },
    {
      name: "Onions",
      price: "₦ 600",
      image: onions
    },
    {
      name: "Bell Pepper",
      price: "₦ 500",
      image: bellpepper
    },
    {
      name: "Crayfish",
      price: "₦ 200",
      image: crayfish
    },
    {
      name: "Black Pepper",
      price: "₦ 500",
      image: blackpepper
    },
  ];
  
  const tubersAndGrains = [
    {
      name: "Coco Yam",
      price: "₦ 1200",
      image: cocoyam
    },
    {
      name: "Potatoes",
      price: "₦ 500",
      image: potatoes
    },
    {
      name: "Semovita",
      price: "₦ 3500",
      image: semovita
    },
    {
      name: "Soybean",
      price: "₦ 500",
      image: soybean
    },
    {
      name: "Carrots",
      price: "₦ 200",
      image: carrot
    },
    {
      name: "Tiger Nut",
      price: "₦ 200",
      image: tigernut
    },
  ];

  const beveragesAndCannedFoods = [
    {
      name: "Bournvita",
      price: "₦ 1200",
      image: bournvita
    },
    {
      name: "Butter",
      price: "₦ 1200",
      image: butter
    },
    {
      name: "Coca Cola",
      price: "₦ 1200",
      image: coke 
    },
    {
      name: "Corned Beef",
      price: "₦ 1200",
      image: cornedbeef
    },
    {
      name: "Dano Milk",
      price: "₦ 1200",
      image: dano
    },
    {
      name: "Geisha",
      price: "₦ 1200",
      image: geisha
    },
  ];

  const meatAndSeaFoods = [
    {
      name: "Crabs",
      price: "₦ 500",
      image: crabs
    },
    {
      name: "Crayfish",
      price: "₦ 200",
      image: crayfish
    },
    {
      name: "Beef",
      price: "₦ 700",
      image: beef
    },
    {
      name: "Chicken",
      price: "₦ 1500",
      image: chicken
    },
    {
      name: "Cow Skin",
      price: "₦ 600",
      image: cowskin
    },
    {
      name: "Gizzard",
      price: "₦ 500",
      image: gizard
    },
  ];

export default function Grocery() {
    return (
      <> 
      <div className='card-head'>
      <h2>Food stuffs</h2>
        <button>SEE ALL<span><FiArrowRight /></span></button>
        </div>
      <div className="cardone cardall">
      {foodstuffs.map(item => (
            <div className="card">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="card__content">
              <p className="card__title">{item.name}</p>
              <p className="card__price">{item.price}</p>
            </div>
            </div>
             ))}
             </div> 
             <div className='card-head'>
      <h2>Fruits and Vegetables</h2>
        <button>SEE ALL</button>
        </div>
        <div className='cardtwo cardall'>
       
          {fruitsAndVegetables.map(item => (
            <div className="card">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="card__content">
              <p className="card__title">{item.name}</p>
              <p className="card__price">{item.price}</p>
            </div>
            </div>
             ))}
        </div> 
        <div className='card-head'>
      <h2>Oils and Seasonings</h2>
        <button>SEE ALL</button>
        </div>
        <div className='cardthree cardall'>
       
          {oilsAndSeasonings.map(item => (
            <div className="card">
            <img
              className="card__image"
              src={item.image}
              alt={item.name}
            />
            <div className="card__content">
              <p className="card__title">{item.name}</p>
              <p className="card__price">{item.price}</p>
            </div>
            </div>
             ))}
        </div>
        <div className='card-head'>
      <h2>Tubers and Grains</h2>
        <button>SEE ALL</button>
        </div>
        <div className='cardfour cardall'>
        
          {tubersAndGrains.map(item => (
           <div className="card">
           <img
             className="card__image"
             src={item.image}
             alt={item.name}
           />
           <div className="card__content">
             <p className="card__title">{item.name}</p>
             <p className="card__price">{item.price}</p>
           </div>
           </div>
            ))}
        </div> 
        <div className='card-head'>
      <h2>Beverages and Canned Foods</h2>
        <button>SEE ALL</button>
        </div>
        <div className='cardfive cardall'>
       
          {beveragesAndCannedFoods.map(item => (
           <div className="card">
           <img
             className="card__image"
             src={item.image}
             alt={item.name}
           />
           <div className="card__content">
             <p className="card__title">{item.name}</p>
             <p className="card__price">{item.price}</p>
           </div>
           </div>
            ))}
        </div>
        <div className='card-head'>
      <h2>Meat and Seafoods</h2>
        <button>SEE ALL</button>
        </div>
        <div className='cardsix cardall'>
        
          {meatAndSeaFoods.map(item => (
           <div className="card">
           <img
             className="card__image"
             src={item.image}
             alt={item.name}
           />
           <div className="card__content">
             <p className="card__title">{item.name}</p>
             <p className="card__price">{item.price}</p>
           </div>
           </div>
            ))}
        </div>
      </>
    );
  }
