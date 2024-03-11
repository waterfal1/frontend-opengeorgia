import React from 'react';
import { useDispatch } from 'react-redux';

import { selectedExcursion } from '../actions';
import { Excursion } from '../components/excursion/excursion';
import { IExcursion } from '../types/IExcursion';

interface IExcursionProps{
  excursion: IExcursion
}

export default function ExcursionContainer(props: IExcursionProps) {
  const { excursion } = props;
  const dispatch = useDispatch();

  const tourInfo = (excursionInfo: IExcursion) => {
    dispatch(selectedExcursion(excursionInfo));
  };
  return (
    <Excursion excursion={excursion} tourInfo={tourInfo} />
  );
}
