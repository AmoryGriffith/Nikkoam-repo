import React from 'react';
import '../styles/footer.scss';
import useScreen from '../hooks/useScreen';
export default function Footer() {
  const { width } = useScreen();
  return (
    <div
      className="footer-container"
      style={{
        display: 'flex',
        flexDirection: width > 1080 ? 'row' : 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p
          style={{
            fontSize: width > 1080 ? '73px' : '42px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Invest with
          <p
            style={{
              fontSize: width > 1080 ? '73px' : '42px',
              color: '#00A4B8',
            }}
          >
            Nikko AM
          </p>
        </p>
      </div>
      <div
        style={{
          width: width > 1080 ? '55vw' : '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom: '10vh',
        }}
      >
        <div
          style={{
            alignSelf: width > 1080 ? 'flex-end' : 'center',

            width: '40vw',
            fontSize: width > 1080 ? '30px' : '22px',
          }}
          className="footer-content"
        >
          <a target="_blank" href="https://www.google.com">
            Equity
          </a>
          <img
            className="footer-icon"
            src="/link-icon.svg"
            style={{ width: width > 1080 ? '30px' : '22px' }}
          />
        </div>
        <div
          style={{
            alignSelf: width > 1080 ? 'flex-end' : 'center',
            width: '40vw',
            fontSize: width > 1080 ? '30px' : '22px',
          }}
          className="footer-content"
        >
          <a target="_blank" href="https://www.google.com">
            Bond
          </a>
          <img
            className="footer-icon"
            src="/link-icon.svg"
            style={{ width: width > 1080 ? '30px' : '22px' }}
          />
        </div>
        <div
          style={{
            alignSelf: width > 1080 ? 'flex-end' : 'center',
            width: '40vw',
            fontSize: width > 1080 ? '30px' : '22px',
          }}
          className="footer-content"
        >
          <a target="_blank" href="https://www.google.com">
            Multi-Assets
          </a>
          <img
            className="footer-icon"
            src="/link-icon.svg"
            style={{ width: width > 1080 ? '28px' : '22px' }}
          />
        </div>
        <div
          style={{
            alignSelf: width > 1080 ? 'flex-end' : 'center',

            width: '40vw',
            fontSize: width > 1080 ? '28px' : '22px',
          }}
          className="footer-content"
        >
          <a target="_blank" href="https://www.google.com">
            ETFs
          </a>
          <img
            className="footer-icon"
            src="/link-icon.svg"
            style={{ width: width > 1080 ? '28px' : '22px' }}
          />
        </div>
      </div>
    </div>
  );
}
