import React from 'react';
import '../components/Category.css';
import { Navigation } from './Hero';
import apple from "../groceries/apples.jfif";
import eggs from "../groceries/eggs.jpg";
import banana from "../groceries/banana.jpeg";
import tomatoes from "../groceries/tomatoes.jpeg";
import grapes from "../groceries/grapes.jpg";
import onions from "../groceries/onions.jpg";



const Category = () => {
    const groceryList = [
      {
        name: 'Apples',
        image: apple,
        price: '₦200'
      },
      {
        name: 'Eggs',
        image: eggs,
         price: '₦350'
      },
      {
        name: 'Banana',
        image: banana,
           price: '₦400'
      },
      {
        name: 'Tomatoes',
        image: tomatoes,
         price: '₦750'
      },
      {
        name: 'Grapes',
        image: grapes,
         price: '₦800'
      },
      {
        name: 'Onions',
        image:onions,
         price: '₦800'
      },
      {
        name: 'Apples',
        image: apple,
        price: '₦200'
      },
      {
        name: 'Eggs',
        image: eggs,
         price: '₦350'
      },
      {
        name: 'Banana',
        image: banana,
           price: '₦400'
      },
      {
        name: 'Tomatoes',
        image: tomatoes,
         price: '₦750'
      },
      {
        name: 'Grapes',
        image: grapes,
         price: '₦800'
      },
      {
        name: 'Onions',
        image:onions,
         price: '₦800'
      },
    ];
  
    return (
      <>
      <Navigation />
      <p>Shop by Categry</p>
      <div className="container">
        {groceryList.map((grocery, index) => (
          <div key={index} className="card">
            <img className="card__image" src={grocery.image} alt={grocery.name} />
            <div className="card__content">
              <h3 className="card__title">{grocery.name}</h3>
              <p className="card__price">{grocery.price}</p>
            </div>
            <button className="card__button">Select Item</button>
          </div>
        ))}
      </div>
      </>
    );
  };
  export default Category;