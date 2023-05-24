import React from "react";
import SearchBar from "../Search/SearchBar";
import Header from "../Header/Header";
import "./Complete.scss";
import { Text, Icon, Button, Link } from "@shopify/polaris";
// import { ClockMajor } from "@shopify/polaris-icons";
import complete from "../../assets/images/complete-image.jpg";
import calender from "../../assets/images/calendar.png";
import clock from "../../assets/images/clock.png";
import CompleteInfo from "./CompleteInfo";

export default function Complete({ onNext }) {
  return (
    <div className="complete">
      <SearchBar />
      <Header
        titleName="My Business Plan"
        text="Module 1 - Complete"
        showDivider={true}
      />
      <CompleteInfo onNext={onNext} />
    </div>
  );
}
