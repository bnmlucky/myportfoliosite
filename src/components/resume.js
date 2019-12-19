import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
// import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/diversity-avatars-volume-01-circles/64/woman-blonde-512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Natalia Titova</h2>
                        <h4 style={{ color: 'grey' }}>Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>I am an insanely curious full stack web developer with background in QA. I am passionate about UX/UI, CSS frameworks and new trends in web development.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Location</h5>
                        <p>Wilton, CT</p>
                        <h5>Phone</h5>
                        <p>(646) 593-2771</p>
                        <h5>Email</h5>
                        <p>bnmlucky@gmail.com</p>
                        <h5>Portfolio Website</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="General Assembly, Software Engineering Immersive"
                            schoolDescription="Stamford, CT"
                        />

                        <Education
                            startYear={1998}
                            endYear={2002}
                            schoolName="Voronezh State Pedagogical University"
                            schoolDescription="Voronezh, Russia"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="QA Engineer at Zenabi"
                            jobDescription="Test design and execution of manual and automated tests on web and mobile apps"
                        />

                        <Experience
                            startYear={2018}
                            endYear={2018}
                            jobName="QA Engineer at Virtusa (contract position at Google)"
                            jobDescription="Regression and exploratory testing of Google Assistant app on Android and iOS mobile devices"
                        />

                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="QA Engineer"
                            jobDescription="Functional, regression, exploratory, localization testing of Virtual Office Mobile on Android and iOS devices"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        {/* <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            progress={85}
                        />
                        <Skills
                            skill="HTML"
                            progress={90}
                        />
                        <Skills
                            skill="CSS"
                            progress={95}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={80}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} /> */}
                        <h5>You can find my complete resume <a href="https://docs.google.com/document/d/1SlYWCVRsYME35-yvAo2B-eRx8GhSzulqXiNAfmcBtm0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">HERE</a></h5>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;