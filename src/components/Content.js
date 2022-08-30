import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import '../styles/content.scss';
export const Content1 = ({ title1, title2, title3, subtitle, link, width }) => {
  let motion = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      '.header-texts',
      { x: 300, y: 200, opacity: 0 },
      { x: 0, y: 50, opacity: 1, duration: 1.25 }
    );
  });
  return (
    <div className="header-texts">
      <p className={width > 1089 ? 'content-title' : 'content-title-mobile'}>
        {title1} <br />
        {title2} <br />
        {title3} <br />
      </p>

      <div className="sub-title-container">
        <div style={{ width: '100%', height: '100%' }}>
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
    </div>
  );
};

export const Content2 = ({
  title1,
  title2,
  title3,
  subtitle2,
  subtitle1,
  link,
  width,
}) => {
  let motion = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      '.about-texts',
      { x: -300, y: 200, opacity: 0 },
      { x: 0, y: 50, opacity: 1, duration: 1.25 }
    );
  });
  return (
    <div className="about-texts">
      <p className="about-sub-title1">{subtitle1}</p>
      <p className={width > 1080 ? 'about-title' : 'about-title-mobile'}>
        {title1} <br />
        {title2} <br />
        {title3} <br />
      </p>
      <div className="about-sub-title-container">
        <p className="about-sub-title">{subtitle2}</p>
        <p className="about-text-link">
          {link}
          <img src="/link-icon.svg" className="filter-white arrow-icon" />
        </p>
      </div>
    </div>
  );
};
