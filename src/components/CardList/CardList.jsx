import React from 'react';
import './CardList.css';
import Card from './Card/Card';

const CardList = ({ monsters }) => {
	return (
		<div className='CardList'>
			{monsters.map(monster => (
				<Card key={'Card.' + monster.id} monster={monster} />
			))}
		</div>
	);
};

export default CardList;
