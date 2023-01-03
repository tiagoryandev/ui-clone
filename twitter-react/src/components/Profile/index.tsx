import React from "react";

import * as C from "./styles";

const Profile: React.FC = () => {
	return (
		<C.Container>
			<C.Header>
				<C.ExitIcon />
				<div>
					<h1>Tiago Ryan</h1>
					<p>{Math.floor(Math.random() * 100)} Tweets</p>
				</div>
			</C.Header>
		</C.Container>
	);
};

export default Profile;