import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCocktail, faSpaceShuttle, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

let Loader = icon => {
  debugger;
  let iconType;
  switch (icon.icon) {
    case "cocktail":
      iconType = faCocktail;
      break;
    case "spaceship":
      iconType = faSpaceShuttle;
      break;
    default:
      iconType = faMicrophoneAlt;
      break;
  }
  return (
    <div className={"loader"}>
      <FontAwesomeIcon className={"loading-icon"} icon={iconType}/>
    </div>
  )
};

export default Loader;