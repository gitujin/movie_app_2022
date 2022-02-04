import React from 'react';
import propTypes from 'prop-types';

function Food( { name,picture,rating }){
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src ={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EB%25B0%25B0%25EC%25B6%2594%25EA%25B9%2580%25EC%25B9%2598&psig=AOvVaw2qKOrDMPnA077k-02yb-s6&ust=1644064322428000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDqvYOH5vUCFQAAAAAdAAAAABAD',
    rating:5,
  },
  {
    id:2,
    name: 'Samgyepsal',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mindgil.com%2Fnews%2FarticleView.html%3Fidxno%3D70839&psig=AOvVaw33LAEyUXUzM1h38AhTVAXj&ust=1644064387532000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLChvKKH5vUCFQAAAAAdAAAAABAD',
    rating:4.9,
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.health.chosun.com%2Fsvc%2Fnews_view.html%3Fcontid%3D2021012702524&psig=AOvVaw35BJtgEP08O2kqSoBCibRm&ust=1644064437911000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCxqLqH5vUCFQAAAAAdAAAAABAI',
    rating: 4.8,
  },
  {
    id:4,
    name:'Doncasu',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EB%258F%2588%25EA%25B0%2580%25EC%258A%25A4%3Ffrom%3D%25EB%258F%2588%25EA%25B9%258C%25EC%258A%25A4&psig=AOvVaw0GZGoGfQWppgCrdWHV2m3i&ust=1644064480823000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCN-s6H5vUCFQAAAAAdAAAAABAO',
    rating: 4.8,
  },
  {
    id:5,
    name:'Kimbap',
    image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwtable.co.kr%2Frecipes%2FuhMZkrCGwHwek4RtM5bcwKYb&psig=AOvVaw2D7F4xifEm6jzvW-AoieMW&ust=1644064598997000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCY7ImI5vUCFQAAAAAdAAAAABAX',
    rating : 4.6,
  },
];

function App() {
  console.log(foodILike.map(renderFood));
  return (
  <div>
    {foodILike.map(dish=>(
      <Food key={dish.id} name ={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}

  </div>
    );
}

Food.propTypes = {
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

export default App;
