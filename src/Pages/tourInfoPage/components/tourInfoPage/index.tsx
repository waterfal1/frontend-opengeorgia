import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Slides } from '../slides/slides';

import { IExcursion } from '../../../tours/types/IExcursion';
import { Plan } from '../plan/plan';

import './styles.scss';

type Props = {
  excursion: IExcursion;
}

export default function TourInfoPage(props: Props) {
  const { excursion } = props;

  return (
    <>
      <Helmet>
        <title>OpenGeorgia | Tour Info</title>
      </Helmet>
      <header
        className="tour-infoPage"
        style={{ backgroundImage: `url(${excursion.images[1].img})` }}
      >
        <div className="TourInfoPage-box">
          <h1 className="content_title">
            {excursion.name}
          </h1>
          <NavLink rel="canonical" to="/book" className="tour-btn">
            Связаться с нами
          </NavLink>
        </div>
      </header>
      <div className="TourInfoPage_content">
        <div className="content_text">
          {excursion.full_text}
        </div>

        <div className="media-card">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
            effect="fade"
            className="mySwiper_TourInfoPage"
          >
            {excursion.images.map((item: {img: string}, index: number) => (
              <SwiperSlide key={index}>
                <Slides image={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Plan plan={excursion.plan} />
          <NavLink rel="canonical" to="/book" className="tour-btn">
            Связаться с нами
          </NavLink>
        </div>
      </div>
    </>
  );
}
