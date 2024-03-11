import { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';

import { RESET_PASSWORD } from '../../../api/authRequests';

import './signin.scss';

export function ResetPassword() {
  const [resetPassword] = useMutation(RESET_PASSWORD);
  const location = useLocation();
  const navigate = useNavigate();
  const [errEmail, setErrEmail] = useState('');
  const getActivationLink = useRef(new URLSearchParams(location.search).get('resetToken'));

  return (
    <div className="container-login">
      <div className="wrap-login">
        <Formik
          initialValues={{
            password: '',
          }}
          onSubmit={(values) => {
            resetPassword({
              variables: {
                password: values.password,
                token: getActivationLink.current,
              },
              onCompleted: (data) => {
                if (data) {
                  navigate('/signin');
                }
              },
            }).catch(() => {
              setErrEmail('Неверный пароль');
            });
          }}
        >
          <Form id="authForm" className="login-form">
            <span className="login-form-title">
              Восстановите ваш пароль
            </span>

            <label htmlFor="password">Новый пароль:</label>
            <Field name="password" type="password" className="input-field" placeholder="Введите новый пароль" />

            <span className="error-color">{errEmail}</span>
            <button
              type="submit"
              className="login-form-btn"
            >Восстановить пароль
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
