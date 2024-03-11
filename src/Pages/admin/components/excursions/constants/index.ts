import * as Yup from 'yup';
import { IReview } from '../../../../reviews/types/IReview';
import { IExcursion } from '../../../../tours/types/IExcursion';

export const initialValues: Partial<IExcursion> & {direction: string, excursionPlan: string[]} = ({
  direction: '',
  cost: '',
  full_text: '',
  name: '',
  excursionPlan: [],
});

export const excursionsValidationSchema: Yup.BaseSchema<Partial<IExcursion>> = Yup.object({
  cost: Yup.string().required('Required field'),
  full_text: Yup.string().required('Required field'),
  name: Yup.string().required('Required field'),
});

export const reviewValidationSchema: Yup.BaseSchema<Partial<IReview>> = Yup.object({
  date: Yup.string().required(),
  name: Yup.string()
    .matches(/^[A-Za-zА-яа-я]/, 'Name can contains only letters')
    .max(25, 'Maximum length is 25 characters')
    .required(),
  text1: Yup.string()
    .min(35, 'Minimum length is 35 characters')
    .max(350, 'Maximum length is 350 characters')
    .required('Required field'),
  rating: Yup.number()
    .min(0)
    .max(5)
    .integer()
    .required(),
});

export const reviewInitialValues: Partial<IReview> = ({
  date: '',
  name: '',
  face: '',
  text1: '',
  rating: 0,
});
