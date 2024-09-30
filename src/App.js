// src/App.js
import React from 'react';
import NavBar from './NavBar';
import './App.css'; // Import the main CSS file

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>Welcome to Ecospare</h1>
        <p>Your partner in e-waste management.</p>
      </header>
      <section id="vision">
        <h2>Our Vision</h2>
        <p>To create a sustainable future by responsibly managing e-waste.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@ecospare.com</p>
        <p>Phone: +1 234 567 890</p>
      </section>
    </div>
  );
}

export default App;
