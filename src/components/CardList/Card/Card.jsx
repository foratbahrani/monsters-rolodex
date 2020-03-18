import React from 'react';
import 'tachyons';
import './Card.css';

const Card = ({ monster }) => {
	return (
		<div className='bg-light-green dib br2 pa3 ma2 grow b32 shadow-5 tc CardContainer'>
			<img
				alt='monster'
				src={`https://robohash.org/${monster.id}?set=set2&size=250x250`}
				width={250}
				height={250}
			/>
			<h3 className='f4 b'>{monster.name}</h3>
			<h4 className='f6'>{monster.email}</h4>
		</div>
	);
};

export default Card;
