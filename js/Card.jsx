/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  constructor(title, img, description, references) {
    super();

    this.props = {
      title: this.title,
      img: this.img,
      description: this.description,
      references: this.references
    };

    this.state = {};
  }

  render() {
    return (
      <section className="card">
        {this.props.img ? (
          <img src={`../public/img/${this.props.img}`} alt={this.props.title} />
        ) : null}
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        {this.props.references
          ? this.props.references.map(reference => <h5>{reference}</h5>)
          : ""}
      </section>
    );
  }
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  references: PropTypes.string.isRequired
};
