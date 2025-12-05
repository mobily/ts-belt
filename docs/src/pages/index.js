import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import Button from "./components/Button";
import Card from "./components/Card";
import Column from "./components/Column";
import Columns from "./components/Columns";
import Feature from "./components/Feature";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Row from "./components/Row";
import Title from "./components/Title";

const Home = () => {
	React.useLayoutEffect(() => {
		localStorage.setItem("theme", "light");
		document.querySelector(".navbar__brand").style = "display: none;";
	}, []);

	return (
		<Page>
			<Row alignX="center" marginBottom={3}>
				<Hero logo="img/hero-logo.png" api="api/array" />
			</Row>
			<Row alignX="center" marginBottom={3}>
				<Features>
					<Feature>
						👀 provides more readable code, due to the data-first approach
					</Feature>
					<Feature>✨ supports TypeScript and Flow</Feature>
					<Feature isDotVisible={false}>
						🛡 helps you write safer code with{" "}
						<Link to={useBaseUrl("api/option")}>Option</Link> and{" "}
						<Link to={useBaseUrl("api/result")}>Result</Link> data types
					</Feature>
					<Feature>
						🎯 all functions return immutable data (no side-effects)
					</Feature>
					<Feature>🌲 tree-shakeable</Feature>
				</Features>
			</Row>
			<Row marginBottom={3}>
				<Row marginBottom={2} alignX="center">
					<Title>Modules</Title>
				</Row>
				<Row paddingX={1}>
					<Columns space={1} marginBottom={1}>
						<Column>
							<Card title="Array" to="api/array">
								Utility functions for <code>Array</code>.
							</Card>
						</Column>
						<Column>
							<Card title="Boolean" to="api/boolean">
								Utility functions for <code>Boolean</code>.
							</Card>
						</Column>
						<Column>
							<Card title="Function" to="api/function">
								Other useful utility functions (such as <code>debounce</code>,{" "}
								<code>throttle</code> and more).
							</Card>
						</Column>
					</Columns>
				</Row>
				<Row paddingX={1}>
					<Columns space={1} marginBottom={1}>
						<Column>
							<Card title="Guards" to="api/guards">
								Various TypeScript guards.
							</Card>
						</Column>
						<Column>
							<Card title="Number" to="api/number">
								Utility functions for <code>Number</code>.
							</Card>
						</Column>
						<Column>
							<Card title="Object (Dict)" to="api/object">
								Utility functions for <code>Object</code>.
							</Card>
						</Column>
					</Columns>
				</Row>
				<Row paddingX={1}>
					<Columns space={1} marginBottom={1}>
						<Column>
							<Card title="Option" to="api/option">
								Functions for handling the <code>Option</code> data type that
								represents the existence and nonexistence of a value.
							</Card>
						</Column>
						<Column>
							<Card title="Result" to="api/result">
								Functions for describing the result of a certain operation
								without relying on exceptions.
							</Card>
						</Column>
						<Column>
							<Card title="String" to="api/string">
								Utility functions for <code>String</code>.
							</Card>
						</Column>
					</Columns>
				</Row>
			</Row>
			<Row paddingX={1}>
				<Row marginBottom={1} alignX="center">
					<Title>Benchmarks</Title>
				</Row>
				<Row marginBottom={2} alignX="center">
					<Features>
						<Feature>
							<strong>ts-belt</strong> is built with ReScript, which generates
							highly performant JavaScript code, comparing to the alternatives
							(such as <u>lodash</u>, <u>ram(b)da</u> and <u>remeda</u>),{" "}
							<strong>ts-belt</strong> is much faster ⚡
						</Feature>
					</Features>
				</Row>
				<Row alignX="center">
					<Button to="benchmarks/v3.12.0/macbook-pro-2021">See results</Button>
				</Row>
			</Row>
		</Page>
	);
};

export default Home;
