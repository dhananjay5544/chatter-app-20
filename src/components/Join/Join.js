import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Join.css";
import logo from "../../icons/logo1.svg";
import logo2 from "../../icons/banner2.svg";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function SignIn() {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [pageload, setPageLoad] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setPageLoad(false);
		}, 1000);
	}, []);

	return pageload ? (
		<div className="loader">
			<div className="img-div">
				<img src={logo} alt="chatter" />
				<h1 className="app-name1">Chatter</h1>
			</div>
			<LinearProgress color="secondary" className="loader-line" />
		</div>
	) : (
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
				<img src={logo2} alt="sdsd" className="banner-img" />
				<div className="joinInnerContainer">
					<h1 className="heading">Join here</h1>
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
			<div
				className="text-center pt-3 pb-1 mt-5"
				style={{
					fontFamily: "'Montserrat', sans-serif",
					backgroundColor: "aliceblue",
				}}
			>
				<h4>Fork me on github</h4>
				<h6>All rights are reserved</h6>
			</div>
		</div>
	);
}
