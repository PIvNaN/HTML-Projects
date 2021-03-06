'use strict';

const template = require('../../views/pages/CurrentWeather.hbs');
const Search = require('../components/Search.js');
const Button = require('../components/Button.js');

class CurrentWeather {

	constructor() {
		this.container = document.createElement('div');
		this.container.classList.add('current-weather-container');

		this.render();

	}

	render() {
		this.container.innerHTML = template();
		this.button();
	}

	button() {
		const button = new Button('Go to Forecast Weather');
		this.container.appendChild(button.container);

		button.container.addEventListener('click', () => {
			this.hidden();
			this.container.nextElementSibling.classList.add('show');
		});
	}

	show(data) {
		this.container.classList.add('show');

		let show = this.container.querySelector('.current-weather');

		show.innerHTML = this.printWeather(data);
	}

	hidden() {
		this.container.classList.remove('show');
	}

	//ToDo: Move this data to appropriate files.
	printWeather(data) {
		const html = `
			<span class="city-name">${data.location.name}</span>
			<span class="country">${data.location.country}</span>
			<span class="temp">${data.current.temp_c + " °C"}</span>
			<img class="icon" src="${data.current.condition.icon}">
			<span class="condition-text">${data.current.condition.text}</span>
		`;

		return html;
	}

}

module.exports = CurrentWeather;
