class SpaceXModel {
  constructor() {
    this.modelObject = data => ({
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
    })
  }
  createDataModel(data) {
    return this.modelObject(data);
  }
}

export default SpaceXModel;