import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { Store, Email } from "./types";
import { setActiveEmail } from "../../actions/emails";

const mapStateToProps = ({ emails, sidebar, activeEmail }: Store): any => ({
  emails: emails.filter(({ folder }: Email) => folder === sidebar.selectedItem),
  activeEmail
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  setActiveEmail: (id: number): any => dispatch(setActiveEmail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
