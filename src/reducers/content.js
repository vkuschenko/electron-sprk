import { handleActions } from "redux-actions";
import { setActiveEmail } from "../actions/content";

const defaultState = {
  id: null
};

const reducer = handleActions(
  {
    [setActiveEmail]: (state, { payload }) => ({
      ...state,
      id: payload
    })
  },
  defaultState
);

export default reducer;
