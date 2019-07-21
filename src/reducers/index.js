import { combineReducers } from "redux";
import emails from "./emails";
import sidebar from "./sidebar";
import activeEmail from "./activeEmail";

export default combineReducers({ emails, sidebar, activeEmail });
