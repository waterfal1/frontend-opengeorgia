import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import RemoveReview from '../components/reviews/removeReview';
import { monthNames } from '../../reviews/constants';
import { IReview } from '../../reviews/types/IReview';
import { LoadingComponent } from '../../../Components/Loading/Loading';
import { GET_ALL_REVIEW, REMOVE_REVIEW } from '../../../api/reviewRequests';

function RemoveReviewContainer() {
  const [reviews, setReviews] = useState<IReview[]>([{
    _id: '',
    alt: '',
    date: '',
    face: '',
    name: '',
    quotes: '',
    text1: '',
    rating: 0,
  }]);

  const { data, loading } = useQuery(GET_ALL_REVIEW);

  const [removeReview] = useMutation(REMOVE_REVIEW);

  useEffect(() => {
    if (!loading) {
      const sortedData = [...data.getAllReviews].sort((a: IReview, b: IReview) => new Date(b.date).getTime()
      - new Date(a.date).getTime());
      const dataWithLocaleDate = sortedData.map((e: IReview) => ({
        ...e,
        date: `${monthNames[new Date(e.date).getMonth()]} ${new Date(e.date).getFullYear()}`,
      }));
      setReviews(dataWithLocaleDate);
    }
  }, [data, loading]);

  const removeReviewRequest = async (reviewId: string) => {
    await removeReview({
      variables: {
        reviewId,
      },
      refetchQueries: [{ query: GET_ALL_REVIEW }],
    });
    setReviews(reviews.filter((e) => e._id !== reviewId));
  };

  if (loading) return <LoadingComponent />;

  return <RemoveReview removeReviewRequest={removeReviewRequest} reviews={reviews} />;
}

export default RemoveReviewContainer;
