import React, { Component } from 'react';
import CocktailListItem from "../StatelessComponents/CocktailListItem";
import KanyeQuoteListItem from "../StatelessComponents/KanyeQuoteListItem";
import SpaceXFlightListItem from "../StatelessComponents/SpaceXFlightListItem";

class PageTemplate extends Component {
  changeRequest(requestType, data) {
    switch(requestType) {
      case "axios":
        return (
          <ul className={"cocktails"}>
            {data.map((d, id) => (
                <CocktailListItem
                  drinkName={d.drinkName}
                  instructions={d.instructions}
                  ingredients={d.ingredients}
                  measurements={d.measurements}
                  key={id}
                />
              )
            )}
          </ul>
        );
        break;
      case "fetchAPI":
        return (
          <div>
            {data.length >= 1 ? <h3>Kanye West quotes:</h3> : null}
            <ul className={"kanye-quotes"}>
              {data.map((d, id) => (
                <KanyeQuoteListItem quote={d} key={id}/>
              ))}
            </ul>
          </div>
        );
        break;
      case "promise":
        return (
          <ul className={"space-x-flights"}>
            {data.map(data => (
              <SpaceXFlightListItem
                missionName={data.missionName}
                details={data.details}
                rocket={data.rocket}
                launchYear={data.launchYear}
                launchSite={data.launchSite}
                launchSuccess={data.launchSuccess}
                payloads={data.payloads}
                media={data.media}
                flightNumber={data.flightNumber}
              />
            ))}
          </ul>
        );
        break;
      default:
        return(
          <ul>
            <li>Invalid Request Type</li>
          </ul>
        );
        break;
    }
  }
    render() {
      let {addItem, reqType, data} = this.props;
      return(
        <div>
          <button className={"add-item"} onClick={addItem}>Add Item</button>
          <div className="data">
            {this.changeRequest(reqType, data)}
          </div>
        </div>
      )
    }
}

export default PageTemplate;