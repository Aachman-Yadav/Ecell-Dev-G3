import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="title">Welcome to Our Website</h1>
        <p className="description">Discover amazing content and explore endless possibilities.</p>
        <button className="cta-button" onClick={() => alert("Button Clicked!")}>Learn More</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<HeroSection />);
