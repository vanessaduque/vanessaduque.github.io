
import React from "react";

const glyphs = {
	instagram: (
		<g fill="none" fillRule="evenodd">
			<path
				d="M9 .85A8.15 8.15 0 0 0 .85 9v14A8.15 8.15 0 0 0 9 31.15h14A8.15 8.15 0 0 0 31.15 23V9A8.15 8.15 0 0 0 23 .85H9z"
				strokeWidth="1.7"
			/>
			<circle  strokeWidth="1.9" cx="16" cy="16" r="7.5" />
			<circle fill="none" cx="24.7" cy="7.3" r="1.5" />
		</g>
	),

	email: (
		<g fill="none" fillRule="evenodd">
			<rect strokeWidth="1.33" x=".665" y="5.665" width="30.67" height="20.67" rx="3" />
			<path strokeWidth="1.3" d="M1 6.2l15 12 15-12" />
		</g>
	)
};

export default glyphs;
