import React, { useState } from 'react';
import './App.css';

const Button = ({ text, icon, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="button-container">
      <a 
        href={link} 
        className={`circular-button ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i className={`fas ${icon} icon`}></i>
        <span>{text}</span>
      </a>
    </div>
  );
};

const App = () => (
  <div className="app">
    <div className="background-animation"></div>
    <header className="app-header">
      <h1>Gauffin-Oscarsson</h1>
    </header>
    <main className="app-main">
      <Button text="About Me" icon="fa-user" link="https://joakim.gauffin-oscarsson.com" />
      <Button text="Homelab" icon="fa-server" link="https://homelab.gauffin-oscarsson.com" />
    </main>
  </div>
);

export default App;
