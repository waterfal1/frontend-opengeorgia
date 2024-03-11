import { createAction } from '@reduxjs/toolkit';
import User from '../types/User';

export const setUser = createAction<User>('GET_USER_SUCCESS');
