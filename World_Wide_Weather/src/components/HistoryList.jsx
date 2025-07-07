import React from 'react';

export default function HistoryList({ history = [], onSelect }) {
  return (
    <div className="flex-1 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-4 shadow">
      <h2 className="font-semibold text-xl mb-2">Suchverlauf</h2>
      {history.length === 0 ? (
        <p className="text-gray-500">— keine Einträge —</p>
      ) : (
        <ul className="space-y-1">
          {history.map((city) => (
            <li key={city}>
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
