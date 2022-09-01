import React, { useRef, useEffect } from 'react';
import gsap, { TweenMax, Power3, Power2, TimelineLite } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/about.scss';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Content1, Content2 } from '../components/Content';
import useScreen from '../hooks/useScreen';
export default function About() {
  const { width } = useScreen();
  let aboutReveal = CSSRulePlugin.getRule(
    width > 1080 ? '.about-content:after' : '.about-content-mobile:after'
  );
  const tl = new TimelineLite();
  const aboutContainer = useRef(null);
  const group = useRef(null);
  useEffect(() => {
    tl.to('.about-container', 0, {
      scrollTrigger: {
        trigger: '.about-container',
        start: 'top center',
        scrub: true,
      },
      css: { visibility: 'visible' },
    }).to(aboutReveal, 2.4, { width: '0%', ease: Power2.easeInOut });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.grp-img', {
      rotateZ: 390,
      // x: 100,
      duration: 2.8,
      scrollTrigger: {
        trigger: '.grp-img',
        start: 'top center',
        scrub: true,
        toggleActions: 'restart pause resume reverse',
      },
    });
  });
  return (
    <section
      className="about-container"
      ref={aboutContainer}
      style={{ height: width > 1080 ? '100vh' : '140vh', marginBottom: '25px' }}
    >
      <div
        className={width > 1080 ? 'about-content' : 'about-content-mobile'}
        style={{
          display: 'flex',
          flexDirection: width > 1080 ? 'row' : 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: width > 1080 ? '40vw' : '100vw',
          }}
          className="img-container"
        >
          <img
            src="/group.svg"
            className="grp-img"
            ref={group}
            style={{ width: width > 1080 ? '60%' : '60%' }}
          />
        </div>
        <Content2
          width={width}
          title1={'Global Intelligence'}
          title2={'Asian Insights'}
          title3={'Local Experience'}
          subtitle1={'Team of unique combination'}
          subtitle2={
            'We transform intelligent insights into innovative, relevant  investment opportunities for our clients. Leveraging our unique combination of a global perspective complemented by our Asian DNA, we aspire to create sophisticated and diverse solutions that set new standards in the asset management industry.'
          }
          link={'Learn more about what makes us unique'}
        />
      </div>
    </section>
  );
}
