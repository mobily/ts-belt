import React from "react";
import * as Belt from "../../../..";

const ReactLiveScope = {
	React,
	...Belt,
	...React,
};

export default ReactLiveScope;
