import { rightColumnPictures } from '../../../constants';
import { IMainPagePictureData } from '../../../types';

import './styles.scss';

type Props = {
  selectedPage: (item: IMainPagePictureData) => void;
}

export function Direction({ selectedPage }: Props) {
  return (
    <div className="home-grid">
      {rightColumnPictures.map((item, index) => (
        <div
          key={index}
          tabIndex={index}
          className={`${'home-grid-element grid-el-'}${index}`}
          onClick={() => selectedPage(item)}
          role="button"
        >
          <div tabIndex={index} role="button" className="home-grid-img">
            <img src={process.env.PUBLIC_URL + item.image} alt={item.alt} />
          </div>
          <div className="home-grid-body">
            <p className="home-grid-title">
              {item.directionName}
            </p>
            <p className="home-grid-text">{item.description}</p>
            <div className="home-grid-btn">
              Подробнее
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
