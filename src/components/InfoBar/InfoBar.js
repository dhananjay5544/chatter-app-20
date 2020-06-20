import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import onlineIcon from "../../icons/team.svg";
import closeIcon from "../../icons/close.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

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
				<button className="btn btn-light" onClick={handleModal}>
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
						Just Leave
					</a>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default InfoBar;
