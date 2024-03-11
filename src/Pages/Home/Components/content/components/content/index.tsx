import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { WhyChooseUs } from '../whyChooseUs';
import { ReviewsComponent } from '../reviewsComponent';
import { Block } from '../block';
import { blockInfo, blockInfo2 } from '../../constants';
import Direction from '../direction';

export function Content() {
  return (
    <div>
      <Block info={blockInfo} />
      <div className="home-discounts">
        <WhyChooseUs />
      </div>
      <Block info={blockInfo2} />
      <Direction />
      <div className="home-review-header-container">
        <div className="home-review-header">Что говорят наши клиенты</div>
        <div>
          <NavLink rel="canonical" to="/reviews">
            <button className="home-reviews-btn" type="button">Все отзывы</button>
          </NavLink>
        </div>
      </div>
      <div className="home-reviews">
        <ReviewsComponent />
      </div>
      <div>
        <NavLink rel="canonical" to="/reviews">
          <button className="home-mobile-all-directions-btn" type="button">Все отзывы</button>
        </NavLink>
      </div>
    </div>
  );
}
