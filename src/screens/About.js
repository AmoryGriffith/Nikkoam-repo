import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, Power2, TimelineLite } from 'gsap';
import '../styles/about.scss';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
export default function About() {
  let container = useRef(null);
  let content = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.img-container:after');
  const tl = new TimelineLite();
  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } })
      .to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut })
      .from(content, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  }, []);
  // tl.to(".class", {duration: 2, rotation: "+=360"}, "spin");

  return (
    <section className="main-container">
      <div className="container" ref={(el) => (container = el)}>
        <>
          <div className="body-container">
            <div className="about-content" ref={(el) => (content = el)}>
              {/* <div className="wave-img"></div>
              <div className="header-texts">
                <p className="sub-title">Team of unique combination</p>
                <h3 className="title">
                  Global Intelligence <br />
                  Asian Insights <br />
                  Local Experience <br />
                </h3>
                <div>
                  <p className="sub-title">
                    We transform intelligent insights into innovative, relevant
                    investment opportunities for our clients. Leveraging our
                    unique combination of a global perspective complemented by
                    our Asian DNA, we aspire to create sophisticated and diverse
                    solutions that set new standards in the asset management
                    industry.
                  </p>
                  <p className="text-link">
                    Learn more about what makes us unique
                  </p>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </>
      </div>
    </section>
  );
}
