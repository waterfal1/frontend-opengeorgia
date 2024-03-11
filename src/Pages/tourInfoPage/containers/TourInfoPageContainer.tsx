import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { IExcursion } from '../../tours/types/IExcursion';
import { selectedExcursionSelector } from '../../tours/selectors';

import { LoadingComponent } from '../../../Components/Loading/Loading';
import TourInfoPage from '../components/tourInfoPage';
import { GET_ALL_DIRECTION } from '../../../api/excursionsRequests';

export default function TourInfoPageContainer() {
  const { data, loading } = useQuery(GET_ALL_DIRECTION);
  const savedExcursion = useSelector(selectedExcursionSelector);

  if (loading) return <LoadingComponent />;
  let excursion: IExcursion = savedExcursion;

  if (!excursion?.cost) {
    excursion = data?.getAllDirections[0].excursions[0];
  }

  return <TourInfoPage excursion={excursion} />;
}
