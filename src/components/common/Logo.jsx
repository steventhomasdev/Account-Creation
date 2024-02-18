import React from 'react';
import { Box } from '@mui/material';

function Logo({ icon, altText }) {
  return (
    <Box
      component="img"
      alt={altText}
      src={icon}
      sx={{
        width: { xs: '148px', md: '294px' },
        height: { xs: '16px', md: '32px' }
      }}
    />
  );
}

export default Logo;
