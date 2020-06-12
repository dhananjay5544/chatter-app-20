import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import logo from "../../icons/logo1.svg";
import logo1 from "../../icons/chat.svg";
import logo2 from "../../icons/banner2.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");

	return (
		<div>
			<div className="container-fluid mt-5">
				<div className="logocontainer">
					<img src={logo} className="logo" alt="chatter" />
					<h1 className="app-name">Chatter</h1>
				</div>
				<h2 className="sub-info text-center">
					All new revolutionary chatting app
				</h2>
			</div>
			<div className="joinOuterContainer">
				<img
					src={logo2}
					alt="sdsd"
					style={{ width: "45%", transform: "translateX(-100px)" }}
				/>
				<div className="joinInnerContainer">
					<h1 className="heading">Join</h1>
					<div>
						<label className="label">Username</label>
						<input
							placeholder="Enter your name here"
							className="form-control"
							type="text"
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div>
						<label className="mt-2 label">Room name</label>
						<input
							placeholder="Enter the room name want to join"
							className="form-control"
							type="text"
							onChange={(event) => setRoom(event.target.value)}
						/>
					</div>
					<Link
						onClick={(e) => (!name || !room ? e.preventDefault() : null)}
						to={`/chat?name=${name}&room=${room}`}
					>
						<button
							className="button btn btn-dark btn-block mt-20"
							type="submit"
						>
							Sign In
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
