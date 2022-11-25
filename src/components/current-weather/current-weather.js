import "./current-weather.css";

const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">

          <p className="city">{data.city}</p>

      </div>
      <div className="top">
        <div>
          <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <p className="temperature"><span className="temp-unit">{Math.round(data.main.temp)}</span>°C</p>

      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <p className="parameter-label details-title">Details</p>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidty</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
