import Excursion from '../../containers/ExcursionContainer';
import { IDirection } from '../../types/IDirection';

import './styles.scss';

interface IDirectionComponent{
    excursion: IDirection
}

export function Direction(props: IDirectionComponent) {
  const { excursion } = props;

  return (
    <div className="tour_unit">
      <div className="tour_direction_info">
        <div className="main_tour_direction_info">
          <div className="excursion-cost main">{excursion.cost}</div>
          <img className="main_tour_img" src={excursion.main_img} alt="" />
          <div className="main_tour_info">
            <div className="main_tour_title">{excursion.name}</div>
            <div className="main_tour_text">{excursion.text}</div>
          </div>
        </div>
        <div className="tour_direction_excursion_block">
          { excursion.excursions.map((item, index) => <Excursion key={index} excursion={item} />)}
        </div>
      </div>
    </div>
  );
}
