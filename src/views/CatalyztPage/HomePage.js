import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";

//experiment
import JusTry from './JustTry.js'

// Sections for this page
import NavbarSection from "./NavbarSection"
import DiscoverSection from "./DiscoverSection"
import Aboutus from './AboutusSection'
import Advertisement from './AdvertisementSection'
import FooterSection from './FooterSection'

import ProductSection from "../LandingPage/Sections/ProductSection";
import TeamSection from "../LandingPage/Sections/TeamSection.js";
import WorkSection from "../LandingPage/Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <NavbarSection navColor="transparent"/>
      <Parallax filter image={require("assets/img/catalyzt/bg-1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Catalyzt</h1>
              <h4>
              The largest young generation media-platform focused on improving and developing their skill-sets for industrial needs with information, network, and overseas opportunities
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <DiscoverSection />
          <Aboutus />
          <Advertisement />
        </div>
      </div>
      <FooterSection/>
    </div>
  );
}