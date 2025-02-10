import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/image/Nlogo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
    return (
        <div className='header_outer_container'>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={NetflixLogo} alt="logo" width="100" /></li>
                        <li>NetFlix</li>
                        <li>Home</li>
                        <li>TVShow</li>
                        <li>Movies</li>
                        <li>Latest</li>
                        <li>MyList</li>
                        <li>Browse by Language</li>
                    </ul>
                </div>
                <div className='header_right'>
                  <ul>
                    <li>< SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                  </ul>
             </div>
            </div>
        </div>
    )
}

export default Header
