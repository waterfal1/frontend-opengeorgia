import { useEffect, useState } from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { validateSingUp } from './validate/validate';
import ActivateEmail from './constants';
import { GET_USER } from '../../../api/usersRequests';
import { ACTIVATE_EMAIL, LOG_UP, SEND_MAIL } from '../../../api/authRequests';

import './signin.scss';

export function SignUp() {
  const [user] = useMutation(GET_USER);
  const [log_up] = useMutation(LOG_UP);
  const [send_mail] = useMutation(SEND_MAIL);
  const [activateMail] = useMutation(ACTIVATE_EMAIL);
  const navigate = useNavigate();
  const location = useLocation();
  const [errEmail, setErrEmail] = useState('');

  useEffect(() => {
    const getActivationLink = new URLSearchParams(location.search).get('activate');
    if (getActivationLink) {
      activateMail({
        variables: {
          activationLink: getActivationLink,
        },
      }).then((response) => {
        switch (Number(response?.data?.activate?.message)) {
          case ActivateEmail.newLink:
            navigate('/signin');
            break;
          case ActivateEmail.oldLink:
            navigate('/expiredLink');
            break;
        }
      });
    }
  }, [activateMail, navigate, location.search]);

  return (
    <div className="container-login">
      <div className="wrap-login">
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validateSingUp}
          onSubmit={(values) => {
            log_up({
              variables: {
                userInput: { email: values.email, password: values.password },
              },
            }).then((response) => {
              user({
                variables: {
                  _id: response.data.createUser._id,
                },
              }).then((r) => {
                send_mail({
                  variables: {
                    email: response.data.createUser.email,
                    activationLink: r.data.user.activationLink,
                  },
                }).then(() => {
                  navigate('/sentletter');
                });
              });
            }).catch(() => {
              setErrEmail('Пользователь с таким Email уже существует');
            });
          }}
        >
          <Form id="authForm" className="login-form">
            <span className="login-form-title">
              Регистрация
            </span>

            <label htmlFor="email">E-Mail</label>
            <Field name="email" type="email" className="input-field" placeholder="Введите email" />
            <ErrorMessage name="email" component="div" className="error-color" />

            <label htmlFor="password">Пароль</label>
            <Field name="password" type="password" className="input-field" placeholder="Введите пароль" />
            <ErrorMessage name="password" component="div" className="error-color" />

            <label htmlFor="confirmPassword">Пароль</label>
            <Field name="confirmPassword" type="password" className="input-field" placeholder="Подтвердите пароль" />
            <ErrorMessage name="confirmPassword" component="div" className="error-color" />
            <span className="error-color">{errEmail}</span>
            <button
              type="submit"
              className="login-form-btn btn"
            >Зарегистрироваться
            </button>
            <span className="not-akk">
              Уже зарегистрированы?<Link rel="canonical" to="/signin">Войти</Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
