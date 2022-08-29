import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import '../styles/content.scss';
export const Content1 = ({ title1, title2, title3, subtitle, link }) => {
  let motion = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      '.header-texts',
      { x: -200, y: 200, opacity: 0 },
      { x: 0, y: 50, opacity: 1, duration: 1.25 }
    );
  });
  return (
    <div className="header-texts">
      <p className="content-title">
        {title1} <br />
        {title2} <br />
        {title3} <br />
      </p>
      <div className="sub-title-container">
        <p className="content-sub-title">{subtitle}</p>
        <p className="content-text-link">
          {link}
          <img
            src="/link-icon.svg"
            className="filter-primary-color arrow-icon"
          />
        </p>
      </div>
    </div>
  );
};

export const Content2 = ({ title1, title2, title3, subtitle, link }) => {
  return (
    <div className="header-texts">
      <p className="content-title">
        {title1} <br />
        {title2} <br />
        {title3} <br />
      </p>
      <div>
        <p className="content-sub-title">{subtitle}</p>
        <p className="content-text-link">
          {link}
          <img
            src="/link-icon.svg"
            className="filter-primary-color arrow-icon"
          />
        </p>
      </div>
    </div>
  );
};
