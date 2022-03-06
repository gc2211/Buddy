import React from 'react';
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Events</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Colour 
			</button>
		</div>
	);
};
export default Header;