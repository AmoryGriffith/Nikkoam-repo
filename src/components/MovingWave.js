import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/movingwave.scss';
export default function MovingWave({ width }) {
  let wave = useRef(null);
  useEffect(() => {
    gsap.set('.wave', { transformOrigin: '20% 80%' });
    gsap.to('.wave', {
      rotationY: 720,
      ease: 'none',
      transformOrigin: '20% 80%',
      scrollTrigger: {
        trigger: '.wave',
        scrub: 0.5,
        snap: {
          snapTo: 1 / 8,
          duration: 250000,
        },
      },
    });
  });
  return (
    <div
      // className="main gsap"
      className="holder"
    >
      <div
        // className="wave-container"
        className="cylinder"
      >
        <img
          className="wave"
          // className={width > 1080 ? 'wave' : 'wave-mobile'}
          src="/wave.svg"
          alt="moving-wave"
        />
      </div>
    </div>
  );
}
