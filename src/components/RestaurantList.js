import React from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './RestaurantList.css';

const restaurants = [
  {
    id: 1,
    name: 'THE SPOT',
    address: '8, Route des Pères Maristes, Hann Maristes,',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-spot.jpg',
    status: 'OUVERT',
    rating: 3.6,
    isNew: false,
  },
  {
    id: 2,
    name: 'RESTAURANT FARID',
    address: '58 rue Vincens',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-farid.jpg',
    status: 'OUVERT',
    rating: 3.9,
    isNew: false,
  },
  {
    id: 3,
    name: 'MY WAY',
    address: 'Route des Almadies',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-myway.jpg',
    status: 'OUVERT',
    rating: 4.2,
    isNew: false,
  },
  {
    id: 4,
    name: 'CALIENTE',
    address: 'Route de Ngor',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-caliente.jpg',
    status: 'OUVERT',
    rating: 3.5,
    isNew: false,
  },
  {
    id: 5,
    name: 'PIZZA TIME – VDN SACRÉ COEUR',
    address: '',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-pizzatime.jpg',
    status: 'OUVERT',
    rating: 3.5,
    isNew: false,
  },
  {
    id: 6,
    name: 'Ô WOK BAR',
    address: '',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-wokbar.jpg',
    status: 'OUVERT',
    rating: 4.2,
    isNew: false,
  },
  {
    id: 7,
    name: 'MAMMY HEALTHY',
    address: '',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-mammyhealthy.jpg',
    status: 'OUVERT',
    rating: 4.0,
    isNew: false,
  },
  {
    id: 8,
    name: 'BAMBOU',
    address: '',
    img: 'https://dakarfooddelivery.com/uploads/restaurant/restaurant-bambou.jpg',
    status: 'OUVERT',
    rating: 4.6,
    isNew: false,
  },
];

const RestaurantList = () => (
  <section className="restaurant-list-section">
    <div className="container">
      <h2 className="restaurant-list-title">Tous les restaurants à proximité</h2>
      <div className="restaurant-list">
        {restaurants.map((r) => (
          <div className="restaurant-card" key={r.id}>
            <div className="restaurant-img-wrapper">
              <img src={r.img} alt={r.name} className="restaurant-img" />
              {r.rating && (
                <span className="restaurant-badge rating"><FaStar /> {r.rating}</span>
              )}
              {r.isNew && (
                <span className="restaurant-badge new">NOUVEAU</span>
              )}
              <span className={`restaurant-badge status ${r.status === 'OUVERT' ? 'open' : ''}`}>{r.status}</span>
            </div>
            <div className="restaurant-info">
              <div className="restaurant-name">{r.name}</div>
              {r.address && <div className="restaurant-address"><FaMapMarkerAlt /> {r.address}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RestaurantList; 