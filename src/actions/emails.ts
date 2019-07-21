import { Dispatch } from "redux";
import { createAction } from "redux-actions";

export const setEmails = createAction("SET_EMAILS");

interface ResponseItem {
  content: string;
  date: string;
  folder: string;
  from: string;
  id: number;
  isRead: boolean;
  subject: string;
}

export const fetchEmails: any = () => (dispatch: Dispatch) => {
  fetch("/emails")
    .then(response => response.json())
    .then(data => {
      const result = data.map((item: ResponseItem) => ({
        ...item,
        date: new Date(item.date)
      }));
      dispatch(setEmails(result));
    })
    .catch(e => console.log(e));
};

export const setActiveEmail = createAction("SET_ACTIVE_EMAIL");

export const resetActiveEmail = createAction("RESET_ACTIVE_EMAIL");

export const deleteEmail = createAction("DELETE_EMAIL");

export const setEmailRead = createAction("SET_EMAIL_READ");
