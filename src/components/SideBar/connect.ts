import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { Store } from "./types";
import { selectSidebarElement } from "../../actions/sidebar";
import { resetActiveEmail } from "../../actions/emails";

const mapStateToProps = ({ sidebar }: Store): any => sidebar;

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  sidebarElementClick: (item: any) => {
    dispatch(selectSidebarElement(item));
    dispatch(resetActiveEmail());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
