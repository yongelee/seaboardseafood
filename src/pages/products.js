import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  height: 50%;
`
const InnerDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
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
`
const ProductDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 9px;
  @media (min-width: 1000px) {
    margin: 10px;
  }
`
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
`
const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3px;
  p {
    font-size: 1rem;
  }
`

export default () => (
  <Container>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>April - July</p>
          <p>Packing:</p>
          <div>
            <p>Raw Section and Leg,</p>
            <p>Cooked Clusters/Section,</p>
            <p>Brine frozen and blast,</p>
            <p>30 lbs box</p>
          </div>
          <p>Size:</p>
          <div>
            <p>5 - 8 OZ</p>
            <p>8 - 10 oz</p>
            <p>10 - 12 oz</p>
          </div>
        </ProductContent>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>July - August</p>
          <p>Size Grading:</p>
          <div>
            <p>46 - 50 / kg</p>
            <p>51 - 55 / kg</p>
            <p>56 - 60 / kg</p>
            <p>61 - 65 / kg</p>
          </div>
          <p>Packing:</p>
          <div>
            <p>W/R Female Capelin and Male Capelin</p>
            <p>4.5 kg x 2, 9 kg box and 10 kg box</p>
          </div>
          <p>Female Roe content:</p>
          <p>Approximately 26% - 30%</p>
        </ProductContent>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>Year Round</p>
          <p>Packing:</p>
          <div>
            <p>Whole Round and H&G</p>
            <p>10 kg box,</p>
            <p>Hand-laid,</p>
            <p>Anti-Oxidant treated</p>
          </div>
          <p>Size:</p>
          <div>
            <p>W/R, 200 g - 400 g</p>
            <p>H&G, 80 g - 120 g</p>
          </div>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>August - November</p>
          <p>Packing:</p>
          <div>
            <p>Split - Layer pack,</p>
            <p>Fresh frozen, 10 kg box</p>
          </div>
          <p>Size:</p>
          <p>0.75 kg - 1.7g kg</p>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>Year round</p>
          <p>Size:</p>
          <div>
            <p>200 g - 400 g</p>
            <p>400 g - 600 g</p>
          </div>
          <p>Packing:</p>
          <div>
            <p>10 kg box,</p>
            <p>Hand-laid</p>
          </div>
        </ProductContent>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>August - October</p>
          <p>Size:</p>
          <div>
            <p>200 g - 300 g</p>
            <p>300 g - 500 g</p>
            <p>400 g - 600 g</p>
          </div>
          <p>Packing:</p>
          <div>
            <p>10 kg box,</p>
            <p>Hand-laid</p>
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
          <p>Fishing area:</p>
          <p>NAFO Area 21</p>
          <p>Season:</p>
          <p>September - November</p>
          <p>Size:</p>
          <div>
            <p>300 g - 500 g</p>
            <p>400 g - 600 g</p>
            <p>600 g - 800 g</p>
          </div>
          <p>Packing:</p>
          <div>
            <p>8 kg x 2,</p>
            <p>16 kg box</p>
          </div>
          <p>Fat Content:</p>
          <p>Approximately 22% - 24% (+-)</p>
        </ProductContent>
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
          <p>Fishing area:</p>
          <p>Gulf Zone 3, 4, 5</p>
          <p>Season:</p>
          <p>May - October</p>
          <p>Size:</p>
          <div>
            <p>SS, {'< 9'} g</p>
            <p>S, 10 g - 17 g</p>
            <p>M, 18 g - 24 g</p>
            <p>L, 25 g+</p>
          </div>
          <p>Packing:</p>
          <div>
            <p>Boiled frozen meat,</p>
            <p>2 kg block box x 10 = 20 kg box</p>
          </div>
        </ProductContent>
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
          <p>Skae Wing</p>
          <p />
          <p>Lobster</p>
          <p />
          <p>And more</p>
          <p />
        </ProductContent>
      </ProductDiv>
    </InnerDiv>
  </Container>
)
