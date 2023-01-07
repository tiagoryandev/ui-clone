import React from "react";

import * as C from "./styles";

type Props = {
  avatarURL: string;
  fullName: string;
  userName: string;
  biography?: string;
};

const Account: React.FC<Props> = ({ avatarURL, fullName, userName, biography }) => {
	return (
		<C.Container>
			<div className="avatar" style={{
				backgroundImage: `url(${avatarURL})`
			}}/>
			<div className="body">
				<div className="user-data">
					<div className="content">
						<h1>{fullName}</h1>
						<p>{userName}</p>
					</div>
					<button className="btn-follow">Seguir</button>
				</div>
				{biography && <div className="biography">{biography}</div>}
			</div>
		</C.Container>
	);
};

export default Account;