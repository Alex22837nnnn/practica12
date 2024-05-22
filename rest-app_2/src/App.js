import React, { useState, useEffect } from 'react';

const CountryCards = () => {
	const [countries, setCountries] = useState([]);
	const [flags, setFlags] = useState([]);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => setCountries(data));
	}, []);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all?fields=name,flags')
			.then(response => response.json())
			.then(data => {
				const imageLink = data.map(country => country.flags);
				console.log(imageLink);
			})
			.catch(error => console.error('Error:', error));
	}, []);

	return (
		<div className="cont">
			<h3 className='header'>Countries</h3>
			<div className='roww'>
				{countries.slice(0, 8).map(country => (
					<a className='linker' href='https://getbootstrap.com/docs/5.3/layout/columns/' target='_blank'>
						<div key={country.cca3} className="card">
							<img src={country.flags.png} className="card-img-top" />
							<div className='text-block'>
								<ul className='list-group list-group-flush'>
									<li className='list-group-item'><h3 className='card-title'>{country.name.common}</h3></li>
									<li className='list-group-item'><p className='card-text'>Capital: {country.capital}</p></li>
									<li className='list-group-item'><p className='card-text'>Population: {country.population}</p></li>
									<li className='list-group-item'><p className='card-text'>Region: {country.region}</p></li>
								</ul>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default CountryCards;
