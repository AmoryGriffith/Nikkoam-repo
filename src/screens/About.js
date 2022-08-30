import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, Power2, TimelineLite } from 'gsap';
import '../styles/about.scss';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Content1, Content2 } from '../components/Content';
import useScreen from '../hooks/useScreen';
export default function About() {
  const { width } = useScreen();
  // let container = useRef(null);
  // let content = useRef(null);
  // let imageReveal = CSSRulePlugin.getRule('.body-container:after');
  // const tl = new TimelineLite();
  // useEffect(() => {
  //   tl.to(container, 0, { css: { visibility: 'visible' } })
  //     .to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut })
  //     .from(content, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  // }, []);
  // tl.to(".class", {duration: 2, rotation: "+=360"}, "spin");

  return (
    <section className="about-container">
      <div className="about-content">
        <div style={{ width: '40vw' }}>
          <img src="/group.svg" />
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
