export const Geolocation = ({ setGeolocation }) => {
  function geoFindMe() {
    let latitude;
    let longitude;
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      setGeolocation({
        lat: latitude,
        long: longitude,
        anwersGeolocation: true,
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

    return;
  }
  const geo = geoFindMe();
  return geo;
};
