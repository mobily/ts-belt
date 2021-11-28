module.exports = {
  sidebar: [
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'doc',
      id: 'installation',
    },
    {
      type: 'doc',
      id: 'usage',
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: [
        'api/array',
        'api/object',
        'api/function',
        'api/string',
        'api/guards',
        'api/option',
        'api/result',
      ],
    },
  ],
}
