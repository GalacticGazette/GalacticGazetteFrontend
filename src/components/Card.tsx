import React from 'react';
import LazyImage from './LazyImage';
import { CardProps } from '../Props';
import './Card.css';

const Card: React.FC<CardProps> = ({ id, title, imagePath: image, date, category, price }) => {
    return (
        <li className='card' key={id}>
            <button className='card-frame'>
                <figure className='card-figure' date-a={`$${price}`}>
                    <LazyImage className='card-image' src={image} alt='img'/>
                </figure>
                <div className='card-info'>
                    <h5 className='card-title'>
                        {title}
                    </h5>
                    <span className='card-details'>
                        Date: {date} | Category: {category}
                    </span>
                </div>
            </button>
        </li>
    )
}

export default Card;