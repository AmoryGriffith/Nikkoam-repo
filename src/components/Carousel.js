import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import '../styles/carousel.scss';
import { useSwipeable } from 'react-swipeable';

export default function Carousel({ data, id, numb, children }) {
  // const [numb, setNumb] = useState(0);
  // const [paused, setPaused] = useState(false);
  // const updateIndex = (newIndex) => {
  //   if (newIndex < 0) {
  //     newIndex = React.Children.count(children) - 1;
  //   } else if (newIndex >= React.Children.count(children)) {
  //     newIndex = 0;
  //   }
  //   setNumb(newIndex);
  // };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!paused) {
  //       updateIndex(activeIndex + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // });
  // const handlers = useSwipeable({
  //   onSwipedLeft: () => updateIndex(activeIndex + 1),
  //   onSwipedRight: () => updateIndex(activeIndex - 1),
  // });
  return (
    <div className="number-container" id={id}>
      <div className="control-btn">
        <p id="01" className={numb === '01' ? 'numb-active' : 'numb-default'}>
          01
        </p>
        <p id="02" className={numb === '02' ? 'numb-active' : 'numb-default'}>
          02
        </p>
        <p id="03" className={numb === '03' ? 'numb-active' : 'numb-default'}>
          03
        </p>
        <p id="04" className={numb === '04' ? 'numb-active' : 'numb-default'}>
          04
        </p>
      </div>
      <div>
        {numb === '01' && (
          <div>
            {data.corp1.map((item) => (
              <FundingContent
                fundName={item.fundName}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </div>
        )}
        {numb === '02' && (
          <>
            {data.corp2.map((item) => (
              <FundingContent
                fundName={item.fundName}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </>
        )}
        {numb === '03' && (
          <>
            {data.corp3.map((item) => (
              <FundingContent
                fundName={item.fundName}
                navData={item.navData}
                netAssets={item.netAssets}
                dayChange={item.dayChange}
                Issued={item.Issued}
              />
            ))}
          </>
        )}
        {numb === '04' && (
          <>
            {data.corp4.map((item) => (
              <FundingContent
                fundName={item.fundName}
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
export const FundingContent = ({
  fundName,
  navData,
  netAssets,
  dayChange,
  Issued,
}) => {
  return (
    <div className="funding-container">
      <div>
        <p className="funding-tilte">
          Our Featured <br /> Funds
        </p>
      </div>
      <div>
        <p className="funding-name">{fundName}</p>
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
