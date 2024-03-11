import { Helmet } from 'react-helmet';

import { ErrorBoundary } from '../../../../Components/ErrorBoundary/ErrorBoundary';
import Tour from '../../containers/ToursContainer';

import './styles.scss';

export default function ToursHeader() {
  return (
    <>
      <Helmet>
        <title>OpenGeorgia | Tours</title>
      </Helmet>
      <header
        className="tour-header"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Tours/Tour_page_img.jpg)` }}
      >
        <div className="Tour-box">
          <div className="tour_page_title">
            <h1>Популярные направления</h1>
            <h4>
              У нас пять различных направлений и выбирая каждое Вы посетите несколько экскурсий. Выгоднее
              заказать все и Вы сможете увидеть больше.
            </h4>
          </div>
        </div>
      </header>
      <ErrorBoundary>
        <Tour />
      </ErrorBoundary>
    </>
  );
}
