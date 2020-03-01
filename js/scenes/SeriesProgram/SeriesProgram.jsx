/* eslint-disable */

import React, { Fragment, useState }from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import preload from "../../../data.json";
import CardsWrapper from '../SharedComponents/CardsWrapper'
import SeriesProgramWrapper, { Description } from './styled'

const lookbook = preload.collections[2];
const collection = preload.collections[5];
const subtitles = [ "Collection", "Lookbook" ]

const SeriesProgram = () => {
	const [ selectedSection, setSelectedSection ] = useState(subtitles[0])

	return (
		<SeriesProgramWrapper>
			<h3>{lookbook.title}</h3>
			<Link to="/">
				<p>BACK</p>
			</Link>
			<p>
				{lookbook.tag} - {lookbook.date}
			</p>
			<ul>
				{ subtitles.map(name => (
					<li key={name} onClick={() => setSelectedSection(name)}>
						<h4>{name}</h4>
					</li>
				))}
			</ul>

			{ selectedSection === subtitles[0] && (
				<Fragment>
					<Description>{collection.description}</Description>
					<CardsWrapper>
						{collection.categories.map(category => (
							<Card
								title={category.name}
								img={category.img}
								description={category.description}
							/>
						))}
					</CardsWrapper>
				</Fragment>
				
			)}

			{ selectedSection === subtitles[1] && (
				<Fragment>
					{lookbook.description.split("\n").map(line => <Description>{line}</Description>)}
					<CardsWrapper>
						{lookbook.categories.map(category => (
							<Card
								title={category.name}
								img={category.img}
								description={category.description}
							/>
						))}
					</CardsWrapper>
				</Fragment>
			
			)}
		
		</SeriesProgramWrapper>
	)
}

export default SeriesProgram;
