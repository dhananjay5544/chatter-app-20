import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { withStyles } from "@material-ui/core/styles";

import "./TextContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../icons/logo1.svg";

//time implementation module import
const moment = require("moment");

//online status stylling
const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "$ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}))(Badge);

//main users list component
function TextContainer({ users }) {
	const [isOpen, setIsOpen] = useState(false);
	const [userD, setUserD] = useState({});
	const awatarColor = [
		"rgb(255, 20, 137)",
		"rgb(153, 9, 141)",
		"rgb(0, 0, 0)",
		"rgb(252, 142, 16)",
		"rgb(33, 17, 255)",
	];
	const openModal = (name, time, date) => {
		setIsOpen(true);
		var timeSpan = moment(date).fromNow();
		var user = {
			name: name,
			joinTime: time,
			timeSpan: timeSpan,
		};
		setUserD(user);
		console.log();
	};
	const closeModal = () => {
		setIsOpen(false);
	};
	return (
		<div className="textContainer">
			{users ? (
				<div className="card" style={{ minHeight: "95vh" }}>
					<div
						className="card-header"
						style={{
							color: "black",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img
								src={Logo}
								className="logo mr-1"
								alt="chatter"
								style={{ width: "15%" }}
							/>
							<h5 className="mt-2 ml-1">Chatter</h5>
						</div>

						<OverlayTrigger
							placement="left"
							overlay={
								<Tooltip id="tooltip-left" className="mr-2">
									Total participants <strong>{users.length}</strong>
								</Tooltip>
							}
						>
							<Badge
								badgeContent={users.length}
								color="secondary"
								style={{ cursor: "pointer" }}
							></Badge>
						</OverlayTrigger>
					</div>
					<ul className="list-group list-group-flush members">
						{users.map(({ name, timeStamp: { time, date } }) => (
							<li
								className="list-group-item user"
								style={{
									color: "black",
									fontSize: "15px",
									display: "flex",
									alignItems: "center",
									background: "aliceblue",
									justifyContent: "space-between",
									cursor: "pointer",
								}}
								key={name}
								onClick={() => openModal(name, time, date)}
							>
								<div
									className="d-flex"
									style={{ alignItems: "center", textTransform: "capitalize" }}
								>
									<Avatar
										style={{
											background:
												awatarColor[
													Math.floor(Math.random() * awatarColor.length)
												],
										}}
									>
										{name.slice(0, 1).toUpperCase()}
									</Avatar>
									&nbsp;&nbsp;
									{name}
								</div>
								<p className="mt-3 user-info">joined at {time}</p>
							</li>
						))}
					</ul>
				</div>
			) : (
				<div
					className="card"
					style={{
						minHeight: "95vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CircularProgress />
				</div>
			)}

			{/* user info */}
			<Modal
				show={isOpen}
				onHide={closeModal}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton style={{ background: "aliceblue" }}>
					User Info
				</Modal.Header>
				<Modal.Body className="text-center w-75 mx-auto">
					<StyledBadge
						overlap="circle"
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						variant="dot"
					>
						<Avatar
							style={{
								background: "blue",
								margin: "auto",
								width: 60,
								height: 60,
								fontSize: "30px",
							}}
						>
							{userD.name && userD.name.slice(0, 1).toUpperCase()}
						</Avatar>
					</StyledBadge>
					<Modal.Title
						id="contained-modal-title-vcenter"
						style={{ textTransform: "capitalize" }}
					>
						{userD.name}
					</Modal.Title>
					<p style={{ fontSize: "12px" }}>Online</p>
					<p>Joined at {userD.joinTime}</p>
					<p>
						Connection time{" "}
						<span style={{ color: "blue" }}>{userD.timeSpan}</span>{" "}
					</p>
				</Modal.Body>
				<Modal.Footer
					style={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<button
						className="w-25 mx-auto btn btn-info btn-sm btn-block"
						onClick={closeModal}
					>
						Back
					</button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default TextContainer;
