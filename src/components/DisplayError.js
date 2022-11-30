import React from 'react';

function DisplayError() {
	return (
		<div>
			<div
				className={`backg-col-Error d-flex flex-column justify-content-center text-info rounded-5 p-3`}
			>
				<div className={'text-center fs-5 fst-italic'}>
					Sorry, your search returned no results.
				</div>
			</div>
		</div>
	);
}

export default DisplayError;
