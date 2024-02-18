import React from 'react';
import { Box } from '@mui/material';

function Logo({ icon }) {
  return (
    <Box
      component="img"
      alt="The Idea Theorem Logo"
      src={icon}
      sx={{
        width: { xs: '148px', md: '294px' },
        height: { xs: '16px', md: '32px' }
      }}
    />
  );
}

export default Logo;
