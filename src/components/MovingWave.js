import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, Power2, TimelineLite, gsap, TweenLite } from 'gsap';
import '../styles/movingwave.scss';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
export default function MovingWave({
  startPosition,
  endPosition,
  midPosition,
}) {
  let wave = useRef(null);
  // tl.addLabel('start').from('.wave');

  useEffect(() => {
    gsap.set('.wave', { y: -window.innerHeight / 2 });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: { startPosition },
        pin: true,
        scrub: true,
        end: '+=5500',
        scrub: true,
      },
    });

    tl.to('.wave', { y: 0, duration: 1 })
      .to({ midPosition }, { duration: 1 })
      .to('.wave', { y: window.innerHeight / 2, duration: 1 });
  }, []);
  return (
    <div className="main">
      <div className="img-container">
        <img
          className="wave"
          src="/wave.svg"
          ref={(el) => (wave = el)}
          alt="moving-wave"
        />
      </div>
    </div>
  );
}
