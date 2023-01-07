import { styled } from "@stitches/react";

export const Container = styled("div", {
	display: "flex",
	gap: "15px",
	padding: "12px 16px",
	transition: "background-color 0.3s",
	"&:hover": {
		backgroundColor: "rgba(0, 0, 0, 0.03)"
	},
	"& > .avatar": {
		flexShrink: 0,
		width: "48px",
		height: "48px",
		backgroundSize: "cover",
		borderRadius: "50%"
	},
	"& > .body": {
		width: "100%",
		"& > .user-data": {
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			"& > .content > h1": {
				fontSize: "15px",
				color: "#0f1419",
				"&:hover": {
					textDecoration: "underline"
				}
			},
			"& > .content > p": {
				margin: "2px 0px",
				fontSize: "15px",
				color: "#536471"
			},
			"& > .btn-follow": {
				border: "none",
				backgroundColor: "#000000",
				color: "#ffffff",
				fontSize: "14px",
				fontWeight: "bold",
				padding: "8px 18px",
				borderRadius: "16px",
				cursor: "pointer",
				userSelect: "none",
				transition: "background-color 0.5s",
				"&:hover": {
					backgroundColor: "#121212"
				}
			}
		},
		"& .biography": {
			fontSize: "15px",
			color: "#0f1419"
		}
	}
});