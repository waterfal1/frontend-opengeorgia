import React from 'react';
import { Helmet } from 'react-helmet';
import { FormComponent } from './components/formComponent';

export function BookComponent() {
  return (
    <>
      <Helmet>
        <title>OpenGeorgia | Booking</title>
      </Helmet>
      <header
        className="header-reviews"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL
          }/Images/Booking/booking_header_img.jpg)`,
        }}
      >
        <div className="Tour-box box-width">
          <div className="tour_page_title">
            <h1>Связаться с нами</h1>
            <h4>
              Остались вопросы или все еще не определились с экскурсиями? Это не проблема! Заполняйте форму, а
              мы перезвоним и поможем найти то, что вам понравится.  Также пишите нам в социальные сети и
              мессенджеры. Мы всегда рады помочь!
            </h4>
          </div>
        </div>
      </header>
      <FormComponent />
    </>
  );
}
