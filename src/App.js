import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters    : [],
			searchField : ''
		};
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => this.setState({ monsters: data }));
	}

	onSearchChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filtered = monsters.filter(m => {
			return m.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className='App tc'>
				<h1
					className='f-headline lh-solid white'
					style={{ fontFamily: 'Bigelow Rules, cursive' }}
				>
					Monsters Rolodex
				</h1>
				<SearchBox onChange={this.onSearchChange} />
				<CardList monsters={filtered} />
			</div>
		);
	}
}
