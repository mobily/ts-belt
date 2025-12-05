import clsx from "clsx";
import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./Button.module.css";

const Button = (props) => {
	const { children, to, variant } = props;

	return (
		<Link
			className={clsx(
				"button",
				styles.button,
				variant === "outline" ? styles.buttonOutline : styles.buttonFull,
			)}
			to={useBaseUrl(to)}
		>
			{children}
		</Link>
	);
};

export default Button;
