import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30rem;
  width: 100%;
  height: 50%;
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 2;
  background: #fff;
  padding: 20px 35px;
  margin-bottom: 10px;
  p {
    font-size: 1.2em;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const InfoText = styled.div`
  color: #42b4e4;
  p {
    line-height: 0.9;
  }
`;

export default () => (
  <Layout>
    <Container>
      <InnerDiv>
        <InfoText>
          <h2>Multi Species Plant and Primary Processing License</h2>
          <h2>Quality and Inspection:</h2>
          <h2>HACCP and CFIA (Canadian Food Inspection Agency) Approved.</h2>
        </InfoText>
      </InnerDiv>
    </Container>
  </Layout>
);
