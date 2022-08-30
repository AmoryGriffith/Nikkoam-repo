import React from 'react';
import Carousel from '../components/Carousel';

export default function Funds() {
  return (
    <div style={{ height: '100vh' }}>
      <Carousel />
    </div>
  );
}

const sample_data = [
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 8201293,
    dayChange: 2214,
    Issued: 4716686634,
  },
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 4319113,
    dayChange: 194,
    Issued: 1710686634,
  },
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 7309193,
    dayChange: 1094,
    Issued: 3710686634,
  },
  {
    fundName: 'Nikko AM ARK Disruptive Innovation Fund',
    navData: 7309193,
    dayChange: 1001,
    Issued: 2521321634,
  },
];
