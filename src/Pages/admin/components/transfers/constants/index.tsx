import * as Yup from 'yup';
import { ITransfer } from '../../../../transfer/types';

export const transferValidationSchema: Yup.BaseSchema<Partial<ITransfer>> = Yup.object({
  placeName: Yup.string().required('Required field'),
  cost: Yup.string().required('Required field'),
});

export const transferInitialValues: Partial<ITransfer> = ({
  id: 0,
  cost: '',
  placeName: '',
});
