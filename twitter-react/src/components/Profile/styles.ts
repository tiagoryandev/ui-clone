import { styled } from "@stitches/react";
import { BiArrowBack } from "react-icons/bi";

export const Container = styled("div", {
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