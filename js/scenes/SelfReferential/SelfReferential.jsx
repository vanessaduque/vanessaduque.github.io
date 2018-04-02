/* eslint-disable */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import preload from "../../../data.json";
import CardsWrapper from "../SharedComponents/CardsWrapper";
import SelfReferentialWrapper from './styled'

const collection = preload.collections[1];

const SelfReferential = () => (
	<SelfReferentialWrapper>
		<h3>{collection.title}</h3>
		<Link to="/">
			<p>BACK</p>
		</Link>
		<p>
			{collection.tag} - {collection.date}
		</p>
		<CardsWrapper>
			{collection.categories.map(category => (
				<Card
					title={category.name}
					img={category.img}
					description={category.description}
					references={category.references}
				/>
			))}
		</CardsWrapper>
	</SelfReferentialWrapper>
);

export default SelfReferential;
