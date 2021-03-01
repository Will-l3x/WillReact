import React from 'react';
import './Styling/Cards.js';
import CardItem from './CardItem';
import bedlinen from '../images/bedlinen.jpg';
import batht from '../images/bathtowel.jpg';
import bathr from '../images/bathrobe.jpg';
import scent from '../images/scents.jpg';
import wint from '../images/winter.jpg';

function Cards() {
  return (
    <div className='cards'>
      <p>
         Our Premium products got the finest quality cotton that create an exquisite lightweight textile thats both soft and crisp
         - guranteed to give you a wonderful nights sleep
        </p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={bedlinen}
              text='Shope Bed Linens'
              label='Shop Bed Linens'
              
            />
            <CardItem
              src={batht}
              text='Shop Bath Towels'
              label='Shop Bath Towels'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={bathr}
              text='Shop Bathrobes'
              label='Shop Bathrobes'
              
            />
            <CardItem
              src={scent}
              text='Shop Home Fragrances'
              label='Shop Home Fragrances'
              
            />
            <CardItem
              src={wint}
              text='Shop Bed Linen'
              label='Shop Bed Linen'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
