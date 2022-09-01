import React from 'react';
import '../styles/footer.scss';
import useScreen from '../hooks/useScreen';
export default function Footer() {
  const { width } = useScreen();
  return (
    <div
      className={width > 1080 ? 'footer-container' : 'footer-container-mobile'}
      style={{
        display: 'flex',
        flexDirection: width > 1080 ? 'row' : 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: width > 1080 ? 'center' : 'flex-start',
          padding: width > 1080 ? '0px' : '0px 20px',
        }}
      >
        <p
          style={{
            fontSize: width > 1080 ? '73px' : '42px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: width > 1080 ? 'center' : 'flex-start',
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
          justifyContent: width > 1080 ? 'center' : 'flex-start',
          marginBottom: '10vh',
          paddingRight: width > 1080 ? '0px' : '20px',
        }}
      >
        <LinkTexts text={'Equity'} width={width} />
        <LinkTexts text={'Bond'} width={width} />
        <LinkTexts text={'Multi-Assets '} width={width} />
        <LinkTexts text={'ETFs'} width={width} />
      </div>
    </div>
  );
}
const LinkTexts = ({ width, text }) => {
  return (
    <div
      style={{
        alignSelf: width > 1080 ? 'flex-end' : 'center',
        width: width > 1080 ? '40vw' : '85vw',
        fontSize: width > 1080 ? '30px' : '22px',
        padding: width > 1080 ? '0px' : '0px 10px',
      }}
      className={width > 1080 ? 'footer-content' : 'footer-content-mobile'}
    >
      <a target="_blank" href="https://www.google.com">
        {text}
      </a>
      {width > 1080 ? (
        <img
          className="footer-icon"
          src="/link-icon.svg"
          style={{ width: width > 1080 ? '30px' : '22px' }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};
