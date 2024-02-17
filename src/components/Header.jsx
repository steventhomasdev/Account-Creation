import React from "react";
import {AppBar, Toolbar, Container, Box} from "@mui/material";
import icon from "../assets/logo.svg";
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Header() {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <AppBar component="nav" sx={{ backgroundColor: "#252F3D",  position: matches ? "relative" : "fixed" }}>
      <Container>
        <Toolbar>
          <Box
            component="img"
            alt="The Idea Theorem Logo"
            src={icon}
            sx={{
                width: { xs: '148px', md: '294px' },
                height: { xs: '32px', md: '32px' }
              }}
              
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}