import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const submit = () => {
    if (!city.trim()) return;
    onSearch(city.trim());
    setCity('');
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
        placeholder="Stadt eingeben…"
        className="w-96 md:w-[500px] px-6 py-4 text-lg rounded-l-2xl shadow-lg border-none focus:outline-none focus:shadow-outline transition"
      />
      <button
        onClick={submit}
        className="px-8 py-4 text-lg font-medium bg-blue-700 text-white rounded-r-2xl hover:bg-blue-800 active:scale-95 transition"
      >
        Suchen
      </button>
    </div>
  );
}
