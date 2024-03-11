import React, { useMemo } from 'react';
import { Rating } from 'react-simple-star-rating';
import { defaultAvatar } from '../../constants';
import { IReview } from '../../types/IReview';

interface IReviewsTile{
  data: IReview[],
  pageNumber: number,
  pageSize: number
}

export function ReviewsTile(props: IReviewsTile) {
  const { data, pageNumber, pageSize } = props;

  const usedData = useMemo(() => data.filter((elem: IReview, index: number) => index >= (pageSize * pageNumber)
  && index < (pageSize * (pageNumber + 1))), [data, pageNumber, pageSize]);

  return (
    <div className="reviews-reviews">
      {usedData.map((item) => (
        <div key={item._id} className="review-box review-box-width">
          <img src={item.face || defaultAvatar} alt={item.alt} className="home-review-face" />
          <label htmlFor="star">
            <Rating
              initialValue={item.rating}
              ratingValue={0}
              size={30}
              readonly
            />
            {item.rating},0
          </label>
          <p className="review-text">{item.text1}</p>
          <h4>{item.name}</h4>
          <p className="review-data">{item.date}</p>
        </div>
      ))}
    </div>
  );
}
