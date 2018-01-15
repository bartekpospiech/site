import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts } from "../components";
import description from "./description";

const SpeakerIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Contacts className="speakers" items={content.speakers} />
    </div>
  </div>
);
SpeakerIndex.description = description;

export default SpeakerIndex;
