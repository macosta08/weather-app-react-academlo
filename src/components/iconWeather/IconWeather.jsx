import React from 'react'
import { URL } from '../../utils/apiWeatherConfigFile';


export const IconWeather = ({icon, weatherDescription}) => {
	return (
		<>
			<img 
				src={`${URL}/img/wn/${icon}@2x.png`} 
				alt={weatherDescription}
			/>
		</>
	);
}
