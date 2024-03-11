import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import { UpperSlide } from '../upperSlide/upperSlide';
import { Direction } from '../direction/direction';
import { IDirection } from '../../types/IDirection';

import './styles.scss';

type Props = {
  categoryId: number;
  setBorder: (newIndex: number) => void;
  data: {getAllDirections: IDirection[]};
}

SwiperCore.use([Navigation, Thumbs]);

export default function Tours(props: Props) {
  const { categoryId, setBorder, data } = props;

  return (
    <>
      <div className="directions-container">
        {data.getAllDirections.map((item: IDirection) => (
          <UpperSlide
            key={item.id}
            directionIndex={item.id}
            stateId={categoryId}
            sliderDirection={item}
            setBorder={setBorder}
          />
        ))}
      </div>
      <Direction excursion={data.getAllDirections[categoryId]} />
    </>
  );
}
