import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faArrowRight from "@fortawesome/fontawesome-free-solid/faArrowRight";
import faArrowLeft from "@fortawesome/fontawesome-free-solid/faArrowLeft";

const Wrapper = styled.div`
  width: 800px;
  .arrows {
    margin-top: 5px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      cursor: pointer;
    }
    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    width: unset;
  }
`;

class ProductImages extends React.Component {
  state = {
    numImgs: this.props.imgs.length || 0,
    selected: 1
  };

  handleArrow = direction => {
    this.setState({
      selected:
        direction === "left"
          ? this.state.selected === 1
            ? this.state.numImgs
            : this.state.selected - 1
          : this.state.selected === this.state.numImgs
          ? 1
          : this.state.selected + 1
    });
  };

  render() {
    const { numImgs, selected } = this.state;
    const { imgs } = this.props;
    return (
      <Wrapper>
        <Img fluid={imgs[selected - 1].childImageSharp.fluid} />
        <div className="arrows">
          <span onClick={() => this.handleArrow("left")}>
            <FontAwesomeIcon icon={faArrowLeft} size="4x" color="#42b4e4" />
          </span>
          <p>{`${selected}/${numImgs}`}</p>
          <span onClick={() => this.handleArrow("right")}>
            <FontAwesomeIcon icon={faArrowRight} size="4x" color="#42b4e4" />
          </span>
        </div>
      </Wrapper>
    );
  }
}

export default ProductImages;
