import Alert from "@mui/material/Alert";

const AlertMsg = ({ status }) => {
  return (
    <>
      {status === "success" && (
        <Alert className="alert-msg" severity="success">
          User account successfully created.
        </Alert>
      )}
      {status === "error" && (
        <Alert className="alert-msg" severity="error">
          There was an error creating the account.
        </Alert>
      )}
    </>
  );
};

export default AlertMsg;
