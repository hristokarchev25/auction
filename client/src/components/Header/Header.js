import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" src="/as3.png" alt="logo" />

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
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello, Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </div>
        </div>
    )
}

export default Header
