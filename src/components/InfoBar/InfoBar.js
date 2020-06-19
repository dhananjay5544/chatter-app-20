import React from "react";

import onlineIcon from "../../icons/team.svg";
import closeIcon from "../../icons/close.svg";

import "./InfoBar.css";

function InfoBar({ room, users }) {
	return (
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img className="onlineIcon" src={onlineIcon} alt="online icon" />
				<div className="group-info">
					<h4 className="mt-3 room-name">{room}</h4>
					<p className="mt-n2 room-info">
						room created at {users && users[0].time} by {users && users[0].name}
					</p>
				</div>
			</div>
			<div className="rightInnerContainer">
				<a href="/" className="btn btn-light">
					<img src={closeIcon} alt="close icon" className="close-icon" />
					Leave room
				</a>
			</div>
		</div>
	);
}

export default InfoBar;
