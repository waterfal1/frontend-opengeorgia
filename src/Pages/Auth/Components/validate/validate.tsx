import * as Yup from 'yup';

export const validateSingIn = Yup.object().shape({
  password: Yup.string()
    .typeError('Должно быть строкой')
    .required('Введите пароль'),
  email: Yup.string()
    .email('Введите верный email')
    .required('Введите Email'),
});

export const validateSingUp = Yup.object().shape({
  password: Yup.string()
    .typeError('Должно быть строкой')
    .required('Введите пароль')
    .min(8, 'Извините, пароль должен содержать минимум 8 символов'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Введите пароль'),
  email: Yup.string()
    .email('Введите верный email')
    .required('Введите Email'),
});
