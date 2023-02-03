import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DataFetching from './DataFetching';
import Logo from '.././images/logo_white_cropped_small.png';

function CitySearch() {
	//"cityInput" and "setCityInput" are there so the user can see what they are typing in
	// the input field.
	const [cityInput, setCityInput] = useState(1);
	//"cityFromButtonClick" and "setCityFromButtonClick" are there so there's a state
	// for saving the value of "city" at the point of clicking "search" (as opposed to the
	// display within the input field.)
	const [cityFromButtonClick, setCityFromButtonClick] = useState('');

	const handleClick = () => {
		setCityFromButtonClick(cityInput);
	};

	const onEnterPress = (e) => {
		if (e.charCode === 13) {
			setCityFromButtonClick(cityInput);
		}
	};

	return (
		<div className='bg-secondary fit-screen-search'>
			<div className='top-bar d-flex asp-rat-layout justify-content-evenly'>
				<div className='d-flex justify-content-center add-margin'>
					<img className='logo' src={Logo} alt='Logo' />
				</div>
				<div className='d-flex justify-content-end align-items-center my-2'>
					<input
						className='text-line'
						type='text'
						placeholder='Enter city'
						id={cityInput}
						onChange={(e) => setCityInput(e.target.value)}
						onKeyPress={(e) => onEnterPress(e)}
					></input>
					<Button
						className='text-info'
						variant='primary'
						onClick={handleClick}
					>
						Search
					</Button>
				</div>
			</div>
			<div className='content-area'>
				<DataFetching cityFromButtonClick={cityFromButtonClick} />
			</div>
		</div>
	);
}

export default CitySearch;
