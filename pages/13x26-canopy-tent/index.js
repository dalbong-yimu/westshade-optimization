import Link from "next/link";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  Breadcrumbs,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

function handleClick(event) {
  event.preventDefault();
}

export default function Canopy_Tent_Package() {
  const router = useRouter();

  return (
    <div class="canopy-tent-package">
      <Box className="section-navbar-container section-container-breadcrumb">
        <Container maxWidth="md">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Home
            </Link>
            <Typography color="textPrimary">13x26 Canopy Tent</Typography>
          </Breadcrumbs>
        </Container>
      </Box>
      <Box className="section-container" style={{ marginTop: "0" }}>
        <Container maxWidth="sm">
          <h1 className="section-title">13x26 Canopy Tent</h1>
          <p className="section-content-entend">
            Westshade&#39;s 13x26 instant pop up canopy tent provides maximum
            space to accommodate your business, making it ideal
            <br />
            for a variety of events, ranging from business tradeshows, sports,
            festivals, weddings, outdoor parties, and many more! This 13x26
            canopy tent only comes in our most durable heavy duty aluminum frame
            - the Y7 series. You won&#39;t regret getting this for your events!
            The large canopy tent is extremely versatile, and provides up to 338
            square feet of shade and UV protection for all your guests.
            <br />
            <br />
            Browse our selection of 13x26 canopy tent series available, or
            customize your canopy tent to make it your own!​
          </p>
        </Container>
      </Box>
      <Box className="section-container" style={{ marginTop: "0" }}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="section-image-container">
                <img className="section-image" src="/rectangle-42-5@2x.png" />
              </div>
            </Grid>
            <Grid item xs={12} md={6} container alignItems="center">
              <div className="container-grid-y7">
                <h3 className="section-title">Y7 Heavy Duty</h3>
                <p className="section-subtitle">For heavy duty use</p>
                <p className="section-content">
                  The most heavy duty aluminum frame canopy on the market with
                  unchallenged strength and durability.
                </p>
                <div style={{ margin: "18px auto" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      marginBottom: "18px",
                    }}
                  >
                    <div className="color-dot-black" />
                    <div className="color-dot-white" />
                    <div className="color-dot-red" />
                    <div className="color-dot-blue" />
                    <div className="color-dot-yellow" />
                    <div className="color-dot-green" />
                  </div>
                  <p className="section-title">$1,421.00</p>
                  <Button
                    variant="contained"
                    className="section-grid-button"
                    onClick={() => router.push("/products/y7-canopy-tent")}
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="sm">
        <Box className="section-container background-light-blue">
          <h3 className="section-title">Y7 Heavy Duty</h3>
          <Grid container>
            <Grid item xs={6}>
              <List>
                <ListItem
                  className="section-image-package-listItem"
                  style={{ backgroundColor: "white" }}
                >
                  <ListItemText
                    className="section-image-package-listItem-title"
                    primary={"Frame Specifications"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Frame Material"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Outer Leg Shape"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Bracket Connectors"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Height Adjustment"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Nuts and Bolts"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Outer Leg Diameter"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Outer Leg Thickness"}
                  />
                </ListItem>
                <ListItem
                  className="section-image-package-listItem"
                  style={{ backgroundColor: "white" }}
                >
                  <ListItemText
                    className="section-image-package-listItem-title"
                    primary={"Fabric features"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Fabric"}
                  />
                </ListItem>
                <ListItem style={{ minHeight: "41px" }} />
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Function"}
                  />
                </ListItem>
                <ListItem style={{ minHeight: "41px" }} />
                <ListItem style={{ minHeight: "41px" }} />
                <ListItem
                  className="section-image-package-listItem"
                  style={{ backgroundColor: "white" }}
                >
                  <ListItemText
                    className="section-image-package-listItem-title"
                    primary={"Warrenty"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Frame Warranty"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-subtitle"
                    primary={"Roof Warranty"}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6}>
              <List>
                <ListItem
                  className="section-image-package-listItem"
                  style={{ backgroundColor: "white" }}
                />
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"6063-T5 Aluminum"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"Hexagonal"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"6063-T5 Aluminum"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"Push button"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"Stainless steel"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"2.25 inches (57mm)"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"0.07 inches (1.8mm)"}
                  />
                </ListItem>
                <ListItem
                  className="section-image-package-listItem"
                  style={{ backgroundColor: "white" }}
                />
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"500D Polyester with PVC coating"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"320gsm"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"Waterproof"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"CPAI-84 certified fire retardant"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"UV protection"}
                  />
                </ListItem>
                <ListItem
                  className="section-image-package-listItem"
                  style={{ backgroundColor: "white" }}
                />
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"10 year"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="section-image-package-listItem-content"
                    primary={"1 year"}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box className="section-container">
        <Container maxWidth="md">
          <h3 className="section-title" style={{ fontWeight: "normal" }}>
            Custom printing
          </h3>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className="section-image-container">
                <img className="section-image" src="/rectangle-48-4@2x.png" />
              </div>
            </Grid>
            <Grid item xs={12} md={6} container alignItems="center">
              <div className="container-grid-y7">
                <h3 className="section-title">Y7 Heavy Duty Custom Print</h3>
                <p className="section-subtitle">For heavy duty use</p>
                <p className="section-content">
                  The most heavy duty aluminum frame canopy on the market with
                  unchallenged strength and durability.
                </p>
                <div style={{ margin: "18px auto" }}>
                  <p className="section-title">Starting at $2,279.00</p>
                  <Button
                    variant="contained"
                    className="section-grid-button"
                    style={{ marginRight: "24px" }}
                    onClick={() => router.push("/products/y7-canopy-tent")}
                  >
                    Buy
                  </Button>
                  <Button
                    variant="contained"
                    className="section-grid-button"
                    style={{ marginRight: "24px" }}
                    onClick={() => router.push("/products/y7-canopy-tent")}
                  >
                    Free quote & mockup
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-49-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-50-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-57-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-52-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-53-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-54-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-55-4@2x.png" />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="section-container-grid" style={{ width: "90%" }}>
                <div className="section-image-container">
                  <img className="section-image" src="/rectangle-56-4@2x.png" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
