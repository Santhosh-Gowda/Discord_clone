import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import SidebarChannel from './SidebarChannel';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>San Gowda</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon className='sidebar__addChannel'/>
                </div>
            <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
            </div>
            <div className="sidebar__voice">
            <SignalCellularAltIcon className='sidebar__voiceIcon' fontSize='large'/>
            <div className="sidebar__voiceInfo">
                <h3>Voice connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
            </div>
            </div>
            <div className="sidebar__profile">
            <Avatar src='https://scontent.fblr4-1.fna.fbcdn.net/v/t1.0-9/57393159_2103831496394370_5160352186227490816_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=-b-n5uhXzyUAX_vQ3pD&_nc_ht=scontent.fblr4-1.fna&oh=4544d762c8d369b0a480c0cb32e07037&oe=5FB51651'/>
            <div className="sidebar__profileInfo">
                <h3>San Gowda</h3>
                <p>#12124ds</p>
            </div>
            <div className="sidebar__profileIcons__name">
            <MicIcon />
            <HeadsetMicIcon />
            <SettingsIcon />
            </div>
            </div>
        </div>
    )
}

export default Sidebar;
