import React from "react";
import { NavLink } from "react-router-dom";
import preload from "../../../data.json";
import Columns from './components/Column'
import SocialMediaIcons from "./components/SocialMediaIcons"
import { MenuWrapper, Navbar, NavbarWrapper, Title } from "./styled";

const { collections } = preload;

const Menu = () => (
	<MenuWrapper>
		<Title>
			<NavLink to="/">
				<h1>
					Collective perceptions,<br /> social interactions and everyday situations
				</h1>
			</NavLink>
		</Title>

		<NavbarWrapper>
			<SocialMediaIcons />
			<Navbar>
				<Columns items={ collections }/>
			</Navbar>
		</NavbarWrapper>
	</MenuWrapper>
);

export default Menu;
