import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((state) => state.user);
    console.log(user);
    return (
        <div className="profile">

            <h2 className="about__team">Your Profile</h2>

            <div className="about__row">
                <div className="profile__column">
                    <div className="about__card">
                        <img src={user.userData.avatar} alt="profile avatar" />
                        <div className="about__container">
                            <h2 className="profile__h2">{user.userData.fullName}</h2>
                            <p className="about__title">{user.userData.name}</p>
                            <p>{user.userData.address}</p>
                            <p>{user.userData.email}</p>
                           

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile;