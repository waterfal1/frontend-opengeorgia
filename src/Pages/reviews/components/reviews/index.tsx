import React from 'react';
import '../../../tours/components/toursHeader/styles.scss';
import { Helmet } from 'react-helmet';
import { ErrorBoundary } from '../../../../Components/ErrorBoundary/ErrorBoundary';
import ReviewsContainer from '../../containers/ReviewsContainers';

export function Reviews() {
  return (
    <>
      <Helmet>
        <title>OpenGeorgia | Reviews</title>
      </Helmet>
      <header
        className="header-reviews"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/MainPage/reviews_header_img2.jpg)` }}
      >
        <div className="Tour-box box-width">
          <div className="tour_page_title">
            <h1>Мы ценим каждого клиента</h1>
            <h4>Остались отличные впечатления от поездки? Это же замечательно! Поделитесь своим отзывом</h4>
          </div>
        </div>
      </header>
      <ErrorBoundary>
        <ReviewsContainer />
      </ErrorBoundary>
    </>
  );
}
