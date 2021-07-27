import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((state) => state.user);

    return (
        <div className="profile">

            <h2 className="about__team">Your Profile</h2>

            <div className="about__row">
                <div className="profile__column">
                    <div className="about__card">
                        <img src="https://avatars.githubusercontent.com/u/73774943?s=400&u=0daa0e91e564856049aad1afcf2d1095fee69245&v=4" alt="Ico" />
                        <div className="about__container">
                            <h2>Hristo Karchev</h2>
                            <p className="about__title">{user.userData.name}</p>
                            <p>Competitive and dedicated developer. Fast learner, hard worker and
                                team player who is ready to take the challenge.</p>
                            <p>{user.userData.email}</p>
                            <p><a href="https://github.com/hristokarchev25"><button className="btn">Contact</button></a></p>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile;