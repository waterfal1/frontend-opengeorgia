import React from 'react';
import { NavLink } from 'react-router-dom';
import { images, whyChooseUsInfo } from '../../constants';
import './styles.scss';

export function WhyChooseUs() {
  return (
    <>{whyChooseUsInfo.map((item, index: number) => (
      <div key={item.id} className="home-discount">
        <NavLink rel="canonical" to={item.link}>
          <div>
            <img src={images[index]} alt={item.alt} className="home-book" />
          </div>
          <div className="home-discount-text1">{item.text1}</div>
          <div className="home-discount-text2-container">
            <div className="home-discount-text2">{item.text2}
              <br /> {item.text3}
            </div>
          </div>
        </NavLink>
      </div>
    ))}
    </>
  );
}
