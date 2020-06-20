import React, { useEffect } from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";
import { Alert } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { deepOrange, deepPurple, cyan, pink } from "@material-ui/core/colors";
import tone from "../../../icons/notification_tune.mp3";

const useStyles = makeStyles((theme) => ({
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: cyan[500],
		width: theme.spacing(4),
		height: theme.spacing(4),
		cursor: "pointer",
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: pink[500],
		width: theme.spacing(4),
		height: theme.spacing(4),
		cursor: "pointer",
	},
}));

const Message = ({ message: { text, user, time }, name }) => {
	const classes = useStyles();
	let isSentByCurrentUser = false;
	const trimmedName = name.trim().toLowerCase();
	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	//message notification tune
	useEffect(() => {
		if (isSentByCurrentUser === false && user !== "admin" && user !== "Admin") {
			document.getElementById("notification").play();
		}
	}, [isSentByCurrentUser, user]);

	return isSentByCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10 mt-3">
				<OverlayTrigger
					placement="left"
					overlay={
						<Tooltip id="tooltip-left">
							<strong>
								{trimmedName.slice(0, 1).toUpperCase() +
									trimmedName.slice(1, trimmedName.length)}
							</strong>
						</Tooltip>
					}
				>
					<Avatar className={classes.orange}>
						{trimmedName.slice(0, 1).toUpperCase()}
					</Avatar>
				</OverlayTrigger>
			</p>
			<div className="messageBox2 backgroundBlue">
				<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
				<div className="time1">
					<p style={{ float: "right" }}>{time}</p>
				</div>
			</div>
		</div>
	) : user === "admin" || user === "Admin" ? (
		<div className="text-center w-50 mx-auto">
			<Alert
				variant={user === "admin" ? "info" : "danger"}
				className="p-n2 mt-2"
			>
				{ReactEmoji.emojify(text)}
			</Alert>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox1 backgroundLight">
				<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
				<div className="time">
					<p style={{ float: "right" }}>{time}</p>
				</div>
			</div>
			<p className="sentText pl-10 mt-3">
				<OverlayTrigger
					placement="right"
					overlay={
						<Tooltip id="tooltip-right">
							<strong>
								{user.slice(0, 1).toUpperCase() + user.slice(1, user.length)}
							</strong>
						</Tooltip>
					}
				>
					<Avatar className={classes.purple}>
						{user.slice(0, 1).toUpperCase()}
					</Avatar>
				</OverlayTrigger>
			</p>
			<audio id="notification">
				<source src={tone} type="audio/mpeg" />
			</audio>
		</div>
	);
};

export default Message;
