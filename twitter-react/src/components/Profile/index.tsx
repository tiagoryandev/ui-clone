import React from "react";
import { HiOutlineBriefcase, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

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
				<div className="user-info">
					<h1>Tiago Ryan</h1>
					<h2>@tiagoryandev</h2>
					<p>🚀 TypeScript • ReactJS • NodeJS<br/>💻 FullStack Developer<br/>📨 Email: tiagoryandev@gmail.com<br/>💬 Discord: TiaGoiNsaNy#9903</p>
				</div>
				<C.ListInfos>
					<li><HiOutlineBriefcase /> Software developer/Programmer/Software engineer</li>
					<li><HiOutlineLocationMarker /> Prainha/PA - Brasil</li>
					<li><AiOutlineLink /> <a href="https://wwww.linkedin.com/in/tiagoryan">linkedin.com/in/tiagoryan</a></li>
					<li><IoCalendarOutline /> Ingressou em agosto de 2022</li>
				</C.ListInfos>
			</C.Body>
		</C.Container>
	);
};

export default Profile;