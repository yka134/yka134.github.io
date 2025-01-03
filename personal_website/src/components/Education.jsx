import React from 'react';
import "./Education.css";

const Education = () => {
  return (
    <section className="education" id="edu">
      <h2>Education</h2>
      <div className="education-img">
        <a href="https://www.sfu.ca">
          <img src="images/SFUlogo.jpg" alt="SFU Logo" />
        </a>
      </div>
      <h3>Simon Fraser University</h3>
      <p><strong>Bachelor of Computing Science</strong></p>
      <p>Expected Graduation: September 2027</p>
    </section>
  );
};

export default Education;
