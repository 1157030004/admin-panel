import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">shadeeAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://pbs.twimg.com/profile_images/1301441940517339137/ZK_qVYaT.jpg" alt="" className="topAvatar" />
                </div>

            </div>
        </div>
    )
}

export default Topbar
