import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./Card.module.css";

const Card = (props) => {
	const { children, title, to } = props;
	const link = useBaseUrl(to);

	return (
		<Link to={link} className={styles.card}>
			<div className={styles.title}>{title}</div>
			<div className={styles.body}>{children}</div>
		</Link>
	);
};

export default Card;
