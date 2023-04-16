import React, { useState } from "react";
import { Navigation } from "./Hero";
import "../view/Category.css";
import Footer from "../components/Footer";
import apple from "../grocery-images/apples.jfif";
import banana from "../grocery-images/banana.jpeg";
import grapes from "../grocery-images/grapes.jpg";
import avocado from "../grocery-images/avocado.jpg";
import bellpepper from "../grocery-images/bellpepper.jpg";
import carrot from "../grocery-images/carrot.jpg";
import cashew from "../grocery-images/cashew.jpg";
import cucumber from "../grocery-images/cucumber.jfif";
import date from "../grocery-images/date.jpg";
import greenbean from "../grocery-images/greenbean.jpg";
import lemon from "../grocery-images/lemon.jpg";
import lettuce from "../grocery-images/lettuce.jpeg";
import mango from "../grocery-images/mango.jpg";
import oranges from "../grocery-images/oranges.jpg";
import pawpaw from "../grocery-images/pawpaw.jpg";
import pear from "../grocery-images/pear.jpg";
import pineapple from "../grocery-images/pineapple.jfif";
import watermelon from "../grocery-images/watermelon.jpg";
import strawberries from "../grocery-images/strawberries.jpg";

import blackpepper from "../grocery-images/blackpepper.jpg";
import chilli from "../grocery-images/chilli.jfif";
import chillipepper from "../grocery-images/chillipepper.jfif";
import curry from "../grocery-images/curry.jpg";
import garlic from "../grocery-images/garlic.jpeg";
import nutmeg from "../grocery-images/nutmeg.jpg";
import redpepper from "../grocery-images/redpepper.jpg";
import salt from "../grocery-images/salt.png";
import scentleave from "../grocery-images/scentleave.jpg";
import seasoning from "../grocery-images/seasoning.jpg";
import thyme from "../grocery-images/thyme.jpg";

import eggs from "../grocery-images/eggs.jpg";
import tomatoes from "../grocery-images/tomatoes.jpeg";
import onions from "../grocery-images/onions.jpg";
import beans from "../grocery-images/beans.jfif";
import bitterleaf from "../grocery-images/bitterleaf.jpg";
import cocoyam from "../grocery-images/cocoyam.jpg";
import crabs from "../grocery-images/crabs.jpg";
import crayfish from "../grocery-images/crayfish.jpg";
import locustbean from "../grocery-images/locustbean.jpg";
import melonseed from "../grocery-images/melonseed.jpg";
import palmoil from "../grocery-images/palmoil.png";
import plantain from "../grocery-images/plantain.jpg";
import potatoes from "../grocery-images/potatoes.jpg";
import rice from "../grocery-images/rice.jpg";
import semovita from "../grocery-images/semovita.jpg";
import soybean from "../grocery-images/soybean.jpg";
import tigernut from "../grocery-images/tigernut.jpg";
import vegetableoil from "../grocery-images/vegetableoil.jpg";
import yam from "../grocery-images/yam.jpg";
import yamflour from "../grocery-images/yamflour.png";

import millet from "../grocery-images/millet.jpg";
import cassava from "../grocery-images/cassava.png";
import groundnut from "../grocery-images/groundnut.jpg";
import garri from "../grocery-images/garri.jpg";
import beef from "../grocery-images/beef.jpg";
import chicken from "../grocery-images/chicken.png";
import cowskin from "../grocery-images/cowskin.jpg";
import gizard from "../grocery-images/gizard.jpg";
import lobster from "../grocery-images/lobster.jpg";
import mackerel from "../grocery-images/mackerel.jpg";
import periwinkle from "../grocery-images/periwinkle.jpg";
import pork from "../grocery-images/pork.jpg";
import prawn from "../grocery-images/prawn.jfif";
import salmon from "../grocery-images/salmon.jpeg";
import shrimp from "../grocery-images/shrimp.jpg";
import tilapia from "../grocery-images/tilapia.jpg";

import bournvita from "../grocery-images/bournvita.jpg";
import butter from "../grocery-images/butter.jpg";
import coke from "../grocery-images/coke.jpg";
import cornedbeef from "../grocery-images/cornedbeef.jpg";
import dano from "../grocery-images/dano.jpg";
import geisha from "../grocery-images/geisha.jpg";
import jam from "../grocery-images/jam.jfif";
import lipton from "../grocery-images/lipton.jpg";
import malt from "../grocery-images/malt.png";
import milo from "../grocery-images/milo.png";
import nescafe from "../grocery-images/nescafe.jpg";
import sardine from "../grocery-images/sardine.jpg";
import sweetcorn from "../grocery-images/sweetcorn.jpg";
import tomatotin from "../grocery-images/tomatotin.jpg";

import marketone from "../assets/market-one.jpg";
import markettwo from "../assets/market-two.jpg";
import marketthree from "../assets/market-three.jpg";
import marketfour from "../assets/market-four.jpg";
import marketfive from "../assets/market-five.jpg";
import marketsix from "../assets/market-six.png";

const groceryList = [
  {
    name: "Melon Seed",
    price: "₦ 400",
    quantity: "1 paint bucket",
    image: melonseed,
  },
  {
    name: "Palm Oil",
    price: "₦ 850",
    quantity: "2kg",
    image: palmoil,
  },
  {
    name: "Cucumber",
    price: "₦ 850",
    quantity: "1 dozen",
    image: cucumber,
  },
  {
    name: "Potatoes",
    price: "₦ 500",
    quantity: "2kg",
    image: potatoes,
  },
  {
    name: "Rice",
    price: "₦ 9500",
    quantity: "1 paint bucket",
    image: rice,
  },
  {
    name: "Banana",
    price: "₦ 600",
    quantity: "1 bunch",
    image: banana,
  },
  {
    name: "Bell Pepper",
    price: "₦ 500",
    quantity: "15kg",
    image: bellpepper,
  },
  {
    name: "Cashew",
    price: "₦ 400",
    quantity: "20g",
    image: cashew,
  },
  {
    name: "Dates",
    price: "₦ 200",
    quantity: "50g",
    image: date,
  },
  {
    name: "Eggs",
    price: "₦ 700",
    quantity: "1 crate",
    image: eggs,
  },
  {
    name: "Tomatoes",
    price: "₦ 500",
    quantity: "1kg",
    image: tomatoes,
  },
  {
    name: "Onions",
    price: "₦ 600",
    quantity: "50g",
    image: onions,
  },
  {
    name: "Beans",
    price: "₦ 1500",
    quantity: "1 paint bucket",
    image: beans,
  },
  {
    name: "Bitter Leaf",
    price: "₦ 600",
    quantity: "1 bunch",
    image: bitterleaf,
  },
  {
    name: "Grapes",
    price: "₦ 300",
    quantity: "1 bunch",
    image: grapes,
  },
  {
    name: "Green Beans",
    price: "₦ 250",
    quantity: "25g",
    image: greenbean,
  },
  {
    name: "Lemon",
    price: "₦ 700",
    quantity: "1 dozen",
    image: lemon,
  },
  {
    name: "Pineapple",
    price: "₦ 900",
    quantity: "1 dozen",
    image: pineapple,
  },
  {
    name: "Plantain",
    price: "₦ 800",
    quantity: "1 bunch",
    image: plantain,
  },
  {
    name: "Strawberries",
    price: "₦ 400",
    quantity: "1 bunch",
    image: strawberries,
  },
];

const foodstuffs = [
  {
    name: "Eggs",
    price: "₦ 700",
    quantity: "1 crate",
    image: eggs,
  },
  {
    name: "Tomatoes",
    price: "₦ 500",
    quantity: "25g",
    image: tomatoes,
  },
  {
    name: "Onions",
    price: "₦ 600",
    quantity: "50g",
    image: onions,
  },
  {
    name: "Beans",
    price: "₦ 1500",
    quantity: "1 paint bucket",
    image: beans,
  },
  {
    name: "Bitter Leaf",
    price: "₦ 600",
    quantity: "20g",
    image: bitterleaf,
  },
  {
    name: "Coco Yam",
    price: "₦ 1200",
    quantity: "5kg",
    image: cocoyam,
  },
  {
    name: "Crabs",
    price: "₦ 500",
    quantity: "1 dozen",
    image: crabs,
  },
  {
    name: "Crayfish",
    price: "₦ 200",
    quantity: "20g",
    image: crayfish,
  },
  {
    name: "Locust Bean",
    price: "₦ 300",
    quantity: "10g",
    image: locustbean,
  },
  {
    name: "Melon Seed",
    price: "₦ 400",
    quantity: "1 milk tin",
    image: melonseed,
  },
  {
    name: "Palm Oil",
    price: "₦ 850",
    quantity: "2kg",
    image: palmoil,
  },
  {
    name: "Plantain",
    price: "₦ 350",
    quantity: "1 bunch",
    image: plantain,
  },
  {
    name: "Potatoes",
    price: "₦ 500",
    quantity: "2kg",
    image: potatoes,
  },
  {
    name: "Rice",
    price: "₦ 9500",
    quantity: "1 paint bucket",
    image: rice,
  },
  {
    name: "Semovita",
    price: "₦ 3500",
    quantity: "5kg",
    image: semovita,
  },
  {
    name: "Soybean",
    price: "₦ 500",
    quantity: "1kg",
    image: soybean,
  },
  {
    name: "Tiger Nut",
    price: "₦ 200",
    quantity: "5 milk tin",
    image: tigernut,
  },
  {
    name: "Vegetable Oil",
    price: "₦ 700",
    quantity: "2kg",
    image: vegetableoil,
  },
  {
    name: "Yam",
    price: "₦ 1500",
    quantity: "5 tubers",
    image: yam,
  },
  {
    name: "Yam Flour",
    price: "₦ 1200",
    quantity: "1 paint bucket",
    image: yamflour,
  },
];

const fruitsAndVegetables = [
  {
    name: "Carrots",
    price: "₦ 200",
    quantity: "25g",
    image: carrot,
  },
  {
    name: "Apples",
    price: "₦ 500",
    quantity: "1 dozen",
    image: apple,
  },
  {
    name: "Banana",
    price: "₦ 600",
    quantity: "1 bunch",
    image: banana,
  },
  {
    name: "Bell Pepper",
    price: "₦ 500",
    quantity: "20g",
    image: bellpepper,
  },
  {
    name: "Cashew",
    price: "₦ 400",
    quantity: "1kg",
    image: cashew,
  },
  {
    name: "Dates",
    price: "₦ 200",
    quantity: "15g",
    image: date,
  },
  {
    name: "Grapes",
    price: "₦ 300",
    quantity: "1 bunch",
    image: grapes,
  },
  {
    name: "Green Beans",
    price: "₦ 250",
    quantity: "25g",
    image: greenbean,
  },
  {
    name: "Lemon",
    price: "₦ 700",
    quantity: "1 dozen",
    image: lemon,
  },
  {
    name: "Lettuce",
    price: "₦ 500",
    quantity: "50g",
    image: lettuce,
  },
  {
    name: "Mango",
    price: "₦ 200",
    quantity: "1 dozen",
    image: mango,
  },
  {
    name: "Orange",
    price: "₦ 400",
    quantity: "1 dozen",
    image: oranges,
  },
  {
    name: "Pawpaw",
    price: "₦ 300",
    quantity: "1 dozen",
    image: pawpaw,
  },
  {
    name: "Pear",
    price: "₦ 500",
    quantity: "1 dozen",
    image: pear,
  },
  {
    name: "Pineapple",
    price: "₦ 900",
    quantity: "1 dozen",
    image: pineapple,
  },
  {
    name: "Cucumber",
    price: "₦ 800",
    quantity: "1 dozen",
    image: cucumber,
  },
  {
    name: "Strawberries",
    price: "₦ 400",
    quantity: "1 dozen",
    image: strawberries,
  },
  {
    name: "Tiger Nut",
    price: "₦ 200",
    quantity: "5 milk tin",
    image: tigernut,
  },
  {
    name: "Watermelon",
    price: "₦ 1000",
    quantity: "1 dozen",
    image: watermelon,
  },
  {
    name: "Avocado",
    price: "₦ 500",
    quantity: "1 dozen",
    image: avocado,
  },
];

const oilsAndSeasonings = [
  {
    name: "Vegetable Oil",
    price: "₦ 700",
    quantity: "2kg",
    image: vegetableoil,
  },
  {
    name: "Palm Oil",
    price: "₦ 850",
    quantity: "2kg",
    image: palmoil,
  },
  {
    name: "Onions",
    price: "₦ 600",
    quantity: "1kg",
    image: onions,
  },
  {
    name: "Bell Pepper",
    price: "₦ 500",
    quantity: "20g",
    image: bellpepper,
  },
  {
    name: "Crayfish",
    price: "₦ 200",
    quantity: "1kg",
    image: crayfish,
  },
  {
    name: "Black Pepper",
    price: "₦ 500",
    quantity: "70g",
    image: blackpepper,
  },
  {
    name: "Chilli Pepper",
    price: "₦ 700",
    quantity: "50g",
    image: chilli,
  },
  {
    name: "Chilli Powder",
    price: "₦ 300",
    quantity: "1 mik tin",
    image: chillipepper,
  },
  {
    name: "Curry Powder",
    price: "₦ 200",
    quantity: "2 sachets",
    image: curry,
  },
  {
    name: "Garlic",
    price: "₦ 400",
    quantity: "1kg",
    image: garlic,
  },
  {
    name: "Nutmeg",
    price: "₦ 300",
    quantity: "1 sachet",
    image: nutmeg,
  },
  {
    name: "Red Pepper",
    price: "₦ 900",
    quantity: "1kg",
    image: redpepper,
  },
  {
    name: "Salt",
    price: "₦ 250",
    quantity: "2 sachets",
    image: salt,
  },
  {
    name: "Scent Leaves",
    price: "₦ 300",
    quantity: "20g",
    image: scentleave,
  },
  {
    name: "Seasoning",
    price: "₦ 200",
    quantity: "1 sachet",
    image: seasoning,
  },
  {
    name: "Thyme",
    price: "₦ 250",
    quantity: "12 sachet",
    image: thyme,
  },
];

const tubersAndGrains = [
  {
    name: "Coco Yam",
    price: "₦ 1200",
    quantity: "25g",
    image: cocoyam,
  },
  {
    name: "Potatoes",
    price: "₦ 500",
    quantity: "1kg",
    image: potatoes,
  },
  {
    name: "Semovita",
    price: "₦ 3500",
    quantity: "5kg",
    image: semovita,
  },
  {
    name: "Soybean",
    price: "₦ 500",
    quantity: "1kg",
    image: soybean,
  },
  {
    name: "Carrots",
    price: "₦ 200",
    quantity: "1 dozen",
    image: carrot,
  },
  {
    name: "Tiger Nut",
    price: "₦ 200",
    quantity: "5 milk tin",
    image: tigernut,
  },
  {
    name: "Rice",
    price: "₦ 9500",
    quantity: "1 paint bucket",
    image: rice,
  },
  {
    name: "Yam",
    price: "₦ 1500",
    quantity: "1kg",
    image: yam,
  },
  {
    name: "Onions",
    price: "₦ 600",
    quantity: "1kg",
    image: onions,
  },
  {
    name: "Beans",
    price: "₦ 1500",
    quantity: "1 paint bucket",
    image: beans,
  },
  {
    name: "Millet",
    price: "₦ 1500",
    quantity: "1 paint bucket",
    image: millet,
  },
  {
    name: "Cassava",
    price: "₦ 1500",
    quantity: "1 paint bucket",
    image: cassava,
  },
  {
    name: "Garri",
    price: "₦ 1500",
    quantity: "1 paint bucket",
    image: garri,
  },
  {
    name: "Groundnut",
    price: "₦ 1500",
    quantity: "25g",
    image: groundnut,
  },
];

const beveragesAndCannedFoods = [
  {
    name: "Bournvita",
    price: "₦ 1200",
    quantity: "1 pack",
    image: bournvita,
  },
  {
    name: "Butter",
    price: "₦ 1200",
    quantity: "5 packs",
    image: butter,
  },
  {
    name: "Coca Cola",
    price: "₦ 1200",
    quantity: "2 packs",
    image: coke,
  },
  {
    name: "Corned Beef",
    price: "₦ 1200",
    quantity: "5 tins",
    image: cornedbeef,
  },
  {
    name: "Dano Milk",
    price: "₦ 1200",
    quantity: "5 tins",
    image: dano,
  },
  {
    name: "Geisha",
    price: "₦ 1200",
    quantity: "5 tins",
    image: geisha,
  },
  {
    name: "Tin Tomatoes",
    price: "₦ 1200",
    quantity: "3 tins",
    image: tomatotin,
  },
  {
    name: "Jam",
    price: "₦ 1200",
    quantity: "5 jars",
    image: jam,
  },
  {
    name: "Lipton Tea",
    price: "₦ 1200",
    quantity: "5 packs",
    image: lipton,
  },
  {
    name: "Malta Guiness",
    price: "₦ 1200",
    quantity: "5 packs",
    image: malt,
  },
  {
    name: "Milo",
    price: "₦ 1200",
    quantity: "2 packs",
    image: milo,
  },
  {
    name: "Nescafe",
    price: "₦ 1200",
    quantity: "5 tins",
    image: nescafe,
  },
  {
    name: "Sardine",
    price: "₦ 1200",
    quantity: "5 tins",
    image: sardine,
  },
  {
    name: "Sweet Corn",
    price: "₦ 1200",
    quantity: "2 tins",
    image: sweetcorn,
  },
];

const meatAndSeaFoods = [
  {
    name: "Crabs",
    price: "₦ 500",
    quantity: "25g",
    image: crabs,
  },
  {
    name: "Crayfish",
    price: "₦ 200",
    quantity: "50g",
    image: crayfish,
  },
  {
    name: "Beef",
    price: "₦ 700",
    quantity: "1kg",
    image: beef,
  },
  {
    name: "Chicken",
    price: "₦ 1500",
    quantity: "1kg",
    image: chicken,
  },
  {
    name: "Cow Skin",
    price: "₦ 600",
    quantity: "50g",
    image: cowskin,
  },
  {
    name: "Gizzard",
    price: "₦ 500",
    quantity: "2kg",
    image: gizard,
  },
  {
    name: "Lobster",
    price: "₦ 700",
    quantity: "500g",
    image: lobster,
  },
  {
    name: "Mackerel",
    price: "₦ 400",
    quantity: "2kg",
    image: mackerel,
  },
  {
    name: "Periwinkle",
    price: "₦ 200",
    quantity: "50g",
    image: periwinkle,
  },
  {
    name: "Pork",
    price: "₦ 500",
    quantity: "50g",
    image: pork,
  },
  {
    name: "Prawn",
    price: "₦ 400",
    quantity: "100g",
    image: prawn,
  },
  {
    name: "Salmon Fish",
    price: "₦ 750",
    quantity: "1kg",
    image: salmon,
  },
  {
    name: "Shrimp",
    price: "₦ 400",
    quantity: "25g",
    image: shrimp,
  },
  {
    name: "Tilapia Fish",
    price: "₦ 800",
    quantity: "2kg",
    image: tilapia,
  },
];

export function CategoriesTwo() {
  return (
    <>
      <div className="ad-categories">
        <p>Categories </p>
        <div className="ad-category">
          <div className="one-caty">
            <img src={foodstuffs[3].image} alt="foodstuff" />
            <p>Foodstuffs</p>
          </div>
          <div className="one-caty">
            <img src={fruitsAndVegetables[0].image} alt="foodstuff" />
            <p>Fruits & Vegetables</p>
          </div>
          <div className="one-caty">
            <img src={oilsAndSeasonings[0].image} alt="foodstuff" />
            <p>Oils & Seasonings</p>
          </div>
          <div className="one-caty">
            <img src={tubersAndGrains[1].image} alt="foodstuff" />
            <p>Tubers & Grains</p>
          </div>
          <div className="one-caty">
            <img src={beveragesAndCannedFoods[0].image} alt="foodstuff" />
            <p>Beverages & Canned Foods</p>
          </div>
          <div className="one-caty">
            <img src={meatAndSeaFoods[0].image} alt="foodstuff" />
            <p>Meat & Sea Foods</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Categories() {
  return (
    <>
      <div className="ad-categories">
        <p>Local Markets in Lagos, Nigeria</p>
        <div className="ad-category">
          <div className="one-caty">
            <img src={marketone} alt="foodstuff" />
            <p>Oshodi Market – Oshodi, Lagos</p>
          </div>
          <div className="one-caty">
            <img src={markettwo} alt="foodstuff" />
            <p>Balogun Market – Lagos Island, Lagos</p>
          </div>
          <div className="one-caty">
            <img src={marketthree} alt="foodstuff" />
            <p>Tejuosho Market – Yaba, Lagos</p>
          </div>
          <div className="one-caty">
            <img src={marketfour} alt="foodstuff" />
            <p>Eko Market – Victoria Island, Lagos</p>
          </div>
          <div className="one-caty">
            <img src={marketfive} alt="foodstuff" />
            <p>Ojuwoye Market - Mushin, Lagos</p>
          </div>
          <div className="one-caty">
            <img src={marketsix} alt="foodstuff" />
            <p>Ojota Market - Ojota, Lagos</p>
          </div>
        </div>
      </div>
    </>
  );
}

const Category = () => {
  const [category, setCategory] = useState(groceryList);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [counts, setCounts] = useState({});
  const [showAll, setShowAll] = useState(false);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    switch (e.target.value) {
      case "foodstuffs":
        setCategory(foodstuffs);
        break;
      case "fruitsAndVegetables":
        setCategory(fruitsAndVegetables);
        break;
      case "oilsAndSeasonings":
        setCategory(oilsAndSeasonings);
        break;
      case "tubersAndGrains":
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

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const decrement = (name) => {
    if (counts[name] && counts[name] > 0) {
      setCounts({ ...counts, [name]: counts[name] - 1 });
    }
  };

  const increment = (name) => {
    setCounts({ ...counts, [name]: (counts[name] || 0) + 1 });
  };

  return (
    <>
      <Navigation />
      <CategoriesTwo />
      <div className="category-container">
        <div className="category-header">
          <p className="title">Shop by Category</p>
          <div className="input-container">
            <select onChange={handleChange} value={selectedCategory}>
              <option value="">Select Category</option>
              <option value="foodstuffs">Foodstuffs</option>
              <option value="fruitsAndVegetables">Fruits and Vegetables</option>
              <option value="oilsAndSeasonings">Oils and Seasonings</option>
              <option value="tubersAndGrains">Tubers and Grains</option>
              <option value="beveragesAndCannedFoods">
                Beverages and Canned Foods
              </option>
              <option value="meatAndSeaFoods">Meat and Sea foods</option>
            </select>
          </div>
        </div>
        <div className="container">
          {category
            .slice(0, showAll ? category.length : 12)
            .map((grocery, index) => (
              <div key={index} className="card">
                <img
                  className="card__image"
                  src={grocery.image}
                  alt={grocery.name}
                />
                <div className="card__content">
                  <p className="card__title">{grocery.name}</p>
                  <p className="card__quantity">{grocery.quantity}</p>
                  <p className="card__price">{grocery.price}</p>
                </div>
                <div className="count-container">
                  <button
                    className="decrement-button"
                    onClick={() => decrement(grocery.name)}
                  >
                    -
                  </button>
                  <div className="count">{counts[grocery.name] || 0}</div>
                  <button
                    className="increment-button"
                    onClick={() => increment(grocery.name)}
                  >
                    +
                  </button>
                </div>
                <button className="card__button">Add to Cart</button>
              </div>
            ))}
        </div>
        {showAll ? (
          <button className="see-all-button" onClick={handleShowAll}>
            See Less
          </button>
        ) : (
          <button className="see-all-button" onClick={handleShowAll}>
            See All
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};
export default Category;
