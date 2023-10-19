import React from 'react';
import Stars from './components/Stars';
import heart from './img/heart.png';
import share from './img/share.png';
import kitty from './img/kitty.png';
import dog from './img/dog.png';
import './App.css';

interface Movie {
  title: string;
  image: string;
  rating: number;
  price: number;
}

function App() {
  const movies: Movie[] = [
    {
      title: 'Фильм 1',
      image: kitty,
      rating: 4,
      price: 250,
    },
    {
      title: 'Фильм 2',
      image: dog,
      rating: 3,
      price: 200,
    },
  ];

  return (
    <div className='container'>
      {movies.map((movie, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={movie.image} alt={movie.title + ' Poster'} />
          </div>
          <div className='container-rating'>
            <h2 className="card-title">{movie.title}</h2>
            <div className="card-icons">
              <img className="heart-img" src={heart} alt="Heart Icon" />
              <img className='share-img' src={share} alt="Share Icon" />
            </div>
          </div>
          <div className="card-rating">
            <Stars count={movie.rating} />
          </div>
          <button className="card-button">Купить ({movie.price} руб.)</button>
          <button className="card-button-more">Подробнее →</button>
        </div>
      ))}
    </div>
  );
}

export default App;
