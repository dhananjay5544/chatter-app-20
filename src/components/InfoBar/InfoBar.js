import React from "react";

import onlineIcon from "../../icons/team.svg";
import closeIcon from "../../icons/close.svg";

import "./InfoBar.css";

const getRoomTime = () => {
	const date = new Date();
	const time = date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});
	return time;
};
const InfoBar = ({ room, name }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			<img className="onlineIcon" src={onlineIcon} alt="online icon" />
			<div className="group-info">
				<h4 className="mt-3 room-name">{room}</h4>
				<p className="mt-n2 room-info">
					room created at {getRoomTime()} by {name}
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

export default InfoBar;
