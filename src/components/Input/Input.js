import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
import {
	IconButton,
	TextField,
	List,
	ListItemAvatar,
	ListItemText,
	ListItem,
	Avatar,
} from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import "./Input.css";

function Input({ setMessage, sendMessage, message, users }) {
	const [emojiPickerState, SetEmojiPicker] = useState(false);
	const [suggestionState, SetSuggestionState] = useState(false);

	let emojiPicker;
	if (emojiPickerState) {
		emojiPicker = (
			<div className="emoji-div">
				<Picker
					title="Pick your emoji"
					emoji="point_up"
					showPreview="false"
					set="apple"
					style={{ width: "60vw", margin: "0px 20px 0px 20px" }}
					onSelect={(emoji) => setMessage(message + emoji.native)}
				/>
			</div>
		);
	}

	function triggerPicker(event) {
		event.preventDefault();
		SetEmojiPicker(!emojiPickerState);
	}
	return (
		<div>
			{emojiPicker}
			{suggestionState && (
				<List dense className="w-25 ml-2 mb-0 pb-0">
					{users &&
						users.map(({ name, profile, timeStamp: { time } }) => (
							<ListItem
								button
								key={name}
								className="p-2"
								style={{ borderRadius: "5px" }}
								onClick={(key) => {
									setMessage(message + key);
									SetSuggestionState(false);
								}}
							>
								<ListItemAvatar>
									<Avatar
										style={{
											background: profile,
											width: "30px",
											height: "30px",
										}}
									>
										{name.slice(0, 1).toUpperCase()}
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									style={{ textTransform: "capitalize" }}
									primary={name}
								/>
							</ListItem>
						))}
				</List>
			)}
			<form className="form pl-3 pr-3 pb-1 pt-1">
				<TextField
					type="text"
					className="input"
					color="primary"
					variant="outlined"
					placeholder="Type a message..."
					size="small"
					value={message}
					onChange={({ target: { value } }) => {
						setMessage(value);
						if (value.endsWith("@")) {
							console.log("suggestions should be triggered");
							SetSuggestionState(true);
						} else {
							SetSuggestionState(false);
						}
					}}
					onKeyPress={(event) =>
						event.key === "Enter" ? sendMessage(event) : null
					}
				/>

				<FontAwesomeIcon
					icon={faSmileWink}
					style={
						emojiPickerState
							? { cursor: "pointer", color: "#a8005d" }
							: { cursor: "pointer", color: "black" }
					}
					className="emoji ml-3 mr-1"
					size="lg"
					onClick={triggerPicker}
				/>
				<IconButton
					color="primary"
					size="medium"
					onClick={(e) => {
						sendMessage(e);
						SetEmojiPicker(false);
					}}
				>
					<SendRounded color="primary" />
				</IconButton>
			</form>
		</div>
	);
}

export default Input;
