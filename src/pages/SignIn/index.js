import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';
import { signInRequest } from '~/store/modules/auth/auth.actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleOnSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="BarberShop" />

      <Form schema={schema} onSubmit={handleOnSubmit}>
        <Input type="email" name="email" id="email" placeholder="Your email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />

        <button type="submit">{loading ? 'Loading...' : 'Enter'}</button>
        <Link to="/register">Create your account </Link>
      </Form>
    </>
  );
}
