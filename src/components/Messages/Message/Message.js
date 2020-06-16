import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";
import { Alert } from "react-bootstrap";

const Message = ({ message: { text, user }, name }) => {
	let isSentByCurrentUser = false;
	const trimmedName = name.trim().toLowerCase();
	const getDateTime = () => {
		const date = new Date();
		const time = date.toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
		return time;
	};

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10 mt-3">{trimmedName}</p>
			<div className="messageBox2 backgroundBlue">
				<p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
				<div className="time1">
					<p style={{ float: "right" }}>{getDateTime()}</p>
				</div>
			</div>
		</div>
	) : user === "admin" || user === "Admin" ? (
		<div className="text-center w-50 mx-auto">
			<Alert variant={user === "admin" ? "primary" : "danger"} className="p-n2">
				{ReactEmoji.emojify(text)}
			</Alert>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox1 backgroundLight">
				<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
				<div className="time">
					<p style={{ float: "right" }}>{getDateTime()}</p>
				</div>
			</div>
			<p className="sentText pl-10 mt-3">{user}</p>
		</div>
	);
};

export default Message;
