import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

export default function DiscoverSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Advertisement</h2>
                    <h5 className={classes.description}>
                        This is a special feature which advertisers could use to promote their organization and event through uploading in our website or Live promotion during our event
                    </h5>
                    <Button color="primary" simple>Learn More</Button>
                </GridItem>
            </GridContainer>
        </div>
    );
}
