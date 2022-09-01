import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import '../styles/content.scss';
export const Content1 = ({ title1, title2, title3, subtitle, link, width }) => {
  let motion = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      '.header-texts',
      { x: 200, y: 100, opacity: 0 },
      { x: 0, y: 50, opacity: 1, duration: 1.25 }
    );
  });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: width > 1080 ? 'row' : 'column',
        justifyContent: 'space-between',
        // alignContent: 'flex-end',
        height: '90%',
      }}
    >
      {width > 1080 ? (
        <div style={{ width: '80%' }} />
      ) : (
        <div style={{ height: '40%' }} />
      )}
      <div className={width > 1080 ? 'header-texts' : 'header-texts-mobile'}>
        <p className={width > 1080 ? 'content-title' : 'content-title-mobile'}>
          {title1} <br />
          {title2} <br />
          {title3} <br />
        </p>

        <div
          className={
            width > 1080 ? 'sub-title-container' : 'sub-title-container-mobile'
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              color: width > 1080 ? 'black' : 'grey',
              fontSize: width > 1080 ? '30px' : '22px',
              alignItems: 'start',
              alignSelf: 'flex-start',
              // marginBottom: '70px',
            }}
          >
            <div>
              <p className="content-sub-title">{subtitle}</p>
              <a
                style={{
                  color: '#00A4B8',
                  fontSize: width > 1080 ? '18px' : '16px',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                href="https://www.google.com"
                target="_blank"
              >
                {link}
                <img
                  src="/link-icon.svg"
                  className="filter-primary-color arrow-icon"
                  style={{
                    marginLeft: '7px',
                    width: '15px',
                    alignSelf: 'center',
                  }}
                />
              </a>
            </div>
            <div style={{ marginTop: 90 }} />
          </div>
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
    <div
      className={width > 1080 ? 'about-texts' : 'about-texts-mobile'}
      // style={{ padding: width > 1080 ? '50px' : 'auto' }}
    >
      <div style={{ height: '40%' }} />
      <div>
        <p
          className="about-sub-title1"
          style={{ marginBottom: width > 1080 ? '0px' : '70px' }}
        >
          {subtitle1}
        </p>
        <p className={width > 1080 ? 'about-title' : 'about-title-mobile'}>
          {title1} <br />
          {title2} <br />
          {title3} <br />
        </p>
        <div
          className={
            width > 1080
              ? 'about-sub-title-container'
              : 'about-sub-title-container-mobile'
          }
        >
          <div>
            <p className="about-sub-title2">{subtitle2}</p>
            <a
              href="https://www.google.com"
              target="_blank"
              className="about-text-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '18px',
                textDecoration: 'none',
                color: 'white',
                marginTop: width > 1080 ? '0px' : '70px',
              }}
            >
              {link}
              <img
                src="/link-icon.svg"
                className="filter-white arrow-icon"
                style={{
                  marginLeft: '7px',
                  width: '15px',
                  alignSelf: 'center',
                }}
              />
            </a>
          </div>

          {width > 1080 ? <div style={{ marginTop: '15%' }} /> : null}
        </div>
      </div>
    </div>
  );
};
