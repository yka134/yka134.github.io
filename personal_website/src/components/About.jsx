import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="images/Igloo.jpg" alt="Igloo" />
      </div>
      <div className="about-img2">
        <img src="images/Drums.jpg" alt="Drums" />
      </div>
      <div className="about-content">
        <h2>About <span>Me</span></h2>
        <h3>Hobbies</h3>
        <p>It's a tradition for me to build an Igloo every winter!</p>
        <p>Whenever I get stressed, the drums help me relieve it.</p>
      </div>
    </section>
  );
};

export default About;
