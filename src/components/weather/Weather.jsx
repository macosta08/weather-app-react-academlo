import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hook/useFeth';
import { weatherConditions } from '../../utils/weatherConditions';
import Spinner from 'react-bootstrap/Spinner';
import './weather.css';

export const Weather = ({geolocation, setClimateColor}) => {

	const [tempCelciusOrFahrenheit, setTempCelciusOrFahrenheit] = useState(0);
	const [temIsFahrenheit, setTemIsFahrenheit] = useState(false);
	const [typeTemp, setTypeTemp] = useState(' °C')
	const {lat, long} = geolocation;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=13c36e252ca697f7355f5bc8ac79b77a`;
	const {data, loading, error} = useFetch(url);
	const { name, sys, weather, main } = !!data && data; 

	if(!loading) setClimateColor(weatherConditions[weather[0].main].color);

	useEffect(() => {}, [data]);
	
	useEffect(() => {}, [temIsFahrenheit]);

	const convertToCelciusOrFah = (celsius) => {
		let fahrenheit = (celsius * 9/5 + 32).toFixed(2);
		if(!temIsFahrenheit){
			setTemIsFahrenheit(true);
			setTempCelciusOrFahrenheit(fahrenheit);
			setTypeTemp(' °F');
		}else {
			setTemIsFahrenheit(false);
			setTempCelciusOrFahrenheit(celsius);
			setTypeTemp(' °C');
		}
	};
	return (
		<div>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <Spinner animation="border" />}
			{!loading &&
				<div>
					<h1>Weather App</h1>
					<p>{sys.country} / { name}</p>
					<div>
						<div className="form-check form-switch form-check-degree">
							<label className="form-check-label display-3" htmlFor="flexSwitchCheckChecked">{tempCelciusOrFahrenheit === 0 ? main.temp : tempCelciusOrFahrenheit}{typeTemp}</label>			
							<input className="form-check-input" type="checkbox" onChange={() => convertToCelciusOrFah(main.temp)} id="flexSwitchCheckChecked" defaultChecked />
						</div>
					</div>
					<img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description}/>
					<p>{weather[0].description}</p>
				</div>
			}
		</div>
	)
}
