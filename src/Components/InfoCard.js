import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import { DateTime } from "luxon";


const InfoCard = ({ data: { countryData, ip, city, country } }) => {
    return (
    <Grid style={{ height: "50vh" }} container>
        <Grid.Row centered>
        <Card
        raised
        style={{ width: "60vw", maxWidth: "500px", minWidth: "200px" }}
        >
        <Image src={countryData.flag} wrapped ui={false} />
        <Card.Content>
        <Card.Header>Your IP address is {ip}</Card.Header>
        <Card.Description>
        You are currently located in {city}, {country}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div>
        The future is... {DateTime.local().toLocaleString()}
        </div>
        <div>
        Your local time is{" "}
        {DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
        </div>
        </Card.Content>
        </Card>
        </Grid.Row>
    </Grid>
    );
};

export default InfoCard;