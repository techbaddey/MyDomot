import React from 'react';
import '../components/Values.css';
import freshproduct from "../assets/freshproduct.png";
import fastdelivery from "../assets/fastdelivery.png";
import convenient from "../assets/convenient.png";


function Values() {
    return (
        <>
        <div className='val-container'>
        <h2 className='values-title'>What We Offer</h2>
        <div className='values-container'>
         <div className='values'>
        <img src={freshproduct} alt="freshproduct" className="value-img" />
         <p>Fresh Products</p>
        </div>
        <div className='values'>
        <img src={convenient} alt="convenient" className="value-img" />
        <p>Convenient Shopping</p>
        </div>
        <div className='values'>
        <img src={fastdelivery} alt="fastdelivery" className="value-img" />
        <p>Fast Delivery</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default Values;
