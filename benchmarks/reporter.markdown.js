// https://github.com/robertklep/node-benchr/blob/master/lib/reporters/console.js

const Table = require("easy-table");
const path = require("path");

module.exports = (runner) => {
	runner
		.on("run.start", (file) => {})
		.on("run.complete", (file) => {})
		.on("file.start", (file) => {
			const basename = path.basename(file, ".js");
			process.stdout.write(`### ${basename}\n\n`);
		})
		.on("file.complete", (file) => {})
		.on("suite.start", (suite) => {
			console.log(`_${suite.name.trim()}_`);
		})
		.on("suite.cycle", (suite) => {})
		.on("error", (err) => {
			console.error(err);
		})
		.on("suite.complete", (suite) => {
			const fastest = suite.filter("fastest");
			const successful = suite.filter("successful");
			const table = new Table();

			const fractions = [];
			suite.forEach((bench) => {
				if (bench.aborted) {
					table.cell("status", "×");
				} else {
					table.cell("status", "✔");
				}
				table.cell("name", bench.name);
				if (bench.aborted) {
					table.cell("hz", "ABORTED");
				} else {
					table.cell(
						"hz",
						bench.hz
							.toFixed(2)
							.toString()
							.replace(/\B(?=(\d{3})+\b)/g, ","),
						Table.padLeft,
					);
					table.cell("label", "ops/sec");
					table.cell("rme", "±" + bench.stats.rme.toFixed(2) + "%");
					table.cell("runs", "(" + bench.stats.sample.length + " runs)");

					// Show percentual difference between this benchmark and the fastest.
					if (fastest.length !== successful.length) {
						let diff = "fastest";
						const fraction = bench.hz / fastest[0].hz;
						if (bench !== fastest[0]) {
							diff = "-" + ((1.0 - fraction) * 100).toFixed(2) + "%";
						}
						table.cell("diff", diff);
						fractions.push(diff === "fastest" ? 1 : fraction);
					}
				}
				table.newRow();
			});
			const tableLines = table.print().split("\n");
			const output = [];
			for (let i = 0; i < tableLines.length; i++) {
				output.push(tableLines[i]);
				output.push(
					"".padStart(Math.floor(tableLines[0].length * fractions[i]), "█"),
				);
				output.push("\n");
			}
			console.log("\n```bash\n" + output.join("\n").trim() + "\n```\n");
			if (successful.length > 1) {
				if (fastest.length === successful.length) {
					console.log("→ No discernible winner\n");
				} else {
					console.log("→ Fastest is **" + fastest.map("name") + "**\n");
				}
			}
		});
};
