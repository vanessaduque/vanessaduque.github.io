/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import preload from "../data.json";

const { collections } = preload;

const Menu = () => (
  <section className="menu">
    <article className="title">
      <Link to="/">
        <h1>
          Collective perceptions,<br /> social interactions and everyday
          situations
        </h1>
      </Link>
    </article>

    <article className="navbar">
      <ul>
        {collections.map(collection => (
          <li>
            <Link to={collection.url}>
              <h2>{collection.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  </section>
);

export default Menu;
