import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaRegComment } from "react-icons/fa";
import { HiArrowPath, HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowBarUp } from "react-icons/bs";

import * as C from "./styles";

type Props = {
  avatarURL: string;
  fullName: string;
  userName: string;
  content: string;
};

const Tweet: React.FC<Props> = ({ avatarURL, fullName, content, userName }) => {
	return (
		<C.Container>
			<div className="avatar" style={{
				backgroundImage: `url(${avatarURL})`
			}} />
			<div className="content">
				<div className="user">
					<h1 className="fullName">{fullName}<span>{userName} · 1 h</span></h1>
					<RxDotsHorizontal />
				</div>
				<p className="content">{content}</p>
				<div className="status">
					<p><HiOutlineArrowTrendingUp />{Math.floor(Math.random() * 1000)} mil</p>
					<p><FaRegComment /> {Math.floor(Math.random() * 1000)} mil</p>
					<p><HiArrowPath /> {Math.floor(Math.random() * 1000)} mil</p>
					<p><AiOutlineHeart /> {Math.floor(Math.random() * 1000)} mil</p>
					<p><BsArrowBarUp /></p>
				</div>
			</div>
		</C.Container>
	);
};

export default Tweet;