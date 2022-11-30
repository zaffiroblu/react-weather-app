import React from 'react';
import DisplayIcon from './DisplayIcon';
import DisplayTemp from './DisplayTemp';
import SmallDisplayItem from './SmallDisplayItem';

function DisplayWeather(props) {
	const { data } = props;
	return (
		<div>
			{data && (
				<div
					className={
						'd-flex asp-rat-layout justify-content-evenly align-items-center'
					}
				>
					<div className='d-flex flex-column align-items-center mx-2'>
						<p className='asp-rat-text-size m-1 text-center'>
							{data.name}
						</p>
						<DisplayTemp
							className='display-5'
							text={''}
							dataProp={data.main.temp}
						/>
						<DisplayTemp
							className='m-0'
							text={'Feels like:'}
							dataProp={data.main.feels_like}
						/>
					</div>
					<div className='d-flex flex-column align-items-center mx-2'>
						<DisplayIcon dataProp={data.weather[0].main} />
						<p className='asp-rat-text-size m-0 fw-bold'>
							{data.weather[0].main}
						</p>
					</div>
					<div className='d-flex mx-2'>
						<div className='d-flex flex-column m-2'>
							<DisplayTemp
								className='m-0'
								text={'Low:'}
								dataProp={data.main.temp_min}
							/>
							<SmallDisplayItem
								className='m-0'
								text={'Humidity:'}
								dataProp={data.main.humidity}
								dataUnit={'%'}
							/>
						</div>
						<div className='d-flex flex-column m-2'>
							<DisplayTemp
								className='m-0'
								text={'High:'}
								dataProp={data.main.temp_max}
							/>
							<SmallDisplayItem
								className='m-0'
								text={'Wind:'}
								dataProp={data.wind.speed}
								dataUnit={'m/s'}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default DisplayWeather;
