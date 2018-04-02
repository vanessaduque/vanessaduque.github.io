import React from "react";
import PropTypes from "prop-types";

const Card = props => (
  <section className="card">
    {props.img ? (
      <img src={`../../public/img/${props.img}`} alt={props.title} />
    ) : null}
    <h4>{props.title}</h4>
    <p>{props.description}</p>
    {props.references
      ? props.references.map(reference => <h5>{reference}</h5>)
      : ""}
  </section>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  references: PropTypes.string.isRequired
};