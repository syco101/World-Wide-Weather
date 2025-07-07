import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import HistoryList from './components/HistoryList';
import FavoritesList from './components/FavoritesList';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useLocalStorage('ww-history', []);
  const [favs, setFavs] = useLocalStorage('ww-favs', []);

  // entfernt Akzente aus dem Stadtnamen
  const normalizeCity = (city) =>
    city.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const API_KEY = '0509bfd4ad7642e8a6072248252706';

  // holt die Wetterdaten
  const fetchWeather = async (city) => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
        city
      )}&aqi=no`
    );
    if (!res.ok) {
      const err = await res
        .json()
        .catch(() => ({ error: { message: 'City not found' } }));
      throw new Error(err.error.message);
    }
    return res.json();
  };

  const addToHistory = (location) => {
    setHistory((prev) => {
      const next = [location, ...prev.filter((x) => x !== location)];
      return next.slice(0, 10);
    });
  };

  const toggleFav = (location) => {
    setFavs((prev) =>
      prev.includes(location) ? prev.filter((x) => x !== location) : [...prev, location]
    );
  };

  const handleSearch = async (cityRaw) => {
    if (!cityRaw) return;
    const city = normalizeCity(cityRaw.trim());

    try {
      const data = await fetchWeather(city);
      const loc = `${data.location.name}, ${data.location.country}`;
      setWeather(data);
      addToHistory(loc);
    } catch (err) {
      console.error('Fehler beim Laden der Wetterdaten:', err);
      alert('Wetterdaten konnten nicht geladen werden.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-700 p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        World Wide Weather 🌍
      </h1>

      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-col md:flex-row gap-8 my-6">
        <HistoryList history={history} onSelect={handleSearch} />
        <FavoritesList favs={favs} onSelect={handleSearch} />
      </div>

      {weather && (
        <WeatherCard
          weather={weather}
          isFav={favs.includes(`${weather.location.name}, ${weather.location.country}`)}
          onToggleFav={() =>
            toggleFav(`${weather.location.name}, ${weather.location.country}`)
          }
        />
      )}
    </div>
  );
}
