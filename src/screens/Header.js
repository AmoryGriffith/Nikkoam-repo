import React, { useState } from 'react';
import useScreens from '../hooks/useScreen';
import { useHistory } from 'react-router-dom';
import {
  Logo,
  HeaderLinks,
  DropDown,
  Seacrch,
  CollapsedMenu,
} from '../components/MenuBar';
export default function Header() {
  const router = useHistory();
  const { width } = useScreens();
  const [visible, setVisible] = useState();
  const openMenu = () => {
    setVisible(true);
  };
  const [region, setRegion] = useState('Singapore');
  return (
    <div className="header-container">
      <div className="menu-bar">
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
      {/* <div className="wave-img"></div>
      <div className="header-texts">
        <h3 className="title">
          Progressive Solutions <br />
          Competitive Performance <br />
          Global Citizen with Asian DNA <br />
        </h3>
        <div>
          <h5 className="sub-title">
            We're one of Asia's largest asset managers.
          </h5>
          <p className="text-link">
            Learn more about who we are
            <img
              src="/link-icon.svg"
              className="filter-primary-color arrow-icon"
            />
          </p>
        </div>
      </div> */}
    </div>
  );
}
