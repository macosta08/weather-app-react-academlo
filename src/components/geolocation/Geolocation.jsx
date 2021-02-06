import React, { useState } from 'react'
import { Weather } from '../weather/Weather';

export const Geolocation = () => {
	const [geolocation, setGeolocation] = useState(null);
	const [ifGeolocation, setIfGeolocation] = useState(false)
	function geoFindMe() {

		const status = document.querySelector('#status');
		const mapLink = document.querySelector('#map-link');
	  
		mapLink.href = '';
		mapLink.textContent = '';
	  
		function success(position) {
		  const latitude  = position.coords.latitude;
		  const longitude = position.coords.longitude;
	  
		  status.textContent = '';
		  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		  mapLink.textContent = setGeolocation( {
			  lat: latitude,
				 long: longitude});
		  setIfGeolocation(true); 
		}
	  
		function error() {
		  status.textContent = 'Unable to retrieve your location';
		}
	  
		if(!navigator.geolocation) {
		  status.textContent = 'Geolocation is not supported by your browser';
		} else {
		  status.textContent = 'Locating…';
		  navigator.geolocation.getCurrentPosition(success, error);
		}
	  
		
	  }
	console.log(geolocation);
	  document.querySelector('#find-me')
	return (
		<div>
			<button id = "find-me" onClick={() => geoFindMe()}>Show my location</button><br/>
  				<p id = "status"></p>
				<a id = "map-link" target="_blank"></a>
			{ ifGeolocation && <Weather geolocation={geolocation}/>}
		</div>
	)
}
