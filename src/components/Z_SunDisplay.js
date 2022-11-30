import React from 'react';

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
