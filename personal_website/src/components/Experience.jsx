import React from 'react';
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="exp">
      <h1>Skills</h1>
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C/C++</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a></li>
        <li><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a></li>
        <li><a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a></li>
        <li><a href="https://github.com" target="_blank">Git/GitHub</a></li>
        <li>Data Structures</li>
        <li>OOP</li>
      </ul>
      <h2>Work Experience</h2>
      <h3>Kumon</h3>
      <p>Teaching Assistant (Feb 2024 - Present)</p>
      <ul>
        <li>Teaching high school-level math</li>
        <li>Teaching high school-level English</li>
        <li>Grading student work</li>
        <li>File management</li>
      </ul>
    </section>
  );
};

export default Experience;
