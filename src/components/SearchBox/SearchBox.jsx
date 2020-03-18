import React from 'react';

function SearchBox({ onChange }){
	return (
		<input
			className='pa3 mb4'
			type='search'
			placeholder='search monsters'
			onChange={e => onChange(e)}
		/>
	);
}

export default SearchBox;
