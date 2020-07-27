import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	//const [profile, setProfile] = useState("");
	const [users, setUsers] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	//const ENDPOINT = "https://chatter-app-20.herokuapp.com/";
	const ENDPOINT = "localhost:5000";

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);

		socket = io(ENDPOINT);

		setRoom(room);
		setName(name);
		const avatars = ["black", "#0044ff", "#cf0091", "#f1b900", "#a500f1"];
		var profile = avatars[Math.floor(Math.random() * avatars.length)];

		socket.emit("join", { name, room, profile }, (error) => {
			if (error) {
				alert(error);
			}
		});
	}, [ENDPOINT, location.search]);

	//getting masssages
	useEffect(() => {
		socket.on("message", (message) => {
			setMessages((messages) => [...messages, message]);
		});

		socket.on("roomData", ({ users }) => {
			setUsers(users);
		});
	}, []);

	//function for sending messages
	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	return (
		<div className="outerContainer">
			<TextContainer users={users} />
			<div className="container1">
				<InfoBar room={room} users={users} />
				<Messages messages={messages} name={name} />
				<Input
					users={users}
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
