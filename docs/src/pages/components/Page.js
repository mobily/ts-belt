import Layout from "@theme/Layout";
import React from "react";

import styles from "./Page.module.css";

const Page = (props) => {
	const { children } = props;

	return (
		<Layout>
			<div className={styles.wrapper}>{children}</div>
		</Layout>
	);
};

export default Page;
