import React, { useState } from "react";
import { Modal, Button, OverlayTrigger, Popover } from "react-bootstrap";
import onlineIcon from "../../icons/team.svg";
import closeIcon from "../../icons/close.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowCircleRight,
	faInfoCircle,
	faCrown,
	faClock,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "@material-ui/lab/Rating";

import "./InfoBar.css";

function InfoBar({ room, users }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleModal = () => {
		setIsOpen(!isOpen);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("formsubmitted");
	};
	const popover = (
		<Popover id="popover-basic" className="mt-2">
			<Popover.Title as="h3">{room}</Popover.Title>
			<Popover.Content>
				<p>
					<FontAwesomeIcon icon={faCrown} /> <strong>Admin </strong>
					{users && users[0].name}
				</p>
				<p>
					<FontAwesomeIcon icon={faClock} className="mr-1" />{" "}
					<strong>Room created at </strong>
					{users && users[0].timeStamp.time}
				</p>
				<p>
					<FontAwesomeIcon icon={faUsers} />{" "}
					<strong>Total participants </strong>
					{users && users.length}
				</p>
			</Popover.Content>
		</Popover>
	);
	return (
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img className="onlineIcon" src={onlineIcon} alt="online icon" />
				<div className="group-info">
					<h4 className="mt-3 room-name">{room}</h4>
					<p className="mt-n2 room-info">
						room created at {users && users[0].timeStamp.time} by{" "}
						{users && users[0].name}
					</p>
				</div>
			</div>
			<div className="rightInnerContainer">
				<OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
					<FontAwesomeIcon
						icon={faInfoCircle}
						style={{ color: "#fff" }}
						className="mr-3 info-icon"
					/>
				</OverlayTrigger>
				<button className="btn btn-light btn-sm" onClick={handleModal}>
					<img src={closeIcon} alt="close icon" className="close-icon" />
					Leave room
				</button>
			</div>
			<Modal
				show={isOpen}
				onHide={handleModal}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Just before leaving Chatter
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="text-center w-75 mx-auto">
					<h4 className="mt-1">Rate us</h4>
					<Rating name="half-rating" defaultValue={5} size="large" />
					<p>Get all your conversations on mail</p>
					<form className="d-flex" onSubmit={handleSubmit}>
						<input
							className="form-control"
							type="email"
							placeholder="Enter your email"
						/>
						<Button variant="warning btn-sm" type="submit">
							<FontAwesomeIcon icon={faArrowCircleRight} />
						</Button>
					</form>
				</Modal.Body>
				<Modal.Footer
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<h5>OR</h5>
					<a
						href="/"
						className="w-50 mx-auto btn btn-info btn-sm btn-block"
						onClick={handleModal}
					>
						No Thanks
					</a>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default InfoBar;
