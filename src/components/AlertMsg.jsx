import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const AlertMsg = ({ status }) => {
  return (
    <>
      {status === "success" && (
        <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon style={{ color: "#333333" }} />,
          }}
          className="alert-msg"
          severity="success"
        >
          User account successfully created.
        </Alert>
      )}
      {status === "error" && (
        <Alert
          iconMapping={{
            error: <CancelOutlinedIcon style={{ color: "#333333" }} />,
          }}
          className="alert-msg"
          severity="error"
        >
          There was an error creating the account.
        </Alert>
      )}
    </>
  );
};

export default AlertMsg;
