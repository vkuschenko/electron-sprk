import { handleActions } from "redux-actions";
import { selectSidebarElement } from "../actions/sidebar";

// possible options are:
// inbox, calendar, sent, drafts, pins, archive
const defaultState = {
  selectedItem: "inbox"
};

const reducer = handleActions(
  {
    [selectSidebarElement]: (state, { payload }) => ({
      ...state,
      selectedItem: payload
    })
  },
  defaultState
);

export default reducer;
