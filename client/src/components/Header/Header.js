import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import GavelIcon from '@material-ui/icons/Gavel';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src="/as3.png" alt="logo" />
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello, Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello, Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className="header__optionHammer">
                    <GavelIcon />
                    <span className='header__optionLineTwo header__hammerCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
