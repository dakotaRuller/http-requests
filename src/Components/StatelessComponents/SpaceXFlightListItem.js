import React from "react";
import { checkNull } from '../../util';

let SpaceXFlightListItem = ({missionName, launchYear, rocket, payloads, launchSite, launchSuccess, details, media, flightNumber}) => (
  <li key={flightNumber} className={`mission-flight flight-number-${flightNumber}`}>
    <div>
      {checkNull(media.missionPatchSmall, <img src={media.missionPatchSmall} alt="Mission patch small size"/>)}
      <h2>Mission: {missionName}</h2>
      <div>
        <h2>Details:</h2>
        <p>{details}</p>
      </div>
      <div>
        <h2>Launch year:</h2>
        <p>{launchYear}</p>
      </div>
      <h2>Rocket:</h2>
      <ul id={rocket.rocketId}>
        <li>Rocket name: {rocket.rocketName}</li>
        <li>Rocket type: {rocket.rocketType}</li>
      </ul>
      <h2>Launch site:</h2>
      <p>{launchSite.siteNameLong}</p>
      <p>
        {launchSuccess ? "Successful Launch" : "Unsuccessful Launch"}
      </p>
      <h2>Rocket Payload: </h2>
      <ul id={payloads.secondStage.payloadId}>
        <li>Manufacture: {payloads.secondStage.manufacturer}</li>
        <li>Nationality: {payloads.secondStage.nationality}</li>
        {checkNull(payloads.secondStage.payloadMassKg,<li>Payload mass (kg): {payloads.secondStage.payloadMassKg}</li>)}
        {checkNull(payloads.secondStage.payloadMassLbs,<li>Payload mass (lbs): {payloads.secondStage.payloadMassLbs}</li>)}
      </ul>
      {checkNull(media.youtubeVideo,<p><a target="_blank" rel="noopener noreferrer" href={media.youtubeVideo}>{media.youtubeVideo}</a></p>)}
    </div>
  </li>
);

export default SpaceXFlightListItem;