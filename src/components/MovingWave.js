import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/movingwave.scss';
export default function MovingWave({ width }) {
  let wave = useRef(null);
  useEffect(() => {
    gsap.set(width > 1080 ? '.wave' : '.wave-mobile', {
      transformOrigin: '20% 80%',
    });
    gsap.to(width > 1080 ? '.wave' : '.wave-mobile', {
      rotationY: 720,
      ease: 'none',
      transformOrigin: '20% 80%',
      scrollTrigger: {
        trigger: width > 1080 ? '.wave' : '.wave-mobile',
        scrub: 0.5,
        snap: {
          snapTo: 1 / 8,
          duration: 250000,
        },
      },
    });
  });
  return (
    <div className="holder">
      <div className={width > 1080 ? 'cylinder' : 'cylinder-mobile'}>
        <img
          className={width > 1080 ? 'wave' : 'wave-mobile'}
          src="/wave.svg"
          alt="moving-wave"
        />
      </div>
    </div>
  );
}
