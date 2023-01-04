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
			<C.Background />
			<C.Body>
				<div className="avatar" />
				<button className="perfil-edit">Editar perfil</button>
			</C.Body>
		</C.Container>
	);
};

export default Profile;