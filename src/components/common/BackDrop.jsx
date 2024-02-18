import { Backdrop, CircularProgress } from "@mui/material";

const BackDrop = ({ loading, color }) => {
  return (
    <Backdrop
      sx={{ color: {color}, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDrop;
