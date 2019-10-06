/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import preload from "../../../data.json";
import CardsWrapper from '../SharedComponents/CardsWrapper'
import SeriesProgramWrapper from './styled'

const collection = preload.collections[2];

const SeriesProgram = () => (
	<SeriesProgramWrapper>
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
				/>
			))}
		</CardsWrapper>
	</SeriesProgramWrapper>
);

export default SeriesProgram;
