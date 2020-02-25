import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import ExploreIcon from "@material-ui/icons/Explore";
import BusinessIcon from '@material-ui/icons/Business';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { Router, Route, Switch, Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function NavbarSection(props) {
  const classes = useStyles();
  // let activePage = props.activePage;
  // let implementPage;
  // if (activePage){
  //   switch(activePage){
  //     case 'home':
  //       implementPage = 
  //       break;
  //     case 'dicover':
  //       break;
  //   }
  // }
  return (
    <div>
      {/* <div className={classes.section}> */}
      <div id="navbar" className={classes.navbar}>
        {/* <div
          className={classes.navigation}
        // style={{ backgroundImage: "url(" + image + ")" }}
        > */}
        <Header
          brand={<img align="left" style={{ width: "50%" }} src={require('./../../assets/img/catalyzt/logo-txt.png')} />}
          color={props.navColor}
          fixed
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Link to="/"
                  className={classes.navLink + " " + classes.navLinkActive}
                  color="transparent">
                  <HomeIcon className={classes.icons} /> Home
                </Link>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <EventIcon className={classes.icons} /> Event
                  </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <ExploreIcon className={classes.icons} /> Discover
                  </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <BusinessIcon className={classes.icons} /> About us
                  </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <SupervisorAccountIcon className={classes.icons} /> Testimonials
                  </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <ReceiptIcon className={classes.icons} /> Advertisement
                  </Button>
              </ListItem>
            </List>
          }
        />
      </div>
      {/* </div> */}
    </div>
  );
}
