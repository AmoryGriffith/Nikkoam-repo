import React, { useState } from 'react';
import '../styles/carousel.scss';
export default function Carousel({
  fundName,
  navData,
  netAssets,
  Issued,
  dayChange,
}) {
  const [numb, setNumb] = useState('01');
  return (
    <div className="carousel-container">
      <div className="control-btn">
        <p
          onClick={() => setNumb('01')}
          className={numb === '01' ? 'numb-active' : 'numb-default'}
        >
          01
        </p>
        <p
          onClick={() => setNumb('01')}
          className={numb === '01' ? 'numb-active' : 'numb-default'}
        >
          02
        </p>
        <p
          onClick={() => setNumb('01')}
          className={numb === '01' ? 'numb-active' : 'numb-default'}
        >
          03
        </p>
        <p
          onClick={() => setNumb('01')}
          className={numb === '01' ? 'numb-active' : 'numb-default'}
        >
          04
        </p>
      </div>
      <div>
        {numb === '01' && (
          <FundingContent
            fundName={fundName}
            navData={navData}
            netAssets={netAssets}
            dayChange={dayChange}
            Issued={Issued}
          />
        )}
        {numb === '02' && (
          <FundingContent
            fundName={fundName}
            navData={navData}
            netAssets={netAssets}
            dayChange={dayChange}
            Issued={Issued}
          />
        )}
        {numb === '03' && (
          <FundingContent
            fundName={fundName}
            navData={navData}
            netAssets={netAssets}
            dayChange={dayChange}
            Issued={Issued}
          />
        )}
        {numb === '04' && (
          <FundingContent
            fundName={fundName}
            navData={navData}
            netAssets={netAssets}
            dayChange={dayChange}
            Issued={Issued}
          />
        )}
      </div>
    </div>
  );
}
const FundingContent = ({
  fundName,
  navData,
  netAssets,
  dayChange,
  Issued,
}) => {
  return (
    <div>
      <div>
        <p>
          Our Featured <br /> Funds
        </p>
      </div>
      <div>
        <p>{fundName}</p>
      </div>
      <div className="chart"></div>
      <div className="featured-data">
        <div>
          <div>
            <p>NAV (per 100 share)</p>
            <p>{navData.toLocaleString()}</p>
          </div>
          <div>
            <p>Net assets</p>
            <p>{netAssets} million</p>
          </div>
          <div>
            <p>Day Change</p>
            <p>-${dayChange.toLocaleString()}</p>
          </div>
          <div>
            <p>Issue</p>
            <p>{Issued.toLocaleString()} shares</p>
          </div>
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
