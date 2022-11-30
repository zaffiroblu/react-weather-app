import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DataFetching from './DataFetching';
import Logo from '.././images/logo_white_cropped_small.png';

function CitySearch() {
	//"cityInput" and "setCityInput" are there so the user can see what they are typing in
	// the input field.
	const [cityInput, setCityInput] = useState(1);
	//"cityFromButtonClick" and "setCityFromButtonClick" are there so there is a state
	// for saving the value of "city" AT THE POINT OF THE BUTTON CLICK (as opposed to the //// display within the input field.)
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
				<div className='d-flex justify-content-end align-items-center m-2'>
					<input
						className='m-1 text-line'
						type='text'
						placeholder='Enter city'
						id={cityInput}
						onChange={(e) => setCityInput(e.target.value)}
						onKeyPress={(e) => onEnterPress(e)}
					></input>
					<Button
						className='mx-3 text-info'
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
