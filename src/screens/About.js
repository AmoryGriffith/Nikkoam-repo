import React from 'react';
export default function About() {
  return (
    <div className="about-container">
      <div className="menu-bar">
        <div className="logo"></div>
        <div className="links"></div>
        <div className="search"></div>
      </div>
      <div className="wave-img"></div>
      <div className="header-texts">
        <p className="sub-title">Team of unique combination</p>
        <h3 className="title">
          Global Intelligence <br />
          Asian Insights <br />
          Local Experience <br />
        </h3>
        <div>
          <p className="sub-title">
            We transform intelligent insights into innovative, relevant
            investment opportunities for our clients. Leveraging our unique
            combination of a global perspective complemented by our Asian DNA,
            we aspire to create sophisticated and diverse solutions that set new
            standards in the asset management industry.
          </p>
          <p className="text-link">Learn more about what makes us unique</p>
        </div>
      </div>
    </div>
  );
}
