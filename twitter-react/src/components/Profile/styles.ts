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
	position: "fixed",
	top: 0,
	left: 0,
	display: "flex",
	alignItems: "center",
	gap: "20px",
	width: "100%",
	height: "50px",
	padding: "10px",
	borderBottom: "1px solid rgb(239, 243, 244)",
	backgroundColor: "rgba(255, 255, 255, 0.85)",
	backdropFilter: "blur(12px)",
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
	marginTop: "50px",
	backgroundImage: "url(https://pbs.twimg.com/profile_banners/1554632761440337921/1672065321/1500x500)",
	backgroundSize: "cover",
	backgroundPosition: "center"
});