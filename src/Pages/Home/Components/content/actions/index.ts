import { createAction } from '@reduxjs/toolkit';
import { IMainPagePictureData } from '../types';

export const selectPage = createAction<IMainPagePictureData>('SELECT_PAGE');
