import { IDirection } from '../../types/IDirection';

import './styles.scss';

interface IUpperSlide{
    setBorder: (newIndex: number) => void,
    sliderDirection: IDirection
    directionIndex: number
    stateId: number
}

export function UpperSlide(props: IUpperSlide) {
  const {
    setBorder, sliderDirection, directionIndex, stateId,
  } = props;

  return (
    <div
      role="presentation"
      onClick={() => setBorder(directionIndex)}
      id={String(directionIndex)}
      className={Number(sliderDirection.id) === stateId ? 'tour_direction_unit blueBorder'
        : 'tour_direction_unit'}
    >
      <img
        className="tour_direction_unit_main_img"
        src={sliderDirection.img}
        alt=""
      />
      <div id="direction-text" className="tour_direction_unit_text">
        {sliderDirection.name}
      </div>
    </div>
  );
}
