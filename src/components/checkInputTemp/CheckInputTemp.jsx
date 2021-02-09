import React, { useState } from 'react';
import './checkInputTemp.css';
export const CheckInputTemp = ({temp}) => {
	const [tempCelciusOrFahrenheit, setTempCelciusOrFahrenheit] = useState(temp);
	const [typeTemp, setTypeTemp] = useState(' °C')
	const convertToCelciusOrFah = (celsius) => {
		let fahrenheit = (celsius * 9/5 + 32).toFixed(1);
		if(typeTemp != ' °F'){
			setTempCelciusOrFahrenheit(fahrenheit);
			setTypeTemp(' °F');
		}else {
			setTempCelciusOrFahrenheit(celsius);
			setTypeTemp(' °C');
		}
	};

	return (
		<div className="form-check form-switch form-check-degree">
			<label className="form-check-label display-1" 
					htmlFor="flexSwitchCheckChecked">
					{tempCelciusOrFahrenheit}{typeTemp}
			</label>			
			<input 	className="form-check-input" 
					type="checkbox"
					onChange={() => convertToCelciusOrFah(temp)} 
					id="flexSwitchCheckChecked" 
					defaultChecked 
			/>
		</div>
	);
}
