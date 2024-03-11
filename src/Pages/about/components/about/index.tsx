import { Helmet } from 'react-helmet';
import { AboutUsText } from '../aboutUsText/aboutUsText';
import './styles.scss';
import '../aboutUsText/styles.scss';

export function About() {
  return (
    <>
      <Helmet>
        <title>OpenGeorgia | About</title>
      </Helmet>
      <header
        className="header-reviews"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/About/About_header_img.jpg)` }}
      >
        <div className="Tour-box box-width">
          <div className="tour_page_title">
            <h1>О нас</h1>
            <h4>OpenGeorgia - это туристическая компания, которая помогает организовывать
              путешествия. Мы заботимся о том, чтобы вы отправлялись в те места, где давно мечтали побывать, чтобы в
              поездке у вас всегда была поддержка и чтобы домой возвращались только с положительными впечатлениями.
            </h4>
          </div>
        </div>
      </header>
      <div className="About_page">
        <div className="About_page_content">
          <AboutUsText />
          <h2 className="content_unit_title"> Команда OpenGeorgia </h2>
          <div className="About_page_teem">
            <div className="teem_unit">
              <img src={`${process.env.PUBLIC_URL}/Images/About/armen.jpeg`} alt="" className="armen-photo" />
              <h4 className="teem_unit_title">Армен</h4>
              <p className="teem_unit_text">
                Мы более 15 лет работаем в туристической сфере, соответственно, имеем большой опыт работы с туристами.
                От нас еще ни один гость не уходил недовольным, помогаем с гостиницей, жильем и многое другое...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
