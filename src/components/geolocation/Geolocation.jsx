import React, { useEffect, useState } from 'react';
import { Weather } from '../weather/Weather';
import Spinner from 'react-bootstrap/Spinner';

export const Geolocation = ({setBackgroundImg}) => {
	const [geolocation, setGeolocation] = useState({});
	const [ifGeolocation, setIfGeolocation] = useState(false)
	function geoFindMe() {
	  
		function success(position) {
		  const latitude  = position.coords.latitude;
		  const longitude = position.coords.longitude;
	  
		  setGeolocation({
			  lat: latitude,
			  long: longitude});

		  setIfGeolocation(true); 
		}
	  
		function error() {
		  alert('Unable to retrieve your location');
		}
	  
		if(!navigator.geolocation) {
		  alert('Geolocation is not supported by your browser');
		} else {
		  navigator.geolocation.getCurrentPosition(success, error);
		}

	  }

	  useEffect(() => {
		geoFindMe();
	  }, [])
	  
	return (
		<div>
			{!ifGeolocation && <Spinner animation="border" />}
			{ ifGeolocation && <Weather geolocation={geolocation} setBackgroundImg={setBackgroundImg}/>}
		</div>
	)
}
