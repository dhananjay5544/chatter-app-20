import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

import "./TextContainer.css";
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
					<img
						src={Logo}
						className="logo"
						alt="chatter"
						style={{ width: "6%" }}
					/>
					<Badge badgeContent={users.length} color="secondary"></Badge>
				</div>
				<ul class="list-group list-group-flush">
					{users.map(({ name }) => (
						<li
							class="list-group-item"
							style={{
								color: "black",
								fontSize: "20px",
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
