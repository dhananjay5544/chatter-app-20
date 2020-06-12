import React, { useState } from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";

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
