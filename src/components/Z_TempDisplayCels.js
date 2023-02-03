import React from 'react';

// This is a component I no longer use, but I keep it here for reference.
const TempDisplayCels = (props) => {
	const { text, dataProp } = props;
	let celsTemp = Math.round(dataProp - 273.15);
	return <h4>{`${text}: ${celsTemp}° C`}</h4>;
};
// ${props.dataUnit}
export default TempDisplayCels;
