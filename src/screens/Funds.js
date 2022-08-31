import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import '../styles/fund.scss';
import gsap from 'gsap';
import { FundingContent } from '../components/Carousel';
import useScreen from '../hooks/useScreen';
export default function Funds() {
  const { width } = useScreen();
  const [numb, setNumb] = useState(0);

  return (
    <div style={{ height: '100vh' }} className="slides-container">
      {/* <div className="number-container"> */}
      <div className="control-btn">
        <p
          id="01"
          className={numb === 0 ? 'numb-active' : 'numb-default'}
          onClick={() => setNumb(0)}
        >
          01
        </p>
        <p
          id="02"
          className={numb === 1 ? 'numb-active' : 'numb-default'}
          onClick={() => setNumb(1)}
        >
          02
        </p>
        <p
          id="03"
          className={numb === 2 ? 'numb-active' : 'numb-default'}
          onClick={() => setNumb(2)}
        >
          03
        </p>
        <p
          id="04"
          className={numb === 3 ? 'numb-active' : 'numb-default'}
          onClick={() => setNumb(3)}
        >
          04
        </p>
      </div>
      {/* </div> */}

      <div className="slider-data">
        {sample_data.map((item) => (
          <FundingContent
            className="slide"
            id={numb}
            fundName={item.fundName}
            navData={item.navData}
            netAssets={item.netAssets}
            dayChange={item.dayChange}
            Issued={item.Issued}
          />
        ))}
      </div>
    </div>
  );
}

const sample_data = [
  // corp1: [
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 8201293,
    dayChange: 2214,
    Issued: 4716686634,
  },
  // ],
  // corp2: [
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 4319113,
    dayChange: 194,
    Issued: 1710686634,
  },
  // ],
  // corp3: [
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 7309193,
    dayChange: 1094,
    Issued: 3710686634,
  },
  // ],
  // corp4: [
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 7309193,
    dayChange: 1001,
    Issued: 2521321634,
  },
  // ],
];
