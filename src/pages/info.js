import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import info from "../images/info.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  height: 50%;
`;
const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 2;
  background: #fff;
  width: 70%;
  max-width: 750px;
  padding: 10px;
  margin-bottom: 10px;
  p {
    font-size: 1.2em;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const InfoPic = styled.div`
  img {
    width: 100%;
    max-width: 747px;
  }
`;

export default () => (
  <Layout>
    <Container>
      <InnerDiv>
        <InfoPic>
          <img src={info} alt="information" />
        </InfoPic>
      </InnerDiv>
    </Container>
  </Layout>
);
