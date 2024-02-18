import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const AlertMsg = ({ status, message }) => {
  const iconMapping = {
    success: <CheckCircleOutlineIcon style={{ color: "#333333" }} />,
    error: <CancelOutlinedIcon style={{ color: "#333333" }} />,
  };

  return (
    <Alert icon={iconMapping[status]} className={`alert-msg ${status}`} severity={status}>
      {message}
    </Alert>
  );
};

export default AlertMsg;
