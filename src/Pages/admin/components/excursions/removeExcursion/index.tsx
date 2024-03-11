import * as FaIcons from 'react-icons/fa';
import { IDirection } from '../../../../tours/types/IDirection';

import './styles.scss';

type Props = {
  directions: IDirection[];
  removeReviewRequest: (directionName: string, excursionName: string) => void;
}

function RemoveExcursion(props: Props) {
  const {
    directions, removeReviewRequest,
  } = props;
  return (
    <div>
      <h2 className="remove-review">Удалить экскурсию</h2>
      {directions.map((direction) => (
        <>
          <div className="excursion-title">
            <div key={Math.random()} className="excursion-box-admin review-box-admin-width">
              <img src={direction.main_img} alt={direction.name} className="home-review-face" />
              <h4>{direction.name}</h4>
            </div>
          </div>
          <div key={Math.random()} className="excursion-box admin-title">
            {direction.excursions.map((excursion) => (
              <div key={Math.random()} className="excursion-box-admin review-box-admin-width">
                <FaIcons.FaWindowClose
                  onClick={() => removeReviewRequest(direction.name, excursion.name)}
                  size={30}
                  color="ff0000"
                  className="review-controls"
                />
                <img src={excursion.images[0].img} alt={excursion.name} className="home-review-face" />
                <h4 className="excursion-name-admin">{excursion.name}</h4>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default RemoveExcursion;
