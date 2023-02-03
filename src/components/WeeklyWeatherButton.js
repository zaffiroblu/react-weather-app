import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DataFetchingWeekly from './DataFetchingWeekly';

// This component will be finished later -- it's for displaying the weekly weather.

function WeeklyWeatherButton(props) {
	const { data } = props;

	const [dataFromLast, setDataFromLast] = useState('');

	const handleClick = () => {
		setDataFromLast(data);
	};

	return (
		<div>
			<Button
				className='text-info fw-bold mx-3'
				variant='primary'
				onClick={handleClick}
			>
				5-Day Forcast
			</Button>
			<DataFetchingWeekly dataFromLast={dataFromLast} />
		</div>
	);
}

export default WeeklyWeatherButton;
