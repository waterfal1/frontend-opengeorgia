import { createAction } from '@reduxjs/toolkit';
import { IDirection } from '../types/IDirection';
import { IExcursion } from '../types/IExcursion';

export const setPages = createAction<IDirection[]>('SET_PAGES');
export const selectedExcursion = createAction<IExcursion>('SET_SELECTED_EXCURSION');
export const setAllDirections = createAction<IDirection[]>('SET_ALL_DIRECTIONS');
