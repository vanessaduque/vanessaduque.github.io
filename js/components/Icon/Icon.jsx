import React from "react";
import PropTypes from 'prop-types';
import glyphs from './glyphs';

const Icon = ({ glyph, size, color }) => (
	<svg
		preserveAspectRatio="xMidYMid meet"
		width={size}
		height={size}
		viewBox="0 0 32 32"
		fill={color}
		stroke={color}
		>
			{glyphs[glyph]}
	</svg>
)

const propTypes = {
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	glyph: PropTypes.string.isRequired,
	color: PropTypes.string
}

const defaultProps = {
	size: 32,
	color: 'black'
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
