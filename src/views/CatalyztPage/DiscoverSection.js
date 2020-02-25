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

import { Router, Route, Switch, Link } from "react-router-dom";
// import { Link } from "@material-ui/core";

// import slide1 from 'assets/img/catalyzt/discover-slide/I Want To Be/1.png'

//modal
// import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
import slide1 from "assets/img/catalyzt/discover-slide/I Want To Be/1.png";
import slide2 from "assets/img/catalyzt/discover-slide/I Want To Be/2.jpg";
import slide3 from "assets/img/catalyzt/discover-slide/I Want To Be/3.jpg";
import slide4 from "assets/img/catalyzt/discover-slide/I Want To Be/4.jpg";
import slide5 from "assets/img/catalyzt/discover-slide/I Want To Be/5.jpg";
import slide6 from "assets/img/catalyzt/discover-slide/I Want To Be/6.jpg";

// @material-ui/icons
import Close from "@material-ui/icons/Close";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function DiscoverSection() {
    const [modal, setModal] = React.useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

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
                                    <Link to='/discover-page'>
                                        <InfoArea
                                            title="The Importance of Soft Skills"
                                            description="In the modern workplace, you need more than technical skills to be successful in your career. Today’s employers seek candidates who can perform their jobs well but who can also fit into the company culture and interact with other employees ....."
                                            icon={VerifiedUser}
                                            iconColor="success"
                                            vertical
                                        />
                                    </Link>
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
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <CardActionArea>
                            {/* <img
                                src={slide1}
                                style={{ width: "100%" }}
                            /> */}
                            <Button color="rose" round onClick={() => setModal(true)}>
                                <img
                                    src={slide1}
                                    style={{ width: "100%" }}
                                />
                            </Button>
                        </CardActionArea>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    </GridItem>
                </GridContainer>
                {/* Modal of Discover slide */}
                <Dialog
                    classes={{
                        root: classes.center,
                        paper: classes.modal
                    }}
                    open={modal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setModal(false)}
                    aria-labelledby="modal-slide-title"
                    aria-describedby="modal-slide-description"
                >
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                    >
                        <IconButton
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={() => setModal(false)}
                        >
                            <Close className={classes.modalClose} />
                        </IconButton>
                        {/* <h4 className={classes.modalTitle}>Modal title</h4> */}
                    </DialogTitle>
                    <DialogContent
                        id="modal-slide-description"
                        className={classes.modalBody}
                    >
                        {/* <h5>Are you sure you want to do this?</h5> */}
                        {/* <GridContainer>
                            <GridItem xs={12} sm={12} md={8}>
                                <Card> */}
                        <Carousel {...settings}>
                            <div>
                                <img
                                    src={slide1}
                                    alt="First slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={slide2}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={slide3}
                                    alt="Third slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={slide4}
                                    alt="Forth slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={slide5}
                                    alt="Fifth slide"
                                    className="slick-image"
                                />
                            </div>
                            <div>
                                <img
                                    src={slide6}
                                    alt="Sixth slide"
                                    className="slick-image"
                                />
                            </div>
                        </Carousel>
                        {/* </Card>
                            </GridItem>
                        </GridContainer> */}
                    </DialogContent>
                    {/* <DialogActions
                        className={classes.modalFooter + " " + classes.modalFooterCenter}
                    >
                        <Button onClick={() => setModal(false)}>Never Mind</Button>
                        <Button onClick={() => setModal(false)} color="success">
                            Yes
                    </Button>
                    </DialogActions> */}
                </Dialog>
                {/*  */}
            </div>
        </div>
    );
}
