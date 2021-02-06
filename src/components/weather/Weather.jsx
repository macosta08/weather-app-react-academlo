import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hook/useFeth';

export const Weather = ({geolocation}) => {

	const [tempCelciusOrFahrenheit, setTempCelciusOrFahrenheit] = useState(0);
	const [temIsFahrenheit, setTemIsFahrenheit] = useState(false);
	const {lat, long} = geolocation;

	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=ef6610b8317ee83b4f3d46739507089e`;

	const {data, loading, error} = useFetch(url);
	const { timezone , current} = !!data && data; 
	
	useEffect(() => {
	console.log('cambio DATA');
	}, [data]);

	useEffect(() => {
		console.log('cambio boton temperatura');
	}, [temIsFahrenheit]);

	const convertToCelciusOrFah = (celsius) => {
		let fahrenheit = celsius * 9/5 + 32
		if(!temIsFahrenheit){
			setTemIsFahrenheit(true);
			setTempCelciusOrFahrenheit(fahrenheit)
		}else {
			setTemIsFahrenheit(false);
			setTempCelciusOrFahrenheit(celsius)
		}
	};
	console.log(data);
	return (
		<div>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Loading...Spinners</span>}
			{!loading &&
				<div>
					<h1>Weather</h1>
					<div>
						<p>Timezone: {timezone}</p>
						<p>Current Weather: {current.weather[0].description}</p>
						<div className="form-check form-switch">
  							<input className="form-check-input" type="checkbox" onChange={() => convertToCelciusOrFah(current.temp)} id="flexSwitchCheckChecked" defaultChecked />
  							<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Current Temp: {tempCelciusOrFahrenheit === 0 ? current.temp : tempCelciusOrFahrenheit}</label>
						</div>
						<img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} alt={current.weather[0].description}/>		
					</div>
				</div>
			}
		</div>
	)
}
