import { useEffect, useState } from "react";
import "./weatherapp.css";

// images for other elements
// import searchIcon from "./assets/search.png";
// import humidityIcon from "./assets/humidity.png";
// import windIcon from "./assets/wind.png";
// import searchIcon from "search.jpeg";
// import humidityIcon from "humidity.jpeg";
// import windIcon from "wind.jpeg";
import { useNavigate } from "react-router-dom";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  lon,
  humidity,
  wind,
}) => {
  return (
    <>
      <div className="images">
        {/* <img src={icon} alt="weather icon" /> */}
      </div>
      <div className="temp">{temp}°C</div>
      <div className="city">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="lon">Longitude</span>
          <span>{lon}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          {/* <img src={humidityIcon} width={50} alt="humidity" className="icon" /> */}
          <div className="data">
            <div className="humidity-percentage">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          {/* <img src={windIcon} width={50} alt="wind" className="icon" /> */}
          <div className="data">
            <div className="Wind-percentage">{wind}Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

function Weatherapp() {
  const navigate = useNavigate();

  const [text, settext] = useState("Trivandrum");
  const [icon, setIcon] = useState(""); // Icon URL will be dynamically set
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Trivandrum");
  const [country, setcountry] = useState("IN");
  const [lat, setlat] = useState(0);
  const [lon, setlon] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [wind, setwind] = useState(0);
  const [cityNotFound, setcityNotFound] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const search = async () => {
    let api_key = "155f20515439e391d7e92cdb1e609167";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      setloading(true);
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);

      if (data.cod === "404") {
        console.error("City Not Found");
        setcityNotFound(true);
        setloading(false);
        return;
      }

      sethumidity(data.main.humidity);
      setwind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setcountry(data.sys.country);
      setlat(data.coord.lat);
      setlon(data.coord.lon);

      // Construct the URL for the high-resolution weather icon
      const weatherIconCode = data.weather[0].icon;
      const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@4x.png;
      setIcon(weatherIconUrl)`;

      setcityNotFound(false);
    } catch (error) {
      console.error("An error Occurred:", error.message);
      seterror("An error occurred while fetching weather data.");
    } finally {
      setloading(false);
    }
  };

  const handleCity = (e) => {
    settext(e.target.value);
  };

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(function () {
    search();
  }, []);

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="city-Input"
            placeholder="Search City"
            onChange={handleCity}
            onKeyDown={handlekeydown}
            value={text}
          />
          <div className="search-icon" onClick={() => search()}>
            {/* <img src={searchIcon} width={20} alt="search" /> */}
          </div>
        </div>

        {loading && <div className="Loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">City Not Found</div>}

        {!loading && !cityNotFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            lon={lon}
            humidity={humidity}
            wind={wind}
          />
        )}

        <p className="copyright">
          Designed by <span>Gowtham</span>
        </p>
        <button onClick={() => navigate("/home")} className="show-more-btn">
          Back
        </button>
      </div>
    </>
  );
}

export default Weatherapp;
