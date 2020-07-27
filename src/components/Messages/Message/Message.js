import React, { useEffect } from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";
import { Alert } from "react-bootstrap";
import { Avatar, Grow, Slide, IconButton, Divider } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
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
			<Slide in="true" direction="right">
				<div className="messageBox2 backgroundBlue">
					<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
					<div className="time1">
						<p style={{ float: "right" }}>{time}</p>
					</div>
				</div>
			</Slide>
		</div>
	) : user === "admin" || user === "Admin" ? (
		<div className="text-center w-50 mx-auto">
			<Alert
				variant={user === "admin" ? "info" : "danger"}
				style={{ fontSize: "0.9em" }}
				className="mt-2"
			>
				{ReactEmoji.emojify(text)}
			</Alert>
		</div>
	) : (
		<Grow in="true">
			<div className="messageContainer justifyStart">
				<div className="messageBox1 backgroundLight">
					<h6
						style={{
							color: "rebeccapurple",
							textTransform: "capitalize",
							fontWeight: "bold",
						}}
					>
						{user}
					</h6>
					<p className="messageText colorDark mb-2">
						{ReactEmoji.emojify(text)}
					</p>
					<Divider />
					<div className="reaction__container pt-1 ml-n1">
						<span>
							<IconButton color="primary" className="p-2 m-0">
								<ThumbUpAltIcon color="primary" />
							</IconButton>
							<IconButton color="secondary" className="p-2 m-0">
								<FavoriteBorderIcon color="secondary" />
							</IconButton>
							<IconButton color="default" className="p-2 m-0">
								<ReplayRoundedIcon color="default" />
							</IconButton>
						</span>
						<span className="time2">{time}</span>
					</div>
				</div>
				<p className="sentText pl-10 mt-3">
					<OverlayTrigger
						placement="right"
						overlay={
							<Tooltip id="tooltip-right">
								<strong style={{ textTransform: "capitalize" }}>{user}</strong>
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
		</Grow>
	);
};

export default Message;
