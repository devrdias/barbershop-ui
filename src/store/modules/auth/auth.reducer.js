import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
