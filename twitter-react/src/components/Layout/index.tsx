import React from "react";

import * as C from "./styles";
import Profile from "../Profile";

const Layout: React.FC = () => {
	return (
		<C.Container>
			<Profile />
		</C.Container>
	);
};

export default Layout;