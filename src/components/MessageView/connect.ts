import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import {
  deleteEmail,
  setEmailRead,
  resetActiveEmail
} from "../../actions/emails";

interface Store {
  emails: any;
  activeEmail: number;
}

const mapStateToProps = ({ emails, activeEmail }: Store): any => ({
  email: emails.find(({ id }: { id: number }) => id === activeEmail)
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteEmail: (id: number): any => {
    dispatch(deleteEmail(id));
    dispatch(resetActiveEmail());
  },
  toggleEmailRead: (id: number, isRead: boolean): any =>
    dispatch(setEmailRead({ id, isRead }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
