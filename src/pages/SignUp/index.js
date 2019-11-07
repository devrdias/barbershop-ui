import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/auth.actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Inform 6 characters min'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="BarberShop" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="name" name="name" id="name" placeholder="Your name" />
        <Input type="email" name="email" id="email" placeholder="Your email" />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Your password"
        />

        <button type="submit">CREATE ACCOUNT</button>
        <Link to="/">Already have a login?</Link>
      </Form>
    </>
  );
}
