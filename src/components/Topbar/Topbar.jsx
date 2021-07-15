import React from 'react';
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import Avatar1 from "./../../images/Avatar1.jpg";
import Logo from "./../../images/logo.svg";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ManageStore</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        <Language />
                    </div>
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>
                    <img src={Avatar1} alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
