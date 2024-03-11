import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';

import { LoadingComponent } from '../../../Components/Loading/Loading';
import { monthNames } from '../constants';
import ReviewsComponent from '../components/reviewsComponent';
import { IReview } from '../types/IReview';
import { GET_ALL_REVIEW } from '../../../api/reviewRequests';

import '../review.scss';

interface IReviewsState {
  data: IReview[],
  counter: number,
  len: number,
}

function ReviewsContainer() {
  const { data, loading } = useQuery(GET_ALL_REVIEW);
  const [state, setState] = useState<IReviewsState>({ counter: 0, len: 0, data: [] });
  const token = useSelector((jwtToken: { auth: { token: string | null } }) => jwtToken.auth.token);

  useEffect(() => {
    if (!loading) {
      const sortedData = [...data.getAllReviews].sort((a: IReview, b: IReview) => new Date(b.date).getTime()
      - new Date(a.date).getTime());
      const dataWithLocaleDate = sortedData.map((e) => ({
        ...e,
        date: `${monthNames[new Date(e.date).getMonth()]} ${new Date(e.date).getFullYear()}`,
      }));
      setState({ ...state, data: dataWithLocaleDate, len: data.getAllReviews.length });
    }
    // eslint-disable-next-line
  }, [data, loading]);

  const rightClick = useCallback(() => {
    if (Math.ceil(state.len / 6) > 1) {
      setState({ ...state, len: state.len - 6, counter: state.counter + 1 });
    }
  }, [state]);

  const leftClick = useCallback(() => {
    if (state.counter > 0) {
      setState({ ...state, len: state.len + 6, counter: state.counter - 1 });
    }
  }, [state]);

  if (loading) return <LoadingComponent />;

  return (
    <ReviewsComponent
      data={state.data}
      leftClick={leftClick}
      rightClick={rightClick}
      counter={state.counter}
      token={token}
    />
  );
}

export default ReviewsContainer;
