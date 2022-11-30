import React from 'react';
import DisplayIcon from './DisplayIcon';
import DisplayTemp from './DisplayTemp';
import SmallDisplayItem from './SmallDisplayItem';

function DisplayWeatherWeekly(props) {
	const { data } = props;
	return (
		<div>
			{data && (
				<div className={'d-flex flex-column align-items-center'}>
					<h3 className='fs-1 m-1'>{data.name}</h3>
					<DisplayTemp text={''} dataProp={data.main.temp} />
					<DisplayIcon dataProp={data.weather[0].main} />
					<p className='fs-4'>{data.weather[0].main}</p>
					<DisplayTemp
						text={'Feels like:'}
						dataProp={data.main.feels_like}
					/>
					<DisplayTemp text={'Low:'} dataProp={data.main.temp_min} />
					<DisplayTemp text={'High:'} dataProp={data.main.temp_max} />
					<SmallDisplayItem
						className='fs-6'
						text={'Humidity'}
						dataProp={data.main.humidity}
						dataUnit={'%'}
					/>
					<SmallDisplayItem
						className='fs-6'
						text={'Wind Speed'}
						dataProp={data.wind.speed}
						dataUnit={'knots'}
					/>
				</div>
			)}
		</div>
	);
}

export default DisplayWeatherWeekly;
