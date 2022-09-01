import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import '../styles/slides.scss';
import { useSwipeable } from 'react-swipeable';

export default function Slide({
  data,
  id,
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
      <SlideBtn
        id={id}
        onClick1={onClick1}
        onClick2={onClick2}
        onClick3={onClick3}
        onClick4={onClick4}
        width={width}
      />
      <div>
        {id === 1 && (
          <div className={width > 1080 ? 'statistic' : 'statistic-mobile'}>
            {data.corp1.map((item) => (
              <FundingContent
                width={width}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </div>
        )}
        {id === 2 && (
          <div className={width > 1080 ? 'statistic' : 'statistic-mobile'}>
            {data.corp2.map((item) => (
              <FundingContent
                width={width}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </div>
        )}
        {id === 3 && (
          <div className={width > 1080 ? 'statistic' : 'statistic-mobile'}>
            {data.corp3.map((item) => (
              <FundingContent
                width={width}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </div>
        )}
        {id === 4 && (
          <div className={width > 1080 ? 'statistic' : 'statistic-mobile'}>
            {data.corp4.map((item) => (
              <FundingContent
                width={width}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
const SlideBtn = ({ onClick1, onClick2, onClick3, onClick4, id, width }) => {
  return (
    <div
      className={width > 1080 ? 'control-btn' : 'control-btn-mobile'}
      style={{ width: '45vw', textAlign: 'center' }}
    >
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
  );
};
const FundingContent = ({ navData, netAssets, dayChange, Issued, width }) => {
  return (
    <div className="funding-container">
      <div>
        <p style={{ fontSize: width > 1080 ? '73px' : '42px' }}>
          Our Featured <br /> Funds
        </p>
      </div>
      <div>
        <p className="funding-name">
          Nikko AM ARK Disruptive
          <br /> Innovation Fund
        </p>
      </div>
      <div className="chart" style={{ marginBottom: '20px' }}>
        <img src="/chart.svg" style={{ width: width > 1080 ? '60' : '90%' }} />
      </div>
      <div className={width > 1080 ? 'featured-data' : 'featured-data-mobile'}>
        <div
          style={{
            borderTop: width > 1080 ? '1px solid #8A8A8A' : '',
          }}
        >
          <p>NAV (per 100 share)</p>
          <p style={{ color: '#8A8A8A', marginLeft: '20px' }}>
            ¥{navData.toLocaleString()}
          </p>
        </div>
        <div>
          <p>Net assets</p>
          <p style={{ color: '#8A8A8A', marginLeft: '20px' }}>
            {netAssets.toLocaleString()} million
          </p>
        </div>
        <div>
          <p>Day Change</p>
          <p style={{ color: '#8A8A8A', marginLeft: '20px' }}>
            -${dayChange.toLocaleString()}
          </p>
        </div>
        <div>
          <p>Issue</p>
          <p style={{ color: '#8A8A8A', marginLeft: '20px' }}>
            {Issued.toLocaleString()} shares
          </p>
        </div>
      </div>
      <div>
        <a
          style={{
            display: 'flex',
            flexDirection: 'row',
            color: '#00A4B8',
            fontSize: width > 1080 ? '18px' : '16px',
            marginTop: '20px',
            marginLeft: '10px',
            textDecoration: 'none',
          }}
          href="https://www.google.com"
          target="_bank"
        >
          Explore more funds
          <img
            src="/link-icon.svg"
            className="filter-primary-color"
            style={{ width: '18px', marginLeft: '10px' }}
          />
        </a>
      </div>
    </div>
  );
};
