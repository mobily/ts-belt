module.exports = {
	sidebar: [
		{
			type: "doc",
			id: "introduction",
		},
		{
			type: "category",
			label: "Getting started",
			collapsed: false,
			items: [
				"getting-started/installation",
				"getting-started/config",
				"getting-started/usage",
			],
		},
		{
			type: "doc",
			id: "changelog",
		},
		{
			type: "link",
			label: "Go to API",
			href: "/api/array",
			className: "sidebar-api-button",
		},
	],
};
