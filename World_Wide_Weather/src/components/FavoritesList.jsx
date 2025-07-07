import React from 'react';

export default function FavoritesList({ favs = [], onSelect }) {
  return (
    <div className="flex-1 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4 shadow">
      <h2 className="font-semibold text-xl mb-2">Favoriten</h2>
      {favs.length === 0 ? (
        <p className="text-gray-500">— noch keine Favoriten —</p>
      ) : (
        <ul className="space-y-1">
          {favs.map((city) => (
            <li key={city} className="flex justify-between items-center">
              <button
                onClick={() => onSelect(city)}
                className="text-blue-800 hover:underline"
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
