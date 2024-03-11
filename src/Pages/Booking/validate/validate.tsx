import * as Yup from 'yup';

export const validateErrorMessagesSchema = Yup.object({
  name: Yup.string().matches(/^[A-Za-zА-яа-я]/, 'В имени должны быть только буквы')
    .min(2, 'Слишком короткое имя')
    .max(64, 'Слишком длинное имя')
    .required('Введите ваше имя'),
  phoneNumber: Yup.string().matches(/\d{7}/gm, 'Проверьте номер телефона')
    .required('Введите номер'),
  email: Yup.string()
    .email('Введите валидный email')
    .required('Введите email'),
  date: Yup.date()
    .required('Введите дату'),
});
