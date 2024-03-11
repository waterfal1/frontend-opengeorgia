import * as FaIcons from 'react-icons/fa';
import { Rating } from 'react-simple-star-rating';

import { IReview } from '../../../../reviews/types/IReview';

import './styles.scss';

type Props = {
  removeReviewRequest: (itemId: string) => void;
  reviews: IReview[];
}

function RemoveReview(props: Props) {
  const { removeReviewRequest, reviews } = props;
  return (
    <div>
      <h2 className="remove-review">Удалить отзыв</h2>
      <div className="remove-wrap">
        {reviews.map((item: IReview) => (
          <div key={item._id} className="review-box-admin review-box-admin-width">
            <FaIcons.FaWindowClose
              onClick={() => removeReviewRequest(item._id)}
              size={30}
              color="ff0000"
              className="review-controls"
            />
            <img src={item.face} alt={item.alt} className="admin-face" />
            <Rating
              initialValue={item.rating}
              ratingValue={0}
              size={30}
              readonly
            />
            <h4 className="symbol-limit">{item.name}</h4>
            <p className="review-data">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RemoveReview;
