import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './QuickSearches.css';

const categories = [
  {
    id: 1,
    name: 'PETIT DÉJEUNER ET BRUNCH',
    img: 'https://dakarfooddelivery.com/uploads/category/PETIT-DÉJEUNER-ET-BRUNCH-fr1675506571.jpg',
  },
  {
    id: 2,
    name: 'Burgers',
    img: 'https://dakarfooddelivery.com/uploads/category/2883fa5268db815b31425bafd11696b7.jpg',
  },
  {
    id: 3,
    name: 'Cuisine Libanaise - Grill',
    img: 'https://dakarfooddelivery.com/uploads/category/Cuisine-Libanaise---Grill-fr1673261774.jpg',
  },
  {
    id: 4,
    name: 'SUSHI',
    img: 'https://dakarfooddelivery.com/uploads/category/d88d3495f18b4784ca7e4d27efa4536d.jpg',
  },
  {
    id: 5,
    name: 'PASTA',
    img: 'https://dakarfooddelivery.com/uploads/category/c35282adb7e358858031aab826cb8bca.jpg',
  },
  {
    id: 6,
    name: 'Pizza',
    img: 'https://dakarfooddelivery.com/uploads/category/739635717b8a2cd302b8e36c786683e8.jpg',
  },
  {
    id: 7,
    name: 'LES PLATS DU JOUR',
    img: 'https://dakarfooddelivery.com/uploads/category/LES-PLATS-DU-JOUR-fr1676291169.jpg',
  },
  {
    id: 8,
    name: 'CUISINE AFRICAINE',
    img: 'https://dakarfooddelivery.com/uploads/category/CUISINE-AFRICAINE-fr1694367450.jpg',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const QuickSearches = () => (
  <section className="quick-searches">
    <div className="container">
      <div className="heading-title">
        <h2>Recherches rapides</h2>
      </div>
      <Slider {...settings} className="quick-searches-slider">
        {categories.map((cat) => (
          <div className="quick-searches-box" key={cat.id}>
            <img src={cat.img} alt={cat.name} title={cat.name} className="quick-searches-img" />
            <h5 className="category-name">{cat.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default QuickSearches; 