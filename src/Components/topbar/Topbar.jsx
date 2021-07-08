import React from 'react';
import topbar from './topbar.css'; 
import {Search, Person, Chat, Notifications} from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">The Socialite</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search />
                    <input 
                    placeholder="Search for a friend, post or video"
                    className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar;
