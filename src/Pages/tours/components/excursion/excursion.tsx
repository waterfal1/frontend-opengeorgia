import { NavLink } from 'react-router-dom';
import { IExcursion } from '../../types/IExcursion';

import './styles.scss';

interface IExcursionProps{
  excursion: IExcursion;
  tourInfo: (excursion: IExcursion) => void;
}

export function Excursion(props: IExcursionProps) {
  const { excursion, tourInfo } = props;
  return (
    <div className="excursion-card">
      <img className="excursion-main_img" src={excursion.images[0].img} alt="" />
      <div className="excursion-body">
        <div className="excursion-title">{excursion.name} ({excursion.cost})</div>
        <div className="excursion-text">{excursion.text}</div>
        <div>
          <NavLink
            rel="canonical"
            onClick={() => tourInfo(excursion)}
            className="excursion-btn_link"
            to="/tourInfoPage"
          >
            <button type="button" className="excursion-btn">Подробнее</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
