import { handleActions } from "redux-actions";
import { setEmails, deleteEmail, setEmailRead } from "../actions/emails";

const defaultState = [];

const reducer = handleActions(
  {
    [setEmails]: (state, { payload }) => payload,
    [deleteEmail]: (state, { payload }) => {
      const newState = state.slice();
      const email = newState.find(({ id }) => id === payload);
      const idx = newState.indexOf(email);
      newState.splice(idx, 1);
      return newState;
    },
    [setEmailRead]: (state, { payload }) => {
      const newState = state.slice();
      const email = newState.find(({ id }) => id === payload.id);
      email.isRead = payload.isRead;
      return newState;
    }
  },
  defaultState
);

export default reducer;
