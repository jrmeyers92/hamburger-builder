import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return (
		<Aux>
			<div>toolbar, sideDrawer, Backdrop</div>
			<main className={classes.content}>{props.children}</main>
		</Aux>
	);
};

export default Layout;
