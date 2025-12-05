import React from "react";

import styles from "./Row.module.css";

const Row = (props) => {
	const {
		children,
		alignX = "flex-start",
		marginBottom = 0,
		padding = 0,
		paddingX,
		paddingY,
	} = props;
	return (
		<div
			className={styles.row}
			style={{
				justifyContent: alignX,
				marginBottom: `${marginBottom}rem`,
				padding: `${paddingY || padding}rem ${paddingX || padding}rem`,
			}}
		>
			{children}
		</div>
	);
};

export default Row;
