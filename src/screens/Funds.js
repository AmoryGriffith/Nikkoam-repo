import React, { useRef, useState } from 'react';
import Slide from '../components/Slides';
import { Carousel } from 'antd';
import '../styles/fund.scss';
import useScreen from '../hooks/useScreen';
export default function Funds() {
  const sample_data = {
    corp1: [
      {
        navData: 8201293,
        dayChange: 2214,
        Issued: 4716686634,
        netAssets: 7309193,
      },
    ],
    corp2: [
      {
        navData: 4319113,
        dayChange: 194,
        Issued: 1710686634,
        netAssets: 3201193,
      },
    ],
    corp3: [
      {
        navData: 7309193,
        dayChange: 1094,
        Issued: 3710686634,
        netAssets: 1312393,
      },
    ],
    corp4: [
      {
        navData: 7309193,
        dayChange: 1001,
        Issued: 2521321634,
        netAssets: 9439198,
      },
    ],
  };
  const [numb, setNumb] = useState(0);
  const slider = useRef();
  const { width } = useScreen();
  return (
    <Carousel
      dots={false}
      pauseOnHover={false}
      style={{
        height: 'auto',
        alignContent: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '20px',
        marginTop: '30px',
      }}
      autoplay={true}
      vertical={width > 1080 ? true : false}
      ref={(ref) => {
        slider.current = ref;
      }}
    >
      <Slide
        value={numb}
        width={width}
        id={1}
        data={sample_data}
        onClick1={() => {
          setNumb(0);
          slider.current.goTo(0);
        }}
        onClick2={() => {
          setNumb(1);
          slider.current.goTo(1);
        }}
        onClick3={() => {
          setNumb(2);
          slider.current.goTo(2);
        }}
        onClick4={() => {
          setNumb(3);
          slider.current.goTo(3);
        }}
      />
      <Slide
        value={numb}
        width={width}
        id={2}
        data={sample_data}
        onClick1={() => {
          setNumb(0);
          slider.current.goTo(0);
        }}
        onClick2={() => {
          setNumb(1);
          slider.current.goTo(1);
        }}
        onClick3={() => {
          setNumb(2);
          slider.current.goTo(2);
        }}
        onClick4={() => {
          setNumb(3);
          slider.current.goTo(3);
        }}
      />
      <Slide
        value={numb}
        width={width}
        id={3}
        data={sample_data}
        onClick1={() => {
          setNumb(0);
          slider.current.goTo(0);
        }}
        onClick2={() => {
          setNumb(1);
          slider.current.goTo(1);
        }}
        onClick3={() => {
          setNumb(2);
          slider.current.goTo(2);
        }}
        onClick4={() => {
          setNumb(3);
          slider.current.goTo(3);
        }}
      />
      <Slide
        value={numb}
        width={width}
        id={4}
        data={sample_data}
        onClick1={() => {
          setNumb(1);
          slider.current.goTo(1);
        }}
        onClick2={() => {
          setNumb(2);
          slider.current.goTo(2);
        }}
        onClick3={() => {
          setNumb(3);
          slider.current.goTo(3);
        }}
        onClick4={() => {
          setNumb(4);
          slider.current.goTo(4);
        }}
      />
    </Carousel>
  );
}
