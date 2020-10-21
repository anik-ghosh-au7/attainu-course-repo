import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

// style
import { CLEAR_NOTIFICATION } from "../../redux/actions/notification.action";
import { connect } from "react-redux";

const Notification = (props) => {
  const { open, msg, severity, clearNotification } = props;

  return (
    <SweetAlert
      type={severity}
      title={severity}
      onConfirm={() => clearNotification()}
      onCancel={() => clearNotification()}
      show={open}
    >
      {msg}
    </SweetAlert>
  );
};

const setStateToProps = ({ notification }) => {
  return {
    ...notification,
  };
};

const setActionToProps = (dispatch) => {
  return {
    clearNotification: () => {
      dispatch({
        type: CLEAR_NOTIFICATION,
      });
    },
  };
};

export default connect(setStateToProps, setActionToProps)(Notification);
