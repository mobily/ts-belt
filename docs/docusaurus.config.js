const root = require("../package.json");

module.exports = {
	title: "ts-belt",
	tagline: "Fast, modern, and practical utility library for FP in TypeScript.",
	url: "https://mobily.github.io",
	baseUrl: "/ts-belt/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "mobily",
	projectName: "ts-belt",
	scripts: [
		{
			src: "https://cdn.splitbee.io/sb.js",
			async: true,
		},
	],
	themeConfig: {
		image: "img/ts-belt-frame.png",
		prism: {
			theme: require("prism-react-renderer/themes/github"),
		},
		announcementBar: {
			content:
				'⭐️ If you like <strong>ts-belt</strong>, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/mobily/ts-belt">Github</a> and follow me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/__marcin_">Twitter</a>.',
			backgroundColor: "#fff",
			textColor: "#111",
			isCloseable: true,
		},
		navbar: {
			title: `v${root.version}`,
			logo: {
				alt: "TS Belt",
				src: "img/ts-belt-logo.png",
			},
			items: [
				{
					to: "docs",
					activeBasePath: "docs",
					label: "Docs",
					position: "left",
				},
				{
					to: "api/array",
					activeBasePath: "api",
					label: "API",
					position: "left",
				},
				{
					to: "benchmarks/introduction",
					activeBasePath: "benchmarks",
					label: "Benchmarks",
					position: "left",
				},
				{
					href: "https://www.buymeacoffee.com/utSC0k7",
					label: "Buy me a coffee ❤️",
					position: "right",
				},
				{
					href: "https://github.com/mobily/ts-belt",
					position: "right",
					className: "header-github-link",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Github",
					items: [
						{
							label: "Pull Requests",
							href: "https://github.com/mobily/ts-belt/pulls",
						},
						{
							label: "Issues",
							href: "https://github.com/mobily/ts-belt/issues",
						},
					],
				},
				{
					title: "Contact",
					items: [
						{
							label: "Twitter",
							href: "https://twitter.com/__marcin_",
						},
						{
							label: "Github",
							href: "https://github.com/mobily",
						},
						{
							label: "Dev.to",
							href: "https://dev.to/mobily",
						},
					],
				},
			],
			copyright: `Built with Docusaurus ❤️`,
		},
		colorMode: {
			defaultMode: "light",
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
	},
	themes: ["@docusaurus/theme-live-codeblock"],
	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				hashed: true,
				docsRouteBasePath: ["/docs", "/api", "/benchmarks"],
				docsDir: ["docs", "api", "benchmarks"],
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "api",
				path: "api",
				routeBasePath: "api",
				sidebarPath: require.resolve("./sidebars.api.js"),
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "benchmarks",
				path: "benchmarks",
				routeBasePath: "benchmarks",
				sidebarPath: require.resolve("./sidebars.benchmarks.js"),
			},
		],
	],
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					path: "docs",
					routeBasePath: "docs",
					editUrl: "https://github.com/mobily/ts-belt/edit/master/docs/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
