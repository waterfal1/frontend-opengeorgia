import React from 'react';
import { NavLink } from 'react-router-dom';

export function FirstScreen() {
  return (
    <div className="home-box">
      <h2>Экскурсии</h2>
      <h1 className="home-title">Открой для себя Грузию</h1>
      <p className="home-body">Проведем для вас и ваших друзей незабываемые экскурсии по выбранным вами направлениям.
        Обещаем, вы ничего не пропустите!
      </p>
      <NavLink rel="canonical" to="/tours" className="home-btn">
        Узнать больше
      </NavLink>
    </div>
  );
}
