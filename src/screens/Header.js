import React, { useEffect, useRef, useState } from 'react';
import useScreens from '../hooks/useScreen';
import { useHistory } from 'react-router-dom';
import {
  Logo,
  HeaderLinks,
  DropDown,
  Seacrch,
  CollapsedMenu,
} from '../components/MenuBar';
import MovingWave from '../components/MovingWave';
import { Content1 } from '../components/Content';
import gsap from 'gsap';
export default function Header() {
  const router = useHistory();
  const { width } = useScreens();
  const [visible, setVisible] = useState();
  const openMenu = () => {
    setVisible(true);
  };
  const [region, setRegion] = useState('Singapore');
  let motion = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      '.menu-bar',
      { X: 0, y: -50, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 1.25 },
      {
        scrollTrigger: {
          trigger: '.menu-bar',
          start: 'top top',
        },
      }
    );
  }, []);
  return (
    <section className="header-container" style={{ height: '100vh' }}>
      <div className="menu-bar" ref={(el) => (motion = el)}>
        <Logo width={width} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {width > 1080 ? (
            <>
              <HeaderLinks
                toAbout={'https://en.nikkoam.com/about-us/fact-sheet'}
                toFunds={'https://en.nikkoam.com/etf'}
                toInsightsNews={'https://en.nikkoam.com/insights'}
                toStrategies={
                  'https://en.nikkoam.com/institutional/equity-strategies'
                }
                toSustainability={'https://en.nikkoam.com/sustainability'}
                toInvest={'https://en.nikkoam.com/invest'}
              />
              <DropDown
                region={region}
                setRegion={setRegion}
                text1={'Vietnam'}
                text2={'Russia'}
                text3={'Singapore'}
                text4={'America'}
                text5={'China'}
              />
              <Seacrch />
            </>
          ) : (
            <>
              <Seacrch />
              <img src="/menu.svg" onClick={openMenu} />
              <CollapsedMenu
                region={region}
                setRegion={setRegion}
                visible={visible}
                onClose={() => setVisible(false)}
              />
            </>
          )}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: width > 1080 ? 'row' : 'column',
        }}
      >
        <div>
          <MovingWave
            startPosition={'.menu-bar'}
            midPosition={'.midposition'}
            width={width}
          />
        </div>

        <Content1
          width={width}
          title1={'Progressive Solutions'}
          title2={'Competitive Performance'}
          title3={'Global Citizen with Asian DNA'}
          subtitle={"We're one of Asia's largest asset managers."}
          link={'Learn more about who we are'}
        />
      </div>
      <div className="midposition"></div>
    </section>
  );
}
