window.WeatherCard = function WeatherCard({ weather }) {
  return (
    <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">
        {weather.location.name}, {weather.location.country}
      </h2>
      <img
        src={weather.current.condition.icon}
        alt={weather.current.condition.text}
        className="mx-auto mb-2"
      />
      <p className="text-xl mb-1">{weather.current.temp_c}°C</p>
      <p className="text-gray-600 mb-2">{weather.current.condition.text}</p>
      <p className="text-sm text-gray-500">
        Luftfeuchtigkeit: {weather.current.humidity}%
      </p>
    </div>
  );
};

export default function WeatherCard({ weather, isFav, onToggleFav }) {
  const loc = `${weather.location.name}, ${weather.location.country}`;
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{loc}</h2>
        <button onClick={onToggleFav} className="text-2xl">
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>
      {/* restliche Anzeige */}
    </div>
  );
}

