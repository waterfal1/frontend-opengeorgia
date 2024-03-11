import { useCallback, useEffect, useState } from 'react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import { selectedPageSelector } from '../selectors';
import { selectPage } from '../../Home/Components/content/actions';
import { rightColumnPictures } from '../../Home/Components/content/constants';
import { GET_ALL_DIRECTION } from '../../../api/excursionsRequests';
import Tours from '../components/tours/tours';
import { LoadingComponent } from '../../../Components/Loading/Loading';
import { setAllDirections } from '../actions';

export default function TourContainer() {
  const dispatch = useDispatch();

  const { data, loading } = useQuery(GET_ALL_DIRECTION);
  const selectedPage = useSelector(selectedPageSelector);
  const [stateId, setStateId] = useState(selectedPage.category);

  useEffect(() => {
    if (data?.getAllDirections) {
      dispatch(setAllDirections(data.getAllDirections));
    }
  }, [data?.getAllDirections, dispatch]);

  const setBorder = useCallback((newIndex: number) => {
    setStateId(newIndex);
    const old = document.getElementById(`${stateId}`);
    if (old === null) return;
    old.className = 'tour_direction_unit';
    const newIndexElement = document.getElementById(`${newIndex}`);
    if (newIndexElement === null) return;
    newIndexElement.className = 'tour_direction_unit blueBorder';
    dispatch(selectPage(rightColumnPictures[newIndex]));
  }, [dispatch, stateId]);

  if (loading) {
    return <LoadingComponent />;
  }

  return <Tours categoryId={stateId} setBorder={setBorder} data={data} />;
}
