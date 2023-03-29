import React from 'react'
import '../components/Market.css'
import { Link, Route } from "react-router-dom";
import Category from './Category';

export default function Market() {
  return (
    <div className='select-market'>
        <h2>Select a Market</h2>
   <p className='first'> <input type="radio" name="market" value="oshodi market" /> Oshodi Market – Oshodi, Lagos </p>
   <p> <input type="radio" name="market" value="balogun market" /> Balogun Market – Lagos Island, Lagos </p>
   <p> <input type="radio" name="market" value="tejuosho market" /> Tejuosho Market – Yaba, Lagos </p>
   <p> <input type="radio" name="market" value="eko market" /> Eko Market – Victoria Island, Lagos </p>
   <p> <input type="radio" name="market" value="ojuwoye market" /> Ojuwoye Market - Mushin, Lagos </p>
   <p> <input type="radio" name="market" value="ojota market" /> Ojota Market - Ojota, Lagos </p> 
   <Link to="/category">
    <button>Done</button>
</Link>
    </div>
  )
}


<Route path="/category" element={<Category />} />