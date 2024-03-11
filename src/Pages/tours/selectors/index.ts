import { RootState } from '../../../reducers';

export const selectedPageSelector = (state: RootState) => state.selectedPage;
export const pagesSelector = (state: RootState) => state.pages;
export const selectedExcursionSelector = (state: RootState) => state.selectedExcursion;
