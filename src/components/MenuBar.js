import React, { useState } from 'react';
import '../styles/menubar.scss';
import { Button, Drawer, Form, Modal, Input } from 'antd';
export const Logo = ({ width }) => {
  return (
    <div
      className={width > 1080 ? 'logo' : 'logo-mobile'}
      onClick={() => {
        window.location.reload();
      }}
    >
      <img src="/logo.svg" />
    </div>
  );
};
export const HeaderLinks = ({
  router,
  toAbout,
  toFunds,
  toInsightsNews,
  toStrategies,
  toSustainability,
  toInvest,
}) => {
  return (
    <div className="header-links-container">
      <a href={toAbout} target="_blank">
        About us
      </a>
      <a href={toSustainability} target="_blank">
        Sustainability
      </a>
      <a href={toInsightsNews} target="_blank">
        Insights & News
      </a>
      <a href={toStrategies} target="_blank">
        Strategies
      </a>
      <a href={toFunds} target="_blank">
        Funds
      </a>
      <a href={toInvest} target="_blank">
        How to Invest
      </a>
    </div>
  );
};
export const DropDown = ({
  text1,
  text2,
  text3,
  text4,
  text5,
  setRegion,
  region,
  openDropDown,
}) => {
  return (
    <div className="header-dropdown" onClick={openDropDown}>
      <li class="dropdown dropdown-2 " style={{ marginRight: 5 }}>
        {region}
        <img src="/down.svg" className="dropdown-arrow" />
        <ul class="dropdown_menu dropdown_menu-2">
          <li class="dropdown_item-1" onClick={() => setRegion(text1)}>
            {text1}
          </li>
          <li class="dropdown_item-2" onClick={() => setRegion(text2)}>
            {text2}
          </li>
          <li class="dropdown_item-3" onClick={() => setRegion(text3)}>
            {text3}
          </li>
          <li class="dropdown_item-4" onClick={() => setRegion(text4)}>
            {text4}
          </li>
          <li class="dropdown_item-5" onClick={() => setRegion(text5)}>
            {text5}
          </li>
        </ul>
      </li>
    </div>
  );
};

export const Seacrch = ({ width }) => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    search: '',
  });
  const onFinish = () => {
    console.log(state.search);
  };
  const openForm = () => {
    setVisible(true);
  };
  const closeForm = () => {
    setVisible(false);
  };
  return (
    <div className="search" onClick={openForm}>
      <img src="/search.svg" className="image-filter-hover" />
      <Modal
        visible={visible}
        onCancel={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
        footer={null}
        closable={true}
      >
        <Form
          layout="inline"
          onFinish={onFinish}
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <Form.Item>
            <Input
              style={{ width: width > 1080 ? '15vw' : '200px' }}
              onChange={(e) => setState({ ...state, search: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={(e) => {
                e.stopPropagation();
                setVisible(false);
              }}
            >
              Seacrch
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export const CollapsedMenu = ({ region, setRegion, onClose, visible }) => {
  return (
    <Drawer
      closable={true}
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <div className="header-links-container-mobile">
        <a href={'https://www.google.com'} target="_blank">
          About us
        </a>
        <a href={'https://www.google.com'} target="_blank">
          Sustainability
        </a>
        <a href={'https://www.google.com'} target="_blank">
          Insights & News
        </a>
        <a href={'https://www.google.com'} target="_blank">
          Strategies
        </a>
        <a href={'https://www.google.com'} target="_blank">
          Funds
        </a>
        <a href={'https://www.google.com'} target="_blank">
          How to Invest
        </a>
      </div>
      {/* <DropDown
        region={region}
        setRegion={setRegion}
        text1={'Vietnam'}
        text2={'Russia'}
        text3={'Singapore'}
        text4={'America'}
        text5={'China'}
      /> */}
    </Drawer>
  );
};
