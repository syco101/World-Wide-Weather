import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Einstiegspunkt: rendert <App /> in #root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

