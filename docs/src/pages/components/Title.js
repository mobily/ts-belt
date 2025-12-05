import React from "react";

import styles from "./Title.module.css";

const Title = (props) => {
	const { children } = props;
	return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
