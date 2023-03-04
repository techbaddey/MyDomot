import React, { useState } from "react";
import '../components/Category.css';
import { Navigation } from './Hero';
import Values from "./Values";
import Footer from './Footer';
import apple from "../groceries/apples.jfif";
import banana from "../groceries/banana.jpeg";
import grapes from "../groceries/grapes.jpg";
import avocado from "../groceries/avocado.jpg";
import bellpepper from "../groceries/bellpepper.jpg";
import carrot from "../groceries/carrot.jpg";
import cashew from "../groceries/cashew.jpg";
import cucumber from "../groceries/cucumber.jfif";
import date from  "../groceries/date.jpg";
import greenbean from "../groceries/greenbean.jpg";
import lemon from "../groceries/lemon.jpg";
import lettuce from "../groceries/lettuce.jpeg";
import mango from "../groceries/mango.jpg";
import oranges from "../groceries/oranges.jpg";
import pawpaw from "../groceries/pawpaw.jpg";
import pear from "../groceries/pear.jpg";
import pineapple from "../groceries/pineapple.jfif";
import watermelon from "../groceries/watermelon.jpg";
import strawberries from "../groceries/strawberries.jpg";


import eggs from "../groceries/eggs.jpg";
import tomatoes from "../groceries/tomatoes.jpeg";
import onions from "../groceries/onions.jpg";
import beans from "../groceries/beans.jfif";
import bitterleaf from "../groceries/bitterleaf.jpg";
import cocoyam from "../groceries/cocoyam.jpg";
import crabs from "../groceries/crabs.jpg";
import crayfish from "../groceries/crayfish.jpg";
import locustbean from "../groceries/locustbean.jpg";
import melonseed from "../groceries/melonseed.jpg";
import palmoil from "../groceries/palmoil.png";
import plantain from "../groceries/plantain.jpg";
import potatoes from "../groceries/potatoes.jpg";
import rice from "../groceries/rice.jpg";
import semovita from "../groceries/semovita.jpg";
import soybean from "../groceries/soybean.jpg";
import tigernut from "../groceries/tigernut.jpg";
import vegetableoil from "../groceries/vegetableoil.jpg";
import yam from "../groceries/yam.jpg";
import yamflour from "../groceries/yamflour.png";




const groceryList = [
  {
    name: "Melon Seed",
    price: "₦ 400",
    image: melonseed
  },
  {
    name: "Palm Oil",
    price: "₦ 850",
    image: palmoil
  },
  {
    name: "Cucumber",
    price: "₦ 850",
    image: cucumber
  },
  {
    name: "Potatoes",
    price: "₦ 500",
    image: potatoes
  },
  {
    name: "Rice",
    price: "₦ 9500",
    image: rice
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
    name: "Grapes",
    price: "₦ 300",
    image: grapes
  },
  {
    name: "Green Beans",
    price: "₦ 250",
    image: greenbean
  },
  {
    name: "Lemon",
    price: "₦ 700",
    image: lemon
  },
  {
    name: "Pineapple",
    price: "₦ 900",
    image: pineapple
  },
  {
    name: "Plantain",
    price: "₦ 800",
    image: plantain
  },
  {
    name: "Strawberries",
    price: "₦ 400",
    image: strawberries
  },
];


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
    name: "Locust Bean",
    price: "₦ 300",
    image: locustbean
  },
  {
    name: "Melon Seed",
    price: "₦ 400",
    image: melonseed
  },
  {
    name: "Palm Oil",
    price: "₦ 850",
    image: palmoil
  },
  {
    name: "Plantain",
    price: "₦ 350",
    image: plantain
  },
  {
    name: "Potatoes",
    price: "₦ 500",
    image: potatoes
  },
  {
    name: "Rice",
    price: "₦ 9500",
    image: rice
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
    name: "Tiger Nut",
    price: "₦ 200",
    image: tigernut
  },
  {
    name: "Vegetable Oil",
    price: "₦ 700",
    image: vegetableoil
  },
  {
    name: "Yam",
    price: "₦ 1500",
    image: yam
  },
  {
    name: "Yam Flour",
    price: "₦ 1200",
    image: yamflour
  }
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
  {
    name: "Grapes",
    price: "₦ 300",
    image: grapes
  },
  {
    name: "Green Beans",
    price: "₦ 250",
    image: greenbean
  },
  {
    name: "Lemon",
    price: "₦ 700",
    image: lemon
  },
  {
    name: "Lettuce",
    price: "₦ 500",
    image: lettuce
  },
  {
    name: "Mango",
    price: "₦ 200",
    image: mango
  },
  {
    name: "Orange",
    price: "₦ 400",
    image: oranges
  },
  {
    name: "Pawpaw",
    price: "₦ 300",
    image: pawpaw
  },
  {
    name: "Pear",
    price: "₦ 500",
    image: pear
  },
  {
    name: "Pineapple",
    price: "₦ 900",
    image: pineapple
  },
  {
    name: "Cucumber",
    price: "₦ 800",
    image: cucumber
  },
  {
    name: "Strawberries",
    price: "₦ 400",
    image: strawberries
  },
  {
    name: "Tiger Nut",
    price: "₦ 200",
    image: tigernut
  },
  {
    name: "Watermelon",
    price: "₦ 1000",
    image: watermelon
  },
  {
    name: "Avocado",
    price: "₦ 500",
    image: avocado
  }
];


const oilsAndSeasonings = [
  {
    name: "Apples",
    price: "$1.50",
    image: apple
  },
  {
    name: "Grapes",
    price: "$2.50",
    image: grapes
  },
  {
    name: "Bananas",
    price: "$2.50",
    image: banana
  }
];

const tubersAndGrains = [
  {
    name: "Canned Soup",
    price: "$4.00",
    image: "soup.jpg"
  },
  {
    name: "Canned Fruit",
    price: "$3.50",
    image: "fruit.jpg"
  },
  {
    name: "Canned Beans",
    price: "$3.00",
    image: "beans.jpg"
  }
];

const beveragesAndCannedFoods = [
  {
    name: "Canned Soup",
    price: "$4.00",
    image: "soup.jpg"
  },
  {
    name: "Canned Fruit",
    price: "$3.50",
    image: "fruit.jpg"
  },
  {
    name: "Canned Beans",
    price: "$3.00",
    image: "beans.jpg"
  }
];

const meatAndSeaFoods = [
  {
    name: "Canned Soup",
    price: "$4.00",
    image: "soup.jpg"
  },
  {
    name: "Canned Fruit",
    price: "$3.50",
    image: "fruit.jpg"
  },
  {
    name: "Canned Beans",
    price: "$3.00",
    image: "beans.jpg"
  }
];

const Category = () => {
  const [category, setCategory] = useState(groceryList);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    switch (e.target.value) {
      case "food":
        setCategory(foodstuffs);
        break;
      case "vegetables":
        setCategory(fruitsAndVegetables);
        break;
      case "cannedFood":
        setCategory(oilsAndSeasonings);
        break;
      case "oilsAndSpices":
        setCategory(tubersAndGrains);
        break;
      case "beveragesAndCannedFoods":
        setCategory(beveragesAndCannedFoods);
        break;
      case "meatAndSeaFoods":
        setCategory(meatAndSeaFoods);
        break;
      default:
        setCategory(groceryList);
        break;
    }
  };

  return (
    <>
      <Navigation />
      <div className="category-container">
      <div className="category-header">
      <p className="title">Shop by Category</p>
      <div className="input-container">
        {/* <label>Category:</label> */}
        <select onChange={handleChange} value={selectedCategory}>
          <option value="">Select Category</option>
          <option value="food">Foodstuffs</option>
          <option value="food">Fruits and Vegetables</option>
          <option value="food">Root and Tubers</option>
          <option value="food">Oils and Seasonings</option>
          <option value="fruits">Staples and Grains</option>
          <option value="cannedFood">Beverages andCanned Foods</option>
          <option value="oilsAndSpices">Meat and Sea foods</option>
        </select>
      </div>
      </div>
      <div className="container">
        {category.map((grocery, index) => (
          <div key={index} className="card">
            <img
              className="card__image"
              src={grocery.image}
              alt={grocery.name}
            />
            <div className="card__content">
              <h3 className="card__title">{grocery.name}</h3>
              <p className="card__price">{grocery.price}</p>
            </div>
            <button className="card__button">Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
      <Values />
      <Footer />
    </>
  );
};
export default Category;