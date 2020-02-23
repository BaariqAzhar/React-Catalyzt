import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { flexbox } from '@material-ui/system';
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import logo from 'assets/img/catalyzt/logo.png'
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import InfoArea from "components/InfoArea/InfoArea.js";
import { Link } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

const useStyles = makeStyles(styles)

export default function Aboutus() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>About Catalyzt</h2>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={4} sm={4} md={6}>
                    <h5 className={classes.description}
                        style={{
                            textAlign: "right",
                            marginTop: "10%"
                        }}>
                        Catalyzt is the young generation media-platform focused on improving and developing their skill-sets for industrial needs with information, network, and overseas opportunities as our vision and solution of the mismatch between the skills they possess and the jobs that are available or industrial demands
                        <a href="#">.... Learn More</a>
                    </h5>
                </GridItem>
                <GridItem xs={8} sm={8} md={6}>
                    <img
                    align="left"
                        src={logo}
                        alt="..."
                        className={classes.imgRoundedCircle}
                        style={{ width: '50%'}}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Impactful"
                        description="The ability to change perspective and behavior also create useful solution for environment"
                        icon={TrendingUpIcon}
                        iconColor="info"
                        vertical
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Innovative"
                        description="
                        Innovative
                        the ability to address complex adaptive problems, while productively and creatively delivering products of the highest possible value"
                        icon={WbIncandescentIcon}
                        iconColor="success"
                        vertical
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Fast-Growth"
                        description="The ability to adapt in rapid environmental transformation through increasing the youth’s curiosity and self-driven initiative"
                        icon={FlashOnIcon}
                        iconColor="danger"
                        vertical
                    />
                </GridItem>
            </GridContainer>
        </div>
    )
}
