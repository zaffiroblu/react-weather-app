import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DisplayWeather from './DisplayWeather';

export const TempContext = React.createContext();

function FahrToggle(props) {
	const { data } = props;
	// This state is to control the toggle for Fahrenheit vs Celsius:
	const [fahrToggle, setFahrToggle] = useState(false);
	const [checked, setChecked] = useState(false);

	const handleToggle = (e) => {
		setFahrToggle((current) => !current);
		setChecked(e.currentTarget.checked);
	};

	return (
		<div>
			{data && (
				<div
					className={`backg-col-${
						data?.weather?.[0]?.main ?? '#2b2b2b'
					} d-flex flex-column justify-content-center text-info rounded-5 add-padding`}
				>
					<TempContext.Provider value={fahrToggle}>
						<DisplayWeather data={data} />
						<div className='d-flex justify-content-center'>
							<ToggleButton
								className='m-2 text-info'
								id='toggle-check'
								type='checkbox'
								variant='outline-light'
								checked={checked}
								onChange={handleToggle}
							>
								{fahrToggle
									? 'Display in ° C'
									: 'Display in ° F'}
							</ToggleButton>
						</div>
					</TempContext.Provider>
				</div>
			)}
		</div>
	);
}

export default FahrToggle;
