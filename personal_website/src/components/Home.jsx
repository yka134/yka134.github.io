import React from 'react';
import "./Home.css";


const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hi!</h3>
        <h1>I'm <span>Yealam</span>,</h1>
        <h2>a Computer Science Student</h2>
        <p>Welcome to my personal website! Here, you can learn more about me, my experience, and my education.</p>
        <div className="btn-box">
          <a href="#about" className="btn-1">About Me</a>
        </div>
      </div>
      <div className="image-box">
      <img src="/images/Picture.JPG" alt="Yealam" />

      </div>
    </section>
  );
};

export default Home;
