import React from 'react';

// This component may be revived later for showing the sunrise and sunset times,
// only right now I could not figure out a good way to convert the universal times
// in the OpenWeather to the local time of the user. Here is my attempt, which
// still doesn't work as I expect.

function SunDisplay(props) {
	const { text, timeZone, dataProp } = props;
	let date = new Date(dataProp * 1000 + timeZone * 1000)
		.toString()
		.split(' ', 3)
		.join(' ');
	let time = new Date(dataProp * 1000).toString().split(' ');
	return (
		<div>
			<h5>
				{text} on {date}: {time[4] + ' (' + time[5] + ')'}
			</h5>
		</div>
	);
}

export default SunDisplay;
