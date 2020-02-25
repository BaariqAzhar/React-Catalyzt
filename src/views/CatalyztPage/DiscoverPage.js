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

export default function DiscoverPage(props) {
    window.scrollTo(0, 0)
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <div className={classes.container}>
                <NavbarSection navColor="dark" />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container} style={{ color: "black", marginTop: "10em" }}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h2 style={{ color: "black", marginTop:"50px" }} className={classes.title}>The Importance of Soft Skills</h2>
                                <h4 className={classes.description}>By David Primadani Saputra</h4>
                                <br /><br />
                                <h5 className={classes.description}>
                                    <strong>Why the Soft Skills are important to be Successful in Your Career?!</strong>
                                    <br /><br />In the modern workplace, you need more than technical skills to be successful in your career. Today’s employers seek candidates who can perform their jobs well but who can also fit into the company culture and interact with other employees. In order to do these things successfully, students need to develop soft skills.
                                    <br /><br />Soft skills are attributes that enable you to engage in meaningful interactions with others. Since most jobs require teamwork, it’s important to possess soft skills to enhance your employability and achieve your dream job. They will help you increase your productivity in your career, build professional relationships and thrive at your job.
                                    <br /><br />Soft skills are personal attributes that affect your interaction and relationships with others. A few examples include:
                                    <br/><br/> <strong>1. COMMUNICATION</strong>
                                    <br /> An excellent communicator can put their ideas and arguments across in an effective way that does not offend anyone. Communication skills include listening, speaking and writing. Communication skills are important to:
                                    <br />1. Writing clear and concise emails
                                    <br />2. Pitching an idea to the clients
                                    <br />3. Creating a compelling presentation
                                    <br />4. Socialising with co-workers and clients
                                    <br />5. Collaborating with team members.
                                    <br/><br/><strong>2. PROBLEM-SOLVING</strong>
                                    <br/>If you are easily able to analyse upcoming issues and develop creative solutions to overcome them, you are a problem solver. These people are critical thinkers, decisive, willing to ask questions and explorative. You need to be a problem solver to:
                                    <br/>1. Discuss a problem objectively
                                    <br/>2. Examine how a problem affects the team and its productivity
                                    <br/>3. Come up with possible solutions
                                    <br/>4. Make plans to implement the 
                                    <br/><br/><strong>3. PRODUCTIVITY</strong>
                                    <br/>As an employee, you should develop skills that are a sign of productivity such as strategizing, organizing, planning and delivering results. You need productivity skills
                                    <br/>1. Managing a deadline and staying focused;
                                    <br/>2. Developing a project plan that includes all details such as goals; requirements and available resources;
                                    <br/>3. Balancing multiple projects at a time and shifting priorities;
                                    <br/>4. Identifying factors causing delay and assessing how to address 
                                    <br/><br/><strong>4. DIGITAL PROFICIENCY</strong>
                                    <br/>This soft skill is especially important in the digital age as it helps employees navigate through modern technology to achieve a goal. Digital proficiency helps in:
                                    <br/>1. Making the most of productivity
                                    <br/>2. Being comfortable in using both desktop and cloud-based technologies for business goals;
                                    <br/>3. Using the internet to research and
                                    <br/>4. Choosing the best software for any specific 
                                    <br/><br/><strong>5. CREATIVITY</strong>
                                    <br/>Creative employees can come up with innovative solutions for various problems. Thinking creatively allows you to continuously learn and to push boundaries. Creativity can help in:
                                    <br/>1. Brainstorming ideas
                                    <br/>2. Asking questions to generate original ideas
                                    <br/>3. Keeping an open mind to evaluate tough situations
                                    <br/>4. Keeping a positive attitude
                                    <br/><br/><strong>6. CONFIDENCE</strong>
                                    <br/>Confidence is your belief in your ability to fulfil the goals assigned to you. It is one of the most critical skills to develop. Confidence helps you solve problems without giving up. Confidence also helps you in:
                                    <br/>1. Maintaining positivity in difficult circumstances;
                                    <br/>2. Maintaining assertiveness whilst being polite in a conversation;
                                    <br/>3. Serving successfully in a leadership role;
                                    <br/>4. Communicating and arguing your opinions without offending
                                    <br/><br/><strong>7. SEFL-AWARENESS</strong>
                                    <br/>Being self-aware is essential for the continuous development of your professional and personal skills. Self-awareness helps in:
                                    <br/>1. Self-reflection and learning from previous mistakes;
                                    <br/>2. Collaborating with a team;
                                    <br/>3. Building strong and lasting relationships with colleagues and team members;
                                    <br/>4. Providing effective customer service. 
                                    <br/><br/><strong>WHY ARE SOFT SKILLS IN THE WORKPLACE IMPORTANT?</strong>
                                    <br/><br/>Developing soft skills at work is critical for so many reasons. On the whole, research has found that employees with soft skills training are 12% more productive than those without them. This translates into a whopping 256% ROI for companies!
                                    <br/><br/>If that doesn’t convince you, then maybe the findings from Deloitte’s Global Human Capital Trends report will. Over 90% of respondents rated soft skills as critical for fostering employee retention, improving leadership, and building a meaningful culture.
                                    <br/><br/>But developing soft skills in the workplace also helps companies to avoid costs, not just make money. Why? Because when soft skills are lacking, employees become prone to conflict, suffer from low self-confidence, feel unheard and misunderstood, and ultimately, become unhappy.
                                    <br/><br/>Do you know what the consequences of unhappy employees are? Increased absenteeism, poor performance, bad customer service, low quality work, and eventually (drumroll, please), decreased profit.
                                    <br/><br/>Source:
                                    <br/>1. Daniel Goleman, Harvard Business Review, 2004: “What Makes a Leader?”, https://hbr.org/2004/01/what-makes-a-leader
                                    <br/>2. Melissa Suzuno, Udemy, 2019: “Top 10 Soft Skills for 2019 in the Workplace”, https://business.udemy.com/blog/top-10-soft-skills-for-2019-in-the-workplace/ 
                                    <br/>3. Sweha Hazari, Toronto School of Management, 2019: "Why Are Soft Skills are Important", https://www.torontrosom.ca 
                                    <br/>
                                </h5>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <FooterSection />
        </div>
    );
}