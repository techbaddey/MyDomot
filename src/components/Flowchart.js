import React from 'react';
import '../components/Flowchart.css';
import createaccount from "../assets/createaccount.png";
import shoponline from "../assets/shoponline.png";
import doordelivery from "../assets/doordelivery.png";


function Flowchart() {
    return (
        <>
        <div className='flow-container'>
        <h2 className='flowchart-title'>How it works</h2>
        <div className='flowchart-container'>
         <div className='flow'>
        <img src={createaccount} alt="createaccount" className="flowchart" />
         <p>Create an account or login to your account</p>
        </div>
        <div className='flow'>
        <img src={shoponline} alt="shoponline" className="flowchart" />
        <p>Add groceries to your cart or make a list or get an offline shopper</p>
        </div>
        <div className='flow'>
        <img src={doordelivery} alt="doordelivery" className="flowchart" />
        <p>Make payments and get your groceries delivered to your doorstep</p>
        </div>
        </div>
        </div>
        </>
    )
}

export default Flowchart;
