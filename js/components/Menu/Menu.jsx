import React from "react";
import { NavLink } from "react-router-dom";
import preload from "../../../data.json";
import { MenuWrapper, Navbar, Title, Subtitle } from "./styled";

const { collections } = preload;
const elementsPerColumn = 3;
// const isInteger = n => n % 1 === 0;

const Menu = () => (
	<MenuWrapper>
		<Title>
			<NavLink to="/">
				<h1>
					Collective perceptions,<br /> social interactions and everyday situations
				</h1>
			</NavLink>
		</Title>

		<Navbar>
			<ul>
				{collections.map((collection, i) => {
					const isNewColumn = i % elementsPerColumn === 0;

					if (isNewColumn) {
						return (
							<Subtitle test key={`123_${collection.title}`}>
								<NavLink to={collection.url}>
									<h2>{collection.title}</h2>
								</NavLink>
							</Subtitle>
						);
					}
					return (
						<Subtitle key={`123_${collection.title}`}>
							<NavLink to={collection.url}>
								<h2>{collection.title}</h2>
							</NavLink>
						</Subtitle>
					);
				})}
			</ul>
		</Navbar>
	</MenuWrapper>
);

export default Menu;
