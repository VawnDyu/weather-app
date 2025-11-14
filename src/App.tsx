import React, { useState, useEffect } from 'react';
import { Search, Wind, Droplets, Eye, Gauge, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudDrizzle, CloudLightning, CloudFog } from 'lucide-react';
import './App.css';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  visibility: number;
  sys: {
    country: string;
  };
}

interface ForecastData {
  list: Array<{
    dt: number;
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

const App: React.FC = () => {
  const [city, setCity] = useState('Manila');
  const [searchInput, setSearchInput] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>(() => {
    const saved = localStorage.getItem('temperatureUnit');
    return (saved as 'metric' | 'imperial') || 'metric';
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('temperatureUnit', unit);
  }, [unit]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError('');

    try {
      // You can search any city worldwide, not limited to Philippines
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );

      if (!weatherRes.ok) {
        throw new Error('City not found');
      }

      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${unit}&appid=${API_KEY}`
      );

      const forecastData = await forecastRes.json();
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (API_KEY) {
      fetchWeather(city);
    }
  }, [unit]);

  const handleSearch = () => {
    if (searchInput.trim()) {
      setCity(searchInput.trim());
      fetchWeather(searchInput.trim());
      setSearchInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getWeatherIcon = (weatherMain: string, size: number = 24) => {
    const iconProps = { size, strokeWidth: 1.5 };

    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return <Sun {...iconProps} />;
      case 'clouds':
        return <Cloud {...iconProps} />;
      case 'rain':
        return <CloudRain {...iconProps} />;
      case 'drizzle':
        return <CloudDrizzle {...iconProps} />;
      case 'thunderstorm':
        return <CloudLightning {...iconProps} />;
      case 'snow':
        return <CloudSnow {...iconProps} />;
      case 'mist':
      case 'fog':
      case 'haze':
        return <CloudFog {...iconProps} />;
      default:
        return <Cloud {...iconProps} />;
    }
  };

  const getDailyForecasts = () => {
    if (!forecast) return [];

    const dailyData: { [key: string]: typeof forecast.list[0] } = {};

    forecast.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!dailyData[date]) {
        dailyData[date] = item;
      }
    });

    return Object.values(dailyData).slice(1, 6);
  };

  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const speedUnit = unit === 'metric' ? 'm/s' : 'mph';

  const getWindDescription = (speed: number) => {
    if (unit === 'metric') {
      if (speed < 1) return 'Calm';
      if (speed < 6) return 'Light breeze';
      if (speed < 12) return 'Moderate breeze';
      if (speed < 20) return 'Strong breeze';
      return 'Very strong wind';
    } else {
      if (speed < 2) return 'Calm';
      if (speed < 13) return 'Light breeze';
      if (speed < 27) return 'Moderate breeze';
      if (speed < 45) return 'Strong breeze';
      return 'Very strong wind';
    }
  };

  const getHumidityDescription = (humidity: number) => {
    if (humidity < 30) return 'Dry';
    if (humidity < 60) return 'Comfortable';
    if (humidity < 80) return 'Humid';
    return 'Very humid';
  };

  const getVisibilityDescription = (visibility: number) => {
    const km = visibility / 1000;
    if (km < 1) return 'Poor visibility';
    if (km < 4) return 'Moderate visibility';
    if (km < 10) return 'Good visibility';
    return 'Excellent visibility';
  };

  const getPressureDescription = (pressure: number) => {
    if (pressure < 1000) return 'Low pressure';
    if (pressure < 1013) return 'Normal pressure';
    return 'High pressure';
  };

  if (!API_KEY) {
    return (
      <div className="app">
        <div className="container">
          <div className="api-warning">
            <h2>API Key Required</h2>
            <p>Add your OpenWeatherMap API key to .env file</p>
            <code>VITE_OPENWEATHER_API_KEY=your_key</code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">

        <div className="top-controls">
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="search-bar">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search city worldwide..."
            className="search-input"
          />
          <button onClick={handleSearch} className="search-btn">
            <Search size={20} />
          </button>
        </div>

        <div className="unit-switch">
          <button
            onClick={() => setUnit('metric')}
            className={unit === 'metric' ? 'active' : ''}
          >
            °C
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={unit === 'imperial' ? 'active' : ''}
          >
            °F
          </button>
        </div>

        {error && <div className="error">{error}</div>}
        {loading && <div className="loading">Loading...</div>}

        {!loading && weather && (
          <>
            <div className="current-weather">
              <div className="weather-main">
                <div className="weather-info">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <div className="temp">{Math.round(weather.main.temp)}{tempUnit}</div>
                  <div className="condition">{weather.weather[0].description}</div>
                </div>
                <div className="weather-icon-large">
                  {getWeatherIcon(weather.weather[0].main, 100)}
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <Wind size={18} />
                  <div className="stat-info">
                    <span className="stat-value">{weather.wind.speed} {speedUnit}</span>
                    <span className="stat-description">{getWindDescription(weather.wind.speed)}</span>
                  </div>
                </div>
                <div className="stat">
                  <Droplets size={18} />
                  <div className="stat-info">
                    <span className="stat-value">{weather.main.humidity}%</span>
                    <span className="stat-description">{getHumidityDescription(weather.main.humidity)}</span>
                  </div>
                </div>
                <div className="stat">
                  <Gauge size={18} />
                  <div className="stat-info">
                    <span className="stat-value">{weather.main.pressure} hPa</span>
                    <span className="stat-description">{getPressureDescription(weather.main.pressure)}</span>
                  </div>
                </div>
                <div className="stat">
                  <Eye size={18} />
                  <div className="stat-info">
                    <span className="stat-value">{(weather.visibility / 1000).toFixed(1)} km</span>
                    <span className="stat-description">{getVisibilityDescription(weather.visibility)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="forecast">
              {getDailyForecasts().map((day, index) => (
                <div key={index} className="forecast-day">
                  <div className="day-name">
                    {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className="day-icon">
                    {getWeatherIcon(day.weather[0].main, 32)}
                  </div>
                  <div className="day-temp">{Math.round(day.main.temp)}{tempUnit}</div>
                  <div className="day-condition">{day.weather[0].main}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;