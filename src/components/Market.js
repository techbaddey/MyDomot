import React from "react";
import "../components/Market.css";
import { Link, Route } from "react-router-dom";
import Category from "./Category";
import marketone from "../assets/market-one.jpg";
import markettwo from "../assets/market-two.jpg";
import marketthree from "../assets/market-three.jpg";
import marketfour from "../assets/market-four.jpg";
import marketfive from "../assets/market-five.jpg";
import marketsix from "../assets/market-six.png";

export default function Market() {
  return (
    <div className="ad-categories">
      <p>Local Markets in Lagos, Nigeria</p>
      <div className="ad-category">
        <div className="one-market">
          <img src={marketone} alt="foodstuff" />
          <p>Oshodi Market – Oshodi, Lagos</p>
          <div>
            <Link to="/category">
              <button>Select</button>
            </Link>
          </div>
        </div>
        <div className="one-market">
          <img src={markettwo} alt="foodstuff" />
          <p>Balogun Market – Lagos Island, Lagos</p>
        </div>
        <div className="one-market">
          <img src={marketthree} alt="foodstuff" />
          <p>Tejuosho Market – Yaba, Lagos</p>
        </div>
        <div className="one-market">
          <img src={marketfour} alt="foodstuff" />
          <p>Eko Market – Victoria Island, Lagos</p>
        </div>
        <div className="one-market">
          <img src={marketfive} alt="foodstuff" />
          <p>Ojuwoye Market - Mushin, Lagos</p>
        </div>
        <div className="one-market">
          <img src={marketsix} alt="foodstuff" />
          <p>Ojota Market - Ojota, Lagos</p>
        </div>
      </div>
    </div>
  );
}

<Route path="/category" element={<Category />} />;
