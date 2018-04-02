import styled from "styled-components";

const IconsWrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	max-height: 2rem;

	svg {
		margin: 0 0.5rem;

		&:hover {
			fill: coral;
			stroke: coral;
      cursor: pointer;
		}
	}
`;

export default IconsWrapper
