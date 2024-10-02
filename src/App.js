import React from 'react';
import NavBar from './NavBar';
import './App.css';
import eWasteImage from './nathan-cima-TQuq2OtLBNU-unsplash.jpg';
import VisionPanel from './VisionPanel'; // Import VisionPanel

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <header className="App-header">
        <h1>Welcome to Ecospare</h1>
        <p>Your partner in e-waste management.</p>
      </header>

      <section className="vision-section">
        <img src={eWasteImage} alt="E-waste management" className="e-waste-image" />
        <div className="vision-text">
          <h2>Ecospare: Transforming Today’s Waste into a Resource</h2>
          <p>
            Our vision is to turn e-waste into a valuable resource for a sustainable future. Join us in making
            a positive environmental impact.
          </p>
        </div>
      </section>

      <section id="vision">
        <h2>Our Vision</h2>
        <VisionPanel /> {/* Render VisionPanel */}
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
