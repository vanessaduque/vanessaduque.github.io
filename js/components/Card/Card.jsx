import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "./styled"

const Card = ({img, title, description, references}) => (
  <CardWrapper>
    {img ? (
      <img src={`../../public/img/${img}`} alt={title} />
    ) : null}
    <h4>{title}</h4>
    { description.split("\n").map(line => <p>{line}</p>)}
    { references
      ? references.map(reference => <h5>{reference}</h5>)
      : null }
  </CardWrapper>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  references: PropTypes.string
};

Card.defaultProps = {
  references: ""
}
