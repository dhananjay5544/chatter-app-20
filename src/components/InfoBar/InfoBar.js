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
import {
	List,
	ListItemAvatar,
	ListItemText,
	ListItem,
	Avatar,
} from "@material-ui/core";

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
		<Popover id="popover-basic" className="ml-2 w-100">
			<Popover.Title as="h3" className="roomInfo_title pt-3 pb-3 pl-4">
				<img className="onlineIcon" src={onlineIcon} alt="online icon" />
				{room}
			</Popover.Title>
			<Popover.Content className="m-0 p-0">
				<List dense className="m-0 pb-2">
					<ListItem button className="pr-2 pt-2 pb-2 pl-3">
						<ListItemAvatar>
							<Avatar style={{ color: "#fff", background: "#0044ff" }}>
								<FontAwesomeIcon icon={faCrown} />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							style={{ textTransform: "capitalize" }}
							primary="Admin"
							secondary={users && users[0].name}
						/>
					</ListItem>
					<ListItem button className="pr-2 pt-2 pb-2 pl-3">
						<ListItemAvatar>
							<Avatar style={{ color: "#fff", background: "#cf0091" }}>
								<FontAwesomeIcon icon={faClock} />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							style={{ textTransform: "capitalize" }}
							primary="Room created at"
							secondary={users && users[0].timeStamp.time}
						/>
					</ListItem>
					<ListItem button className="pr-2 pt-2 pb-2 pl-3">
						<ListItemAvatar>
							<Avatar style={{ color: "#fff", background: "#a500f1" }}>
								<FontAwesomeIcon icon={faUsers} />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							style={{ textTransform: "capitalize" }}
							primary="Total participants"
							secondary={users && users.length}
						/>
					</ListItem>
				</List>
			</Popover.Content>
		</Popover>
	);
	return (
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img className="onlineIcon" src={onlineIcon} alt="online icon" />
				<div className="group-info">
					<h5 className="mt-3 room-name">{room}</h5>
					<p className="mt-n2 room-info">
						room created at {users && users[0].timeStamp.time} by{" "}
						{users && users[0].name}
					</p>
				</div>
			</div>
			<div className="rightInnerContainer">
				<OverlayTrigger trigger="click" placement="left" overlay={popover}>
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
