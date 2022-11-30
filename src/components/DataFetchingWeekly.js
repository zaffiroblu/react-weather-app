import React, { useState, useEffect } from 'react';
import FahrToggle from './FahrToggle';
// import Button from 'react-bootstrap/Button';

function DataFetchingWeekly(props) {
	const { dataFromLast } = props;

	// //"data" and "setData" are responsible for displaying and changing the
	// // information from the API.
	const [data7Day, setData7Day] = useState(undefined);

	useEffect(() => {
		async function fetchData7Day() {
			if (!dataFromLast) {
				return;
			}
			try {
				const response = await fetch(
					`dummy-data-5-day_${dataFromLast.coord.lat}_${dataFromLast.coord.lon}.json`,
					{
						mode: 'cors',
					}
				);
				const jsonData = await response.json();
				console.log(jsonData);
				setData7Day(jsonData);
			} catch (error) {
				console.error('Sorry, we could not fetch the 5-day forecast.');
				setData7Day(undefined);
			}
		}
		fetchData7Day();
	}, [dataFromLast]);

	return (
		<div className='d-flex justify-content-center m-3'>
			<FahrToggle data7Day={data7Day} />
		</div>
	);
}

export default DataFetchingWeekly;

//`api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=0fecb235311e3b1907dbc8b03bb16042`,
