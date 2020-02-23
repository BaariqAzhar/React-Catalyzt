/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import EmailIcon from '@material-ui/icons/Email';
import logo from 'assets/img/catalyzt/logo.png'
import Instagram from 'assets/img/catalyzt/instagram.png'
import Mail from 'assets/img/catalyzt/gmail.png'

// import InstagramIcon from '../../../node_modules/@material-ui/icons/Instagram';
import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function FooterSection(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://www.instagram.com/the.catalyzt/"
                                className={classes.block}
                                target="_blank"
                            >
                                <img src={Instagram} width={30} />
                                &nbsp;&nbsp;&nbsp;the.catalyzt
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                                target=""
                            >
                                <img src={Mail} width={30} />
                                &nbsp;&nbsp;&nbsp;info.catalyzt@gmail.com
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    © Copyright 2020 Catalyzt - All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

// Footer.propTypes = {
//   whiteFont: PropTypes.bool
// };
