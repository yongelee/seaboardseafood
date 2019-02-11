import React from "react";
import Helmet from "react-helmet";

import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import bglarge from "../images/bglarge.jpg";

import "normalize.css";
import "./styles.css";

const Container = styled.div`
  font-family: arial;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const ImageBg = styled.div`
  background-image: url(${bglarge});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 462px;
`;

const Layout = ({ children }) => (
  <Container>
    <Helmet>
      <title>Seaboard Seafood Inc.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="Seaboard Seafood Inc."
        content="Seaboard Seafood Inc. serving the finest fish Atlantic Canada has to offer."
      />
      <meta charSet="utf-8" />
    </Helmet>
    <Header />
    <ImageBg>{children}</ImageBg>
    <Footer />
  </Container>
);

export default Layout;
