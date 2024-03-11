import { createSlice } from '@reduxjs/toolkit';

export interface IForm {
  name: string,
  phoneNumber: string,
  date: string,
  direction: string,
  communication: string,
}
const initialState: IForm = {
  name: '',
  phoneNumber: '',
  date: '',
  direction: '',
  communication: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveDataForm: (state, action) => ({
      name: action.payload.name,
      phoneNumber: action.payload.phoneNumber,
      date: action.payload.date,
      direction: action.payload.direction,
      communication: action.payload.communication,
    }),
    deleteDataForm: () => ({
      name: '',
      phoneNumber: '',
      date: '',
      direction: '',
      communication: '',
    }),
  },
});

export const { saveDataForm, deleteDataForm } = formSlice.actions;

export default formSlice.reducer;
