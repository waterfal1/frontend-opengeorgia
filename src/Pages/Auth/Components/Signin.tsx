import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../../../reducers/auth';
import { setUser } from '../../admin/actions';
import { LOG_IN } from '../../../api/authRequests';
import { GET_USER } from '../../../api/usersRequests';

import './signin.scss';

export function Signin() {
  const [log_in] = useMutation(LOG_IN);
  const [user] = useMutation(GET_USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errPassword, setErrPassword] = useState('');

  return (
    <div className="container-login">
      <div className="wrap-login">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            log_in({
              variables: {
                email: values.email,
                password: values.password,
              },
            }).then((res) => {
              user({
                variables: {
                  _id: res.data.login.userId,
                },
              }).then((response) => {
                if (response.data.user.isActivated) {
                  dispatch(login(res.data.login));
                  dispatch(setUser(response.data.user));
                  navigate('/');
                } else {
                  setErrPassword('Аккаунт не активирован');
                }
              });
            }).catch(() => {
              setErrPassword('Email или пароль не верный');
            });
          }}
        >
          <Form id="authForm" className="login-form">
            <span className="login-form-title">
              Вход
            </span>
            <label htmlFor="email">E-Mail</label>
            <Field name="email" type="email" className="input-field" placeholder="Введите email" />
            <ErrorMessage name="email" component="div" className="error-color" />

            <label htmlFor="password">Пароль</label>
            <Link className="forgot-link" rel="canonical" to="/requestresetpassword"> Забыли?</Link>
            <Field name="password" type="password" className="input-field" placeholder="Введите пароль" />

            <span className="error-color">{errPassword}</span>
            <button
              type="submit"
              className="login-form-btn"
            >Войти
            </button>
            <span className="not-akk">
              Нет аккаунта?<Link rel="canonical" to="/signUp">Создать</Link>
            </span>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
