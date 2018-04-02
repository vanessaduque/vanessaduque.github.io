import React from "react";
import PropTypes from "prop-types";
import CardWrapper from "./styled"

const Card = props => (
  <CardWrapper>
    {props.img ? (
      <img src={`../../public/img/${props.img}`} alt={props.title} />
    ) : null}
    <h4>{props.title}</h4>
    <p>{props.description}</p>
    {props.references
      ? props.references.map(reference => <h5>{reference}</h5>)
      : ""}
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
