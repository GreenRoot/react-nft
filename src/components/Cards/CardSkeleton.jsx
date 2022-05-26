import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = (props) => (
	<ContentLoader
		speed={2}
		width={264}
		height={324.2}
		viewBox="0 0 264 324.2"
		backgroundColor="#333"
		foregroundColor="#555"
		{...props}>
		<rect x="0" y="0" rx="10" ry="10" width="264" height="250" />
		<rect x="0" y="255" rx="10" ry="10" width="100" height="42" />
		<rect x="0" y="299" rx="10" ry="10" width="251" height="25" />
	</ContentLoader>
);

export default CardSkeleton;
