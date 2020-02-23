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

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import image1 from "assets/img/examples/olu-eletu.jpg";
import { Link } from "@material-ui/core";


const useStyles = makeStyles(styles);

export default function DiscoverSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Discover</h2>
                    <h5 className={classes.description}>
                        In this feature, there will be various information in the form of articles which talks about how to develop and improve the soft skill and the skill-sets of the young generation </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        {/* <InfoArea
                            title="Free Chat"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={Chat}
                            iconColor="info"
                            vertical
                        /> */}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card>
                            <CardActionArea>
                                <CardBody>
                                    <div href="#">
                                        <InfoArea
                                            title="The Importance of Soft Skills"
                                            description="In the modern workplace, you need more than technical skills to be successful in your career. Today’s employers seek candidates who can perform their jobs well but who can also fit into the company culture and interact with other employees ....."
                                            icon={VerifiedUser}
                                            iconColor="success"
                                            vertical
                                        />
                                    </div>
                                </CardBody>
                            </CardActionArea>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        {/* <InfoArea
                            title="Fingerprint"
                            description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                            icon={Fingerprint}
                            iconColor="danger"
                            vertical
                        /> */}
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
