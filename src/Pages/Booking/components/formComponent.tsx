import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useQuery } from '@apollo/client';

import { messengers } from '../constants';
import { validateErrorMessagesSchema } from '../validate/validate';
import { sendToMessenger } from './sendToMessenger';
import { selectedExcursionSelector } from '../../tours/selectors';
import { selectedTransferSelector } from '../../transfer/selectors';
import { GET_ALL_DIRECTION } from '../../../api/excursionsRequests';
import { LoadingComponent } from '../../../Components/Loading/Loading';
import { IDirection } from '../../tours/types/IDirection';

import './styles.scss';

export function FormComponent() {
  const { data, loading } = useQuery(GET_ALL_DIRECTION);
  const excursion = useSelector(selectedExcursionSelector);
  const transfer = useSelector(selectedTransferSelector);
  const [open, setOpen] = useState(false);

  if (loading) {
    return <LoadingComponent />;
  }

  let optionHeader;
  if (excursion?.name) {
    optionHeader = `${excursion?.name} ${excursion?.cost}`;
  } else if (transfer?.placeName) {
    optionHeader = `${transfer?.placeName} ${transfer?.cost}`;
  }

  return (
    <div className="book-super-container">
      <div className="book-and-image-container">
        <div className="book-form-flex">
          <div className="book-leave">Связаться с нами</div>
          <Formik
            initialValues={{
              name: '',
              phoneNumber: '',
              email: '',
              date: '',
              direction: '',
              communication: '',
            }}
            validationSchema={validateErrorMessagesSchema}
            onSubmit={(values, { resetForm }) => {
              sendToMessenger(values);
              resetForm();
              setOpen(true);
            }}
          >
            <Form id="exampleForm" className="book-form">
              <label htmlFor="name">Имя</label>
              <Field name="name" className="input-style" type="text" placeholder="Ваше имя" />
              <ErrorMessage name="name" component="div" className="error-color" />

              <label htmlFor="phoneNumber">Телефон</label>
              <Field
                name="phoneNumber"
                type="tel"
                className="input-style"
                placeholder="Номер для связи"
              />
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className="input-style"
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" className="error-color" />

              <label htmlFor="date">Начало экскурсий/трансфер</label>
              <Field
                name="date"
                type="date"
                className="input-select input-style"
              />
              <ErrorMessage name="date" component="div" className="error-color" />

              <label htmlFor="direction">Направление</label>
              <Field name="direction" as="select" className="input-select input-style">
                <option>
                  {optionHeader || 'Выберите направление'}
                </option>
                {data.getAllDirections.map((d: IDirection) => (
                  d.excursions.map((item, index) => (
                    <option key={index}>{item.name} {item.cost}</option>
                  ))))}
              </Field>

              <label htmlFor="communication">Способ связи:</label>
              <Field name="communication" as="select" className="input-select input-style">
                <option className="option">Выберите мессенджер</option>
                {messengers.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </Field>
              <button
                type="submit"
                className="book-btn input-style"
              >Связаться с нами
              </button>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                center
                classNames={{
	                modal: 'customModal',
                }}
              >
                <h2 className="modalText">Форма успешно отправлена</h2>
              </Modal>
            </Form>
          </Formik>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Images/Booking/book.jpg`} alt="Горы" className="book-mountains" />
      </div>
    </div>
  );
}
