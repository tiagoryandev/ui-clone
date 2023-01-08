import { styled } from "@stitches/react";

export const Container = styled("div", {
	display: "flex",
	gap: "15px",
	padding: "12px 16px",
	borderBottom: "1px solid rgb(239, 243, 244)",
	"& > .avatar": {
		flexShrink: 0,
		width: "48px",
		height: "48px",
		borderRadius: "50%",
		backgroundSize: "cover",
		backgroundPosition: "center"
	},
	"& > .content": {
		width: "100%"
	},
	"& > .content .user": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%"
	},
	"& > .content .user > h1": {
		fontSize: "15px",
		color: "#0f1419",
		"&:hover": {
			textDecoration: "underline"
		},
		"& > span": {
			margin: "0px 5px",
			fontSize: "15px",
			color: "#536471",
			fontWeight: "normal"
		}
	},
	"& > .content > .user > svg": {
		width: "28px",
		height: "28px",
		borderRadius: "50%",
		padding: "6px",
		cursor: "pointer",
		transition: "background-color 0.5s",
		"&:hover": {
			backgroundColor: "rgba(15, 20, 25, 0.1)"
		}
	},
	"& > .content > p": {
		marginTop: "5px",
		fontSize: "15px",
		color: "#0f1419"
	},
	"& > .content > .status": {
		display: "flex",
		marginTop: "10px",
		justifyContent: "space-between",
		gap: "10px 20px",
		"& > p": {
			display: "flex",
			alignItems: "center",
			gap: "10px",
			fontSize: "13px",
			color: "0f1419",
			userSelect: "none",
			cursor: "pointer",
			"& > svg": {
				width: "25px",
				height: "25px",
				padding: "5px",
				borderRadius: "50%",
				transition: "background-color 0.5s",
				"&:hover": {
					backgroundColor: "rgba(15, 20, 25, 0.1)"
				}
			}
		}
	}
});