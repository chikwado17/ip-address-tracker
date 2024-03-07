import { Card, Container, GridRow, GridColumn, Grid } from "semantic-ui-react";
import { useIp } from "../context/IpContext";

const MapDetails = () => {
  const { ipAddress } = useIp();

  return (
    <div className="map-details">
      <Container>
        <Card fluid className="card-grip">
          <Grid stackable columns="four" divided className="map-card">
            <GridRow>
              <GridColumn>
                <h5>IP ADDRESS</h5>
                <h1>{ipAddress?.ip || ""}</h1>
              </GridColumn>
              <GridColumn>
                <h5>LOCATION</h5>
                <h1>
                  {ipAddress?.location.city || ""}
                  {ipAddress?.location.country || ""}
                </h1>
              </GridColumn>
              <GridColumn>
                <h5> TIMEZONE</h5>
                <h1>UTC{ipAddress?.location.timezone || ""}</h1>
              </GridColumn>
              <GridColumn>
                <h5> ISP</h5>
                <h1>{ipAddress?.isp || ""}</h1>
              </GridColumn>
            </GridRow>
          </Grid>
        </Card>
      </Container>
    </div>
  );
};

export default MapDetails;
