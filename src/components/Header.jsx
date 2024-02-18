import React from "react";
import {AppBar, Toolbar, Container} from "@mui/material";
import icon from "../assets/logo.svg";
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from "./common/Logo";


export default function Header() {

  const matches = useMediaQuery('(min-width:600px)');

  return (
    <AppBar component="nav" sx={{ backgroundColor: "#252F3D",  position: matches ? "relative" : "fixed" }}>
      <Container>
        <Toolbar>
          <Logo icon={icon}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}