import React, { useState, useEffect } from 'react';
import DisplayError from './DisplayError';
import FahrToggle from './FahrToggle';

function DataFetching(props) {
	const { cityFromButtonClick } = props;

	//"data" and "setData" are responsible for displaying and changing the
	// information from the API.
	const [data, setData] = useState(undefined);
	const [showFahrToggle, setShowFahrToggle] = useState(undefined);
	const [errorState, setErrorState] = useState(undefined);

	useEffect(() => {
		async function fetchData() {
			if (!cityFromButtonClick) {
				return;
			}
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${cityFromButtonClick}&APPID=0fecb235311e3b1907dbc8b03bb16042`,
					{
						mode: 'cors',
					}
				);
				if (response.ok) {
					const jsonData = await response.json();
					console.log(jsonData);
					setData(jsonData);
					setShowFahrToggle(true);
					setErrorState(false);
				} else {
					setErrorState(true);
					setShowFahrToggle(false);
				}
			} catch (error) {
				console.error('Please enter a city name.');
				setData(undefined);
			}
		}
		fetchData();
	}, [cityFromButtonClick]);

	return (
		<div
			className={`d-flex align-items-stretch justify-content-center backg-${
				data?.weather?.[0]?.main ?? 'white'
			} fit-screen-weather`}
		>
			{showFahrToggle ? <FahrToggle data={data} /> : []}
			{errorState ? <DisplayError /> : []}
		</div>
	);
}

export default DataFetching;
