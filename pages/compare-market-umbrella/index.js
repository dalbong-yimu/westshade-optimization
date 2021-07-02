import dynamic from "next/dynamic";
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

const SectionSocialGroup = dynamic(() =>
  import("../../components/section_social_group")
);

function handleClick(event) {
  event.preventDefault();
}

export default function Compare_Market_Umbrella() {
  const router = useRouter();

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div class="canopy-tent">
      <Box className="section-navbar-container section-container-breadcrumb">
        <Container maxWidth="md">
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Home
            </Link>
            <Typography color="textPrimary">
              Compare Market Umbrellas
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>
      <Box className="section-container">
        <Container maxWidth="md">
          <h3 className="section-title" style={{ marginTop: "0" }}>
            Compare Market Umbrella
          </h3>
          <p className="section-content">
            Pick the perfect market umbrella for your shade
          </p>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div
                className="section-container-grid"
                style={{
                  width: "90%",
                  height: "100%",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div>
                  <div className="section-image-container">
                    <img className="section-image" src="/rectangle-40@2x.png" />
                  </div>
                  <h3 className="section-title">Marco Umbrella</h3>
                </div>
                <div style={{ margin: "18px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "18px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="color-dot-black" />
                    <div className="color-dot-gray" />
                    <div className="color-dot-khaki" />
                    <div className="color-dot-brewery-red" />
                    <div className="color-dot-turquose" />
                    <div className="color-dot-golden-yellow" />
                  </div>
                  <p className="section-content">Starting at $199</p>
                  <Button
                    variant="contained"
                    className="section-grid-button"
                    onClick={() => router.push("/products/y5-canopy-tent")}
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className="section-container-grid"
                style={{
                  width: "90%",
                  height: "100%",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div>
                  <div className="section-image-container">
                    <img
                      className="section-image"
                      src="/rectangle-41-2@2x.png"
                    />
                  </div>
                  <h3 className="section-title">Santorini Aluminum Umbrella</h3>
                </div>
                <div style={{ margin: "18px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "18px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="color-dot-black" />
                    <div className="color-dot-gray" />
                    <div className="color-dot-khaki" />
                    <div className="color-dot-brewery-red" />
                    <div className="color-dot-turquose" />
                    <div className="color-dot-golden-yellow" />
                  </div>
                  <p className="section-content">Starting at $199</p>
                  <Button
                    variant="contained"
                    className="section-grid-button"
                    onClick={() => router.push("/products/y6-canopy-tent")}
                  >
                    Buy
                  </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className="section-container-grid"
                style={{
                  width: "90%",
                  height: "100%",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <div>
                  <div className="section-image-container">
                    <img className="section-image" src="/rectangle-42@2x.png" />
                  </div>
                  <h3 className="section-title">
                    Santorini Fiberglass Umbrella
                  </h3>
                </div>
                <div style={{ margin: "18px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "18px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="color-dot-black" />
                    <div className="color-dot-gray" />
                    <div className="color-dot-khaki" />
                    <div className="color-dot-brewery-red" />
                    <div className="color-dot-turquose" />
                    <div className="color-dot-golden-yellow" />
                  </div>
                  <p className="section-content">Starting at $199</p>
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
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"Size"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"6.5ft"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"6.5ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"7.5ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"9ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"10ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"11.5ft"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"6.5ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"7.5ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"9ft"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"11.5ft"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"Roof Shape"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"Square"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4} container>
                <Grid item>
                  <List>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        primary={"Octagon"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"7.5ft"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"9ft"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"11.5ft"}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        primary={"Square"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"6.5ft"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"10ft"}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Grid item xs={4} container>
                <Grid item>
                  <List>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        primary={"Octagon"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"7.5ft"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"9ft"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"11.5ft"}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        primary={"Square"}
                      />
                    </ListItem>
                    <ListItem className="section-canopy-tent-listItem">
                      <ListItemText
                        className="section-canopy-tent-listItem-content"
                        secondary={"6.5ft"}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"Ribs & Pole"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Aluminum Ribs"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Aluminum Pole"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Aluminum Ribs"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Aluminum Pole"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Fiberglass Ribs"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Aluminum Pole"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"6.5 ft"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"4-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.5”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.08”"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"4-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.57”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.1”"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"4-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.57”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.1”"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"7.5 ft"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"-"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.57”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.1”"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.57”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.1”"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"9 ft"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"-"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.57”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.1”"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 1.57”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.1”"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"10 ft"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"-"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 2”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.12”"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"-"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"11.5 ft"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"-"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 2”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.12”"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"8-rib construction"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole diameter 2”"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"Pole thickness 0.12”"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"Fabric"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"AGORA"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"SDP"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"AGORA"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"SDP"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      secondary={"SDP"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
          <Box className="section-container">
            <ListItem className="section-canopy-tent-listItem">
              <ListItemText primary={"Warrenty"} />
            </ListItem>
            <Grid container>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"Frame"}
                      secondary={"3 year"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"AGORA fabric"}
                      secondary={"5 year"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"SDP fabric"}
                      secondary={"2 year"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"Frame"}
                      secondary={"3 year"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"AGORA fabric"}
                      secondary={"5 year"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"SDP fabric"}
                      secondary={"2 year"}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"Frame"}
                      secondary={"3 year"}
                    />
                  </ListItem>
                  <ListItem className="section-canopy-tent-listItem">
                    <ListItemText
                      className="section-canopy-tent-listItem-content"
                      primary={"SDP fabric"}
                      secondary={"2 year"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
