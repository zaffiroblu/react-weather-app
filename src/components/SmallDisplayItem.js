import React from 'react';

// This component can be recycled to display several of the smaller
// info boxes in the UI.

const SmallDisplayItem = (props) => {
	const { text, dataProp } = props;
	return (
		<div className='mx-2 d-flex flex-column align-items-center '>
			<p className='m-0'>{text}</p>
			<p className='m-0 fw-bold'>
				{dataProp} {props.dataUnit ?? ''}
			</p>
		</div>
	);
};

export default SmallDisplayItem;
