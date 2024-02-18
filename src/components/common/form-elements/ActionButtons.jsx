import React from "react";
import { Button, Box } from "@mui/material";

const ActionButtons = () => {
  return (
    <Box className="btn-container">
      <Button className="btn outline" type="reset">
        Cancel
      </Button>
      <Button className="btn filled" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ActionButtons;
