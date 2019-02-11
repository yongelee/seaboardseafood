import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  height: 50%;
`;
const InnerDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 800px;
  z-index: 2;
  background: #fff;
  padding: 50px;
  p {
    font-size: 1em;
  }
  @media (min-width: 1000px) {
  }
`;

export default () => (
  <Layout>
    <Container>
      <InnerDiv>
        <p>
          <strong>Seaboard Seafood Inc.</strong>
        </p>
        <p>Sales Office: Ajax, ON. Canada</p>
        <p>
          <strong>T</strong> 1.416.846.4990
        </p>
        <p>
          <strong>F</strong> 1.905.427.8433
        </p>
        <p>
          <strong>E</strong> johnkimseafood@gmail.com
        </p>
        <p>
          <strong>www.seaboardseafood.com</strong>
        </p>
      </InnerDiv>
    </Container>
  </Layout>
);
