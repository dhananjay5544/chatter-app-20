import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";

import "./TextContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../icons/logo1.svg";

const TextContainer = ({ users }) => (
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
						<h5 className="mt-2">Chatter</h5>
					</div>

					<OverlayTrigger
						placement="left"
						overlay={
							<Tooltip id="tooltip-left" className="mr-2">
								Total Participants <strong>{users.length}</strong>
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
				<ul class="list-group list-group-flush">
					{users.map(({ name }) => (
						<li
							class="list-group-item"
							style={{
								color: "black",
								fontSize: "15px",
								display: "flex",
								alignItems: "center",
							}}
						>
							<Avatar>{name.slice(0, 1).toUpperCase()}</Avatar>&nbsp;&nbsp;
							{name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}
						</li>
					))}
				</ul>
			</div>
		) : null}
	</div>
);

export default TextContainer;
