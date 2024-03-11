import React from 'react';
import { faces, reviewsInfo } from '../../constants';
import './styles.scss';

interface IUser{
    id: number,
    alt: string,
    text: string,
    name: string,
    date: string
}

export function ReviewsComponent() {
  return (
    <>{reviewsInfo.map((item: IUser, index: number) => (
      <div key={item.id} className="review-box review-box-width">
        <img src={process.env.PUBLIC_URL + faces[index]} alt={item.alt} className="home-review-face" />
        <p className="review-text">{item.text}</p>
        <h4>{item.name}</h4>
        <p className="review-data">{item.date}</p>
      </div>
    ))}
    </>
  );
}
