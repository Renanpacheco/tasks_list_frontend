import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../Header/header";
import Body from "../Body/body";
import Footer from "../Footer/footer";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
