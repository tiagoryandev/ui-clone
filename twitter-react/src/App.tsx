import React from "react";
import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
		fontFamily: "Roboto"
	}
});

const App: React.FC = () => {
	globalStyles();

	return (
		<h1>Hello, World!</h1>
	);
};

export default App;