import React, { useMemo } from 'react';

import { Link } from 'react-router-dom';

import CreateReviews from '../createReview';
import { ReviewsTile } from '../reviewTile/reviewsTile';
import { IReview } from '../../types/IReview';

type Props = {
  data: IReview[];
  counter: number;
  token: string | null;
  leftClick: () => void;
  rightClick: () => void;
}

function ReviewsComponent(props: Props) {
  const {
    data, leftClick, rightClick, counter, token,
  } = props;

  const pageIndexRounded = useMemo(() => Math.ceil(data.length / 6), [data.length]);

  let pageIndexs;
  if (props.counter > 2 && pageIndexRounded > 5 && props.counter < pageIndexRounded - 2) {
    pageIndexs = Array(5).fill(5).map((e, i) => props.counter + i - 2);
  } else if (props.counter > 2 && pageIndexRounded > 5 && props.counter === pageIndexRounded - 2) {
    pageIndexs = Array(5).fill(5).map((e, i) => props.counter + i - 3);
  } else if (props.counter > 2 && pageIndexRounded > 5 && props.counter === pageIndexRounded - 1) {
    pageIndexs = Array(5).fill(5).map((e, i) => props.counter + i - 4);
  } else {
    pageIndexs = Array.from(Array(pageIndexRounded).keys());
  }

  return (
    <>
      <ReviewsTile data={data} pageNumber={counter} pageSize={6} />
      <div className="pages-bar">
        {counter === 0
          ? <button className="arrow-rev arrow-left-grey-rev" onClick={leftClick} type="button" />
          : <button className="arrow-rev arrow-left-rev" onClick={leftClick} type="button" />}
        {pageIndexs.map((item) => {
          if (item === props.counter) {
            return (<div key={item} className="current">{item + 1}</div>);
          }
          return (<div key={item} className="usual">{item + 1}</div>);
        })}
        {counter === pageIndexRounded - 1
          ? <button className="arrow-rev arrow-right-grey-rev" onClick={rightClick} type="button" />
          : <button className="arrow-rev arrow-right-rev" onClick={rightClick} type="button" />}
      </div>
      {token && <CreateReviews />}
      {!token && (
      <div className="wrapper-auth">
        <div className="text-auth">
          <Link rel="canonical" to="/signin">Авторизуйтесь</Link>, чтобы оставить отзыв
        </div>
      </div>
      )}
    </>
  );
}

export default ReviewsComponent;
