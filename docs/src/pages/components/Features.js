import React from "react";

import styles from "./Features.module.css";

const Features = (props) => {
	const { children } = props;
	const length = React.Children.count(children);

	return (
		<div className={styles.features}>
			{React.Children.map(children, (child, index) => {
				return (
					<span>
						{child}
						{index === length - 1 ? null : (
							<span className={styles.dot}>·</span>
						)}
					</span>
				);
			})}
		</div>
	);
};

export default Features;
