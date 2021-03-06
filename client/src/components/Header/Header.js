import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutUser } from "../_actions/user_actions";
import { useDispatch } from "react-redux";

function Header() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUser())
            .then((res) => {
                if (res.status === 200) {
                    console.log("logged out");
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
                            <span className='header__optionLineOne'>Contact us?</span>
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
                    <Link to="/login" onClick={logoutHandler}>
                        <div className="header__option">
                            <span className='header__optionLineOne'>Hello, {user.userData ? user.userData.name : ""}</span>
                            <span className='header__optionLineTwo'>Logout</span>
                        </div>
                    </Link>

                    <Link to="/create">
                        <div className="header__option">
                            <span className='header__optionLineOne'>Create a Bid?</span>
                            <span className='header__optionLineTwo'>Bid</span>
                        </div>
                    </Link>

                    <Link to="/profile">
                        <div className="header__optionAccount">
                            <AccountCircleIcon/>
                        </div>
                    </Link>

                </div>
            </div>
        );
    }

}

export default Header;
