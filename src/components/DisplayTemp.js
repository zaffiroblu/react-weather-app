import React, { useContext } from 'react';
import { TempContext } from './FahrToggle';

const DisplayTemp = (props) => {
	const { text, dataProp, className } = props;

	const fahrToggle = useContext(TempContext);

	let fahrTemp = Math.round(((dataProp - 273.15) * 9) / 5 + 32);
	let celsTemp = Math.round(dataProp - 273.15);

	return (
		<div className={className ?? ''}>
			{fahrToggle ? (
				<div className='m-2 d-flex flex-column align-items-center '>
					<p className='m-0'>{`${text}`}</p>
					<p className='m-0 fw-bold'>{`${fahrTemp}° F`}</p>
				</div>
			) : (
				<div className='m-2 d-flex flex-column align-items-center '>
					<p className='m-0'>{`${text}`}</p>
					<p className='m-0 fw-bold'>{`${celsTemp}° C`}</p>
				</div>
			)}
		</div>
	);
};

export default DisplayTemp;
