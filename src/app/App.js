import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "../images/background.jpg";
import Audio from "../Components/Audio";

import { Container, Header } from "semantic-ui-react";

// custom components

import UserMap from "../Components/UserMap";
import InfoCard from "../Components/InfoCard";

// Styles imports
import "../styles/App.css";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [appInfo, setAppInfo] = useState({});

  useEffect(async () => {
    const { data: ipData } = await axios
      .get(
        "https://geo.ipify.org/api/v1?apiKey=at_q0PPYNVebXnhMzJOUModD2NEMlCWC"
      )
      .catch((e) => console.error("Problem fetching the IpData", e.message));

    const { data: countryData } = await axios
      .get(
        `https://restcountries.eu/rest/v2/alpha/${
          ipData && ipData.location.country
        }`
      )
      .catch((e) =>
        console.error("Problem fetching the countryData", e.message)
      );

    if (ipData && countryData) {
      setAppInfo({
        ip: ipData.ip,
        lat: ipData.location.lat,
        lng: ipData.location.lng,
        region: ipData.location.region,
        city: ipData.location.city,
        timezone: ipData.location.timezone,
        country: countryData.name,
        countryData,
        isLoaded: true,
      });
    } else {
      setAppInfo({
        isProblem: true,
      });
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <Audio />
        </div>
        {appInfo.isLoaded && (
          <div className="row">
            <div className="col-md-12 justify-center">
              <div className="row">
                <div
                  className="App"
                  style={{ backgroundImage: `url(${Background})` }}
                >
                  <div className="ipCard">
                    <h1>DUDE What's My IP AGAIN? (IP)ess YOURSELF</h1>
                    {appInfo.isLoaded && <InfoCard data={appInfo} />}
                  </div>
                </div>
              </div>

              <UserMap position={[appInfo.lat, appInfo.lng]} />
            </div>
          </div>
        )}
        {appInfo.isProblem && (
          <>
            <div className="App">
              <h1>
                There was a problem loading the data; please disable your
                adblocker and try again
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
