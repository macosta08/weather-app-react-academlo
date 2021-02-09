import React, { useState } from 'react';
import { weatherConditions } from '../../utils/weatherConditions';
import { CheckInputTemp } from '../checkInputTemp/CheckInputTemp';
import { IconWeather } from '../iconWeather/IconWeather';
import './weather.css';

export const Weather = ({country, city, temp, icon, weatherDescription, weatherName}) => {
	const [backgroundImg, setBackgroundImg] = useState("blue");

    if(weatherConditions.hasOwnProperty(weatherName))
   		setBackgroundImg(weatherConditions[weatherName].bckgImg);
    
  
	return (
		<div className="container-backg" style={{ backgroundImage: backgroundImg }}>
			<div className='container-weather'>
				<h1>Weather App</h1>
				<p>{country} / { city }</p>
				<CheckInputTemp temp={temp}/>
				<IconWeather icon={icon} weatherDescription={weatherDescription}/>
				<p>{weatherDescription}</p>
			</div>
		</div>
	);
}
