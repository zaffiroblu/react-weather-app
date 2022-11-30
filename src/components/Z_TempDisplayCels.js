import React from 'react';

const TempDisplayCels = (props) => {
	const { text, dataProp } = props;
	let celsTemp = Math.round(dataProp - 273.15);
	return <h4>{`${text}: ${celsTemp}° C`}</h4>;
};
// ${props.dataUnit}
export default TempDisplayCels;
