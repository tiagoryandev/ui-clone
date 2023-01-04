import { styled } from "@stitches/react";
import { BiArrowBack } from "react-icons/bi";

export const Container = styled("div", {
	position: "relative",
	border: "1px solid rgb(239, 243, 244)",
	width: "100%",
	height: "100%"
});

export const ExitIcon = styled(BiArrowBack, {
	width: "30px",
	height: "30px",
	padding: "6px",
	background: "rgba(0, 0, 0, 0)",
	borderRadius: "100%",
	cursor: "pointer",
	transition: "background 0.5s",
	"&:hover": {
		backgroundColor: "rgba(15, 20, 25, 0.1)"
	}
});

export const Header = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "20px",
	width: "100%",
	height: "50px",
	padding: "10px",
	borderBottom: "1px solid rgb(239, 243, 244)",
	"& > div": {
		"& > h1": {
			marginBottom: "4px",
			fontSize: "18px",
			color: "#000000"
		},
		"& > p": {
			fontSize: "12px",
			color: "#808080"
		}
	}
});

export const Background = styled("div", {
	width: "100%",
	height: "200px",
	backgroundImage: "url(https://pbs.twimg.com/profile_banners/1554632761440337921/1672065321/1500x500)",
	backgroundSize: "cover",
	backgroundPosition: "center"
});

export const Body = styled("div", {
	width: "100%",
	position: "relative",
	padding: "20px",
	"& > .avatar": {
		position: "absolute",
		top: "-60px",
		left: "20px",
		width: "130px",
		height: "130px",
		backgroundImage: "url(https://pbs.twimg.com/profile_images/1607384568583127041/LujLyAOO_400x400.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",
		borderRadius: "50%",
		border: "4px solid #ffffff",
		cursor: "pointer"
	},
	"& > .perfil-edit": {
		display: "block",
		margin: "0 0 0 auto",
		padding: "10px 16px",
		backgroundColor: "#ffffff",
		border: "1px solid rgb(207, 217, 222)",
		borderRadius: "20px",
		fontSize: "15px",
		fontWeight: "bold",
		userSelect: "none",
		cursor: "pointer",
		transition: "background 0.5s",
		"&:hover": {
			backgroundColor: "rgba(15, 20, 25, 0.1)"
		}
	}
});