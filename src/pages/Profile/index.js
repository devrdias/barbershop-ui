import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { updateProfileRequest } from '~/store/modules/user/user.actions';
import AvatarInput from '../../components/AvatarInput/index';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Your name" />
        <Input name="email" placeholder="Your email" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Current password"
        />
        <Input type="password" name="password" placeholder="New password" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
        />

        <button type="submit">Save</button>
      </Form>

      <button type="button">Logout</button>
    </Container>
  );
}
