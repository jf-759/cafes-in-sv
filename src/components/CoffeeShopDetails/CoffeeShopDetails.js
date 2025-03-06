import React from 'react';
import { useParams } from 'react-router';
import data from '../../coffeeshops-data.js';
import './CoffeeShopDetails.css';

function CoffeeShopDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]
  
  return (
    <div className="CoffeeShopDetails">
      <div className="CoffeeShopDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images}`} alt=""/>
      </div>
      <div className="CoffeeShopDetails-info">
        <h1 className="CoffeeShopDetails-title">{ title }</h1>
        <p className="CoffeeShopDetails-desc">{ desc }</p>
        <p className="CoffeeShopDetails-hours">{ hours }</p>
        <p className="CoffeeShopDetails-features">{ features }</p>
        <p className="CoffeeShopDetails-geo">{ geo.lat } { geo.lon }</p> 
      </div>
    </div>
  )
}

export default CoffeeShopDetails;