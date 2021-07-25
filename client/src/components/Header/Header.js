import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import GavelIcon from '@material-ui/icons/Gavel';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { useSelector } from 'react-redux';


function Header(props) {
    const user = useSelector((state) => state.user);

    const logoutHandler = () => {
        axios.get("/users/logout")
            .then((res) => {
                if (res.status === 200) {
                    props.history.push("/login");
                } else {
                    alert("Log Out Failed");
                }
            });
    };



    if (user.userData && !user.userData.isAuth) {
        return (
            <div className="header">
                <Link to="/">
                    <img className="header__logo" src="/as3.png" alt="logo" />
                </Link>

                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>


                <div className="header__nav">
                    <Link to="/login">
                        <div className="header__option">
                            <span className='header__optionLineOne'>Hello, Guest</span>
                            <span className='header__optionLineTwo'>Sign In</span>
                        </div>
                    </Link>

                    <Link to="/about">
                        <div className="header__option">
                            <span className='header__optionLineOne'>Our mission? You can read more in:</span>
                            <span className='header__optionLineTwo'>About us</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="header">
                <Link to="/">
                    <img className="header__logo" src="/as3.png" alt="logo" />
                </Link>

                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>


                <div className="header__nav">

                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello, {user.userData ? user.userData.name : ""}</span>
                        <Link to="/" onClick={logoutHandler}>   <span className='header__optionLineTwo'>Logout</span></Link>
                    </div>


                    <Link to="/create">
                        <div className="header__option">
                            <span className='header__optionLineOne'>Create a Bid?</span>
                            <span className='header__optionLineTwo'>Bid</span>
                        </div>
                    </Link>

                    <Link to="/bidsHistory">
                        <div className="header__optionHammer">
                            <GavelIcon />
                            <span className='header__optionLineTwo header__hammerCount'>0</span>
                        </div>
                    </Link>

                </div>
            </div>
        );
    }

}

export default Header;
