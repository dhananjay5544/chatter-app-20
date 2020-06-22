import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmileWink } from "@fortawesome/free-solid-svg-icons";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import "./Input.css";

function Input({ setMessage, sendMessage, message }) {
	const [emojiPickerState, SetEmojiPicker] = useState(false);

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
			<form className="form pl-3 pr-3 pb-1 pt-1">
				<textarea
					className="input"
					type="text"
					placeholder="Type a message..."
					value={message}
					onChange={({ target: { value } }) => setMessage(value)}
					onKeyPress={(event) =>
						event.key === "Enter" ? sendMessage(event) : null
					}
				/>

				<FontAwesomeIcon
					icon={faSmileWink}
					style={{ cursor: "pointer" }}
					className="emoji"
					size="2x"
					onClick={triggerPicker}
				/>
				<button
					className="sendButton btn btn-primary"
					onClick={(e) => {
						sendMessage(e);
						SetEmojiPicker(!emojiPickerState);
					}}
				>
					Send{" "}
					<FontAwesomeIcon icon={faPaperPlane} style={{ color: "black" }} />
				</button>
			</form>
		</div>
	);
}

export default Input;
