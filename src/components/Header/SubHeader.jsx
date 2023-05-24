import React from "react";
import { useNavigate } from "react-router-dom";
import { AlphaCard, Text, Link, Banner, Button } from "@shopify/polaris";
import "./Header.scss";

export default function SubHeader({ text, link }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home/myplan");
  };

  return (
    <div className="subheader">
      <AlphaCard>
        <div className="subheader__container">
          <div className="subheader__items">
            <Text as="p">{text}</Text>
          </div>
          <div className="subheader__items">
            <Link url="https://www.shopify.com/ca/pricing">{link}</Link>
          </div>
          <Banner onDismiss={() => {}}>
            <div className="subheader__banner">
              <p className="subheader__bannertext">
                <i>StartupSuccess</i> is ready to launch. Begin building your
                business plan with just 5-10 minutes a day!
              </p>
              <Button onClick={handleButtonClick}>Get Started</Button>
            </div>
          </Banner>
        </div>
      </AlphaCard>
    </div>
  );
}
