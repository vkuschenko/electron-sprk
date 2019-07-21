import { handleActions } from "redux-actions";
import { setActiveEmail, resetActiveEmail } from "../actions/emails";

const defaultState = null;

const reducer = handleActions(
  {
    [setActiveEmail]: (state, { payload }) => payload,
    [resetActiveEmail]: (state, { payload }) => defaultState
  },
  defaultState
);

export default reducer;
