import "./user.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@material-ui/icons"
import { Link } from "react-router-dom"

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img className="userShowImg" src="https://pbs.twimg.com/media/EPdj-O2XkAEdukI.jpg" alt=""  />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Lord Kazuma</span>
                            <span className="userShowUserTitle">Unlucky Adventurer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInputTitle">lordkazuma69</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInputTitle">10.12.1998</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInputTitle">+62 8574 1450 13</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInputTitle">lordkazuma69@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInputTitle">Jl. Ganesha 7</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input className="userUpdateInput" type="text" placeholder="lordkazuma69" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input className="userUpdateInput" type="text" placeholder="Lord kazuma" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input className="userUpdateInput" type="text" placeholder="lordkazuma69@gmail.com" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input className="userUpdateInput" type="text" placeholder="+62 8574 1450 13" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input className="userUpdateInput" type="text" placeholder="Jl. Ganesha 7" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://pbs.twimg.com/media/EPdj-O2XkAEdukI.jpg" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
