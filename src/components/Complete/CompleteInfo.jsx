import React from "react";
import { Link } from "react-router-dom";
import "./Complete.scss";
import { Text, Button } from "@shopify/polaris";

import complete from "../../assets/images/complete-image.jpg";
import calender from "../../assets/images/calendar.png";
import clock from "../../assets/images/clock.png";
import coin from "../../assets/images/coin.png";

export default function CompleteInfo({ onNext }) {
  return (
    <>
      <div className="complete__content">
        <section className="complete__info">
          <img
            className="complete__headerimg"
            src={complete}
            alt="confetti image"
          />
          <Text variant="heading3xl" as="h2">
            You've successfully completed Module 1!
          </Text>
        </section>
        <div className="complete__streak">
          <div className="complete__subcontent">
            <Text variant="headingMd" as="h6">
              Streak
            </Text>
            <img
              className="complete__image"
              src={calender}
              alt="calender image"
            />
          </div>
          <div className="complete__subcontent complete__subcontent--time">
            <Text variant="headingMd" as="h6">
              Time
            </Text>
            <img className="complete__image" src={clock} alt="clock image" />
            <p>Under 5min</p>
          </div>
        </div>
        <div className="complete__subcontent complete__subcontent--coins">
          <img className="complete__image" src={coin} alt="coin image" />
          <h4 className="complete__coin">+20 Coins</h4>
          <p className="complete__tip">
            <strong>Tip:</strong> Complete modules every day to increase your
            rewards!
          </p>
        </div>
        <div className="complete__cta">
          <Button primary onClick={onNext}>
            Start Module 2
          </Button>
          <Link className="complete__cancel" to="/home">
            Save and Exit
          </Link>
        </div>
      </div>
    </>
  );
}
