import React from 'react';

const TempDisplayFahr = (props) => {
	const { text, dataProp } = props;
	let fahrTemp = Math.round(((dataProp - 273.15) * 9) / 5 + 32);
	return <h4>{`${text}: ${fahrTemp}° F`}</h4>;
};
// ${props.dataUnit}
export default TempDisplayFahr;
