import React from "react";

import styles from "./Feature.module.css";

const Feature = (props) => {
	const { children } = props;

	return <span className={styles.feature}>{children}</span>;
};

export default Feature;
