import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  VideoThumbnail,
  TextField,
  Button,
  ProgressBar,
} from "@shopify/polaris";
import thumbnailUrl from "./../../assets/images/share-image-generic-bd3ce342a910c2489b672b00e45c74b1b1548662c41448e456547fa5b6e0f585.png";
import "./MissionStatement.scss";

export default function VisionStatement({ onNext }) {
  const [missionStatement, setMissionStatement] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (value) => {
    setMissionStatement(value);
  };
  return (
    <div className="mission-statement" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mission-statement__progressbox">
        <ProgressBar
          progress={75}
          color="primary"
          className="custom-progress-bar"
        />
      </div>
      <h2>Write a Vision Statement</h2>
      <p>
        What impact do you envision your business having on the world? Phrase
        the impact as an assertion—begin the statement with “[My company] will…
        or To…” and you’ll be off to a great start.
      </p>
      <p className="subdued">
        e.g. "Paw Print Posts mission is to create personalized connections
        through custom paw print greeting cards."
      </p>
      <br />
      <p className="subdued">
        Need more help? Here's a clip from our Learn With Shopify YouTube
        channel:
      </p>
      <VideoThumbnail
        videoLength={80}
        thumbnailUrl={thumbnailUrl}
        onClick={() => {}}
      />
      <h2 className="custom">Write your vision statement here</h2>
      <TextField
        value={missionStatement}
        onChange={handleInputChange}
        multiline={3}
        placeholder="Our vision is..."
        className="custom-textfield"
      />
      <div className="mission-statement__cta">
        <Button primary onClick={onNext} disabled={!missionStatement}>
          Next
        </Button>
        <Link className="mission-statement__cancel" to="/home">
          Save and Exit
        </Link>
      </div>
    </div>
  );
}
