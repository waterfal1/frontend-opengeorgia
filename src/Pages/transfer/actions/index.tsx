import { createAction } from '@reduxjs/toolkit';
import { ITransfer } from '../types';

export const selectedTransfer = createAction<ITransfer>('SET_SELECTED_TRANSFER');
