import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCheckSquare from "@fortawesome/fontawesome-free-solid/faCheckSquare";
import Layout from "../components/Layout";
import ProductImages from "../components/ProductImages";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30rem;
  width: 100%;
  height: 50%;
`;
const InnerDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2;
  background: #fff;
  padding: 20px;
  margin-bottom: 10px;
  p {
    font-size: 1.2em;
  }

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
    padding-bottom: 100px;
  }
`;
const ProductDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 9px;
  @media (min-width: 1000px) {
    margin: 10px;
  }
`;
const ProductHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  h3,
  h2 {
    color: #42b4e4;
    margin: 0;
    margin-left: 5px;
  }
  div {
    margin-left: 10px;
    margin-bottom: 15px;
  }
`;
const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3px;
  p {
    font-size: 1.1rem;
  }
`;
const TitleContent = styled.div`
  padding: 20px;
  border-radius: 5px;
  color: #42b4e4;
  background: white;
  margin: 1rem;
  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }
  h2 {
    text-align: center;
  }
`;

export default ({ data }) => {
  const {
    crab1,
    crab2,
    crab3,
    crab4,
    crab5,
    crab6,
    crab7,
    capelin1,
    capelin2,
    capelin3,
    capelin4,
    lobster1,
    lobster2,
    lobster3,
    lobster4,
    lobster5,
    lobster6,
    squid1,
    squid2,
    squid3,
    squid4,
    squid5,
    squid6,
    whelk1,
    whelk2,
    whelk3,
    whelk4,
    sole1,
    sole2,
    sole3,
    sole4,
    herring1,
    herring2,
    herring3
  } = data;
  return (
    <Layout>
      <Container>
        <TitleContent>
          <h1>Canadian Seafood: All fishing area and quality system</h1>
          <h2>Fishing area: NAFO Area 21</h2>
          <h2>Wild caught, clean and cold North Atlantic ocean.</h2>
          <h2>Quality System: HACCP, CFIA (Canadian Food Inspection Agency)</h2>
        </TitleContent>
        <InnerDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Atlantic Snow Crab</h2>
                <h3>Chinoecetes Opilio</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>April - July</p>
              <p>Products:</p>
              <div>
                <p>Raw section and leg</p>
                <p>Whole cooked</p>
                <p>Cooked section (cluster)</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Quick single frozen - brine and blast</p>
                <p>30 LBS Box with poly-liner</p>
              </div>
              <p>Size:</p>
              <div>
                <p>5 - 8 oz</p>
                <p>8 - 10 oz</p>
                <p>10 - 12 oz</p>
              </div>
            </ProductContent>
            <ProductImages
              imgs={[crab1, crab2, crab3, crab4, crab5, crab6, crab7]}
            />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Lobster</h2>
                <h3>Homarus Americanus</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Live:</p>
              <p>Availability Year Round - By Each Fishing Area</p>
              <p>Frozen:</p>
              <p>April - August</p>
              <p>Packing:</p>
              <div>
                <p>10 LBS Box, Individual Net</p>
                <p>Cooked, Brine frozen</p>
              </div>
              <p>Size:</p>
              <div>
                <p>250 g - 300 g (approximately 5%)</p>
                <p>300 g - 350 g (approximately 40%)</p>
                <p>350 g - 400 g (approximately 40%)</p>
                <p>400 g - 450 g (approximately 15%)</p>
                <p>450 g - 500 g</p>
                <p>500 g - 550 g</p>
                <p>550 g - 600 g</p>
              </div>
            </ProductContent>
            <ProductImages
              imgs={[
                lobster1,
                lobster2,
                lobster3,
                lobster4,
                lobster5,
                lobster6
              ]}
            />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Capelin</h2>
                <h3>Mallotus Villosus (Shishamo)</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>June - August</p>
              <p>Products:</p>
              <div>
                <p>Whole round</p>
                <p>Female and male capelin</p>
              </div>
              <p>Size Grading:</p>
              <div>
                <p>41 - 45 pcs/kg</p>
                <p>46 - 50 pcs/kg</p>
                <p>51 - 55 pcs/kg</p>
                <p>56 - 60 pcs/kg</p>
                <p>61 - 65 pcs/kg</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Air Blast Frozen in Ploy - Liner</p>
                <p>4.5kg x 2, 10kg, 15kg</p>
              </div>
            </ProductContent>
            <ProductImages imgs={[capelin1, capelin2, capelin3, capelin4]} />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Squid</h2>
                <h3>Illex</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>August - November</p>
              <p>Size:</p>
              <div>
                <p>200 g - 400 g</p>
                <p>300 g - 500 g</p>
                <p>400 g - 600 g</p>
                <p>600 g</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Hand-laid,</p>
                <p>10 kg box</p>
              </div>
            </ProductContent>
            <ProductImages
              imgs={[squid1, squid2, squid3, squid4, squid5, squid6]}
            />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Whelk</h2>
                <h3>Buccinum Undatum</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Fishing Area:</p>
              <p>Gulf Zone 3, 4, 5</p>
              <p>Season:</p>
              <p>May - October</p>
              <p>Size:</p>
              <div>
                <p>{`SS: < 9 g`}</p>
                <p>S: 10 g - 17 g</p>
                <p>M: 18 g - 24 g</p>
                <p>L: 25 g +</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Boiled frozen meat</p>
                <p>2 kg block box X 10 = 20 kg box</p>
              </div>
            </ProductContent>
            <ProductImages imgs={[whelk1, whelk2, whelk3, whelk4]} />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Red Fish (Ocean Perch)</h2>
                <h3>Sobastes Marinus</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>Year Round</p>
              <p>Size:</p>
              <div>
                <p>W/R, 200 g - 400 g, 200 g - 300 g</p>
                <p>H&G, 80 g - 100 g, 100 g - 150 g</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Hand-laid, Anti-oxidant treated</p>
                <p>10 kg box,</p>
              </div>
            </ProductContent>
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Atlantic Mackerel</h2>
                <h3>Scomber Scombrus</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>September - November</p>
              <p>Size:</p>
              <div>
                <p>200 g - 400 g</p>
                <p>300 g - 500 g</p>
                <p>400 g - 600 g</p>
                <p>600 g +</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Hand-laid</p>
                <p>9 kg x 2 = 18 kg box and 15 kg</p>
              </div>
              <p>Fat Content:</p>
              <p>Approximately 22% - 24%</p>
            </ProductContent>
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Atlantic Cod</h2>
                <h3>Gadus Morhua</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>August - November</p>
              <p>Production:</p>
              <div>
                <p>Filter Split:</p>
                <p>0.75 kg - 1.75 kg (and 1 kg - 2 kg)</p>
                <p>Head with Collar</p>
                <p>Roe and Milt</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Fresh frozen</p>
              </div>
            </ProductContent>
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Grey Sole (Witch Flounder)</h2>
                <h3>Plie Grise</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Size:</p>
              <div>
                <p>200 g - 400 g</p>
                <p>400 g - 600 g</p>
                <p>600 g +</p>
              </div>
              <p>Packing:</p>
              <div>
                <p>Frozen W/R, Shatterpack</p>
                <p>15 kg box</p>
              </div>
            </ProductContent>
            <ProductImages imgs={[sole1, sole2, sole3, sole4]} />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Atlantic Herring</h2>
                <h3>Clupea Harengus</h3>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Production Season:</p>
              <p>November - February (Winter season)</p>
              <p>Fat content:</p>
              <p>Approxmiately 20% - 22%</p>
              <p>W/R:</p>
              <div>
                <p>200 g - 300 g</p>
                <p>300 g - 500 g</p>
              </div>
              <p>Fillet:</p>
              <p>50 - 80 / kg</p>
              <p>Flaps:</p>
              <p />
              <p>Packing:</p>
              <p>10 kg box and 15 kg box</p>
            </ProductContent>
            <ProductImages imgs={[herring1, herring2, herring3]} />
          </ProductDiv>
          <ProductDiv>
            <ProductHeader>
              <FontAwesomeIcon icon={faCheckSquare} size="4x" color="#42b4e4" />
              <div>
                <h2>Other Species</h2>
              </div>
            </ProductHeader>
            <ProductContent>
              <p>Atlantic Herring</p>
              <p />
              <p>Monk Fish</p>
              <p />
              <p>Skate</p>
              <p />
              <p>Whelk meat</p>
              <p />
              <p>Razor Clam meat</p>
              <p />
            </ProductContent>
          </ProductDiv>
        </InnerDiv>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    crab1: file(relativePath: { eq: "crab1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crab2: file(relativePath: { eq: "crab2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crab3: file(relativePath: { eq: "crab3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crab4: file(relativePath: { eq: "crab4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crab5: file(relativePath: { eq: "crab5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crab6: file(relativePath: { eq: "crab6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    crab7: file(relativePath: { eq: "crab7.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    capelin1: file(relativePath: { eq: "capelin1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    capelin2: file(relativePath: { eq: "capelin2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    capelin3: file(relativePath: { eq: "capelin3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    capelin4: file(relativePath: { eq: "capelin4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lobster1: file(relativePath: { eq: "lobster1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lobster2: file(relativePath: { eq: "lobster2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lobster3: file(relativePath: { eq: "lobster3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lobster4: file(relativePath: { eq: "lobster4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lobster5: file(relativePath: { eq: "lobster5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lobster6: file(relativePath: { eq: "lobster6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squid1: file(relativePath: { eq: "squid1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squid2: file(relativePath: { eq: "squid2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squid3: file(relativePath: { eq: "squid3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squid4: file(relativePath: { eq: "squid4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squid5: file(relativePath: { eq: "squid5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    squid6: file(relativePath: { eq: "squid6.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whelk1: file(relativePath: { eq: "whelk1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whelk2: file(relativePath: { eq: "whelk2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whelk3: file(relativePath: { eq: "whelk3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whelk4: file(relativePath: { eq: "whelk4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sole1: file(relativePath: { eq: "sole1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sole2: file(relativePath: { eq: "sole2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sole3: file(relativePath: { eq: "sole3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sole4: file(relativePath: { eq: "sole4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    herring1: file(relativePath: { eq: "herring1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    herring2: file(relativePath: { eq: "herring2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    herring3: file(relativePath: { eq: "herring3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
