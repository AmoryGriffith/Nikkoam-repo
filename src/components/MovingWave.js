import React, { useRef, useEffect } from 'react';
import { Power3, Power2, gsap } from 'gsap';
import '../styles/movingwave.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function MovingWave({
  startPosition,
  endPosition,
  midPosition,
  width,
}) {
  // let wave = useRef(null);
  // useEffect(() => {
  //   gsap.set(width > 1080 ? '.wave' : '.wave-mobile', {
  //     y: -window.innerHeight / 2,
  //   });
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: { startPosition },
  //       pin: true,
  //       scrub: true,
  //       end: '+=5500',
  //       scrub: true,
  //     },
  //   });

  //   tl.to(width > 1080 ? '.wave' : '.wave-mobile', { y: 0, duration: 1 })
  //     .to({ midPosition }, { duration: 1 })
  //     .to(width > 1080 ? '.wave' : '.wave-mobile', {
  //       y: window.innerHeight / 2,
  //       duration: 1,
  //     });
  // }, []);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to(width > 1080 ? '.wave' : '.wave-mobile', {
  //     y: -100,
  //     duration: 10,
  //     scrollTrigger: {
  //       trigger: width > 1080 ? '.wave' : '.wave-mobile',
  //       start: 'top 80%',
  //       end: 'top 20%',
  //       scrub: 4,
  //       toggleActions: 'restart pause resume reverse',
  //       pin: true,
  //       markers: {
  //         startColor: 'red',
  //         endColor: 'blue',
  //         fontSize: '20px',
  //       },
  //     },
  //   });
  // }, []);
  let wave = document.querySelector(' .wave');
  // numLines = 1,
  // radius = numLines * 10,
  // angle = 360 / numLines,
  // origin = `50% 50% -${radius}px`;
  useEffect(() => {
    gsap.set(wave, { transformOrigin: '40% 60%' });
    gsap.registerPlugin(ScrollTrigger);

    let count = 0;
    gsap.to(wave, {
      rotationY: -360,
      ease: 'none',
      transformOrigin: '50% 50%',
      scrollTrigger: {
        trigger: '.container',
        start: 'center center',
        end: '+=400px',
        markers: true,
        scrub: 0.5,
        pin: true,
        snap: {
          snapTo: 1 / 10,
          duration: 0.5,
          onComplete: (scrollTrigger) => {
            console.log(scrollTrigger.progress);
          },
        },
      },
    });
  });
  return (
    <div className="main gsap">
      <div className="wave-container">
        <img
          className={width > 1080 ? 'wave' : 'wave-mobile'}
          src="/wave.svg"
          ref={(el) => (wave = el)}
          alt="moving-wave"
        />
      </div>
    </div>
  );
}
