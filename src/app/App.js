import React, { useState, useEffect } from "react";
import axios from 'axios';
import Background from '../images/background.jpg';


import { Header } from "semantic-ui-react";

// custom components

import UserMap from "../Components/UserMap";
import InfoCard from "../Components/InfoCard";
import Audio from "../Components/Audio";

// Styles imports
import "../styles/App.css";
import "semantic-ui-css/semantic.min.css";




const App = () => {
  
const [ appInfo,setAppInfo ] = useState({})

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
        isLoaded: true
      });
    } else {
      setAppInfo({
        isProblem: true
      });
    }
  }, []) 


    

    return (
      <>
        {appInfo.isLoaded && (
          <div className="App">
            <div className="ipCard">
              <Header
                as="h3"
                style={{
                  paddingTop: "1em",
                  fontSize: "2.9em",
                }}
              >
                {" "}
                DUDE What's My IP AGAIN?
              </Header>
              {appInfo.isLoaded && <InfoCard data={appInfo} />}
            </div>
            <div>
              {appInfo.isLoaded && (
              <UserMap 
              style={{
                  paddingTop: "1em",
                  fontSize: "2.9em",
                }} 
                position={[appInfo.lat, appInfo.lng]} />
              )}
            </div>
          </div>
        )}
        {appInfo.isProblem && (
          <div className="App">
            <h1>
              There was a problem loading the data; please disable your
              adblocker and try again
            </h1>
          </div>
          )}
        {/*   <div  styles={{ backgroundImage:`url(${Background})` }}>
      <h1>This is the background</h1>
    </div>
    <Audio /> */}
      </>
    );
  }


export default App;