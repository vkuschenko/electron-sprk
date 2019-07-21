import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { fetchEmails } from "../../actions/emails";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  loadData: () => dispatch(fetchEmails())
});

export default connect(
  null,
  mapDispatchToProps
);
