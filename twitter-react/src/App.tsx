import React from "react";
import { globalCss } from "@stitches/react";

import Layout from "./components/Layout";

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
		<Layout />
	);
};

export default App;