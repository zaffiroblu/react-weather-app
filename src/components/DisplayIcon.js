import React from 'react';
import {
	BsSun,
	BsCloudSnow,
	BsBug,
	BsCloudRainHeavy,
	BsCloud,
	BsCloudHail,
	BsCloudDrizzle,
	BsCloudLightningRain,
	BsCloudHaze1,
	BsCloudHazeFill,
	BsCloudHaze,
	BsFilter,
	BsTornado,
} from 'react-icons/bs';

function DisplayIcon(props) {
	const { dataProp } = props;

	return (
		<div className='m-2'>
			{(() => {
				switch (dataProp) {
					case 'Clear':
						return <BsSun size={'4rem'} />;
					case 'Clouds':
						return <BsCloud size={'4rem'} />;
					case 'Rain':
						return <BsCloudRainHeavy size={'4rem'} />;
					case 'Snow':
						return <BsCloudSnow size={'4rem'} />;
					case 'Hail':
						return <BsCloudHail size={'4rem'} />;
					case 'Drizzle':
						return <BsCloudDrizzle size={'4rem'} />;
					case 'Thunderstorm':
						return <BsCloudLightningRain size={'4rem'} />;
					case 'Mist':
						return <BsCloudHaze1 size={'4rem'} />;
					case 'Smoke':
						return <BsCloudHazeFill size={'4rem'} />;
					case 'Haze':
						return <BsCloudHaze size={'4rem'} />;
					case 'Dust':
						return <BsFilter size={'4rem'} />;
					case 'Fog':
						return <BsCloudHail size={'4rem'} />;
					case 'Sand':
						return <BsFilter size={'4rem'} />;
					case 'Ash':
						return <BsFilter size={'4rem'} />;
					case 'Squall':
						return <BsFilter size={'4rem'} />;
					case 'Tornado':
						return <BsTornado size={'4rem'} />;
					default:
						return (
							<div>
								<BsBug size={70} />
								<p>No icon available</p>
							</div>
						);
				}
			})()}
		</div>
	);
}

export default DisplayIcon;
