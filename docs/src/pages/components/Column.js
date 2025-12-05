import React from "react";

import { useColumns } from "./Columns";

import styles from "./Column.module.css";

const Column = (props) => {
	const { children } = props;
	const { space } = useColumns();

	return (
		<div
			className={styles.column}
			style={{
				marginLeft: `${space}rem`,
			}}
		>
			{children}
		</div>
	);
};

export default Column;
