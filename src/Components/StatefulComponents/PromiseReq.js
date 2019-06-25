import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import '../../CSS/promises.css';
const APIURL = rocketNumber => `https://api.spacexdata.com/v3/launches/${rocketNumber}`;


class PromiseReq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getData = this.getData.bind(this);
  }

  createDataModel(data) {
    return {
      flightNumber: data.flight_number,
      missionName: data.mission_name,
      launchYear: data.launch_year,
      rocket: {
        rocketName: data.rocket.rocket_name,
        rocketId: data.rocket.rocket_id,
        rocketType: data.rocket.rocket_type
      },
      payloads: {
        secondStage: {
          payloadId: data.rocket.second_stage.payloads[0].payload_id,
          manufacturer: data.rocket.second_stage.payloads[0].manufacturer,
          nationality: data.rocket.second_stage.payloads[0].nationality,
          payloadType: data.rocket.second_stage.payloads[0].payload_type,
          payloadMassKg: data.rocket.second_stage.payloads[0].payload_mass_kg,
          payloadMassLbs: data.rocket.second_stage.payloads[0].payload_mass_lbs
        }
      },
      launchSite: {
        siteId: data.launch_site.site_id,
        siteName: data.launch_site.site_name,
        siteNameLong: data.launch_site.site_name_long
      },
      launchSuccess: data.launch_success,
      details: data.details,
      media: {
        missionPatch: data.links.mission_patch,
        missionPatchSmall: data.links.mission_patch_small,
        youtubeVideo: data.links.video_link
      }
    }
  }

  getData() {
    let XHR = new XMLHttpRequest();
    let randomNum = Math.floor(Math.random() * 80);
    let GENERATEDAPIURL = APIURL(randomNum);

    XHR.onreadystatechange = () => {
      let responseObj = XHR.responseText;
      let errorObj = {
        error: `The request returned an error with the status of: ${XHR.status}`,
        readyState: XHR.readyState
      };

      return new Promise((res, reg) => {
        if(XHR.readyState === 4){
          if(XHR.status === 200) {
              res(responseObj)
            } else {
              reg(errorObj)
            }
          }
        }
      ).then(rawData => {
        let data = JSON.parse(rawData);
        this.setState({data: [...this.state.data, this.createDataModel(data)]});
      })
        .catch(err => console.log(err));
    };

    XHR.open("GET", GENERATEDAPIURL);
    XHR.send();
  }

  render() {
    return (
      <div>
        <h1>Space X Promise Request</h1>
        <PageTemplate
          addItem={this.getData}
          reqType={"promise"}
          data={this.state.data}
        />
        {this.state.data.length <= 0 ? <p>Go ahead.. make that call</p> : null}
      </div>
    );
  }
}

export default PromiseReq;