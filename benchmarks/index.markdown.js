const fs = require("fs");
const path = require("path");
const Benchr = require("benchr");

const files = process.argv.slice(2);

const runner = new Benchr(
	{
		reporter: "./reporter.markdown.js",
	},
	files,
);

runner.run();
