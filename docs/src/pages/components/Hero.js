import clsx from "clsx";
import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Button from "./Button";
import Column from "./Column";
import Columns from "./Columns";

import styles from "./Hero.module.css";

const Hero = (props) => {
	const { api, logo } = props;

	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

	return (
		<header className={styles.hero}>
			<div className={styles.container}>
				<img
					className={styles.logo}
					src={logo}
					alt={`${siteConfig.title} - ${siteConfig.tagline}`}
				/>
				<h1 className={styles.title}>{siteConfig.title}</h1>
			</div>
			<p className={styles.summary}>{siteConfig.tagline}</p>
			<div className={styles.buttons}>
				<Columns space={1}>
					<Column>
						<Button to="docs" variant="outline">
							Getting started
						</Button>
					</Column>
					<Column>
						<Button to={api}>Go to API</Button>
					</Column>
				</Columns>
			</div>
		</header>
	);
};

export default Hero;
