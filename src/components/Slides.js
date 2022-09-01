import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import '../styles/slides.scss';
import { useSwipeable } from 'react-swipeable';

export default function Slide({
  data,
  id,
  numb,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  width,
  value,
}) {
  return (
    <div
      className={width > 1080 ? 'number-container' : 'number-container-mobile'}
      id={id}
    >
      <div className={width > 1080 ? 'control-btn' : 'control-btn-mobile'}>
        <p
          className={id === 1 ? 'numb-active' : 'numb-default'}
          onClick={onClick1}
        >
          01
        </p>
        <p
          className={id === 2 ? 'numb-active' : 'numb-default'}
          onClick={onClick2}
        >
          02
        </p>
        <p
          className={id === 3 ? 'numb-active' : 'numb-default'}
          onClick={onClick3}
        >
          03
        </p>
        <p
          className={id === 4 ? 'numb-active' : 'numb-default'}
          onClick={onClick4}
        >
          04
        </p>
      </div>
      <div>
        {id === 1 && (
          <div>
            {data.corp1.map((item) => (
              <FundingContent
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </div>
        )}
        {id === 2 && (
          <>
            {data.corp2.map((item) => (
              <FundingContent
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </>
        )}
        {id === 3 && (
          <>
            {data.corp3.map((item) => (
              <FundingContent
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </>
        )}
        {id === 4 && (
          <>
            {data.corp4.map((item) => (
              <FundingContent
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
const FundingContent = ({ navData, netAssets, dayChange, Issued }) => {
  return (
    <div className="funding-container">
      <div>
        <p className="funding-tilte">
          Our Featured <br /> Funds
        </p>
      </div>
      <div>
        <p className="funding-name">
          Nikko AM ARK Disruptive
          <br /> Innovation Fund
        </p>
      </div>
      <div className="chart">
        <img src="/chart.svg" />
      </div>
      <div className="featured-data">
        <div
          style={{
            borderTop: '1px solid #8A8A8A',
          }}
        >
          <p>NAV (per 100 share)</p>
          <p style={{ color: '#8A8A8A' }}>{navData}</p>
        </div>
        <div>
          <p>Net assets</p>
          <p style={{ color: '#8A8A8A' }}>{netAssets} million</p>
        </div>
        <div>
          <p>Day Change</p>
          <p style={{ color: '#8A8A8A' }}>-${dayChange}</p>
        </div>
        <div>
          <p>Issue</p>
          <p style={{ color: '#8A8A8A' }}>{Issued} shares</p>
        </div>
      </div>
      <div>
        <p>
          Explore more funds <img src="/down.svg" />
        </p>
      </div>
    </div>
  );
};
