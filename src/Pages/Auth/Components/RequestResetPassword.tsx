import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { REQUEST_RESET_PASSWORD } from '../../../api/authRequests';

import './signin.scss';

export function RequestResetPasswordPage() {
  const [requestResetPassword] = useMutation(REQUEST_RESET_PASSWORD);
  const [errEmail, setErrEmail] = useState('');
  const navigate = useNavigate();

  return (
    <div className="container-login">
      <div className="wrap-login">
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={(values) => {
            requestResetPassword({
              variables: {
                email: values.email,
              },
              onCompleted: (data) => {
                if (data) {
                  navigate('/sentletter');
                }
              },
            }).catch(() => {
              setErrEmail('Пожалуйста, проверьте свою электронную почту, чтобы продолжить сброс пароля.');
            });
          }}
        >
          <Form id="authForm" className="login-form">
            <span className="login-form-title">
              Забыли пароль?
            </span>
            <span className="login-form-text">
              Введите ваш email, и мы отправим ссылку для восстановления пароля.
            </span>

            <label htmlFor="email">E-Mail</label>
            <Field name="email" type="email" className="input-field" placeholder="Email" />

            <span className="error-color">{errEmail}</span>
            <button
              type="submit"
              className="login-form-btn"
            >Восстановить пароль
            </button>
            <span className="not-akk">
              <Link rel="canonical" to="/signin">Вернуться ко входу</Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
