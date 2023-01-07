import React from "react";
import { HiOutlineBriefcase, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

import * as C from "./styles";
import Account from "../Account";

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
				<div className="status">
					<p><span>{Math.floor(Math.random() * 100)}</span> Seguindo</p>
					<p><span>{Math.floor(Math.random() * 100)}</span> Seguidores</p>
				</div>
			</C.Body>
			<C.NavigationTabs>
				<div className="tab select">Tweets</div>
				<div className="tab">Tweets e respostas</div>
				<div className="tab">Mídia</div>
				<div className="tab">Curtidas</div>
			</C.NavigationTabs>
			<C.SuggestionFollow>
				<h1>Quem seguir</h1>
				<Account
					avatarURL="http://github.com/diego3g.png"
					fullName="Diego Fernandes"
					userName="@dieegosf"
					biography="Não fico perto de Dev Angular."
				/>
				<Account
					avatarURL="http://github.com/erickwendel.png"
					fullName="Erick Wendel"
					userName="@erickwendel_"
					biography="Vamos usar JavaScript no BackEnd?"
				/>
				<Account
					avatarURL="http://github.com/DevMedia.png"
					fullName="DevMedia"
					userName="@DevMedia"
					biography="Vamos escravizar os Estagiários"
				/>
			</C.SuggestionFollow>
		</C.Container>
	);
};

export default Profile;