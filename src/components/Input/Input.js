import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
	<form className="form">
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
		<button className="sendButton" onClick={(e) => sendMessage(e)}>
			Send <FontAwesomeIcon icon={faPaperPlane} style={{ color: "black" }} />
		</button>
	</form>
);

export default Input;
