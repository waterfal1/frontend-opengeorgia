import { Helmet } from 'react-helmet';
import { ErrorBoundary } from '../../Components/ErrorBoundary/ErrorBoundary';
import { TransfersContainer } from './container/TransferContainer';

import '../tours/components/toursHeader/styles.scss';

export function Transfers() {
  return (
    <>
      <Helmet>
        <title>OpenGeorgia | Transfers</title>
      </Helmet>
      <header
        className="header-reviews"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Transfer/transfer.jpg)` }}
      >
        <div className="Tour-box box-width">
          <div className="tour_page_title">
            <h1>Трансфер по Грузии</h1>
            <h4>Встретим в аэропорту или организуем трансфер с комфортом!</h4>
          </div>
        </div>
      </header>
      <ErrorBoundary>
        <TransfersContainer />
      </ErrorBoundary>
    </>
  );
}
