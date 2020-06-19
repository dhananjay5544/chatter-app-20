import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./TextContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../icons/logo1.svg";

function TextContainer({ users }) {
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
						{users.map(({ name, time }) => (
							<li
								className="list-group-item user"
								style={{
									color: "black",
									fontSize: "15px",
									display: "flex",
									alignItems: "center",
									background: "aliceblue",
									justifyContent: "space-between",
								}}
								key={name}
							>
								<div
									className="d-flex"
									style={{ alignItems: "center", textTransform: "capitalize" }}
								>
									<Avatar style={{ background: "blue" }}>
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
		</div>
	);
}

export default TextContainer;
