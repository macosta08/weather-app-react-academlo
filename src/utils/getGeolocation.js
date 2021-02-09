export const getGeolocation = ({ setGeolocation }) => {
      
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setGeolocation({
        lat: latitude,
        long: longitude,
        answerGeo: true,
      });
    }

    function error() {
      alert("Unable to retrieve your location");
    }

    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
};
