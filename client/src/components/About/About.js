import React from 'react';
import './About.css';
function About() {
    return (
        <div className="about">
            <h2 className="about__team">Our Team</h2>

            <div className="about__row">
                <div className="about__column">
                    <div className="about__card">
                        <img src="https://avatars.githubusercontent.com/u/73774943?s=400&u=0daa0e91e564856049aad1afcf2d1095fee69245&v=4" alt="Ico" />
                        <div className="about__container">
                            <h2>Hristo Karchev</h2>
                            <p className="about__title">Dev & Founder</p>
                            <p>Competitive and dedicated developer. Fast learner, hard worker and
                                team player who is ready to take the challenge.</p>
                            <p>x_karchev@mail.bg</p>
                            <p><a href="https://github.com/hristokarchev25"><button className="btn">Contact</button></a></p>
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
